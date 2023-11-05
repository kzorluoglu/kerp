<?php

namespace App\Http\Controllers;

use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;
use App\Invoice;
use App\InvoiceProduct;
use App\Customer;
use App\Company;
use App\Product;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;


class InvoiceController extends Controller
{

    public function index(Request $request): View
    {
        $invoices = $this->getInvoices($request->input('search'));
        return view('invoice.index', [
            'invoices' => $invoices,
            'search' => $request->input('search'),
        ]);
    }

    private function getInvoices(?string $search)
    {
        if (!$search) {
            return Invoice::orderByRaw("CAST(invoice_number AS UNSIGNED) DESC")->paginate(15);
        }

        return Invoice::where('invoice_number', 'like', '%' . $search . '%')
            ->orWhere('firstname', 'like', '%' . $search . '%')
            ->orWhere('lastname', 'like', '%' . $search . '%')
            ->orWhere('company_name', 'like', '%' . $search . '%')
            ->orWhere('street', 'like', '%' . $search . '%')
            ->orWhere('streetnumber', 'like', '%' . $search . '%')
            ->orWhere('postcode', 'like', '%' . $search . '%')
            ->orWhere('city', 'like', '%' . $search . '%')
            ->orWhere('country', 'like', '%' . $search . '%')
            ->orWhere('total_price', 'like', '%' . $search . '%')
            ->orWhere('tax_rate', 'like', '%' . $search . '%')
            ->paginate(15);
    }

    public function select(): \Illuminate\Http\RedirectResponse|View
    {
        $customers = Customer::all();
        if (!$customers->count()) {
            return redirect()->back()->with(['type' => 'danger', 'message' => __('invoice.no_customer_founded')]);
        }

        $companies = Company::all();
        if (!$companies->count()) {
            return redirect()->back()->with(['type' => 'danger', 'message' => __('invoice.no_company_founded')]);
        }

        return view('invoice.select', [
            'customers' => $customers,
            'companies' => $companies,
        ]);
    }

    public function store(Request $request)
    {
        if (empty($request->customer_id) === true) {
            return redirect()->back()->with(['type' => 'danger', 'message' => __('invoice.please_select_customer')]);
        }

        if (empty($request->company_id) === true) {
            return redirect()->back()->with(['type' => 'danger', 'message' => __('invoice.please_select_company')]);
        }

        $customer = Customer::find($request->customer_id);
        $company = Company::find($request->company_id);

        //prepare Invoice
        $lastInvoice = Invoice::latest()->first();
        $invoice = new Invoice();
        $invoice->invoice_number = ($lastInvoice ? $lastInvoice->invoice_number + 1 : 1);

        //prepare Global Settings via Company Information
        $invoice->company_id = $company->id;

        //Set as Default From Company
        $invoice->tax_rate = $company->tax_rate;
        $invoice->information = $company->information;

        // If Customer Speical Tax Rate has
        if ($customer->tax_rate) {
            $invoice->tax_rate = $customer->tax_rate;
        }

        $invoice->firstname = $customer->firstname;
        $invoice->lastname = $customer->lastname;
        $invoice->company_name = $customer->company_name;
        $invoice->street = $customer->street;
        $invoice->streetnumber = $customer->streetnumber;
        $invoice->postcode = $customer->postcode;
        $invoice->city = $customer->city;
        $invoice->country = $customer->country;

        $now = new \DateTime();
        $invoice->date = $now->format('Y-m-d');
        $invoice->save();

        return redirect()->route('invoice.prepare', ['id' => $invoice->id]);
    }

    public function prepare($id)
    {
        $invoice = Invoice::find($id);
        $sum_price_total = $invoice->products()->sum('total');
        $sum_tax = round(($sum_price_total * $invoice->tax_rate) / 100, 2);
        $sum_total = $sum_price_total + $sum_tax;
        $products = Product::all();

        return view('invoice.prepare', [
            'invoice' => $invoice,
            'sum_price_total' => $sum_price_total,
            'sum_tax' => $sum_tax,
            'sum_total' => $sum_total,
            'products' => $products
        ]);
    }

    /**
     * @throws \Exception
     */
    public function pdf($invoice_id, Request $request)
    {
        $invoice = Invoice::find($invoice_id);
        $pdfName = $this->getPdfName($invoice);
        $data = $this->getInvoiceData($invoice);

        $pdf = $this->generatePdf($data);

        return $pdf->stream($pdfName . '.pdf');
    }

    public function download(Request $request)
    {
        $invoice = Invoice::find($request->id);
        $pdfName = $this->getPdfName($invoice);
        $data = $this->getInvoiceData($invoice);

        $pdf = $this->generatePdf($data);

        return $pdf->download($pdfName . '.pdf');
    }

    private function getInvoiceData($invoice)
    {
        $sum_price_total = $invoice->products()->sum('total');
        $sum_tax = round(($sum_price_total * $invoice->tax_rate) / 100, 2);
        $sum_total = $sum_price_total + $sum_tax;

        $imagePath = public_path() . Storage::url($invoice->company->logo);

        return [
            'invoice' => $invoice,
            'sum_price_total' => $sum_price_total,
            'sum_tax' => $sum_tax,
            'sum_total' => $sum_total,
            'company_logo' => $this->imageToBase64($imagePath)
        ];
    }

    private function getPdfName($invoice)
    {
        $pdfName = $invoice->firstname . "-" . $invoice->lastname . "-" . $invoice->invoice_number;
        if ($invoice->company_name) {
            $pdfName = $invoice->company_name . "-" . $invoice->invoice_number;
        }
        return Str::slug($pdfName, '-');
    }

    /**
     * @throws \Exception
     */
    private function generatePdf($data): \Barryvdh\DomPDF\PDF
    {
        $pdf = PDF::loadView('invoice.pdf', $data);

        $pdf->setOption('isHtml5ParserEnabled', true)
            ->render();

        $dompdf = $pdf->getDomPDF();
        $font = $dompdf->getFontMetrics()->getFont("Arial");
        $dompdf->getCanvas()->page_text(267.64, 800, "{PAGE_NUM} / {PAGE_COUNT}", $font, 10);

        return $pdf;
    }

    public function paid($id)
    {
        $invoice = Invoice::find($id);
        $invoice->paid = !$invoice->paid;
        $invoice->paid_date = null;

        if ($invoice->paid) {
            $now = new \DateTime();
            $invoice->paid_date = $now->format('Y-m-d h:m:s');
        }

        try {
            $invoice->save();
            $message = __('invoice.remove_paid', ['invoice_number' => $invoice->invoice_number]);
            if ($invoice->paid) {
                $message = __('invoice.set_paid', ['invoice_number' => $invoice->invoice_number]);
            }
            return redirect()->back()->with(['type' => 'success', 'message' => $message]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['type' => 'danger', 'message' => $e->getMessage()]);
        }
    }

    public function delete($id)
    {
        try {
            InvoiceProduct::where('invoice_id', $id)->delete();
            Invoice::find($id)->delete();

            return redirect()->back()->with(['type' => 'success', 'message' => __('invoice.deleted')]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['type' => 'danger', 'message' => $e->getMessage()]);
        }
    }

    public function saveProduct(Request $request)
    {
        $invoiceProduct = new InvoiceProduct();
        $invoiceProduct->count = str_replace(',', '.', $request->count);
        $invoiceProduct->count = (float)$invoiceProduct->count;

        $invoiceProduct->price = str_replace('.', '', $request->price);
        $invoiceProduct->price = str_replace(',', '.', $invoiceProduct->price);

        $invoiceProduct->total = (float)$invoiceProduct->price * (float)$invoiceProduct->count;
        $invoiceProduct->title = $request->title;
        $invoiceProduct->invoice_id = $request->invoice_id;
        $invoiceProduct->type = $request->type;

        try {
            $status = $invoiceProduct->save();

            return redirect()->back()->with(['type' => 'success', 'message' => __('invoice.product_added')]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['type' => 'danger', 'message' => $e->getMessage()]);
        }
    }

    public function updateProduct(Request $request)
    {
        $invoiceProduct = InvoiceProduct::find($request->id);
        $invoiceProduct->count = str_replace(',', '.', $request->count);
        $invoiceProduct->count = (float)$invoiceProduct->count;

        $invoiceProduct->price = str_replace('.', '', $request->price);
        $invoiceProduct->price = str_replace(',', '.', $invoiceProduct->price);

        $invoiceProduct->total = (float)$invoiceProduct->price * $invoiceProduct->count;
        $invoiceProduct->title = $request->title;
        $invoiceProduct->type = $request->type;

        try {
            $invoiceProduct->save();

            return redirect()->back()->with(['type' => 'success', 'message' => __('invoice.product_updated')]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['type' => 'danger', 'message' => $e->getMessage()]);
        }
    }

    public function deleteProduct($id)
    {
        $invoiceProduct = InvoiceProduct::find($id);

        try {
            $invoiceProduct->delete();

            return redirect()->back()->with(['type' => 'success', 'message' => __('invoice.product_deleted')]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['type' => 'danger', 'message' => $e->getMessage()]);
        }
    }

    public function updateInformation(Request $request)
    {
        $invoice = Invoice::find($request->id);
        $invoice->information = $request->information;
        $invoice->payment_deadline_day = $request->payment_deadline_day;
        $invoice->payment_type = $request->payment_type;

        try {
            $invoice->save();
            return redirect()->back()->with(['type' => 'success', 'message' => __('invoice.information_updated')]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['type' => 'danger', 'message' => $e->getMessage()]);
        }
    }

    private function imageToBase64(string $imagePath): string
    {
        $type = pathinfo($imagePath, PATHINFO_EXTENSION);
        $data = file_get_contents($imagePath);

        return 'data:image/' . $type . ';base64,' . base64_encode($data);
    }

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Invoice;
use App\InvoiceProduct;
use App\Customer;
use App\Company;
use App\Product;
use PDF;
use Auth;
use Illuminate\Support\Str;

class IncomingInvoiceController extends Controller
{
    public function index(Request $request)
    {

        $search = $request->input('search');

        $orderRaw = "CAST(invoice_number AS UNSIGNED) DESC";
        $invoices = Invoice::withoutGlobalScopes()->incomingInvoice()->orderByRaw($orderRaw)->paginate(15);

        if ($search) {
            $invoices = Invoice::withoutGlobalScopes()->incomingInvoice()->where('invoice_number', 'like', '%'.$search.'%')
          ->orWhere('firstname', 'like', '%'.$search.'%')
          ->orWhere('lastname', 'like', '%'.$search.'%')
          ->orWhere('company_name', 'like', '%'.$search.'%')
          ->orWhere('street', 'like', '%'.$search.'%')
          ->orWhere('streetnumber', 'like', '%'.$search.'%')
          ->orWhere('postcode', 'like', '%'.$search.'%')
          ->orWhere('city', 'like', '%'.$search.'%')
          ->orWhere('country', 'like', '%'.$search.'%')
          ->orWhere('total_price', 'like', '%'.$search.'%')
          ->orWhere('tax_rate', 'like', '%'.$search.'%')
          ->paginate(15);
        }

        return view('incoming_invoice.index', [
          'invoices' => $invoices,
          'search' => $search,
      ]);
    }

    public function select()
    {
        $customers = Customer::all();
        if (!$customers->count())
        {
            return redirect()->back()->with(['type' => 'danger', 'message' => __('invoice.no_customer_founded')]);
        }

        $companies = Company::all();
        if (!$companies->count())
        {
            return redirect()->back()->with(['type' => 'danger', 'message' => __('invoice.no_company_founded')]);
        }

        return view('incoming_invoice.select', [
            'customers' => $customers,
            'companies' => $companies,
        ]);
    }

    public function store(Request $request)
    {
        if (empty($request->customer_id)) {
            return redirect()->back()->with(['type' => 'danger', 'message' => __('invoice.please_select_customer')]);
        }

        if (empty($request->company_id)) {
            return redirect()->back()->with(['type' => 'danger', 'message' => __('invoice.please_select_company')]);
        }

        $customer = Customer::find($request->customer_id);
        $company = Company::find($request->company_id);

        //prepare Invoice
        $lastInvoice = Invoice::withoutGlobalScopes()->incomingInvoice()->latest()->first();
        $invoice = new Invoice();
        $invoice->invoice_number = 0;
        $invoice->incoming_invoice = true;
        $invoice->intern_invoice_number = ($lastInvoice ? $lastInvoice->intern_invoice_number + 1 : 20000);

        //prepare Global Settings via Company Information
        $invoice->company_id = $company->id;
        $invoice->tax_rate = $customer->tax_rate;
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

        return redirect()->route('incoming_invoice.prepare', ['id' => $invoice->id]);
    }

    public function prepare($id)
    {
        $invoice = Invoice::withoutGlobalScopes()->find($id);
        $sum_price_total = $invoice->products()->sum('total');
        $sum_tax = round(($sum_price_total * $invoice->tax_rate) / 100, 2);
        $sum_total = $sum_price_total + $sum_tax;
        $products = Product::all();
        return view('incoming_invoice.prepare', [
        'invoice' => $invoice,
        'sum_price_total' => $sum_price_total,
        'sum_tax' => $sum_tax,
        'sum_total' => $sum_total,
        'products' => $products
      ]);
    }

    public function paid($id)
    {
        $invoice = Invoice::withoutGlobalScopes()->find($id);
        $invoice->paid = !$invoice->paid;
        $invoice->paid_date = null;

        if($invoice->paid){
            $now = new \DateTime();
            $invoice->paid_date = $now->format('Y-m-d h:m:s');
        }

        try {
            $invoice->save();
            $message = __('incoming_invoice.remove_paid', ['invoice_number' => $invoice->invoice_number]);
            if($invoice->paid){
                $message = __('incoming_invoice.set_paid', ['invoice_number' => $invoice->invoice_number]);
            }
            return redirect()->back()->with(['type' => 'success', 'message' => $message]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['type' => 'danger', 'message' => $e->getMessage()]);
        }
    }

    public function delete($id)
    {
        try {
            $invoiceProducts = InvoiceProduct::where('invoice_id', $id)->delete();
            $invoice = Invoice::withoutGlobalScopes()->find($id)->delete();

            return redirect()->back()->with(['type' => 'success', 'message' => __('incoming_invoice.deleted')]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['type' => 'danger', 'message' => $e->getMessage()]);
        }
    }

    public function saveProduct(Request $request)
    {
        $invoiceProduct = new InvoiceProduct();
        $invoiceProduct->count = str_replace(',', '.', $request->count);
        $invoiceProduct->count = floatval($invoiceProduct->count);

        $invoiceProduct->price = str_replace('.', '', $request->price);
        $invoiceProduct->price = str_replace(',', '.', $invoiceProduct->price);

        $invoiceProduct->total = floatval($invoiceProduct->price) * floatval($invoiceProduct->count);
        $invoiceProduct->title = $request->title;
        $invoiceProduct->invoice_id = $request->invoice_id;
        $invoiceProduct->type = $request->type;

        try {
            $status = $invoiceProduct->save();

            return redirect()->back()->with(['type' => 'success', 'message' => __('incoming_invoice.product_added')]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['type' => 'danger', 'message' => $e->getMessage()]);
        }
    }

    public function updateProduct(Request $request)
    {
        $invoiceProduct = InvoiceProduct::find($request->id);
        $invoiceProduct->count = str_replace(',', '.', $request->count);
        $invoiceProduct->count = floatval($invoiceProduct->count);

        $invoiceProduct->price = str_replace('.', '', $request->price);
        $invoiceProduct->price = str_replace(',', '.', $invoiceProduct->price);

        $invoiceProduct->total = floatval($invoiceProduct->price) * floatval($invoiceProduct->count);
        $invoiceProduct->title = $request->title;
        $invoiceProduct->type = $request->type;

        try {
            $status = $invoiceProduct->save();

            return redirect()->back()->with(['type' => 'success', 'message' => __('incoming_invoice.product_updated')]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['type' => 'danger', 'message' => $e->getMessage()]);
        }
    }

    public function deleteProduct($id)
    {
        $invoiceProduct = InvoiceProduct::find($id);

        try {
            $status = $invoiceProduct->delete();

            return redirect()->back()->with(['type' => 'success', 'message' => __('incoming_invoice.product_deleted')]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['type' => 'danger', 'message' => $e->getMessage()]);
        }
    }

    public function updateInformation(Request $request)
    {
        $invoice = Invoice::withoutGlobalScopes()->find($request->id);
        $invoice->date = \Carbon\Carbon::parse($request->date)->format('Y-m-d');
        $invoice->invoice_number = $request->invoice_number;
        $invoice->tax_rate = $request->tax_rate;
        $invoice->information = $request->information;
        $invoice->payment_deadline_day = $request->payment_deadline_day;
        $invoice->payment_type = $request->payment_type;

        try {
            $invoice->save();
            return redirect()->back()->with(['type' => 'success', 'message' => __('incoming_invoice.information_updated')]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['type' => 'danger', 'message' => $e->getMessage()]);
        }
    }

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Offer;
use App\OfferProduct;
use App\Invoice;
use App\InvoiceProduct;
use App\Customer;
use App\Company;
use App\Product;
use PDF;
use Auth;
use Illuminate\Support\Str;

class OfferController extends Controller
{
    public function index(Request $request)
    {

        $search = $request->input('search');

        $orderRaw = "CAST(offer_number AS UNSIGNED) DESC";
        $offers = Offer::orderByRaw($orderRaw)->paginate(15);

        if ($search) {
            $offers = Offer::where('offer_number', 'like', '%'.$search.'%')
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

        return view('offer.index', [
          'offers' => $offers,
          'search' => $search,
      ]);
    }

    public function select()
    {
        $customers = Customer::all();
        if (!$customers->count())
        {
            return redirect()->back()->with(['type' => 'danger', 'message' => __('offer.no_customer_founded')]);
        }

        $companies = Company::all();
        if (!$companies->count())
        {
            return redirect()->back()->with(['type' => 'danger', 'message' => __('offer.no_company_founded')]);
        }

        return view('offer.select', [
            'customers' => $customers,
            'companies' => $companies,
        ]);
    }

    public function store(Request $request)
    {
        if (empty($request->customer_id)) {
            return redirect()->back()->with(['type' => 'danger', 'message' => __('offer.please_select_customer')]);
        }

        if (empty($request->company_id)) {
            return redirect()->back()->with(['type' => 'danger', 'message' => __('offer.please_select_company')]);
        }


        $customer = Customer::find($request->customer_id);
        $company = Company::find($request->company_id);

        //prepare Offer
        $lastOffer = Offer::latest()->first();
        $offer = new Offer();
        $offer->offer_number = ($lastOffer ? $lastOffer->offer_number + 1 : 1);

        //prepare Global Settings via Company Information
        $offer->company_id = $company->id;

        //Set as Default From Company
        $offer->tax_rate = $company->tax_rate;
        $offer->information = $company->information;

        // If Customer Speical Tax Rate has
        if ($customer->tax_rate) {
            $offer->tax_rate = $customer->tax_rate;
        }

        $offer->firstname = $customer->firstname;
        $offer->lastname = $customer->lastname;
        $offer->company_name = $customer->company_name;
        $offer->street = $customer->street;
        $offer->streetnumber = $customer->streetnumber;
        $offer->postcode = $customer->postcode;
        $offer->city = $customer->city;
        $offer->country = $customer->country;

        $now = new \DateTime();
        $offer->date = $now->format('Y-m-d');
        $offer->save();

        return redirect()->route('offer.prepare', ['id' => $offer->id]);
    }

    public function prepare($id)
    {
        $offer = Offer::find($id);
        $sum_price_total = $offer->products()->sum('total');
        $sum_tax = round(($sum_price_total * $offer->tax_rate) / 100, 2);
        $sum_total = $sum_price_total + $sum_tax;
        $products = Product::all();

        return view('offer.prepare', [
        'offer' => $offer,
        'sum_price_total' => $sum_price_total,
        'sum_tax' => $sum_tax,
        'sum_total' => $sum_total,
        'products' => $products
      ]);
    }

    public function pdf($offer_id, Request $request)
    {
        $offer = Offer::find($offer_id);

        $sum_price_total = $offer->products()->sum('total');
        $sum_tax = round(($sum_price_total * $offer->tax_rate) / 100, 2);
        $sum_total = $sum_price_total + $sum_tax;

        $data = [
        'offer' => $offer,
        'sum_price_total' => $sum_price_total,
        'sum_tax' => $sum_tax,
        'sum_total' => $sum_total,
      ];

        if ($request->input('debug')) {
            return view('offer.pdf', $data);
        }

        return PDF::setOptions(['isHtml5ParserEnabled' => true])->loadView('offer.pdf', $data)->stream();
    }

    public function download(Request $request)
    {
        $offer = Offer::find($request->id);

        $sum_price_total = $offer->products()->sum('total');
        $sum_tax = round(($sum_price_total * $offer->tax_rate) / 100, 2);
        $sum_total = $sum_price_total + $sum_tax;

        $data = [
            'offer' => $offer,
            'sum_price_total' => $sum_price_total,
            'sum_tax' => $sum_tax,
            'sum_total' => $sum_total
        ];

        $pdfName = $offer->firstname."-".$offer->lastname."-".$offer->offer_number;
        if($offer->company_name){
            $pdfName = $offer->company_name."-".$offer->offer_number;
        }
        $pdfName =  Str::slug($pdfName, '-');

        return PDF::setOptions(['isHtml5ParserEnabled' => true])->loadView('offer.pdf', $data)->download($pdfName.".pdf");
    }

    public function changeToInvoice($id)
    {

        $offer = Offer::find($id);

        if(isset($offer->invoice_number)){
            $message = __('offer.invoice_before_created', ['invoice_number' => $offer->invoice_number, ]);
            return redirect()->back()->with(['type' => 'danger', 'message' => $message]);
        }

        $lastInvoice = Invoice::latest()->first();
        $invoice = new Invoice();
        $invoice->invoice_number = ($lastInvoice ? $lastInvoice->invoice_number + 1 : 1);

        //Set as Default From Company
        $invoice->information = $offer->information;
        $invoice->firstname = $offer->firstname;
        $invoice->lastname = $offer->lastname;
        $invoice->company_name = $offer->company_name;
        $invoice->street = $offer->street;
        $invoice->streetnumber = $offer->streetnumber;
        $invoice->postcode = $offer->postcode;
        $invoice->city = $offer->city;
        $invoice->country = $offer->country;
        $invoice->date = $offer->date;
        $invoice->tax_rate = $offer->tax_rate;
        $invoice->template = $offer->template;
        $invoice->information = $offer->information;
        $invoice->company_id = $offer->company_id;
        $invoice->user_id = $offer->user_id;
        $invoice->paid = false;

        $invoice->save();

        if($offer->products){
            foreach($offer->products as $product)
            {
                $invoiceProduct = new InvoiceProduct();
                $invoiceProduct->count = $product->count;
                $invoiceProduct->price = $product->price;
                $invoiceProduct->total = $product->total;
                $invoiceProduct->title = $product->title;
                $invoiceProduct->invoice_id = $invoice->id;
                $invoiceProduct->type = $product->type;
                $invoiceProduct->save();
            }
        }


        $offer->invoice_number = $invoice->invoice_number;

        try {
            $offer->save();
            $message = __('offer.invoice_created', ['offer_number' => $offer->offer_number, 'invoice_number' => $invoice->invoice_number, ]);
            return redirect()->back()->with(['type' => 'success', 'message' => $message]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['type' => 'danger', 'message' => $e->getMessage()]);
        }
    }

    public function delete($id)
    {
        try {
            OfferProduct::where('offer_id', $id)->delete();

            return redirect()->back()->with(['type' => 'success', 'message' => __('offer.deleted')]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['type' => 'danger', 'message' => $e->getMessage()]);
        }
    }

    public function saveProduct(Request $request)
    {

        $offerProduct = new OfferProduct;
        $offerProduct->count = str_replace('.', '', $request->count);
        $offerProduct->count = str_replace(',', '.', $offerProduct->count);

        $offerProduct->price = str_replace('.', '', $request->price);
        $offerProduct->price = str_replace(',', '.', $offerProduct->price);
        $offerProduct->total = floatval($offerProduct->price) * floatval($offerProduct->count);
        $offerProduct->title = $request->title;
        $offerProduct->offer_id = $request->offer_id;
        $offerProduct->type = $request->type;

        try {
            $status = $offerProduct->save();

            return redirect()->back()->with(['type' => 'success', 'message' => __('offer.product_added')]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['type' => 'danger', 'message' => $e->getMessage()]);
        }
    }

    public function updateProduct(Request $request)
    {
        $offerProduct = OfferProduct::find($request->id);
        $offerProduct->count = str_replace('.', '', $request->count);
        $offerProduct->count = str_replace(',', '.', $offerProduct->count);

        $offerProduct->price = str_replace('.', '', $request->price);
        $offerProduct->price = str_replace(',', '.', $offerProduct->price);
        $offerProduct->total = floatval($offerProduct->price) * floatval($offerProduct->count);
        $offerProduct->title = $request->title;
        $offerProduct->type = $request->type;

        try {
            $status = $offerProduct->save();

            return redirect()->back()->with(['type' => 'success', 'message' => __('offer.product_updated')]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['type' => 'danger', 'message' => $e->getMessage()]);
        }
    }

    public function deleteProduct($id)
    {
        $offerProduct = OfferProduct::find($id);

        try {
            $status = $offerProduct->delete();

            return redirect()->back()->with(['type' => 'success', 'message' => __('offer.product_deleted')]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['type' => 'danger', 'message' => $e->getMessage()]);
        }
    }

    public function updateInformation(Request $request)
    {
        $offer = Offer::find($request->id);
        $offer->information = $request->information;
        $offer->payment_deadline_day = $request->payment_deadline_day;
        $offer->payment_type = $request->payment_type;

        try {
            $status = $offer->save();

            return redirect()->back()->with(['type' => 'success', 'message' => __('offer.information_updated')]);
        } catch (\Exception $e) {
            return redirect()->back()->with(['type' => 'danger', 'message' => $e->getMessage()]);
        }
    }

}

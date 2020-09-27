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

class OverviewController extends Controller
{
    public function index(Request $request)
    {

        $selectedYear = $request->input('year');

        if (isset($selectedYear)) {
            $invoices = Invoice::whereYear('date', '=', $selectedYear)->get();
        } else {
            $invoices = Invoice::all();
        }

        if(isset($selectedYear)) {
            $incoming_invoices = Invoice::withoutGlobalScopes()->incomingInvoice()->whereYear('date', '=', $selectedYear)->get();
        }else {
            $incoming_invoices = Invoice::withoutGlobalScopes()->incomingInvoice()->get();
        }

        $years = $this->getYears();

        return view(
            'overview.index',
            [
                'invoices' => $invoices,
                'invoiceTotalSumWithoutTax' => $this->getInvoiceTotalSumWithoutTax($invoices),
                'invoiceTotalSumTax' => $this->getInvoiceTotalSumTax($invoices),
                'invoiceTotalSum' => $this->getInvoiceTotalSum($invoices),
                'incoming_invoices' => $incoming_invoices,
                'incoming_invoicesTotalSumWithoutTax' => $this->getInvoiceTotalSumWithoutTax($incoming_invoices),
                'incoming_invoicesTotalSumTax' => $this->getInvoiceTotalSumTax($incoming_invoices),
                'incoming_invoicesTotalSum' => $this->getInvoiceTotalSum($incoming_invoices),
                'years' => $years,
                'selectedYear' => $selectedYear,
            ]
        );
    }

    /**
     * @param Invoice[] $invoices
     * @return float
     */
    private function getInvoiceTotalSumWithoutTax($invoices): float
    {
        $total = 0;
        foreach ($invoices as $invoice) {
            $total += $invoice->getSumTotalWithoutTaxAttribute();
        }

        return $total;
    }

    /**
     * @param Invoice[] $invoices
     * @return float
     */
    private function getInvoiceTotalSumTax($invoices): float
    {
        $total = 0;
        /** @var Invoice[] $invoice */
        foreach ($invoices as $invoice) {
            $total += $invoice->getSumTaxAttribute();

        }

        return $total;
    }

    /**
     * @param Invoice[] $invoices
     * @return float
     */
    private function getInvoiceTotalSum($invoices): float
    {
        $total = 0;
        /** @var Invoice[] $invoice */
        foreach ($invoices as $invoice) {
            $total += $invoice->getSumTotalAttribute();

        }

        return $total;

    }

    /**
     * @return array
     */
    private function getYears(): array
    {
        $range = range(date('Y'), 1989);
        $range2 = range(date('Y'), 1989);

        return array_combine($range, $range2);
    }
}

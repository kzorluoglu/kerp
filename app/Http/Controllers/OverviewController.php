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
        $selectedMonth = $request->input('month');

        $invoicesQuery = Invoice::query();
        $incomingInvoicesQuery = Invoice::withoutGlobalScopes()->incomingInvoice();

        if ($selectedYear !== null) {
            $invoicesQuery->whereYear('date', '=', $selectedYear);
            $incomingInvoicesQuery->whereYear('date', '=', $selectedYear);
        }

        if ($selectedMonth !== null) {
            $invoicesQuery->whereMonth('date', '=', $selectedMonth);
            $incomingInvoicesQuery->whereMonth('date', '=', $selectedMonth);
        }

        $invoices = $invoicesQuery->get();
        $incoming_invoices = $incomingInvoicesQuery->get();

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
                'years' => $this->getYears(),
                'months' => $this->getMonths(),
                'selectedYear' => $selectedYear,
                'selectedMonth' => $selectedMonth,
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

    private function getYears(): array
    {
        $range = range(date('Y'), 1989);
        $range2 = range(date('Y'), 1989);

        return array_combine($range, $range2);
    }

    private function getMonths(): array
    {
        return [
            '01' => __('app.january'),
            '02' => __('app.february'),
            '03' => __('app.march'),
            '04' => __('app.april'),
            '05' => __('app.may'),
            '06' => __('app.june'),
            '07' => __('app.july'),
            '08' => __('app.august'),
            '09' => __('app.september'),
            '10' => __('app.october'),
            '11' => __('app.november'),
            '12' => __('app.december'),
        ];
    }
}

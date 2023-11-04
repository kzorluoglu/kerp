<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <title>Invoice</title>
    <style>
        @page {
            margin: 10mm 10mm 10mm 10mm;
        }
        body {
            font-family: 'Arial', sans-serif;
            font-size: 12px;
            margin: 0;
            padding: 0;
            width: 100%;
        }
        .container-fluid {
            width: 190mm;
            max-width: 190mm;
            padding-left: 0;
            padding-right: 0;
            margin: auto;
        }
        .company-logo {
            max-width: 15rem;
        }
        .footer {
            bottom: 0;
        }
        .header, .header-space,
        .footer, .footer-space {
            height: 100px;
        }
        .table {
            table-layout: fixed;
            width: 100%;
            margin-bottom: 1rem;
            color: #212529;
            border-collapse: collapse;
        }
        .product-table th, .product-table td {
            border-top: 1px solid #dee2e6;
        }
        .table th, .table td {
            padding: 0.75rem;
            vertical-align: top;
        }
        .table th {
            text-align: inherit;
        }
        .table-striped tbody tr:nth-of-type(odd) {
            background-color: rgba(0, 0, 0, 0.05);
        }
        .text-right {
            text-align: right !important;
        }
        .text-center {
            text-align: center !important;
        }
        .w-10 {
            width: 10%; /* Adjust as necessary */
        }
        .w-20 {
            width: 20%; /* Adjust as necessary */
        }
        .w-30 {
            width: 30%; /* Adjust as necessary */
        }
        .w-40 {
            width: 40%; /* Adjust as necessary */
        }
        .w-50 {
            width: 50%; /* Adjust as necessary */
        }
        .w-60 {
            width: 60%; /* Adjust as necessary */
        }
        .w-70 {
            width: 70%; /* Adjust as necessary */
        }
        .w-80 {
            width: 80%; /* Adjust as necessary */
        }
        .w-90 {
            width: 90%; /* Adjust as necessary */
        }
        .w-100 {
            width: 100%; /* Adjust as necessary */
        }
        .p-1 {
            padding: 0.25rem !important;
        }
        @media print {
            table {
                page-break-inside: auto;
            }
            tr {
                page-break-inside: avoid;
                page-break-after: auto;
            }
            thead {
                display: table-header-group;
            }
            tfoot {
                display: table-footer-group;
            }
        }
        .product-title-cell {
            word-wrap: break-word;
            max-width: 100%;
        }
    </style>
 </head>
<body>
<div class="container-fluid">
    <table class="table table-borderless">
        <tr>
            <td colspan="2">
                <br><br><br>
                @if($invoice->company_name)
                    <b>{!! $invoice->company_name !!}</b> <br>
                @endif
                {!! $invoice->firstname !!}  {!! $invoice->lastname !!}<br>
                {!! $invoice->street !!}  {!! $invoice->streetnumber !!}<br>
                {!! $invoice->postcode !!}  {!! $invoice->city !!}<br>
                {!! $invoice->country !!}<br>
            </td>
            <td class="text-right">
                    @if($invoice->company->logo)
                    <img src="{{ $company_logo }}" class="company-logo" alt="company-logo">
                    @endif
                <b>{!! $invoice->company->company_name !!}</b><br>
                {!! $invoice->company->email !!}<br>
                {!! $invoice->company->webpage !!}
            </td>
        </tr>
        <tr>
            <td colspan="2">
                &nbsp;
            </td>
            <td class="text-right">
                <b>{!! __('invoice.invoice_number') !!}</b><br>{!!$invoice->invoice_number!!}<br>
                <b>{!! __('invoice.date')!!}</b><br>{{ \Carbon\Carbon::parse($invoice->date)->format('d.m.Y')}}
            </td>
        </tr>
    </table>
    <table class="table table-striped product-table">
        <thead>
        <th class="w-60">{!! __('invoice.product_title') !!}</th>
        <th class="w-10 text-center">{!! __('invoice.product_price') !!}</th>
        <th class="w-10 text-center">{!! __('invoice.product_count') !!} - {!! __('invoice.product_type') !!}</th>
        <th class="w-20 text-right">{!! __('invoice.product_total_price') !!}</th>
        </thead>
        <tbody>
        @if($invoice->products)
            @foreach($invoice->products as $product)
                <tr>
                    <td class="w-40 product-title-cell">{{ $product->title }}</td>
                    <td class="w-20 text-center">
                        {{number_format($product->price, 2, ',', '.')}} {!! $invoice->company->currency !!}
                    </td>
                    <td class="w-20 text-center">{{ $product->count }} {!! __('app.select_type_'.$product->type) !!}</td>
                    <td class="w-20 text-right">
                        {!! number_format($product->total, 2, ',', '.') !!} {!! $invoice->company->currency !!}
                    </td>
                </tr>
            @endforeach
        @endif
        </tbody>
    </table>
    <table align="right">
        <tr>
            <td class="p-1 text-left"><b>{!! __("invoice.sum_total_prices") !!}</b></td>
            <td>:</td>
            <td class="p-1 text-right">{!! number_format($sum_price_total, 2, ',', '.') !!} {!! $invoice->company->currency !!}</td>
        </tr>
        @if($invoice->tax_rate > 0)
            <tr>
                <td class="p-1 text-left"><b>{!! __("invoice.tax") !!} (%{!! $invoice->tax_rate !!})</b></td>
                <td>:</td>
                <td class="p-1 text-right">{!! number_format($sum_tax, 2, ',', '.') !!} {!! $invoice->company->currency !!}</td>
            </tr>
        @endif
        <tr>
            <td class="p-1 text-left"><b>{!! __("invoice.sum_total") !!}</b></td>
            <td>:</td>
            <td class="p-1 text-right">{!! number_format($sum_total, 2, ',', '.') !!} {!! $invoice->company->currency !!}</td>
        </tr>
    </table>
    <br><br><br>
    <table class="table table-borderless">
        <tr>
            <td colspan="4">
                {!! $invoice->information !!}
            </td>
        </tr>
        @if($invoice->payment_deadline_day)
            <tr>
                <td colspan="4">
                    {!! __("invoice.payment_deadline_day_text", [ 'day' => $invoice->payment_deadline_day]) !!}
                </td>
            </tr>
        @endif
        @if($invoice->payment_type)
            <tr>
                <td colspan="4">
                    {!! __("invoice.payment_type_text", [ 'type' => $invoice->payment_type]) !!}
                </td>
            </tr>
        @endif
    </table>
    <div class="footer">
        <table class="table table-borderless">
            <tr>
                <td>
                    <b>{!! $invoice->company->company_name !!}</b><br>
                    Inhaber: {!! $invoice->company->firstname !!} {!! $invoice->company->lastname !!}<br>
                    {!! $invoice->company->address !!}<br>
                </td>
                <td>
                    <b>{!! __("invoice.bank_information") !!}</b><br>
                    <b>{!! __("invoice.bank") !!}</b> {!! $invoice->company->bank !!}<br>
                    <b>{!! __("invoice.iban") !!}</b> {!! $invoice->company->iban !!}<br>
                    <b>{!! __("invoice.bic") !!}</b> {!! $invoice->company->bic !!}
                </td>
            </tr>
        </table>
    </div>
</div>
</body>
</html>

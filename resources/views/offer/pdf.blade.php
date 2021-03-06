<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<style type="text/css">
    body {
        font-size: 0.8rem;
        padding: 0;
        margin: 0;
    }

    @page {
        margin: 6mm
    }

    .footer {
        position: fixed;
        bottom: 0;
    }

    .header, .header-space,
    .footer, .footer-space {
        height: 100px;
    }

    .table th, .table td {
        padding: 0.3rem;
    }
</style>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<div class="container-fluid">
    <table class="table table-borderless">
        <tr>
            <td>
                <br><br><br>
                <br><br><br>
                @if($offer->company_name)<b>{!! $offer->company_name !!}</b> <br>@endif
                {!! $offer->firstname !!}  {!! $offer->lastname !!}<br>
                {!! $offer->street !!}  {!! $offer->streetnumber !!}<br>
                {!! $offer->postcode !!}  {!! $offer->city !!}<br>
                {!! $offer->country !!}<br>
            </td>
            <td style="text-align:right">
                @if($offer->company->logo)
                    <img src="storage/{{ $offer->company->logo }}" style="max-width:15rem;"><br>
                @endif
                <b>{!! $offer->company->company_name !!}</b><br>
                {!! $offer->company->email !!}<br>
                {!! $offer->company->webpage !!}
            </td>
        </tr>
        <tr>
            <td>
                &nbsp;
            </td>
            <td style="text-align:right">
                <b>{!!__('offer.offer_number')!!}</b><br>{!!$offer->offer_number!!}<br>
                <b>{!!__('offer.date')!!}</b><br>{{ \Carbon\Carbon::parse($offer->date)->format('d.m.Y')}}
            </td>
        </tr>

    </table>
    <table class="table table-striped">
        <thead>
        <th class="w-40">{!! __('offer.product_title') !!}</th>
        <th class="w-20 text-center">{!! __('offer.product_price') !!}</th>
        <th class="w-20 text-center">{!! __('offer.product_count') !!} - {!! __('offer.product_type') !!}</th>
        <th class="w-20 text-right">{!! __('offer.product_total_price') !!}</th>
        </thead>
        <tbody>
        @if($offer->products)
            @foreach($offer->products as $product)
                <tr>
                    <td class="w-40">{{ $product->title }}</td>
                    <td class="w-20 text-center">
                        {{number_format($product->price, 2, ',', '.')}} {!! $offer->company->currency !!}
                    </td>
                    <td class="w-20 text-center">{{ $product->count }} {!! __('app.select_type_'.$product->type) !!}</td>
                    <td class="w-20 text-right">
                        {!! number_format($product->total, 2, ',', '.') !!} {!! $offer->company->currency !!}
                    </td>
                </tr>
            @endforeach
        @endif
        </tbody>
    </table>
    <table align="right">
        <tr>
            <td class="p-1 text-left"><b>{!! __("offer.sum_total_prices") !!}</b></td>
            <td>:</td>
            <td class="p-1 text-right">{!! number_format($sum_price_total, 2, ',', '.') !!} {!! $offer->company->currency !!}</td>
        </tr>
        @if($offer->tax_rate > 0)
            <tr>
                <td class="p-1 text-left"><b>{!! __("offer.tax") !!} (%{!! $offer->tax_rate !!})</b></td>
                <td>:</td>
                <td class="p-1 text-right">{!! number_format($sum_tax, 2, ',', '.') !!} {!! $offer->company->currency !!}</td>
            </tr>
        @endif
        <tr>
            <td class="p-1 text-left"><b>{!! __("offer.sum_total") !!}</b></td>
            <td>:</td>
            <td class="p-1 text-right">{!! number_format($sum_total, 2, ',', '.') !!} {!! $offer->company->currency !!}</td>
        </tr>
    </table>
    <br><br><br>
    <table class="table table-borderless">
        <tr>
            <td colspan="4">
                {!! $offer->information !!}
            </td>
        </tr>
        @if($offer->payment_deadline_day)
            <tr>
                <td colspan="4">
                    {!! __("offer.payment_deadline_day_text", [ 'day' => $offer->payment_deadline_day]) !!}
                </td>
            </tr>
        @endif
        @if($offer->payment_type)
            <tr>
                <td colspan="4">
                    {!! __("offer.payment_type_text", [ 'type' => $offer->payment_type]) !!}
                </td>
            </tr>
        @endif
    </table>
</div>

<div class='footer'>
    <table class="table table-borderless" style="width:100%">
        <tr>
            <td style="width:60%">
                <b>{!! $offer->company->company_name !!}</b><br>
                Inhaber: {!! $offer->company->firstname !!} {!! $offer->company->lastname !!}<br>
                {!! $offer->company->address !!}<br>
            </td>
            <td style="width:40%">
                <b>{!! __("offer.bank_information") !!}</b><br>
                <b>{!! __("offer.bank") !!}</b> {!! $offer->company->bank !!}<br>
                <b>{!! __("offer.iban") !!}</b> {!! $offer->company->iban !!}<br>
                <b>{!! __("offer.bic") !!}</b> {!! $offer->company->bic !!}
            </td>
        </tr>
    </table>
</div>
</html>

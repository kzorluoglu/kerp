<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
<style type="text/css">
body {
font-size: 0.8rem;
padding: 0;
margin:0;
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
.table th, .table td{
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
        @if($invoice->company_name)<b>{!! $invoice->company_name !!}</b> <br>@endif
        {!! $invoice->firstname !!}  {!! $invoice->lastname !!}<br>
        {!! $invoice->street !!}  {!! $invoice->streetnumber !!}<br>
        {!! $invoice->postcode !!}  {!! $invoice->city !!}<br>
        {!! $invoice->country !!}<br>
      </td>
     <td style="text-align:right">
        @if($invoice->company->logo)
          <img src="storage/{{ $invoice->company->logo }}" style="max-width:15rem;"><br>
         @endif
         <b>{!! $invoice->company->company_name !!}</b><br>
         {!! $invoice->company->email !!}<br>
         {!! $invoice->company->webpage !!}
     </td>
   </tr>
   <tr>
     <td>
&nbsp;
     </td>
     <td  style="text-align:right">
       <b>{!!__('invoice.invoice_number')!!}</b><br>{!!$invoice->invoice_number!!}<br>
         <b>{!!__('invoice.date')!!}</b><br>{{ \Carbon\Carbon::parse($invoice->date)->format('d.m.Y')}}
     </td>
   </tr>

   </table>
       <table class="table table-striped">
         <thead>
           <th class="w-40">{!! __('invoice.product_title') !!}</th>
           <th class="w-20 text-center">{!! __('invoice.product_price') !!}</th>
           <th class="w-20 text-center">{!! __('invoice.product_count') !!} - {!! __('invoice.product_type') !!}</th>
           <th class="w-20 text-right">{!! __('invoice.product_total_price') !!}</th>
         </thead>
         <tbody>
           @if($invoice->products)
             @foreach($invoice->products as $product)
             <tr>
               <td class="w-40">{{ $product->title }}</td>
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
    </div>

<div class='footer'>
<table class="table table-borderless" style="width:100%">
          <tr>
            <td style="width:60%">
              <b>{!! $invoice->company->company_name !!}</b><br>
              Inhaber: {!! $invoice->company->firstname !!} {!! $invoice->company->lastname !!}<br>
              {!! $invoice->company->address !!}<br>
            </td>
            <td style="width:40%">
              <b>{!! __("invoice.bank_information") !!}</b><br>
              <b>{!! __("invoice.bank") !!}</b> {!! $invoice->company->bank !!}<br>
              <b>{!! __("invoice.iban") !!}</b> {!! $invoice->company->iban !!}<br>
              <b>{!! __("invoice.bic") !!}</b>  {!! $invoice->company->bic !!}
            </td>
          </tr>
        </table>
</div>
</div>
</html>

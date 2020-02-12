<!-- ALT BİLGİ Row -->
<div class="row">
    <div class="col-md text-center">
        <a class="btn btn-success" target="_blank" href="{{ route('invoice.pdf', $invoice->id ) }}">{!! __("invoice.pdf_preview") !!}</a>
        <a class="btn btn-success" target="_blank" href="{{ route('invoice.download', $invoice->id ) }}">{!! __("invoice.download") !!}</a>
    </div>
</div>
<!-- ALT BİLGİ Row -->
<br>
<br>
<div class="row">
    <div class="col-md">
        <div class="main-card mb-3 card">
            <div class="card-body">
 
            <div class="row">
    <div class="col-sm">
      <br><br><br><br><br><br>
      @if($invoice->company_name)
        <b>{!! $invoice->company_name !!}</b><br>
      @endif
      {!! $invoice->firstname !!}  {!! $invoice->lastname !!}<br>
      {!! $invoice->street !!}  {!! $invoice->streetnumber !!}<br>
      {!! $invoice->postcode !!}  {!! $invoice->city !!}<br>
      {!! $invoice->country !!}<br>
   </div>
   <div class="col-sm-3  text-right">
      @if($invoice->company->logo)
          <img src="{{ Storage::url($invoice->company->logo, 'public')}}" style="max-width:15rem;"><br>
      @endif
     <b>{!! $invoice->company->company_name !!}</b><br>
     {!! $invoice->company->email !!}<br>
     {!! $invoice->company->webpage !!}<br>
   </div>
 </div>
 <div class="row">
 <div class="col-md-4 offset-md-8 text-right">  
 <br>
    <b>{!!__('invoice.invoice_number')!!}</b><br> {!!$invoice->invoice_number!!} <br>
    <b>{!!__('invoice.date')!!}</b><br> {{ \Carbon\Carbon::parse($invoice->date)->format('d.m.Y')}}

 </div></div>

 
                <div class="divider"></div>
                <div class="row">
                    <div class="col-md-3 font-weight-bold pb-4">{!! __('invoice.product_title') !!}</div>
                    <div class="col-md-2 font-weight-bold">{!! __('invoice.product_price') !!}</div>
                    <div class="col-md-3 font-weight-bold">{!! __('invoice.product_count') !!} - {!! __('invoice.product_type') !!}</div>
                    <div class="col-md-2 font-weight-bold">{!! __('invoice.product_total_price') !!}</div>
                    <div class="col-md-2 font-weight-bold">{!! __('app.action') !!}</div>
                </div>




                <!-- Article Row -->
                @if($invoice->products)
                @foreach($invoice->products as $product)
                    {!!  Form::open(['route' => ['invoice.updateproduct'], 'id'=>'productform'.$loop->iteration]) !!}
                    {{ Form::hidden('id', $product->id )}}
                    <div class="row">
                        <div class="col-md-3"> 
                            <input class="form-control" value="{{ $product->title }}" name="title"  id="title{{$loop->iteration}}" list="productlist" data-rowid="{{$loop->iteration}}" autocomplete="off">
                        </div>
                        <div class="col-md-2"> 
                            <div class="input-group">
                            {{ Form::text('price', number_format($product->price, 2, ',', '.'), ['id' => 'price'.$loop->iteration, 'class' => 'form-control'] )}}
                                <div class="input-group-prepend">
                                    <span class="input-group-text">{!! $invoice->company->currency !!}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="input-group mb-3">
                                {{ Form::text('count', $product->count, ['id' => 'count'.$loop->iteration, 'class' => 'form-control'] )}}
                                @include('product.type', ['id' => 'type'.$loop->iteration, 'type' => $product->type])
                            </div>
                        </div>
                        <div class="col-md-2">
                            <div class="input-group">
                                <div class="form-control">
                                    {!! number_format($product->total, 2, ',', '.') !!}
                                </div>
                                <div class="input-group-prepend">
                                    <span class="input-group-text">{!! $invoice->company->currency !!}</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-2">
                            <button type="submit" class="btn btn-primary">&check;</button>
                            {!!  Form::close() !!}
                            <a class="btn btn-danger" href="#"
                              onclick="event.preventDefault();
                              document.getElementById('remove-form{{ $product->id }}').submit();">
                              &times;
                            </a>
                            {{ Form::open(['route' => ['invoice.deleteproduct', $product->id ], 'method' => 'get', 'id' => 'remove-form'.$product->id]) }}
                            {{ Form::close() }}
                        </div>
                    </div>
                @endforeach
                @endif
                <!-- Article Row -->


                <!-- New Article Row -->
                {!!  Form::open(['route' => ['invoice.saveproduct'], 'id'=>'productform0']) !!}
                {{ Form::hidden('invoice_id', $invoice->id )}}
                <div class="row mt-5 mb-3">
                    <div class="col font-weight-bold">{!! __("invoice.add") !!}</div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <input class="form-control" name="title" id="title0" data-rowid="0" list="productlist" autocomplete="off">
                    </div>
                    <div class="col-md-2">
                        <div class="input-group mb-2">
                            {{ Form::text('price', null, [ 'id' => 'price0', 'class' => 'form-control', 'placeholder' => __('invoice.product_price')] )}}
                            <div class="input-group-prepend">
                                <span class="input-group-text">{!! $invoice->company->currency !!}</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="input-group mb-3">
                            {{ Form::text('count', null, [ 'id' => 'count0', 'class' => 'form-control'] )}}
                            @include('product.type', [ 'id' => 'type0', 'type' => null])
                        </div>
                    </div>
                    <div class="col-md-2">
                        <button type="submit" class="btn btn-primary">&check;</button>
                    </div>
                </div>
                {!!  Form::close() !!}
                <!-- New Article Row -->

                
                <!-- Total Row -->
                <div class="row p-5">
                    <div class="col-md">
                        <table align="right" style="font-size:16px;">
                            <tr>
                              <td class="p-1"><b>{!! __("invoice.sum_total_prices") !!}</b></td>
                              <td>:</td>
                              <td class="p-1" align="right">{!! number_format($sum_price_total, 2, ',', '.') !!} {!! $invoice->company->currency !!}</td>
                            </tr>
                            @if($invoice->tax_rate > 0)
                            <tr>
                              <td class="p-1"><b>{!! __("invoice.tax") !!} (%{!! $invoice->tax_rate !!})</b></td>
                              <td>:</td>
                              <td class="p-1" align="right">{!! number_format($sum_tax, 2, ',', '.') !!} {!! $invoice->company->currency !!}</td>
                            </tr>
                            @endif
                            <tr>
                              <td class="p-1"><b>{!! __("invoice.sum_total") !!}</b></td>
                              <td>:</td>
                              <td class="p-1" align="right">{!! number_format($sum_total, 2, ',', '.') !!} {!! $invoice->company->currency !!}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <!-- Total Row -->

                <!-- DESCRAPTION Row -->
                <div class="row">
                    <div class="col-md">
                        {!!  Form::open(['route' => ['invoice.updateinformation']]) !!}
                        {{ Form::hidden('id', $invoice->id )}}
                            <div class="position-relative form-group">
                                <texteditor inputname="information" inputvalue="@if($invoice->information){!! $invoice->information !!}@endif"></texteditor>
                            </div>
                            <div class="position-relative form-group">
                                <button type="submit" class="btn btn-primary">{!! __("invoice.update_information") !!}</button>
                            </div>
                        {!!  Form::close() !!}
                    </div>
                </div>
                <!-- DESCRAPTION Row -->
                <div class="divider"></div>

                
                <!-- ALT BİLGİ Row -->
                <div class="row">
                    <div class="col-md-6">
                        <b>{!! $invoice->company->company_name !!}</b><br>
                        Inhaber: {!! $invoice->company->firstname !!} {!! $invoice->company->lastname !!}<br>
                        {!! $invoice->company->address !!}<br>
                    </div>
                    <div class="col-md-6">
                    <b>{!! __("invoice.bank_information") !!}</b><br>
                    <b>{!! __("invoice.bank") !!}</b> {!! $invoice->company->bank !!}<br>
                    <b>{!! __("invoice.iban") !!}</b> {!! $invoice->company->iban !!}<br>
                    <b>{!! __("invoice.bic") !!}</b>  {!! $invoice->company->bic !!}
                    </div>
                </div>
                <!-- ALT BİLGİ Row -->

            </div>
        </div>
    </div>
</div>
<datalist id="productlist">
@foreach($products as $product)
    <option value="{{ $product->title }}" data-price="{{ number_format($product->price, 2, ',', '.') }}" data-type="{{ $product->type }}">
@endforeach
</datalist>

@section('js')
@parent
<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>

<script type="text/javascript">


    $(document).on('change', "input[id^='title']", function(event) {
        var val = $(this).val();
        var rowId = $(this).data('rowid');

        var price = $('#productlist option').filter(function() {
            return this.value == val;
        }).data('price');

        var type = $('#productlist option').filter(function() {
            return this.value == val;
        }).data('type');

        console.log(price);
        console.log(type);

        $('#price'+rowId).val(price);
        $('#count'+rowId).val(1);
        $('#type'+rowId).val(type);
        

});
 
</script>
@endsection

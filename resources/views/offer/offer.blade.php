<!-- ALT BİLGİ Row -->
<div class="row">
    <div class="col-md text-center">
        <a class="btn btn-success" target="_blank" href="{{ route('offer.pdf', $offer->id ) }}">{!! __("offer.pdf_preview") !!}</a>
        <a class="btn btn-success" target="_blank" href="{{ route('offer.download', $offer->id ) }}">{!! __("offer.download") !!}</a>
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
      @if($offer->company_name)
        <b>{!! $offer->company_name !!}</b><br>
      @endif
      {!! $offer->firstname !!}  {!! $offer->lastname !!}<br>
      {!! $offer->street !!}  {!! $offer->streetnumber !!}<br>
      {!! $offer->postcode !!}  {!! $offer->city !!}<br>
      {!! $offer->country !!}<br>
   </div>
   <div class="col-sm-3  text-right">
      @if($offer->company->logo)
          <img src="{{ Storage::url($offer->company->logo, 'public')}}" style="max-width:15rem;"><br>
      @endif
     <b>{!! $offer->company->company_name !!}</b><br>
     {!! $offer->company->email !!}<br>
     {!! $offer->company->webpage !!}<br>
   </div>
 </div>
 <div class="row">
 <div class="col-md-4 offset-md-8 text-right">  
 <br>
    <b>{!!__('offer.offer_number')!!}</b><br> {!!$offer->offer_number!!} <br>
    <b>{!!__('offer.date')!!}</b><br> {{ \Carbon\Carbon::parse($offer->date)->format('d.m.Y')}}

 </div></div>

 
                <div class="divider"></div>
                <div class="row">
                    <div class="col-md-3 font-weight-bold pb-4">{!! __('offer.product_title') !!}</div>
                    <div class="col-md-2 font-weight-bold">{!! __('offer.product_price') !!}</div>
                    <div class="col-md-3 font-weight-bold">{!! __('offer.product_count') !!} - {!! __('offer.product_type') !!}</div>
                    <div class="col-md-2 font-weight-bold">{!! __('offer.product_total_price') !!}</div>
                    <div class="col-md-2 font-weight-bold">{!! __('app.action') !!}</div>
                </div>




                <!-- Article Row -->
                @if($offer->products)
                @foreach($offer->products as $product)
                    {!!  Form::open(['route' => ['offer.updateproduct'], 'id'=>'productform'.$loop->iteration]) !!}
                    {{ Form::hidden('id', $product->id )}}
                    <div class="row">
                        <div class="col-md-3"> 
                            <input class="form-control" value="{{ $product->title }}" name="title"  id="title{{$loop->iteration}}" list="productlist" data-rowid="{{$loop->iteration}}" autocomplete="off">
                        </div>
                        <div class="col-md-2"> 
                            <div class="input-group">
                            {{ Form::text('price', number_format($product->price, 2, ',', '.'), ['id' => 'price'.$loop->iteration, 'class' => 'form-control'] )}}
                                <div class="input-group-prepend">
                                    <span class="input-group-text">{!! $offer->company->currency !!}</span>
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
                                    <span class="input-group-text">{!! $offer->company->currency !!}</span>
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
                            {{ Form::open(['route' => ['offer.deleteproduct', $product->id ], 'method' => 'get', 'id' => 'remove-form'.$product->id]) }}
                            {{ Form::close() }}
                        </div>
                    </div>
                @endforeach
                @endif
                <!-- Article Row -->


                <!-- New Article Row -->
                {!!  Form::open(['route' => ['offer.saveproduct'], 'id'=>'productform0']) !!}
                {{ Form::hidden('offer_id', $offer->id )}}
                <div class="row mt-5 mb-3">
                    <div class="col font-weight-bold">{!! __("offer.add") !!}</div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <input class="form-control" name="title" id="title0" data-rowid="0" list="productlist" autocomplete="off">
                    </div>
                    <div class="col-md-2">
                        <div class="input-group mb-2">
                            {{ Form::text('price', null, [ 'id' => 'price0', 'class' => 'form-control', 'placeholder' => __('offer.product_price')] )}}
                            <div class="input-group-prepend">
                                <span class="input-group-text">{!! $offer->company->currency !!}</span>
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
                              <td class="p-1"><b>{!! __("offer.sum_total_prices") !!}</b></td>
                              <td>:</td>
                              <td class="p-1" align="right">{!! number_format($sum_price_total, 2, ',', '.') !!} {!! $offer->company->currency !!}</td>
                            </tr>
                            @if($offer->tax_rate > 0)
                            <tr>
                              <td class="p-1"><b>{!! __("offer.tax") !!} (%{!! $offer->tax_rate !!})</b></td>
                              <td>:</td>
                              <td class="p-1" align="right">{!! number_format($sum_tax, 2, ',', '.') !!} {!! $offer->company->currency !!}</td>
                            </tr>
                            @endif
                            <tr>
                              <td class="p-1"><b>{!! __("offer.sum_total") !!}</b></td>
                              <td>:</td>
                              <td class="p-1" align="right">{!! number_format($sum_total, 2, ',', '.') !!} {!! $offer->company->currency !!}</td>
                            </tr>
                        </table>
                    </div>
                </div>
                <!-- Total Row -->

                <!-- DESCRAPTION Row -->
                <div class="row">
                    <div class="col-md">
                        {!!  Form::open(['route' => ['offer.updateinformation']]) !!}
                        {{ Form::hidden('id', $offer->id )}}
                            <div class="position-relative form-group">
                                <texteditor inputname="information" inputvalue="@if($offer->information){!! $offer->information !!}@endif"></texteditor>
                            </div>

                            <div class="form-row">
                                @if($offer->payment_deadline_day)
                                    <div class="col">
                                        <div class="form-group">
                                        {!! __("offer.payment_deadline_day_text", [ 'day' => $offer->payment_deadline_day]) !!}
                                        </div>
                                    </div>
                                @endif
                                <div class="col-3">
                                    <div class="form-group">
                                        {{ Form::text('payment_deadline_day', $offer->payment_deadline_day, [ 'class' => 'form-control', 'placeholder' => __('offer.payment_deadline_day_placeholder')] )}}
                                    </div>
                                </div>
                            </div>
                            <div class="form-row">
                                @if($offer->payment_type)
                                <div class="col">
                                    <div class="form-group">
                                    {!! __("offer.payment_type_text", [ 'type' => $offer->payment_type]) !!}
                                    </div>
                                </div>
                            @endif
                                <div class="col-3">
                                    <div class="form-group">
                                        {{ Form::text('payment_type', $offer->payment_type, [ 'class' => 'form-control', 'placeholder' => __('offer.payment_type_placeholder')] )}}
                                    </div>
                                </div>
                            </div>
                            <div class="position-relative form-group">
                                <button type="submit" class="btn btn-primary">{!! __("offer.update_information") !!}</button>
                            </div>
                        {!!  Form::close() !!}
                    </div>
                </div>
                
                <!-- DESCRAPTION Row -->
                <div class="divider"></div>

                
                <!-- ALT BİLGİ Row -->
                <div class="row">
                    <div class="col-md-6">
                        <b>{!! $offer->company->company_name !!}</b><br>
                        Inhaber: {!! $offer->company->firstname !!} {!! $offer->company->lastname !!}<br>
                        {!! $offer->company->address !!}<br>
                    </div>
                    <div class="col-md-6">
                    <b>{!! __("offer.bank_information") !!}</b><br>
                    <b>{!! __("offer.bank") !!}</b> {!! $offer->company->bank !!}<br>
                    <b>{!! __("offer.iban") !!}</b> {!! $offer->company->iban !!}<br>
                    <b>{!! __("offer.bic") !!}</b>  {!! $offer->company->bic !!}
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

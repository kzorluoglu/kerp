@extends('layouts.app')

@section('content')




<div class="app-page-title">
    <div class="page-title-wrapper">
        <div class="page-title-heading">
            <div class="page-title-icon">
                <i class="pe-7s-drawer icon-gradient bg-happy-itmeo"></i>
            </div>
            <div>
                {{__('product.page_title')}}
                <div class="page-title-subheading">{{__('product.page_description')}}</div>
            </div>
        </div>     
    </div>
</div>
<div class="row">
    <div class="col-md">
        <a href="{{route('product.new')}}" class="mb-2 mr-2 btn btn-primary">{{__('product.new_product')}}</a> 
    </div>
    <div class="col-md">
        {{ Form::open(['route' => 'product', 'method' => 'get']) }}
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" type="submit" id="button-addon1">{{__('app.search')}}</button>
            </div>
            {{ Form::text('search', null, ['class' => 'form-control']) }}
        </div>
    </div>
</div>
<div class="row">
    <div class="col-lg-12">
        <div class="main-card mb-3 card">
            <div class="card-body">
                {{ Form::close() }}
                <table class="mb-0 table table-hover">
                    <thead>
                    <tr>
                        <th width="100" scope="col">#{{__('product.product_number')}}</th>
                        <th scope="col">{{__('product.title')}}</th>
                        <th scope="col">{{__('product.stock')}}</th>
                        <th scope="col">{{__('product.price')}}</th>
                        <th width="150" scope="col">{{__('app.action')}}</th>
                    </tr>
                    </thead>
                    <tbody>
                    @if(empty($products))
                        {{ __('app.not_result')}}
                    @endif
                    @foreach($products as $product)
                        <tr>
                            <th scope="row">{{ $product->product_number }}</th>
                            <td>{{ $product->title }}</td>
                            <td>{{ $product->stock }}</td>
                            <td>{{ number_format($product->price, 2, ',', '.') }}</td>
                            <td>


                            
                                <a href="{{ route('product.show', $product->id) }}" class="mb-2 mr-2 btn btn-light"><i class="metismenu-icon pe-7s-config"></i></a>
                                <a class="mb-2 mr-2 btn btn-danger" href="#"
                                    onclick="event.preventDefault();
                                                    document.getElementById('remove-form{{ $product->id }}').submit();">
                                    <i class="metismenu-icon pe-7s-trash"></i>
                                </a>

                                {{ Form::open(['route' => ['product.delete', $product->id ], 'method' => 'get', 'id' => 'remove-form'.$product->id]) }}
                                {{ Form::close() }}
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
@endsection

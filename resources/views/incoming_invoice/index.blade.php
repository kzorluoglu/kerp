@extends('layouts.app')

@section('content')
<div class="app-page-title">
    <div class="page-title-wrapper">
        <div class="page-title-heading">
            <div class="page-title-icon">
                <i class="pe-7s-drawer icon-gradient bg-happy-itmeo"></i>
            </div>
            <div>
                {{__('invoice.page_title')}}
                <div class="page-title-subheading">{{__('invoice.page_description')}}</div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md">
        <a href="{{route('invoice.select')}}" class="mb-2 mr-2 btn btn-primary">{{__('incoming_invoice.new_invoice')}}</a>
    </div>
    <div class="col-md">
        {{ Form::open(['route' => 'invoice', 'method' => 'get']) }}
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
                            <th scope="col">{{__('incoming_invoice.intern_number')}}</th>
                            <th scope="col">{{__('invoice.invoice_number')}}</th>
                            <th scope="col">{{__('invoice.date')}}</th>
                            <th scope="col">{{__('invoice.firstname')}}</th>
                            <th scope="col">{{__('invoice.lastname')}}</th>
                            <th scope="col">{{__('invoice.company_name')}}</th>
                            <th scope="col">{{__('invoice.city')}}</th>
                            <th width="200" scope="col">{{__('app.action')}}</th>
                        </tr>
                    </thead>
                    <tbody>
                            @foreach($invoices as $invoice)

                            <tr @if($invoice->paid) class="table-success" @endif>
                                <th scope="row">{{ $invoice->intern_invoice_number }}@if($invoice->paid) <span class="badge badge-success badge-pill">{{ __('invoice.paid')}}</span> @endif</th>
                                <td>{{ $invoice->invoice_number }}</td>
                                <td>{{ \Carbon\Carbon::parse($invoice->date)->format('d.m.Y')}}</td>
                                <td>{{ $invoice->firstname }}</td>
                                <td>{{ $invoice->lastname }}</td>
                                <td>{{ $invoice->company_name }}</td>
                                <td>{{ $invoice->city }}</td>
                                <td>
                                    <a href="{{ route('invoice.prepare', $invoice->id) }}" class="mb-2 mr-2 btn btn-light"><i class="metismenu-icon pe-7s-pen"></i></a>
                                    <a href="{{ route('invoice.paid', $invoice->id) }}" title="{{ __('invoice.paid')}}" class="mb-2 mr-2 btn btn-primary"><i class="metismenu-icon pe-7s-cash"></i></a>
                                    <a class="mb-2 mr-2 btn btn-success" title="{!! __('invoice.pdf_preview') !!}" target="_blank" href="{{ route('invoice.pdf', $invoice->id ) }}"><i class="metismenu-icon pe-7s-file"></i></a>
                                    <a class="mb-2 mr-2 btn btn-success" title="{!! __('invoice.download') !!}" target="_blank" href="{{ route('invoice.download', $invoice->id ) }}"><i class="metismenu-icon pe-7s-download"></i></a>
                                    <a class="mb-2 mr-2 btn btn-danger" href="#"
                                        onclick="event.preventDefault();
                                        document.getElementById('remove-form{{ $invoice->id }}').submit();">
                                        <i class="metismenu-icon pe-7s-trash"></i>
                                    </a>
                                    {{ Form::open(['route' => ['invoice.delete', $invoice->id ], 'method' => 'get', 'id' => 'remove-form'.$invoice->id]) }}
                                    @csrf
                                    {{ Form::close() }}
                                </td>
                            </tr>
                          @endforeach
                      </tbody>
                </table>
                {{ $invoices->links() }}
                @if(empty($invoice))
                    <div class="text-center">
                        <br><br><br><br>
                        {{ __('app.not_result')}}
                        <br><br><br>
                    </div>
                @endif
            </div>
        </div>
    </div>
</div>
@endsection

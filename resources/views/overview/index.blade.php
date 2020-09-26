@extends('layouts.app')

@section('content')
<div class="app-page-title">
    <div class="page-title-wrapper">
        <div class="page-title-heading">
            <div class="page-title-icon">
                <i class="pe-7s-drawer icon-gradient bg-happy-itmeo"></i>
            </div>
            <div>
                {{__('overview.page_title')}}
                <div class="page-title-subheading">{{__('overview.page_description')}}</div>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-md">
        {{ Form::open(['route' => 'overview', 'method' => 'get']) }}
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" type="submit" id="button-addon1">{{__('app.filter')}}</button>
            </div>
            {{ Form::text('year', null, ['class' => 'form-control']) }}
        </div>
    </div>
</div>

<div class="row">
    <div class="col-lg-12">
        <div class="main-card mb-3 card">
            <div class="card-body">
                @if(count($invoices) > 0)
                {{ Form::close() }}
                <table class="mb-0 table table-hover">
                    <thead>
                        <tr>
                            <th width="100" scope="col">{{__('overview.invoice_number')}}</th>
                            <th scope="col">{{__('overview.date')}}</th>

                            <th scope="col">{{__('overview.company_name')}} ( {{__('overview.firstname')}}, {{__('overview.lastname')}} )</th>
                            <th scope="col">{{__('overview.sum')}} </th>
                            <th scope="col">{{__('overview.tax')}} </th>
                            <th scope="col">{{__('overview.total_sum')}} </th>
                        </tr>
                    </thead>
                    <tbody>
                            @foreach($invoices as $invoice)
                            <tr>
                                <th scope="row">{{ $invoice->invoice_number }} @if($invoice->paid) <span class="badge badge-success badge-pill">{{ __('invoice.paid')}}</span> @endif</th>
                                <td>{{ \Carbon\Carbon::parse($invoice->date)->format('d.m.Y')}}</td>

                                <td>{{ $invoice->company_name }} ({{ $invoice->firstname }} {{ $invoice->lastname }})</td>
                                <td>{!! number_format($invoice->sum_total_without_tax, 2, ',', '.') !!} {!! $invoice->company->currency !!}</td>
                                <td>{!! number_format($invoice->sum_tax, 2, ',', '.') !!} {!! $invoice->company->currency !!}</td>
                                <td>{!! number_format($invoice->sum_total, 2, ',', '.') !!} {!! $invoice->company->currency !!}</td>
                            </tr>
                          @endforeach
                      </tbody>
                    <tfoot>
                    <tr>
                        <td></td>
                        <td></td>
                        <td class="text-right">{{__('overview.total_sum')}}</td>
                        <td>{!! number_format($invoiceTotalSumWithoutTax, 2, ',', '.') !!} {!! $invoice->company->currency !!}</td>
                        <td>{!! number_format($invoiceTotalSumTax, 2, ',', '.') !!} {!! $invoice->company->currency !!}</td>
                        <td>{!! number_format($invoiceTotalSum, 2, ',', '.') !!} {!! $invoice->company->currency !!}</td>
                    </tr>
                    </tfoot>
                </table>
                @endif
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

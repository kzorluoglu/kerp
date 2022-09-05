@extends('layouts.app')


@section('content')
    <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <div class="page-title-icon">
                    <i class="pe-7s-drawer icon-gradient bg-happy-itmeo"></i>
                </div>
                <div>{{__('offer.form_title')}}</div>
            </div>
        </div>
    </div>


    {{ Form::open(['route' => 'offer.store', 'method' => 'post']) }}
    {{ Form::hidden('user_id', Auth::user()->id) }}
    <div class="row">
        <div class="col-md-12">
            <div class="main-card mb-3 card">
                <div class="card-body">
                    <div class="position-relative form-group">
                        <label for="">{{ __('offer.select_company')}}</label>
                        <select name="company_id" required>
                            <option value="">{{ __('offer.please_select_company') }}</option>
                            @foreach($companies as $company)
                                <option value="{{$company->id}}" @if ($company->standard) selected @endif>{{$company->company_name}}, {{$company->firstname}} {{$company->lastname}}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="main-card mb-3 card">
                <div class="card-body">
                    <div class="position-relative form-group">
                        <label for="">{{ __('offer.select_customer')}}</label>
                        <select name="customer_id" required>
                            <option value="">{{ __('offer.please_select_customer') }}</option>
                            @foreach($customers as $customer)
                                <option value="{{$customer->id}}">{{$customer->company_name}}, {{$customer->firstname}} {{$customer->lastname}}</option>
                            @endforeach
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="main-card mb-3 card">
                <div class="card-body">
                    {{ Form::submit(__('app.next'), ['class' => 'btn btn-primary']) }}
                </div>
            </div>
        </div>
    </div>
    {{ Form::close() }}
@endsection

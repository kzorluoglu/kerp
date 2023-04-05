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
                        <label for="">{{ __('app.select_company')}}</label>
                        <autocomplete-company placeholder="{{ __('app.select_company_with_autocomplete')}}"></autocomplete-company>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="main-card mb-3 card">
                <div class="card-body">
                    <div class="position-relative form-group">
                        <label for="">{{ __('app.select_customer')}}</label>
                        <autocomplete-customer placeholder="{{ __('app.select_customer_with_autocomplete')}}"></autocomplete-customer>
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

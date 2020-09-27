{!!  Form::model($customer, ['route' => [$route], 'files' => true]) !!}
<div class="app-page-title">
    <div class="page-title-wrapper">
        <div class="page-title-heading">
            <div class="page-title-icon">
                <i class="pe-7s-drawer icon-gradient bg-happy-itmeo"></i>
            </div>
            <div>{{__('customer.form_title')}}</div>
        </div>
    </div>
</div>

<div class="row">
    @if($customer->id)
        {{  Form::hidden('id', $customer->id) }}
    @endif
    <div class="col-md-6">
        <div class="main-card mb-3 card">
            <div class="card-body">
                <div class="position-relative form-group">
                    {{  Form::label('customer.firstname',  __('customer.firstname')) }}
                    {{  Form::text('firstname', null, ['class' => 'form-control', 'required' => 'required']) }}
                    <small class="form-text text-muted">{{ __('app.required_input') }}</small>
                </div>
                <div class="position-relative form-group">
                    {{  Form::label('customer.lastname', __('customer.lastname')) }}
                    {{  Form::text('lastname', null, ['class' => 'form-control', 'required' => 'required']) }}
                    <small class="form-text text-muted">{{ __('app.required_input') }}</small>
                </div>
                <div class="position-relative form-group">
                    {{  Form::label('customer.email', __('customer.email')) }}
                    {{  Form::text('email', null, ['class' => 'form-control', 'required' => 'required']) }}
                    <small class="form-text text-muted">{{ __('app.required_input') }}</small>
                </div>
                <div class="position-relative form-group">
                    {{  Form::label('customer.company_name', __('customer.company_name')) }}
                    {{  Form::text('company_name', null, ['class' => 'form-control']) }}
                </div>
                <div class="position-relative form-group">
                    {{  Form::label('customer.tax_rate', __('customer.tax_rate')) }}
                    {{  Form::text('tax_rate', null, ['class' => 'form-control']) }}
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-6">
        <div class="main-card mb-3 card">
            <div class="card-body">
                <div class="position-relative form-group">
                    {{  Form::label('customer.street',  __('customer.street')) }}
                    {{  Form::text('street', null, ['class' => 'form-control', 'required' => 'required']) }}
                    <small class="form-text text-muted">{{ __('app.required_input') }}</small>
                </div>
                <div class="position-relative form-group">
                    {{  Form::label('customer.streetnumber',  __('customer.streetnumber')) }}
                    {{  Form::text('streetnumber', null, ['class' => 'form-control', 'required' => 'required']) }}
                    <small class="form-text text-muted">{{ __('app.required_input') }}</small>
                </div>
                <div class="position-relative form-group">
                    {{  Form::label('customer.postcode',  __('customer.postcode')) }}
                    {{  Form::text('postcode', null, ['class' => 'form-control', 'required' => 'required']) }}
                    <small class="form-text text-muted">{{ __('app.required_input') }}</small>
                </div>
                <div class="position-relative form-group">
                    {{  Form::label('customer.city',  __('customer.city')) }}
                    {{  Form::text('city', null, ['class' => 'form-control', 'required' => 'required']) }}
                    <small class="form-text text-muted">{{ __('app.required_input') }}</small>
                </div>
                <div class="position-relative form-group">
                    {{  Form::label('customer.country',  __('customer.country')) }}
                    {{  Form::text('country', null, ['class' => 'form-control']) }}
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="main-card mb-3 card">
            <div class="card-body">
                {{ Form::submit(__('app.save'), ['class' => 'btn btn-primary']) }}
            </div>
        </div>
    </div>
</div>
{!!  Form::close() !!}

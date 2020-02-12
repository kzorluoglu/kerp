{!!  Form::model($company, ['route' => [$route], 'files' => true]) !!}
<div class="app-page-title">
    <div class="page-title-wrapper">
        <div class="page-title-heading">
            <div class="page-title-icon">
                <i class="pe-7s-drawer icon-gradient bg-happy-itmeo"></i>
            </div>
            <div>{{__('company.form_title')}}</div>
        </div>     
    </div>
</div> 
<div class="row">
    {{  Form::hidden('user_id', Auth::user()->id) }}
    @if($company->id)
    {{  Form::hidden('id', $company->id) }}
    @endif
    <div class="col-md-6">
        <div class="main-card mb-3 card">
            <div class="card-body">
                <div class="position-relative form-group">
{{  Form::label('firstname',  __('company.firstname')) }}
{{  Form::text('firstname', null, ['class' => 'form-control', 'required' => 'required']) }}
<small class="form-text text-muted">{{ __('app.required_input') }}</small>
                </div>  
                <div class="position-relative form-group">
{{  Form::label('lastname',  __('company.lastname')) }}
{{  Form::text('lastname', null, ['class' => 'form-control', 'required' => 'required']) }}
<small class="form-text text-muted">{{ __('app.required_input') }}</small>
                </div>  
                <div class="position-relative form-group">
{{  Form::label('company_name',  __('company.company_name')) }}
{{  Form::text('company_name', null, ['class' => 'form-control', 'required' => 'required']) }}
<small class="form-text text-muted">{{ __('app.required_input') }}</small>
                </div>  
                <div class="position-relative form-group form-check">
{{  Form::hidden('standard', '0') }}
{{  Form::checkbox('standard', true, $company->standard, ['class' => 'form-check-input']) }}
{{  Form::label('standard',  __('company.standard'), ['class' => 'form-check-label']) }}

                </div>                  
                <div class="position-relative form-group">
{{  Form::label('address', __('company.address')) }}
<texteditor inputname="address" inputvalue="@if($company){!! $company->address !!}@endif"></texteditor>
                </div>  
                <div class="position-relative form-group">
{{  Form::label('information', __('company.information')) }}
<texteditor inputname="information" inputvalue="@if($company){!! $company->information !!}@endif"></texteditor>
                </div>  
@if($company->logo)
<div class="position-relative form-group">
   <img src="{{ Storage::url($company->logo)}}" class="img-thumbnail" style="max-width:200px">
</div>     
@endif
                <div class="position-relative form-group">
                    {{  Form::label('logo', __('company.logo')) }}
                    {{  Form::file('logo', null, ['class' => 'form-control']) }}
                </div>     
            </div>
        </div> 
    </div> 
    <div class="col-md-6">
        <div class="main-card mb-3 card">
            <div class="card-body">
                <div class="position-relative form-group">
      {{  Form::label('email',  __('company.email')) }}
      {{  Form::text('email', null, ['class' => 'form-control']) }}
                </div> 
                <div class="position-relative form-group">
     {{  Form::label('webpage',  __('company.webpage')) }}
     {{  Form::text('webpage', null, ['class' => 'form-control']) }}
     <small id="webpage" class="form-text text-muted">{{ __('company.webpage_help') }}</small>
                </div> 
                <div class="position-relative form-group">
     {{  Form::label('currency',  __('company.currency')) }}
     {{  Form::text('currency', null, ['class' => 'form-control', 'required' => 'required']) }}
     <small id="currency" class="form-text text-muted">{{ __('app.required_input') }}, {{ __('company.currency_help') }}</small>
                </div> 
                <div class="position-relative form-group">
     {{  Form::label('bank',  __('company.bank')) }}
     {{  Form::text('bank', null, ['class' => 'form-control']) }}
                 </div> 
                <div class="position-relative form-group">
     {{  Form::label('iban',  __('company.iban')) }}
     {{  Form::text('iban', null, ['class' => 'form-control']) }}
     <small id="iban" class="form-text text-muted">{{ __('company.iban_help') }}</small>
                </div> 
                <div class="position-relative form-group">
     {{  Form::label('bic',  __('company.bic')) }}
     {{  Form::text('bic', null, ['class' => 'form-control']) }}
     <small id="bic" class="form-text text-muted">{{ __('company.bic_help') }}</small>
                </div> 
                <div class="position-relative form-group">
     {{  Form::label('tax_rate',  __('company.tax_rate')) }}
     {{  Form::text('tax_rate', null, ['class' => 'form-control', 'required' => 'required']) }}
     <small id="tax_rate" class="form-text text-muted">{{ __('app.required_input') }}, {{ __('company.tax_rate_help') }}</small>
     @if($company->tax_rate == 0)
          <small id="tax_rate" class="form-text text-muted">{!! __('company.tax_rate_0_information') !!}</small>
     @endif
                </div> 
                <div class="position-relative form-group">
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

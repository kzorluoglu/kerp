<div class="app-page-title">
    <div class="page-title-wrapper">
        <div class="page-title-heading">
            <div class="page-title-icon">
                <i class="pe-7s-drawer icon-gradient bg-happy-itmeo"></i>
            </div>
            <div>{{__('contract.form_title')}}</div>
        </div>
    </div>
</div>
<div class="row">

    <div class="col-md-12">
        <div class="main-card mb-3 card">
            <div class="card-body">
                <form method="POST" action="{{ isset($contract) ? route('contract.update', $contract->id) : route('contract.store') }}">
                    @csrf

                    <div class="form-group">
                        <label for="name">{{ __('contract.name') }}:</label>
                        <input type="text" class="form-control" id="name" name="name" value="{{ old('name', isset($contract) ? $contract->name : '') }}">
                    </div>
                    <div class="form-group">
                        <label for="description">{{ __('contract.description') }}:</label>
                        <textarea class="form-control" id="description" name="description">{{ old('description', isset($contract) ? $contract->description : '') }}</textarea>
                    </div>
                    <div class="form-group">
                        <label for="start_date">{{ __('contract.start_date') }}:</label>
                        <input type="datetime-local" class="form-control" id="start_date" name="start_date" value="{{ old('start_date', isset($contract->start_date) ? $contract->start_date->format('Y-m-d H:i:s') : '') }}">
                    </div>
                    <div class="form-group">
                        <label for="end_date">{{ __('contract.end_date') }}:</label>
                        <input type="datetime-local" class="form-control" id="end_date" name="end_date" value="{{ old('end_date', isset($contract->end_date) ? $contract->end_date->format('Y-m-d H:i:s') : '') }}">
                    </div>
                    <div class="form-group">
                        <label for="company_id">{{ __('contract.company_name') }}:</label>
                        <select class="form-control" id="company_id" name="company_id">
                            @foreach($companies as $company)
                                <option value="{{ $company->id }}" @if(old('company_id', isset($contract) ? $contract->company_id : '') == $company->id) selected @endif>{{ $company->company_name }}</option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="period_type">{{ __('contract.period_type') }}:</label>
                        <select class="form-control" name="period_type" id="period_type">
                            @foreach($contract->getPeriodTypes() as $period_type)
                                <option value="{{ $period_type }}" {{ old('period_type', isset($contract) ? $contract->period_type : '') == $period_type ? 'selected' : '' }}>
                                    {{ __('app.'.$period_type) }}
                                </option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="period_value">{{ __('contract.period_value') }}:</label>
                        <input type="number" class="form-control" id="period_value" name="period_value" value="{{ old('period_value', isset($contract) ? $contract->period_value : '') }}">
                    </div>
                    <div class="form-group">
                        <label for="cancellation_period_type">{{ __('contract.cancellation_period_type') }}:</label>
                        <select class="form-control" id="cancellation_period_type" name="cancellation_period_type">
                            @foreach($contract->getPeriodTypes() as $period_type)
                                <option value="{{ $period_type }}" {{ old('cancellation_period_type', isset($contract) ? $contract->cancellation_period_type : '') == $period_type ? 'selected' : '' }}>
                                    {{ __('app.'.$period_type) }}
                                </option>
                            @endforeach
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="cancellation_period_value">{{ __('contract.cancellation_period_value') }}:</label>
                        <input type="number" class="form-control" id="cancellation_period_value" name="cancellation_period_value" value="{{ old('cancellation_period_value', isset($contract) ? $contract->cancellation_period_value : '') }}">
                    </div>
                    <div class="form-group">
                        <label for="end_date">{{ __('contract.cancellation_date') }}:</label>
                        <input type="datetime-local" class="form-control" id="cancellation_date" name="cancellation_date"  readonly value="{{ old('cancellation_date', isset($contract->cancellation_date) ? $contract->cancellation_date->format('Y-m-d H:i:s') : '') }}">
                    </div>
                    <div class="form-group">
                        <label for="pdf_document">{{ __('contract.pdf_document') }}:</label>
                        <input type="file" class="form-control-file" id="pdf_document" name="pdf_document">
                    </div>
                    <button type="submit" class="btn btn-primary">{{ isset($contract) ? __('app.edit') : __('app.save') }}</button>
                </form>
            </div>
        </div>
    </div>
</div>

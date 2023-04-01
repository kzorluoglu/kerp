@extends('layouts.app')

@section('content')

    <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <div class="page-title-icon">
                    <i class="pe-7s-drawer icon-gradient bg-happy-itmeo"></i>
                </div>
                <div>
                    {{__('contract.page_title')}}
                    <div class="page-title-subheading">{{__('contract.page_description')}}</div>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-md">
            <a href="{{route('contract.new')}}" class="mb-2 mr-2 btn btn-primary">{{__('contract.new_contract')}}</a>
        </div>
        <div class="col-md">
            {{ Form::open(['route' => 'contract', 'method' => 'get']) }}
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary" type="submit"
                            id="button-addon1">{{__('app.search')}}</button>
                </div>
                {{ Form::text('search', null, ['class' => 'form-control']) }}
                {{ Form::close() }}
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <div class="main-card mb-3 card">
                <div class="card-body">
                    <form method="POST" action="{{ route('contract.update', $contract->id) }}">
                        @csrf
                        <div class="form-group">
                            <label for="name">Name:</label>
                            <input type="text" class="form-control" id="name" name="name" value="{{ $contract->name }}">
                        </div>
                        <div class="form-group">
                            <label for="description">Description:</label>
                            <textarea class="form-control" id="description" name="description">{{ $contract->description }}</textarea>
                        </div>
                        <div class="form-group">
                            <label for="start_date">Start Date:</label>
                            <input type="datetime-local" class="form-control" id="start_date" name="start_date" value="{{ $contract->start_date }}">
                        </div>
                        <div class="form-group">
                            <label for="end_date">End Date:</label>
                            <input type="datetime-local" class="form-control" id="end_date" name="end_date" value="{{ $contract->end_date }}">
                        </div>
                        <div class="form-group">
                            <label for="company_id">Company:</label>
                            <select class="form-control" id="company_id" name="company_id">
                                @foreach($companies as $company)
                                    <option value="{{ $company->id }}" @if($contract->company_id == $company->id) selected @endif>{{ $company->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="period_type">Period Type:</label>
                            <input type="text" class="form-control" id="period_type" name="period_type" value="{{ $contract->period_type }}">
                        </div>
                        <div class="form-group">
                            <label for="period_value">Period Value:</label>
                            <input type="number" class="form-control" id="period_value" name="period_value" value="{{ $contract->period_value }}">
                        </div>
                        <div class="form-group">
                            <label for="pdf_document">PDF Document:</label>
                            <input type="file" class="form-control-file" id="pdf_document" name="pdf_document">
                        </div>
                        <button type="submit" class="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
@endsection

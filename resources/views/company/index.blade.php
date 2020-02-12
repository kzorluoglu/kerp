@extends('layouts.app')

@section('content')
<div class="app-page-title">
    <div class="page-title-wrapper">
        <div class="page-title-heading">
            <div class="page-title-icon">
                <i class="pe-7s-drawer icon-gradient bg-happy-itmeo"></i>
            </div>
            <div>
                {{__('company.page_title')}}
                <div class="page-title-subheading">{{__('company.page_description')}}</div>
            </div>
        </div>     
    </div>
</div>
<div class="row">
    <div class="col-md">
        <a href="{{route('company.new')}}" class="mb-2 mr-2 btn btn-primary">{{__('company.new')}}</a> 
    </div>
    <div class="col-md">
        {{ Form::open(['route' => 'company', 'method' => 'get']) }}
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
                        <th width="100" scope="col">{{__('customer.id')}}</th>
                        <th scope="col">{{__('customer.company_name')}}</th>
                        <th scope="col">{{__('customer.firstname')}}</th>
                        <th scope="col">{{__('customer.lastname')}}</th>
                        <th scope="col">{{__('customer.email')}}</th>
                        <th width="150" scope="col">{{__('app.action')}}</th>
                    </tr>
                    </thead>
                        <tbody>
                            @if(empty($companies))
                                {{ __('app.not_result')}}
                            @endif
                            @foreach($companies as $company)
                            <tr>
        <th scope="row">{{ $company->id }}</th>
        <td>{{ $company->company_name }}</td>
        <td>{{ $company->firstname }}</td>
        <td>{{ $company->lastname }}</td>
        <td>{{ $company->email }}</td>
                                <td>
                                    <a href="{{ route('company.show', $company->id) }}" class="mb-2 mr-2 btn btn-light"><i class="metismenu-icon pe-7s-config"></i></a>
                                    <a class="mb-2 mr-2 btn btn-danger" href="#"
                                        onclick="event.preventDefault();
                                                        document.getElementById('remove-form{{ $company->id }}').submit();">
                                        <i class="metismenu-icon pe-7s-trash"></i>
                                    </a>
                                    {{ Form::open(['route' => ['company.delete', $company->id ], 'method' => 'get', 'id' => 'remove-form'.$company->id]) }}
                                    {{ Form::close() }}
                                </td>
                            </tr>
                          @endforeach
                      </tbody>
                </table>
                {{ $companies->links() }}
            </div>
        </div>
    </div>
</div>




@endsection

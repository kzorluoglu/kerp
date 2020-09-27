@extends('layouts.app')

@section('content')
    <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <div class="page-title-icon">
                    <i class="pe-7s-drawer icon-gradient bg-happy-itmeo"></i>
                </div>
                <div>
                    {{__('customer.page_title')}}
                    <div class="page-title-subheading">{{__('customer.page_description')}}</div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md">
            <a href="{{route('customer.new')}}" class="mb-2 mr-2 btn btn-primary">{{__('customer.new_customer')}}</a>
        </div>
        <div class="col-md">
            {{ Form::open(['route' => 'customer', 'method' => 'get']) }}
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary" type="submit"
                            id="button-addon1">{{__('app.search')}}</button>
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
                        @if(empty($customers))
                            {{ __('app.not_result')}}
                        @endif
                        @foreach($customers as $customer)
                            <tr>
                                <th scope="row">{{ $customer->id }}</th>
                                <td>{{ $customer->company_name }}</td>
                                <td>{{ $customer->firstname }}</td>
                                <td>{{ $customer->lastname }}</td>
                                <td>{{ $customer->email }}</td>
                                <td>
                                    <a href="{{ route('customer.show', $customer->id) }}"
                                       class="mb-2 mr-2 btn btn-light"><i class="metismenu-icon pe-7s-config"></i></a>
                                    <a class="mb-2 mr-2 btn btn-danger" href="#"
                                       onclick="event.preventDefault();
                                           document.getElementById('remove-form{{ $customer->id }}').submit();">
                                        <i class="metismenu-icon pe-7s-trash"></i>
                                    </a>
                                    {{ Form::open(['route' => ['customer.delete', $customer->id ], 'method' => 'get', 'id' => 'remove-form'.$customer->id]) }}
                                    {{ Form::close() }}
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                    {{ $customers->links() }}
                </div>
            </div>
        </div>
    </div>
@endsection



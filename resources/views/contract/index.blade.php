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
                        <th width="100" scope="col">#{{__('contract.id')}}</th>
                        <th scope="col">{{__('contract.title')}}</th>
                        <th width="150" scope="col">{{__('app.action')}}</th>
                    </tr>
                    </thead>
                    <tbody>
                        @if(empty($categories))
                          {{ __('app.not_result')}}
                        @endif
                        @foreach($contracts as $contract)
                        <tr>
                            <th scope="row">{{ $contract->id }}</th>
                            <td>{{ $contract->title }}</td>
                            <td>
                                <a href="{{ route('contract.show', $contract->id) }}" class="mb-2 mr-2 btn btn-light"><i class="metismenu-icon pe-7s-config"></i></a>
                                <a class="mb-2 mr-2 btn btn-danger" href="#"
                                    onclick="event.preventDefault();
                                                    document.getElementById('remove-form{{ $contract->id }}').submit();">
                                    <i class="metismenu-icon pe-7s-trash"></i>
                                </a>

                                {{ Form::open(['route' => ['contract.delete', $contract->id ], 'method' => 'get', 'id' => 'remove-form'.$contract->id]) }}
                                {{ Form::close() }}
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
                {{ $contracts->links() }}
            </div>
        </div>
    </div>
</div>


@endsection

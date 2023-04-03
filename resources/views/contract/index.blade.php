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
                    <table class="table table-striped table-hover">
                        <thead>
                        <tr>
                            <th>{{ __('contract.name') }}</th>
                            <th>{{ __('contract.company_name') }}</th>
                            <th>{{ __('contract.start_date') }}</th>
                            <th>{{ __('contract.end_date') }} </th>
                            <th>{{ __('contract.period_type') }} </th>
                            <th>{{ __('contract.cancellation_date') }}</th>
                            <th>{{ __('contract.remaining_time') }} </th>
                            <th>{{ __('contract.renew_remaining_time') }} </th>
                            <th>{{ __('app.action') }}</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($contracts as $contract)
                            <tr>
                                <td>{{ $contract->name }}</td>
                                <td>{{ $contract->company->company_name }}</td>
                                <td>{{ $contract->start_date->format('d.m.Y H:i:s') }}</td>
                                <td>{{ $contract->end_date->format('d.m.Y H:i:s') }}</td>
                                <td>{{ $contract->period_value }} {{ __('app.'.$contract->period_type) }}</td>
                                <td>{{ $contract->cancellation_date->format('d.m.Y H:i:s') }}</td>
                                <td>{{ $contract->remainingTimeText() }}</td>
                                <td>{{ $contract->renewRemainingTimeText() }}</td>
                                <td>
                                    <a href="{{ route('contract.show', $contract->id) }}" class="mb-2 mr-2 btn btn-light"><i
                                            class="metismenu-icon pe-7s-config"></i>
                                    </a>
                                    <button type="submit" class="mb-2 mr-2 btn btn-danger" onclick="event.preventDefault();
                                       document.getElementById('delete-form{{ $contract->id }}').submit();">
                                        <i class="metismenu-icon pe-7s-trash"></i>
                                    </button>
                                    {{ Form::open(['route' => ['contract.delete', $contract->id ], 'method' => 'get', 'id' => 'delete-form'.$contract->id]) }}
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

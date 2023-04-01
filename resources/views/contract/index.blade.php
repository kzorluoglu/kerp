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
                            <th>Name</th>
                            <th>Company</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Period Type</th>
                            <th>Period Value</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($contracts as $contract)
                            <tr>
                                <td>{{ $contract->name }}</td>
                                <td>{{ $contract->company->name }}</td>
                                <td>{{ $contract->start_date }}</td>
                                <td>{{ $contract->end_date }}</td>
                                <td>{{ $contract->period_type }}</td>
                                <td>{{ $contract->period_value }}</td>
                                <td>
                                    <a href="{{ route('contract.show', $contract->id) }}" class="btn btn-primary btn-sm">Edit</a>
                                    <form action="{{ route('contract.delete', $contract->id) }}" method="POST" class="d-inline">
                                        @csrf
                                        @method('DELETE')
                                        <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Are you sure you want to delete this contract?')">Delete</button>
                                    </form>
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

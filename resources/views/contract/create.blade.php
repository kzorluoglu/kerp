@extends('layouts.app')

@section('content')

    @include('contract.form', ['route' => 'company.store'])

@endsection

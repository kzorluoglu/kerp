@extends('layouts.app')

@section('content')

@include('contract.form', ['route' => 'contract.store'])

@endsection

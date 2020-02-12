@extends('layouts.app')

@section('content')

@include('customer.form', ['route' => 'customer.update'])

@endsection

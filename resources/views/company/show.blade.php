@extends('layouts.app')

@section('content')

@include('company.form', ['route' => 'company.update'])

@endsection

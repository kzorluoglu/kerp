@extends('layouts.app')

@section('content')

@include('product.form', ['route' => 'product.update'])

@endsection

@extends('layouts.app')

@section('content')

@include('category.form', ['route' => 'category.store'])

@endsection

@extends('layouts.app')

@section('content')

@include('category.form', ['route' => 'category.update'])

@endsection

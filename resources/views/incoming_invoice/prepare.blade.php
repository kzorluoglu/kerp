@extends('layouts.app')

@section('css')
@parent()
<style>
.paid{
    color: #1e6641;
    background-color: #d8f3e5;
    border-color: #c8eedb;
}
</style>
@endsection

@section('content')
    @include('incoming_invoice.invoice')
@endsection

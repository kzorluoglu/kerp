@extends('layouts.app')

@section('content')
    <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <div class="page-title-icon">
                    <i class="pe-7s-car icon-gradient bg-mean-fruit">
                    </i>
                </div>
                <div>
                    {{__('home.page_title')}}
                    <div class="page-title-subheading">{{__('home.page_description')}}</div>
                </div>
            </div>
        </div>
    </div>
@endsection

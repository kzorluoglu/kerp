@extends('layouts.app')

@section('content')
    <div class="app-page-title">
        <div class="page-title-wrapper">
            <div class="page-title-heading">
                <div class="page-title-icon">
                    <i class="pe-7s-drawer icon-gradient bg-happy-itmeo"></i>
                </div>
                <div>
                    {{__('offer.page_title')}}
                    <div class="page-title-subheading">{{__('offer.page_description')}}</div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md">
            <a href="{{route('offer.select')}}" class="mb-2 mr-2 btn btn-primary">{{__('offer.new_invoice')}}</a>
        </div>
        <div class="col-md">
            {{ Form::open(['route' => 'invoice', 'method' => 'get']) }}
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <button class="btn btn-outline-secondary" type="submit"
                            id="button-addon1">{{__('app.search')}}</button>
                </div>
                {{ Form::text('search', null, ['class' => 'form-control']) }}
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <div class="main-card mb-3 card">
                <div class="card-body">
                    {{ Form::close() }}
                    <table class="mb-0 table table-hover">
                        <thead>
                        <tr>
                            <th width="100" scope="col">{{__('offer.offer_number')}}</th>
                            <th scope="col">{{__('offer.date')}}</th>
                            <th scope="col">{{__('offer.firstname')}}</th>
                            <th scope="col">{{__('offer.lastname')}}</th>
                            <th scope="col">{{__('offer.company_name')}}</th>
                            <th scope="col">{{__('offer.city')}}</th>
                            <th width="200" scope="col">{{__('app.action')}}</th>
                        </tr>
                        </thead>
                        <tbody>
                        @foreach($offers as $offer)

                            <tr @if($offer->invoice_number) class="table-success" @endif>
                                <th scope="row">{{ $offer->offer_number }} @if($offer->invoice_number) <span
                                        class="badge badge-success badge-pill">{{ __('offer.hasinvoice')}}</span> @endif
                                </th>
                                <td>{{ \Carbon\Carbon::parse($offer->date)->format('d.m.Y')}}</td>
                                <td>{{ $offer->firstname }}</td>
                                <td>{{ $offer->lastname }}</td>
                                <td>{{ $offer->company_name }}</td>
                                <td>{{ $offer->city }}</td>
                                <td>
                                    <a href="{{ route('offer.prepare', $offer->id) }}"
                                       class="mb-2 mr-2 btn btn-light"><i class="metismenu-icon pe-7s-pen"></i></a>
                                    <a href="{{ route('offer.changetoinvoice', $offer->id) }}"
                                       title="{{ __('offer.changetoinvoice')}}" class="mb-2 mr-2 btn btn-primary"><i
                                            class="metismenu-icon pe-7s-paper-plane"></i></a>
                                    <a class="mb-2 mr-2 btn btn-success" title="{!! __('offer.pdf_preview') !!}"
                                       target="_blank" href="{{ route('offer.pdf', $offer->id ) }}"><i
                                            class="metismenu-icon pe-7s-file"></i></a>
                                    <a class="mb-2 mr-2 btn btn-success" title="{!! __('offer.download') !!}"
                                       target="_blank" href="{{ route('offer.download', $offer->id ) }}"><i
                                            class="metismenu-icon pe-7s-download"></i></a>
                                    <a class="mb-2 mr-2 btn btn-danger" href="#"
                                       onclick="event.preventDefault();
                                           document.getElementById('remove-form{{ $offer->id }}').submit();">
                                        <i class="metismenu-icon pe-7s-trash"></i>
                                    </a>
                                    {{ Form::open(['route' => ['offer.delete', $offer->id ], 'method' => 'get', 'id' => 'remove-form'.$offer->id]) }}
                                    @csrf
                                    {{ Form::close() }}
                                </td>
                            </tr>
                        @endforeach
                        </tbody>
                    </table>
                    {{ $offers->links() }}
                    @if(empty($offer))
                        <div class="text-center">
                            <br><br><br><br>
                            {{ __('app.not_result')}}
                            <br><br><br>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection

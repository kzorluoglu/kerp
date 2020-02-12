@extends('layouts.app')

@section('content')

<div class="app-page-title">
    <div class="page-title-wrapper">
        <div class="page-title-heading">
            <div class="page-title-icon">
                <i class="pe-7s-drawer icon-gradient bg-happy-itmeo"></i>
            </div>
            <div>KATEGORİLER
                <div class="page-title-subheading">Firmanıza ait ürün kategorileri bu alanda görebilir, değiştirebilir veya ekleyebilirsiniz</div>
            </div>
        </div>     
    </div>
</div>
<div class="row">
    <div class="col-md">
        <a href="{{route('category.new')}}" class="mb-2 mr-2 btn btn-primary">{{__('category.new_category')}}</a> 
    </div>
    <div class="col-md">
        {{ Form::open(['route' => 'category', 'method' => 'get']) }}
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" type="submit" id="button-addon1">{{__('app.search')}}</button>
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
                        <th width="100" scope="col">#{{__('category.id')}}</th>
                        <th scope="col">{{__('category.title')}}</th>
                        <th width="150" scope="col">{{__('app.action')}}</th>
                    </tr>
                    </thead>
                    <tbody>
                        @if(empty($categories))
                          {{ __('app.not_result')}}
                        @endif
                        @foreach($categories as $category)
                        <tr>
                            <th scope="row">{{ $category->id }}</th>
                            <td>{{ $category->title }}</td>
                            <td>
                                <a href="{{ route('category.show', $category->id) }}" class="mb-2 mr-2 btn btn-light"><i class="metismenu-icon pe-7s-config"></i></a>
                                <a class="mb-2 mr-2 btn btn-danger" href="#"
                                    onclick="event.preventDefault();
                                                    document.getElementById('remove-form{{ $category->id }}').submit();">
                                    <i class="metismenu-icon pe-7s-trash"></i>
                                </a>

                                {{ Form::open(['route' => ['category.delete', $category->id ], 'method' => 'get', 'id' => 'remove-form'.$category->id]) }}
                                {{ Form::close() }}
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
                {{ $categories->links() }}
            </div>
        </div>
    </div>
</div>


@endsection

{!!  Form::model($product, ['route' => [$route], 'files' => true]) !!}

<div class="app-page-title">
    <div class="page-title-wrapper">
        <div class="page-title-heading">
            <div class="page-title-icon">
                <i class="pe-7s-drawer icon-gradient bg-happy-itmeo">
                </i>
            </div>
            <div>{{__('product.form_title')}}</div>
        </div>
    </div>
</div>
<div class="row">
    @if($product->id)
        {{  Form::hidden('id', $product->id) }}
    @endif
    <div class="col-md-6">
        <div class="main-card mb-3 card">
            <div class="card-body">
                <div class="position-relative form-group">
                    {{  Form::label('product.product_title',  __('product.title')) }}
                    {{  Form::text('title', null, ['class' => 'form-control']) }}
                    <small class="form-text text-muted">{{ __('app.required_input') }}</small>
                </div>
                <div class="position-relative form-group">
                    {{  Form::label('product.description', __('product.description')) }}
                    <texteditor inputname="description"
                                inputvalue="@if($product->description){!! $product->description !!}@endif"
                                id="exampleText"></texteditor>

                </div>
                @if($product->image)
                    <div class="position-relative form-group">
                        <img src="{{ Storage::url($product->image)}}" class="img-thumbnail" style="max-width:200px">
                    </div>
                @endif
                <div class="position-relative form-group">
                    {{  Form::label('product.image', __('product.image')) }}
                    {{  Form::file('image', null, ['class' => 'form-control']) }}
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="main-card mb-3 card">
            <div class="card-body">
                <div class="position-relative form-group">
                    {{  Form::label('product.stock',  __('product.stock')) }}
                    {{  Form::text('stock', null, ['class' => 'form-control']) }}
                </div>
                <div class="position-relative form-group">
                    {{  Form::label('product.product_number',  __('product.product_number')) }}
                    {{  Form::text('product_number', null, ['class' => 'form-control']) }}
                </div>
                <div class="position-relative form-group">
                    {{  Form::label('product.price',  __('product.price')) }}
                    {{  Form::text('price', number_format($product->price, 2, ',', '.'), ['class' => 'form-control']) }}
                    <small class="form-text text-muted">{{ __('app.required_input') }}</small>
                </div>
                <div class="position-relative form-group">
                    {{  Form::label('product.type',  __('product.type')) }}
                    @if($product->type)
                        @include('product.type', ['type' => $product->type ])
                    @else
                        @include('product.type', ['type' => null ])
                    @endif
                    <small class="form-text text-muted">{{ __('app.required_input') }}</small>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="main-card mb-3 card">
            <div class="card-body">
                @if($product->id)
                    {{ Form::submit(__('app.update'), ['class' => 'btn btn-primary']) }}
                @else
                    {{ Form::submit(__('app.save'), ['class' => 'btn btn-primary']) }}
                @endif
            </div>
        </div>
    </div>
</div>
{!!  Form::close() !!}

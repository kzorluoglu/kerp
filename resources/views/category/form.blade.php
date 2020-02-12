{!!  Form::model($category, ['route' => [$route], 'files' => true]) !!}
<div class="app-page-title">
    <div class="page-title-wrapper">
        <div class="page-title-heading">
            <div class="page-title-icon">
                <i class="pe-7s-drawer icon-gradient bg-happy-itmeo">
                </i>
            </div>
            <div>KATEGORİ EKLEME / DÜZENLEME</div>
        </div>     
    </div>
</div> 
<div class="row">
    {{  Form::hidden('user_id', Auth::user()->id) }}

    @if($category->id)
    {{  Form::hidden('id', $category->id) }}
    @endif

    <div class="col-md-6">
        <div class="main-card mb-3 card">
            <div class="card-body">
                <div class="position-relative form-group">
                    {{  Form::label('category.title',  __('category.title')) }}
                    {{  Form::text('title', null, ['class' => 'form-control', 'required' => 'required']) }}
                    <small class="form-text text-muted">{{ __('app.required_input') }}</small>
                </div>
                <div class="position-relative form-group">
                    {{  Form::label('category.description', __('category.description')) }}
                    <textarea inputname="description" inputvalue="@if($category->description){!! $category->description !!}@endif" id="exampleText" class="form-control"></textarea>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="main-card mb-3 card">
            <div class="card-body">
                @if($category->image)
                <div class="position-relative form-group">
                    <img src="{{ Storage::url($category->image)}}" class="img-thumbnail" style="max-width:200px">
                </div>
                 @endif
                <div class="position-relative form-group">
                    {{  Form::label('category.image', __('category.image')) }}
                    {{  Form::file('image', null, ['class' => 'form-control']) }}
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="main-card mb-3 card">
            <div class="card-body">
                @if($category->id)
                  {{ Form::submit(__('app.update'), ['class' => 'btn btn-primary']) }}
                @else
                  {{ Form::submit(__('app.save'), ['class' => 'btn btn-primary']) }}
                @endif
            </div>
        </div>
    </div>
</div>
{!!  Form::close() !!}

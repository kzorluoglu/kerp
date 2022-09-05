{!!  Form::model($contract, ['route' => [$route], 'files' => true]) !!}
<div class="app-page-title">
    <div class="page-title-wrapper">
        <div class="page-title-heading">
            <div class="page-title-icon">
                <i class="pe-7s-drawer icon-gradient bg-happy-itmeo"></i>
            </div>
            <div>{{__('company.form_title')}}</div>
        </div>
    </div>
</div>
<div class="row">
    @if($contract->id)
        {{  Form::hidden('id', $contract->id) }}
    @endif
    <div class="col-md-6">
        <div class="main-card mb-3 card">
            <div class="card-body">

            </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="main-card mb-3 card">
            <div class="card-body">
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="main-card mb-3 card">
            <div class="card-body">
                {{ Form::submit(__('app.save'), ['class' => 'btn btn-primary']) }}
            </div>
        </div>
    </div>
</div>
{!!  Form::close() !!}

<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

@section('css')
    <!-- Fonts -->
        <link rel="dns-prefetch" href="//fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet">
        <!-- Styles -->
        <link href="{{ asset('css/app.css') }}" rel="stylesheet">


        <link href="{{ asset('main.css') }}" rel="stylesheet">
@show

@section('js')
    <!-- Scripts -->
        <script src="{{ asset('js/app.js') }}" defer></script>
    @show
</head>
<body>
@auth
    <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header" id="app">
        <div class="app-header header-shadow">
            <div class="app-header__logo">
                <a href="{{ route('start') }}">
                    <div class="logo-src"></div>
                </a>
                <div class="header__pane ml-auto">
                    <div>
                        <button type="button" class="hamburger close-sidebar-btn hamburger--elastic"
                                data-class="closed-sidebar">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="app-header__mobile-menu">
                <div>
                    <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
            <div class="app-header__menu">
                <span>
                    <button type="button"
                            class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                        <span class="btn-icon-wrapper">
                            <i class="fa fa-ellipsis-v fa-w-6"></i>
                        </span>
                    </button>
                </span>
            </div>
            <div class="app-header__content">
                <div class="app-header-right">


                    <select id="language" class="form-control " name="language" style="margin-right:20px;">
                        @foreach(array_values(config('locale.languages')) as $language)
                            <option value="{{$language[0]}}"
                                    @if ($language[0]===App::getLocale()) selected @endif>{{ $language[3]}}</option>
                        @endforeach
                    </select>

                    <div class="dropdown">
                        <button class="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton"
                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {{ Auth::user()->firstname }} {{ Auth::user()->lastname }}
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a class="dropdown-item" href="{{ route('logout') }}"
                               onclick="event.preventDefault(); document.getElementById('logout-form').submit();">{{ __('app.logout') }}</a>

                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="app-main">
            <div class="app-sidebar sidebar-shadow">
                <div class="app-header__logo">
                    <a href="{{ route('start') }}">
                        <div class="logo-src"></div>
                    </a>
                    <div class="header__pane ml-auto">
                        <div>
                            <button type="button" class="hamburger close-sidebar-btn hamburger--elastic"
                                    data-class="closed-sidebar">
                                <span class="hamburger-box">
                                    <span class="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="app-header__mobile-menu">
                    <div>
                        <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
                <div class="app-header__menu">
                    <span>
                        <button type="button"
                                class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                            <span class="btn-icon-wrapper">
                                <i class="fa fa-ellipsis-v fa-w-6"></i>
                            </span>
                        </button>
                    </span>
                </div>
                <div class="scrollbar-sidebar">
                    <div class="app-sidebar__inner">
                        <ul class="vertical-nav-menu">
                            @auth
                                <li class="app-sidebar__heading">{{__('app.menu_title1')}}</li>
                                <li>
                                    <a href="{{ url('/home') }}" class="{{ Route::is('home*') ? 'mm-active' : '' }}">
                                        <i class="metismenu-icon pe-7s-rocket"></i>
                                        {{__('app.home')}}
                                    </a>
                                </li>
                                <li>
                                    <a href="{{ route('company') }}"
                                       class="{{ Route::is('company*') ? 'mm-active' : '' }}">
                                        <i class="metismenu-icon pe-7s-culture"></i>
                                        {{__('app.companies')}}
                                    </a>
                                </li>
                                <li class="app-sidebar__heading">{{__('app.menu_title2')}}</li>
                                <li>
                                    <a href="{{ route('product') }}"
                                       class="{{ Route::is('product*') ? 'mm-active' : '' }}">
                                        <i class="metismenu-icon pe-7s-plugin"></i>
                                        {{__('app.products')}}
                                    </a>
                                </li>
                                <li>
                                    <a href="{{ route('customer') }}"
                                       class="{{ Route::is('customer*') ? 'mm-active' : '' }}">
                                        <i class="metismenu-icon pe-7s-users"></i>
                                        {{__('app.customers')}}
                                    </a>
                                </li>
                                <li>
                                    <a href="{{ route('invoice') }}"
                                       class="{{ Route::is('invoice*') ? 'mm-active' : '' }}">
                                        <i class="metismenu-icon pe-7s-copy-file"></i>
                                        {{__('app.invoices')}}
                                    </a>
                                </li>
                                <li>
                                    <a href="{{ route('incoming_invoice') }}"
                                       class="{{ Route::is('incoming_invoice*') ? 'mm-active' : '' }}">
                                        <i class="metismenu-icon pe-7s-copy-file"></i>
                                        {{__('app.incoming_invoices')}}
                                    </a>
                                </li>
                                <li>
                                    <a href="{{ route('offer') }}" class="{{ Route::is('offer*') ? 'mm-active' : '' }}">
                                        <i class="metismenu-icon pe-7s-copy-file"></i>
                                        {{__('app.offers')}}
                                    </a>
                                </li>
                                <li>
                                    <a href="{{ route('contract') }}"
                                       class="{{ Route::is('contract*') ? 'mm-active' : '' }}">
                                        <i class="metismenu-icon pe-7s-copy-file"></i>
                                        {{__('app.contracts')}}
                                    </a>
                                </li>
                                <li>
                                    <a href="{{ route('overview') }}"
                                       class="{{ Route::is('overview*') ? 'mm-active' : '' }}">
                                        <i class="metismenu-icon pe-7s-copy-file"></i>
                                        {{__('app.overview')}}
                                    </a>
                                </li>
                            @endauth
                        </ul>
                    </div>
                </div>
            </div>

            <div class="app-main__outer" id="app">
                <div class="app-main__inner">
                    @if (session('type'))
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="main-card mb-3">
                                    <div class="card-body">
                                        <div class="alert alert-{{ session('type') }}" role="{{ session('type') }}">
                                            {!! session('message') !!}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endif
                    @if (session('status'))
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="main-card mb-3">
                                    <div class="card-body">
                                        <div class="alert alert-success" role="alert">
                                            {!! session('status') !!}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    @endif
                    @yield('content')
                </div>
            </div>

        </div>
    </div>
@endauth

@guest
    <div class="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        @if (session('type'))
            <div class="alert alert-{{ session('type') }}" role="{{ session('type') }}">
                {{ session('message') }}
            </div>
        @endif
        @if (session('status'))
            <div class="alert alert-success" role="alert">
                {{ session('status') }}
            </div>
        @endif
        @yield('content')

    </div>
@endguest
</body>
</html>

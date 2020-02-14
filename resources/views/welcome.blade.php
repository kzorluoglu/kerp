
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>kBit - ERP</title>
        <link rel="shortcut icon" type="image/ico" href="assets/images/favicon.ico">
        @section('css')
            <!-- Fonts -->
            <link rel="dns-prefetch" href="//fonts.gstatic.com">
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet">
            <!-- Styles -->
            <link href="{{ asset('css/app.css') }}" rel="stylesheet">
            <link href="{{ asset('main.css') }}" rel="stylesheet">
        @show      
        <link rel="stylesheet" href="assets/css/kerp.css">
        <script src="{{ asset('js/app.js') }}" defer></script>

    </head>
   <body>
      <main class="main-area">
         <!-- ==================== Start Header Area  ========================= -->
         <header class="header-area bg-color2">
            <div class="container">
               <div class="header-nav">
                  <div class="row">
                     <div class="col-lg-2">
                        <div class="header-logo">
                           <a href="{{ route('start') }}"><img src="assets/images/kbitsoftware.png" alt="header brand"></a>
                        </div>
                     </div>
                     <div class="col-lg-10">
                        <nav class="themeix-navbar">
                           <ul class="slimmenu main-menu">
                           @auth
                              <li><a href="{{ route('home') }}" class=" btn btn-primary"><span>{{ __('welcome.home') }}</span></a></li>
                           @endauth
                              <li><a href="#feature" class="js-scroll-trigger">{{ __('welcome.menu_feature') }}</a></li>
                              <li><a href="#contact" class="js-scroll-trigger">{{ __('welcome.menu_contact') }}</a></li>
                              <li><select id="language" class="form-control " name="language" style="margin-right:20px;">
                                    @foreach(array_values(config('locale.languages')) as $language)
                                       <option value="{{$language[0]}}" @if ($language[0]===App::getLocale()) selected @endif>{{ $language[3]}}</option>
                                    @endforeach
                              </select>
                              <li>
                           </ul>
                        </nav>
                     </div>
                  </div>
               </div>
               <div class="header-banner">
                  <div class="row">
                     <div class="col-md-8">
                        <div class="banner-content">
                           <h1 class="big-font1 white-text m-b- 0">{{ __('welcome.banner_title') }}</h1>
                           <h5 class="white-text m-b-50">{{ __('welcome.banner_description') }}</h5>
                           <ul class="banner-ads-btn m-0 list-inline">
                           @guest
                              <li class="list-inline-item"><a href="{{ route('login') }}" class="ads-btn1 btn btn-primary"><span>{{ __('welcome.banner_login') }}</span></a></li>
                              @if(Route::has('register'))
                                 <li class="list-inline-item"><a href="{{ route('register') }}" class="ads-btn2 btn btn-primary"><span>{{ __('welcome.banner_register') }}</span></a></li>
							         @endif
                           @endguest
                           @auth
                           <li class="list-inline-item"><a href="{{ route('home') }}" class="ads-btn1 btn btn-primary"><span>{{ __('welcome.home') }}</span></a></li>
                           @endauth
                           </ul>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="banner-mockup"><img src="assets/images/banner-mockup.png" alt="banner image" /></div>
                     </div>
                  </div>
               </div>
               <ul class="header-shape list-inline">
                  <li class="left"><img src="assets/images/header-bg-shap2.png" alt="shape image" /></li>
                  <li class="right"><img src="assets/images/header-bg-shap.png" alt="shape image" /></li>
               </ul>
            </div>
         </header>
         <!-- ==================== End Header Area  ========================= -->
         <!-- ==================== Start Price Plan Area  ========================= -->
         <section class="service-area bg-color1 p-t-130 p-b-100">
            <div class="themeix-ani">
               <img src="assets/images/themeix-ani1.png" alt="animated shape" class="shape-one" />
               <img src="assets/images/themeix-ani2.png" alt="animated shape" class="shape-two" />
               <img src="assets/images/themeix-ani3.png" alt="animated shape" class="shape-tree" />
            </div>
            <div class="container">
               <div class="service-wrapper">
                  <div class="row">
                     <div class="col-md-4">
                        <div class="service-box" data-aos="fade-up">
                           <div class="service-logo"><img src="assets/images/service-icon.png" alt="service icon" /></div>
                           <div class="service-content">
                              <h4 class="heading-4">{{ __('welcome.service_first_title') }}</h4>
                              <p>{{ __('welcome.service_first_description') }}</p>
                              <div class="service-line line-color1 "></div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="service-box"  data-aos="fade-up">
                           <div class="service-logo"><img src="assets/images/service-icon2.png" alt="service icon" /></div>
                           <div class="service-content">
                              <h4 class="heading-4">{{ __('welcome.service_second_title') }}</h4>
                              <p>{{ __('welcome.service_second_description') }}</p>
                              <div class="service-line line-color2"></div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-4">
                        <div class="service-box" data-aos="fade-up">
                           <div class="service-logo"><img src="assets/images/service-icon3.png" alt="service icon" /></div>
                           <div class="service-content">
                              <h4 class="heading-4">{{ __('welcome.service_third_title') }}</h4>
                              <p>{{ __('welcome.service_third_description') }}</p>
                              <div class="service-line line-color3"></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!-- ==================== End Price Plan Area  ========================= -->   	
         <!-- ==================== Start Price Plan Area  ========================= -->
         <section class="feature-area bg-color1 p-b-100" id="feature">
            <div class="container">
               <div class="feature-wrapper">
                  <div class="row">
                     <div class="col-md-10">
                        <div class="section-title m-b-70" data-aos="fade-up">
                           <h2 class="big-font2">{{ __('welcome.feature_title') }}</h2>
                           <p>{{ __('welcome.feature_description') }}</p>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-8">
                        <div class="row">
                           <div class="col-md-6">
                              <div class="feature-box" data-aos="fade-right">
                                 <div class="feature-logo"><img src="assets/images/feature-icon1.png" alt="feature icon" /></div>
                                 <div class="feature-content">
                                    <h4 class="heading-4">{{ __('welcome.feature_sub1_title') }}</h4>
                                    <p>{{ __('welcome.feature_sub1_description') }}</p>
                                 </div>
                                 <div class="feature-shape"></div>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="feature-box">
                                 <div class="feature-logo"><img src="assets/images/feature-icon2.png" alt="feature icon" /></div>
                                 <div class="feature-content">
                                    <h4 class="heading-4">{{ __('welcome.feature_sub2_title') }}</h4>
                                    <p>{{ __('welcome.feature_sub2_description') }}</p>
                                 </div>
                                 <div class="feature-shape"></div>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="feature-box">
                                 <div class="feature-logo"><img src="assets/images/feature-icon3.png" alt="feature icon" /></div>
                                 <div class="feature-content">
                                    <h4 class="heading-4">{{ __('welcome.feature_sub3_title') }}</h4>
                                    <p>{{ __('welcome.feature_sub3_description') }}</p>
                                 </div>
                                 <div class="feature-shape"></div>
                              </div>
                           </div>
                           <div class="col-md-6">
                              <div class="feature-box" data-aos="fade-right">
                                 <div class="feature-logo"><img src="assets/images/feature-icon4.png" alt="feature icon" /></div>
                                 <div class="feature-content">
                                    <h4 class="heading-4">{{ __('welcome.feature_sub4_title') }}</h4>
                                    <p>{{ __('welcome.feature_sub4_description') }}</p>
                                 </div>
                                 <div class="feature-shape"></div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="col-md-3  offset-lg-1">
                        <div class="feature-img">
                            <img class="image-mockup" src="assets/images/feature-img.png" alt="feature image" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <!-- ==================== Start Newsletter Area  ========================= -->
         <section class="newsletter-area bg-color1 p-b-130" id="contact">
            <div class="container">
               <div class="newsletter-wrapper">
                  <div class="row">
                     <div class="col-md-6">
                        <div class="section-title m-b-60">
                           <h2 class="big-font2">{{ __('welcome.contact_title') }}</h2>
                           <p>{{ __('welcome.contact_description') }}</p>
                        </div>
                     </div>
                  </div>
                  <div class="row">
                     <div class="col-md-6 col-lg-7">
                        <div class="newsletter-img float-right"><img src="assets/images/newsletter-img.png" alt="newsletter image" /></div>
                     </div>
                     <div class="col-md-6 col-lg-5">
                        <div class="newsletter-form" data-aos="fade-up-left">
                           <div class="inner-title m-b-30">
                              <h3 class="heading-3">{{ __('welcome.contact_subtitle') }}</h3>
                           </div>
                           <form action="#">
                              <div class="form-group">
                                 <input type="email" class="form-control" placeholder="{{ __('welcome.contact_mail') }}">
                              </div>
                              <div class="form-group">
                                 <textarea class="form-control" placeholder="{{ __('welcome.contact_message') }}" rows="5"></textarea>
                              </div>
                              <div class="form-group m-0">
                                 <button class=" btn-primary btn-block" type="submit">{{ __('welcome.contact_buton') }}</button>
                              </div>
                           </form>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!-- ==================== End Newsletter Area  ========================= -->
         <!-- ==================== Start Header Area  ========================= -->
         <footer class="footer-area bg-color2">
            <div class="container">
               <div class="footer-widget-wrraper">
                  <div class="row">
                     <div class="col-md-12 col-lg-12 text-center">
                        <a href="#" class="footer-logo"><img src="assets/images/kbitsoftware.png" alt="footer logo" /></a>
                     </div>
                  </div>
               </div>
               <br>
               <div class="footer-copyright-wrapper text-center">
                  <p>{{ __('welcome.copyrigt') }} <a href="#">kBitSoftware</a></p>
               </div>
               <a href="#" class="scrollToTop"><i class="fas fa-angle-up"></i></a>
            </div>
            <ul class="footer-shape list-inline">
               <li class="left"><img src="assets/images/footer-shap.png" alt="footer shape"/></li>
               <li class="right"><img src="assets/images/footer-shap2.png" alt="footer shape"/></li>
            </ul>
         </footer>
         <!-- ==================== End Header Area  ========================= -->
      </main>
    <!-- gulp:js -->
    <script src="assets/js/kerp.min.js"></script>
	<!-- endgulp -->
   </body>
</html>
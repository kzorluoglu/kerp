<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Session;
use App;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }


    public function language(Request $request, string $language)
    {
        try{
            if(array_key_exists($language, config('locale.languages'))){
                Session::put('locale', $language);
                App::setLocale($language);
                return redirect()->back();
            }
        } catch(\Exception $e){
              return redirect()->back()->with([
              'type' => 'danger', 'message' => $e->getMessage()
              ]);
        }
    }

}

<?php

namespace App\Http\Controllers;

use App\Company;
use App\Customer;
use Illuminate\Http\Request;

class AutocompleteController extends Controller
{
    public function getCompany(Request $request)
    {
        $data = $request ->json()->all();

        if (isset($data['search']) === false && $data['search']  === null) {
            return;
        }

        $search = $data['search'];
        $result = Company::where('company', 'like', '%'.$search.'%')
            ->orWhere('firstname', 'like', '%'.$search.'%')
            ->orWhere('lastname', 'like', '%'.$search.'%')
            ->orWhere('address', 'like', '%'.$search.'%')
            ->orWhere('email', 'like', '%'.$search.'%')
            ->orWhere('webpage', 'like', '%'.$search.'%')
            ->get();

        return json_encode($result);

    }

    public function getCustomer(Request $request)
    {
        $data = $request ->json()->all();

        if (isset($data['search']) === false && $data['search']  === null) {
            return;
        }

        $search = $data['search'];
        $result = Customer::where('company', 'like', '%'.$search.'%')
            ->orWhere('firstname', 'like', '%'.$search.'%')
            ->orWhere('lastname', 'like', '%'.$search.'%')
            ->orWhere('address', 'like', '%'.$search.'%')
            ->orWhere('email', 'like', '%'.$search.'%')
            ->orWhere('webpage', 'like', '%'.$search.'%')
            ->get();

        return json_encode($result);
    }


    public function getProduct(Request $request)
    {

    }
}

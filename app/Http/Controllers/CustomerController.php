<?php

namespace App\Http\Controllers;

use App\Company;
use Illuminate\Http\Request;
use App\Customer;

class CustomerController extends Controller
{

    public function index(Request $request)
    {
        $search = $request->input('search');
        $customers = Customer::paginate(15);

        if ($request->input('search')) {
            $search = $request->input('search');
            $customers = Customer::where('firstname', 'like', '%'.$search.'%')
            ->orWhere('lastname', 'like', '%'.$search.'%')
            ->orWhere('company_name', 'like', '%'.$search.'%')
            ->orWhere('address', 'like', '%'.$search.'%')
            ->orWhere('email', 'like', '%'.$search.'%')
            ->orWhere('webpage', 'like', '%'.$search.'%')
            ->paginate(15);
        }

        return view('customer.index', [
            'customers' => $customers,
            'search' => $search,
        ]);
    }

    public function create()
    {
        $customer = new Customer();

        $defaultTaxRate = Company::where('standard', true)->first()->tax_rate;

        return view('customer.create', [
            'customer' => $customer,
            'defaultTaxRate' => $defaultTaxRate,
        ]);
    }

    public function store(Request $request)
    {
        $customer = Customer::create($request->all());

        try {
            $customer->save();

            return redirect()->route('customer.new')->with([
                'type' => 'success',
                'message' => __('app.success_added'),
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with([
                'type' => 'danger',
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function show($id)
    {
        $customer = Customer::find($id);

        return view('customer.show', [
            'customer' => $customer,
        ]);
    }

    public function update(Request $request)
    {
        $customer = Customer::find($request->input('id'));

        $customer->update($request->all());

        try {
            $customer->save();

            return redirect()->back()->with([
                'type' => 'success',
                'message' => __('app.success_updated'),
            ]);
        } catch (\Exception $e) {
            return redirect()->back()->with([
                'type' => 'danger',
                'message' => $e->getMessage(),
            ]);
        }
    }

    public function delete($id)
    {
        try {
            $customer = Customer::find($id);
            $customer->delete();

            return redirect()->route('customer')->with([
              'type' => 'success',
              'message' => __('app.success_deleted'),
          ]);
        } catch (\Exception $e) {
            return redirect()->back()->with([
                'type' => 'danger',
                'message' => $e->getMessage(),
            ]);
        }
    }
}

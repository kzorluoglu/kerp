<?php

namespace App\Http\Controllers;

use App\Company;
use Doctrine\DBAL\Query\QueryException;
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

        $defaultTaxRate = Company::where('standard', true)->first()->tax_rate ?? 0;

        return view('customer.create', [
            'customer' => $customer,
            'defaultTaxRate' => $defaultTaxRate,
        ]);
    }

    public function store(Request $request)
    {

        try {
            $customer = Customer::create($request->all());
            $customer->save();

            return redirect()->route('customer.new')->with([
                'type' => 'success',
                'message' => __('app.success_added'),
            ]);
        } catch (QueryException|\Exception  $e) {

            $message = $this->getQueryExceptionMessageByErrorCode($e);

            return redirect()->back()->with([
                'type' => 'danger',
                'message' => $message,
            ]);
        }
    }

    public function show($id)
    {
        $customer = Customer::find($id);
        $defaultTaxRate = Company::where('standard', true)->first()->tax_rate ?? 0;

        return view('customer.show', [
            'customer' => $customer,
            'defaultTaxRate' => $defaultTaxRate,
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

    private function getQueryExceptionMessageByErrorCode(QueryException|\Exception $e)
    {
        $errorCode = $e->errorInfo[1];

        return match ($errorCode) {
            1062 => __('The email address entered already exists.'),
            1048 => __('One or more required fields are missing.'),
            1054 => __('One or more columns specified in the query do not exist.'),
            1146 => __('The requested table does not exist.'),
            1452 => __('One or more foreign key values do not exist.'),
            default => __('An error occurred while processing the request.'),
        };
    }
}

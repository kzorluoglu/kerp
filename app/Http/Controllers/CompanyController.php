<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Company;

class CompanyController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');

        $companies = Company::paginate(15);

        if ($request->input('search')) {
            $search = $request->input('search');
            $companies = Company::where('company', 'like', '%'.$search.'%')
              ->orWhere('firstname', 'like', '%'.$search.'%')
              ->orWhere('lastname', 'like', '%'.$search.'%')
              ->orWhere('address', 'like', '%'.$search.'%')
              ->orWhere('email', 'like', '%'.$search.'%')
              ->orWhere('webpage', 'like', '%'.$search.'%')
              ->paginate(15);
        }

        return view('company.index', [
              'companies' => $companies,
              'search' => $search,
          ]);
    }

    public function create()
    {
        $company = new Company();
        $defaultTaxRate = Company::where('standard', true)->first()->tax_rate ?? 0;

        return view('company.create', [
            'company' => $company,
            'defaultTaxRate' => $defaultTaxRate,
          ]);
    }

    public function store(Request $request)
    {
        $company = Company::create($request->all());

        if ($request->logo) {
            $imagePath = $request->logo->store('images', 'public');
            $company->logo = $imagePath;
        }

        try {
            $company->save();

            return redirect()->route('company')->with([
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
        $company = Company::find($id);
        $defaultTaxRate = Company::where('standard', true)->first()->tax_rate ?? 0;

        return view('company.show', [
            'company' => $company,
            'defaultTaxRate' => $defaultTaxRate,
          ]);
    }

    public function update(Request $request)
    {

        $company = Company::find($request->input('id'));
        $company->update($request->all());

        $all = $request->all();

        if ($request->logo) {
            Storage::disk('public')->delete($company->logo);
            $company->logo = $request->logo->store('images', 'public');
        }

        try {
            $company->save();

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
            $company = Company::find($id);
            Storage::disk('public')->delete($company->logo);
            $company->delete();

            return redirect()->back()->with([
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

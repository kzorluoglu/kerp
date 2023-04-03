<?php

namespace App\Http\Controllers;

use App\Company;
use App\Product;
use Illuminate\Http\Request;
use App\Contract;

class ContractController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');
        $contracts = Contract::with(['products', 'company'])->orderByDesc('created_at');

        if ($search) {
            $contracts->where(function($query) use ($search) {
                $query->where('name', 'like', '%'.$search.'%')
                    ->orWhere('description', 'like', '%'.$search.'%')
                    ->orWhere('start_date', 'like', '%'.$search.'%')
                    ->orWhere('end_date', 'like', '%'.$search.'%')
                    ->orWhere('period_type', 'like', '%'.$search.'%')
                    ->orWhere('period_value', 'like', '%'.$search.'%')
                    ->orWhere('pdf_document', 'like', '%'.$search.'%')
                    ->orWhereHas('company', function ($query) use ($search) {
                        $query->where('name', 'like', '%'.$search.'%');
                    })
                    ->orWhereHas('products', function ($query) use ($search) {
                        $query->where('name', 'like', '%'.$search.'%');
                    });
            });
        }

        $contracts = $contracts->paginate(15);

        return view('contract.index', [
              'contracts' => $contracts,
              'search' => $search,
          ]);
    }

    public function create()
    {
        $contract = new Contract();
        $companies = Company::all();
        $products = Product::all();

        return view('contract.create', compact('contract', 'companies', 'products'));
    }

    public function store(Request $request)
    {
        $contract = new Contract($request->all());
        $contract->calculateEndDate();
        $contract->calculateCancellationDate();

        $contract->save();

        if ($request->hasFile('pdf_document')) {
            $pdf = $request->file('pdf_document');
            $filename = time() . '_' . $pdf->getClientOriginalName();
            $pdf->move(public_path('pdf'), $filename);
            $contract->pdf_document = $filename;
        }
        $contract->save();

        $products = $request->input('products', []);
        $contract->products()->attach($products);

        return redirect()->route('contract')->with([
            'type' => 'success',
            'message' => __('contracts.added'),
        ]);
    }

    public function show($id)
    {
        $contract = Contract::with('products')->findOrFail($id);
        $companies = Company::all();
        $products = Product::all();

        return view('contract.show', compact('contract', 'companies', 'products'));
    }

    public function update(Request $request, Contract $contract)
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after:start_date',
            'period_type' => 'required|string',
            'period_value' => 'required|integer',
            'cancellation_period_type' => 'required',
            'cancellation_period_value' => 'required|integer',
            'cancellation_date' => 'nullable|date|before:end_date',
            'company_id' => 'required|exists:companies,id',
            'product_ids' => 'nullable|array',
            'product_ids.*' => 'nullable|exists:products,id'
        ]);

        $contract->name = $validatedData['name'];
        $contract->description = $validatedData['description'];
        $contract->start_date = $validatedData['start_date'];
        $contract->period_type = $validatedData['period_type'];
        $contract->period_value = $validatedData['period_value'];
        $contract->cancellation_period_type = $validatedData['cancellation_period_type'];
        $contract->cancellation_period_value = $validatedData['cancellation_period_value'];
        $contract->cancellation_date = $validatedData['cancellation_date'];
        $contract->company_id = $validatedData['company_id'];

        $contract->calculateEndDate();
        $contract->calculateCancellationDate();

        $contract->products()->sync($validatedData['product_ids'] ?? []);

        if ($request->hasFile('pdf_document')) {
            $pdf = $request->file('pdf_document');
            $pdfName = time() . '.' . $pdf->getClientOriginalExtension();
            $pdf->move(public_path('/pdf_documents/'), $pdfName);
            $contract->pdf_document = $pdfName;
        }

        $contract->updateOrFail();

        return redirect()->route('contract')->with('success', 'Contract updated successfully.');
    }

    public function delete($id)
    {
        $contract = Contract::find($id);

        // Remove associated products
        $contract->products()->detach();

        // Delete the contract
        $contract->delete();

        return redirect()->route('contract')->with([
            'type' => 'success',
            'message' => __('app.success_deleted'),
        ]);
    }

}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Contract;

class ContractController extends Controller
{
    public function index(Request $request)
    {
        $search = $request->input('search');

        $contracts = Contract::paginate(15);

        if ($request->input('search')) {
            $search = $request->input('search');
            $contracts = Contract::where('title', 'like', '%'.$search.'%')
              ->orWhere('start_date', 'like', '%'.$search.'%')
              ->orWhere('period', 'like', '%'.$search.'%')
              ->orWhere('period_typ', 'like', '%'.$search.'%')
              ->orWhere('termination', 'like', '%'.$search.'%')
              ->orWhere('termination_typ', 'like', '%'.$search.'%')
              ->paginate(15);
        }

        return view('contract.index', [
              'contracts' => $contracts,
              'search' => $search,
          ]);
    }

    public function create()
    {
        $contract = new Contract();

        return view('contract.create', [
              'contract' => $contract,
          ]);
    }
}

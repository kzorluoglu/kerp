<?php

namespace Database\Seeders;

use App\Company;
use App\Contract;
use App\Product;
use Database\Factories\ContractFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ContractTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $companies = Company::all();
        $products = Product::all();

        ContractFactory::factory()
            ->count(50)
            ->create()
            ->each(function ($contract) use ($companies, $products) {
                $company = $companies->random();
                $contract->company_id = $company->id;
                $contract->save();

                $contract->products()->attach(
                    $products->random(rand(1, 5))->pluck('id')->toArray()
                );
            });
    }
}

<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CompanyTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {

        for($i=1; $i<=5; $i++)
        {
            DB::table('companies')->insert([
                'logo' => Str::random(10),
                'firstname' => Str::random(10),
                'lastname' => Str::random(10),
                'company_name' => "My Company #". $i,
                'address' => Str::random(10),
                'email' => 'mycompany'.$i.'@company.tld',
                'webpage' => Str::random(10),
                'currency' => '€',
                'iban' => Str::random(10),
                'bic' => Str::random(10),
                'tax_rate' => 19,
                'information' => Str::random(10),
                'standard' => true,
                'bank' => Str::random(10),
            ]);
        }
    }
}

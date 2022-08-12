<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CustomerTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     */
    public function run()
    {
        for($i=1; $i<=51; $i++)
        {
            DB::table('customers')->insert([
                'email' => 'test'.$i.'@company.tld',
                'firstname' => Str::random(10),
                'lastname' => Str::random(10),
                'company_name' => "Test Customer #".$i,
                'street' => Str::random(10),
                'streetnumber' => Str::random(10),
                'postcode' => Str::random(10),
                'city' => Str::random(10),
                'country' => Str::random(10),
                'tax_rate' => 19
            ]);
        }
    }
}

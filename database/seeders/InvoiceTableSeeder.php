<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class InvoiceTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     * @throws Exception
     */
    public function run()
    {
        for($i=1; $i<=100; $i++)
        {
            $now = new \DateTime();
            $date = $now->format('Y-m-d');

            $randomPaid = (1 === random_int(0, 1));

            DB::table('invoices')->insert([
                'company_id' => $i,
                'invoice_number' => random_int(1, 1500),
                'firstname' => Str::random(10),
                'lastname' => Str::random(10),
                'company_name' => "Test Customer #".$i,
                'street' => Str::random(10),
                'streetnumber' => Str::random(10),
                'postcode' => Str::random(10),
                'city' => Str::random(10),
                'country' => Str::random(10),
                'date' => $date,
                'total_price' => \random_int(100,200),
                'tax_rate' => 19,
                'template' => 19,
                'pdf_base64' => 0,
                'paid' => $randomPaid,
                'paid_date' => ($randomPaid === true ? $date : null),
                'paid_information' =>  Str::random(250),
            ]);
        }
    }
}

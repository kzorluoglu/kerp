<?php

namespace Database\Seeders;

use Database\Factories\IncomingInvoiceFactory;
use Exception;
use Illuminate\Database\Seeder;

class IncomingInvoiceTableSeeder extends Seeder
{
    /**
     * Run the database seeders.
     *
     * @return void
     * @throws Exception
     */
    public function run()
    {
        IncomingInvoiceFactory::factory()
            ->count(50)
            ->hasProducts(4)
            ->create();

    }
}

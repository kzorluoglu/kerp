<?php

namespace Database\Seeders;

use Database\Factories\InvoiceFactory;
use Exception;
use Illuminate\Database\Seeder;

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
        InvoiceFactory::factory()
            ->count(50)
            ->hasProducts(4)
            ->create();

    }
}

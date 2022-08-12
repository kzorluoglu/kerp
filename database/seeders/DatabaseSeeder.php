<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
         $this->call(CompanyTableSeeder::class);
         $this->call(CustomerTableSeeder::class);
         $this->call(UserTableSeeder::class);
         $this->call(ProductTableSeeder::class);
//         $this->call(InvoiceTableSeeder::class);
    }
}

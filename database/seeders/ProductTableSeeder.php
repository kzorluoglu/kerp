<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ProductTableSeeder extends Seeder
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
            $productTypes = ['m', 'qm', 'piece', 'hour'];
            $randomTypeKey = array_rand($productTypes);
            DB::table('products')->insert([
                'title' => 'Product #'.$i,
                'description' => Str::random(255),
                'image' => Str::random(10),
                'price' => \random_int(100,200),
                'stock' => \round(\random_int(100,200), 2),
                'type' => $productTypes[$randomTypeKey],
                'product_number' => Str::random(10),
            ]);
        }
    }
}

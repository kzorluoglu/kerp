<?php

namespace Database\Factories;

use App\InvoiceProduct;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\InvoiceProduct>
 */
class InvoiceProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = InvoiceProduct::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $productTypes = ['m', 'qm', 'piece', 'hour'];
        $randomTypeKey = array_rand($productTypes);
        $price = $this->faker->numberBetween(1, 100);
        $count = $this->faker->numberBetween(1, 100);

        return [
            'title' => $this->faker->words(3, true),
            'price' => $price,
            'type' => $productTypes[$randomTypeKey],
            'count' => $count,
            'total' => $price * $count,
        ];
    }

    public static function factory(): self
    {
        return self::new();
    }
}

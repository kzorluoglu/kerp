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
        return [
            'title' => $this->faker->words(3, true),
            'price' => $this->faker->numberBetween(1, 100),
            'total' => $this->faker->numberBetween(1, 100),
            'count' => $this->faker->numberBetween(1, 100),
        ];
    }

    public static function factory(): self
    {
        return self::new();
    }
}

<?php

namespace Database\Factories;

use App\Invoice;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Invoice>
 */
class IncomingInvoiceFactory extends Factory
{

    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Invoice::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'invoice_number' => $this->faker->numberBetween(1, 99999),
            'street' => $this->faker->streetName,
            'streetnumber' => $this->faker->numberBetween(1, 100),
            'postcode' => $this->faker->numberBetween(1, 100),
            'city' => $this->faker->city,
            'company_id' => $this->faker->numberBetween(1, 5),
            'incoming_invoice' => 1,
            'date' => $this->faker->dateTimeBetween('-3 years', '+8 months')
        ];
    }

    public static function factory(): self
    {
        return self::new();
    }


}

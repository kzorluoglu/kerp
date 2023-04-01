<?php

namespace Database\Factories;

use App\Company;
use App\Contract;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Contract>
 */
class ContractFactory extends Factory
{
    protected $model = Contract::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $periodTypes = ['year', 'month'];
        $company = Company::inRandomOrder()->first();

        return [
            'name' => $this->faker->name,
            'description' => 'test',
            'start_date' => $this->faker->dateTimeBetween('-1 year'),
            'end_date' => $this->faker->dateTimeBetween('now', '+1 year'),
            'period_type' => $this->faker->randomElement($periodTypes),
            'period_value' => $this->faker->numberBetween(1, 12),
            'pdf_document' => null,
            'company_id' => $company->id,

        ];
    }

    public static function factory(): self
    {
        return self::new();
    }
}

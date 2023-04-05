<?php

namespace Database\Factories;

use App\Company;
use App\Contract;
use Carbon\Carbon;
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
        $company = Company::inRandomOrder()->first();

        $startDate = Carbon::now()->addMonths($this->faker->numberBetween(1, 3));
        $endDate = Carbon::now()->addMonths($this->faker->numberBetween(4, 50));
        $periodType = 'month';
        $periodValue = $this->faker->numberBetween(2, 3);

        $cancellationDate = clone $endDate;
        $cancellationDate->subMonths($this->faker->numberBetween(2, 3));

        return [
            'name' => $this->faker->name,
            'start_date' => $startDate,
            'end_date' => $endDate,
            'period_type' => 'year',
            'period_value' => $this->faker->numberBetween(1, 3),
            'cancellation_period_type' => $periodType,
            'cancellation_period_value' => $periodValue,
            'cancellation_date' => $cancellationDate,
            'company_id' => $company->id,
        ];
    }

    public static function factory(): self
    {
        return self::new();
    }
}

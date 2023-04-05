<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{

    protected $fillable = [
        'name',
        'description',
        'start_date',
        'end_date',
        'company_id',
        'period_type',
        'period_value',
        'cancellation_period_type',
        'cancellation_period_value',
        'cancellation_date',
        'pdf_document',
    ];
    public static array $periodTypes = [
        'year',
        'month',
        'week',
        'day',
    ];

    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
        'cancellation_date' => 'datetime',
    ];
    public function products()
    {
        return $this->belongsToMany(Product::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function getPeriodTypes(): array
    {
        return self::$periodTypes;
    }

    public static function manuelCalculateEndDate(\DateTime $startDate, string $periodType, string $periodValue): Carbon
    {
        $start_date = Carbon::parse($startDate);

        if ($periodType == 'day') {
            $end_date = $start_date->addDays($periodValue);
        } elseif ($periodType == 'week') {
            $end_date = $start_date->addWeeks($periodValue);
        } elseif ($periodType == 'month') {
            $end_date = $start_date->addMonths($periodValue);
        } else { //($periodType == 'year')
            $end_date = $start_date->addYears($periodValue);
        }

        return $end_date;
    }

    public function calculateEndDate()
    {
        $periodType = $this->period_type;
        $periodValue = $this->period_value;
        $startDate = $this->start_date;

        $this->end_date = match ($periodType) {
            'day' => $startDate->addDays($periodValue),
            'week' => $startDate->addWeeks($periodValue),
            'month' => $startDate->addMonths($periodValue),
            'year' => $startDate->addYears($periodValue),
            default => null,
        };
    }

    public function calculateCancellationDate()
    {
        $periodType = $this->cancellation_period_type;
        $periodValue = $this->cancellation_period_value;

        $this->cancellation_date = match ($periodType) {
            'day' => $this->end_date->subDays($periodValue),
            'week' => $this->end_date->subWeeks($periodValue),
            'month' => $this->end_date->subMonths($periodValue),
            'year' => $this->end_date->subYears($periodValue),
            default => null,
        };
    }

    public function remainingTimeText(): string
    {
        $time = $this->start_date->diff($this->end_date);

        return $this->generateRemainingTimeText($time);
    }
    public function renewRemainingTimeText(): string
    {
        $time = $this->start_date->diff($this->cancellation_date);

        return $this->generateRemainingTimeText($time);
    }

    public function generateRemainingTimeText(\DateInterval $time): ?string
    {
        $remainingTimeText = '';
        $timeParts = [
            'y' => __('app.years'),
            'm' => __('app.months'),
            'd' => __('app.days')
        ];

        foreach ($timeParts as $part => $label) {
            if ($time->$part > 0) {
                $remainingTimeText .= sprintf('%s %s, ', $time->$part, $label);
            }
        }

        return rtrim($remainingTimeText, ', ');
    }
}

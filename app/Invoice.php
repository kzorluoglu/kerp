<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    use HasFactory;

    protected $fillable = ['firstname', 'lastname', 'company_name', 'street',
     'streetnumber', 'postcode', 'city', 'country', 'total_price', 'tax_rate',
     'template', 'pdf_base64', 'date', 'payment_deadline_day', 'paid', 'paid_date'
    ];

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope('incoming_invoice', function (Builder $builder) {
            $builder->where('incoming_invoice', 0);
        });
    }

    public function products()
    {
      return $this->hasMany('App\InvoiceProduct');
    }

    public function company()
    {
      return $this->hasOne('App\Company', 'id', 'company_id');
    }

    public function getSumTotalWithoutTaxAttribute() : float
    {
        return round($this->products()->sum('total'), 2);
    }

    public function getSumTaxAttribute() : float
    {
        $sum_price_total = $this->products()->sum('total');
        return round(($sum_price_total * $this->tax_rate) / 100, 2);
    }

    public function getSumTotalAttribute() : float
    {
        $sum_price_total = $this->products()->sum('total');
        $sum_tax = round(($sum_price_total * $this->tax_rate) / 100, 2);
        return $sum_price_total + $sum_tax;
    }

    public function scopeIncomingInvoice($query)
    {
        return $query->where('incoming_invoice', 1);
    }

}

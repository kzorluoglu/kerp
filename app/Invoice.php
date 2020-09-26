<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Invoice extends Model
{
    protected $fillable = ['firstname', 'lastname', 'company_name', 'street',
     'streetnumber', 'postcode', 'city', 'country', 'total_price', 'tax_rate',
     'template', 'pdf_base64', 'date', 'payment_deadline_day'
    ];

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

}

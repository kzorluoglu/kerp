<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    protected $fillable = ['firstname', 'lastname', 'company_name', 'street',
     'streetnumber', 'postcode', 'city', 'country', 'total_price', 'tax_rate',
     'template', 'pdf_base64', 'date',
    'user_id'
    ];


    public function products()
    {
      return $this->hasMany('App\OfferProduct');
    }

    public function company()
    {
      return $this->hasOne('App\Company', 'id', 'company_id');
    }
}

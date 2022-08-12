<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $fillable = [
        'email', 'firstname', 'lastname', 'company_name', 'street',
        'streetnumber', 'postcode', 'city', 'country', 'tax_rate'
    ];

}

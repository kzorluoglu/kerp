<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = [
    'logo',
    'firstname',
    'lastname',
    'company_name',
    'address',
    'email',
    'webpage',
    'currency',
    'iban',
    'bic',
    'tax_rate',
    'information',
    'user_id',
    'standard',
    'bank'
  ];

  public function user()
  {
    return $this->belongsTo('App\User');
  }
}

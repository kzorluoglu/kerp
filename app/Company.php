<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

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
    'standard',
    'bank'
  ];

  public function user(): BelongsTo
  {
    return $this->belongsTo('App\User');
  }
}

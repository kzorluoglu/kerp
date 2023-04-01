<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contract extends Model
{
    protected $fillable = ['name', 'description', 'start_date', 'end_date', 'company_id', 'period_type', 'period_value', 'pdf_document'];


    public function products()
    {
        return $this->belongsToMany(Product::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class InvoiceProduct extends Model
{
    protected $fillable =  ['invoice_id','title','price','total','count','type'];
}

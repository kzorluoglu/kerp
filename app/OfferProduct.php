<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OfferProduct extends Model
{
    protected $fillable =  ['offer_id','title','price','total','count','type'];

}

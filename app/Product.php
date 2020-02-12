<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = ['title', 'description', 'image', 'price', 'stock', 'type', 'product_number',
    'user_id'];

}

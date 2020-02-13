<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('companies', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('logo')->nullable();
            $table->string('firstname', 255)->nullable(false);
            $table->string('lastname', 255)->nullable(false);
            $table->string('company_name', 255);
            $table->text('address')->nullable();
            $table->string('email', 255)->nullable();
            $table->string('webpage', 255)->nullable();
            $table->string('currency', 255);
            $table->string('iban', 255)->nullable();
            $table->string('bic', 255)->nullable();
            $table->string('tax_rate', 255)->nullable();
            $table->string('bank', 255)->nullable();
            $table->text('information')->nullable();
            $table->boolean('standard')->default(false);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies');
    }
}

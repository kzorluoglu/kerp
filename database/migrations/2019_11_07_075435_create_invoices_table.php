<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateInvoicesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('invoices', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->unsignedBigInteger('company_id')->nullable();
            $table->foreign('company_id')->references('id')->on('companies');
            $table->string('invoice_number', 255);
            $table->string('firstname', 255);
            $table->string('lastname', 255);
            $table->string('company_name', 255)->nullable();
            $table->string('street', 255);
            $table->string('streetnumber', 255);
            $table->string('postcode', 255);
            $table->string('city', 255);
            $table->string('country', 255)->nullable();
            $table->date('date')->nullable();
            $table->string('total_price', 255)->nullable();
            $table->string('tax_rate', 255)->default(19);
            $table->string('template', 255)->default('standard');
            $table->text('pdf_base64', 255)->nullable();
            $table->text('information')->nullable();
            $table->boolean('paid')->default(false);
            $table->datetime('paid_date')->nullable();
            $table->string('paid_information', 255)->nullable();
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
        Schema::dropIfExists('invoices');
    }
}

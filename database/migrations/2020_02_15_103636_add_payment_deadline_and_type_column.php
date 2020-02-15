<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddPaymentDeadlineAndTypeColumn extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('offers', function (Blueprint $table) {
            $table->string('payment_deadline_day', 255)->nullable();
            $table->string('payment_type', 255)->nullable();
        });

        Schema::table('invoices', function (Blueprint $table) {
            $table->string('payment_deadline_day', 255)->nullable();
            $table->string('payment_type', 255)->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}

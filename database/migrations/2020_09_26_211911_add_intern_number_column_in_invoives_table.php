<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddInternNumberColumnInInvoivesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('invoices', function (Blueprint $table) {
            $table->string('intern_invoice_number', 255);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::hasColumn('invoices', 'intern_invoice_number')) {
            Schema::table('invoices', function (Blueprint $table) {
                $table->dropColumn('intern_invoice_number');
            }
            );
        }
    }
}

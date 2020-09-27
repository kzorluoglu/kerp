<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
})->name('start');

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/locale/{id}', 'HomeController@language');

Auth::routes();
// Auth::routes(['reset' => true, 'verify' => false, 'register' => false]);


Route::middleware('auth')->group(function () {

    Route::prefix('product')->group(function () {
        Route::get('/', 'ProductController@index')->name('product');
        Route::get('new', 'ProductController@create')->name('product.new');
        Route::post('store', 'ProductController@store')->name('product.store');
        Route::get('show/{id}', 'ProductController@show')->name('product.show');
        Route::post('update', 'ProductController@update')->name('product.update');
        Route::get('delete/{id}', 'ProductController@delete')->name('product.delete');
   });

    Route::prefix('category')->group(function () {
        Route::get('/', 'CategoryController@index')->name('category');
        Route::get('new', 'CategoryController@create')->name('category.new');
        Route::post('store', 'CategoryController@store')->name('category.store');
        Route::get('show/{id}', 'CategoryController@show')->name('category.show');
        Route::post('update', 'CategoryController@update')->name('category.update');
        Route::get('delete/{id}', 'CategoryController@delete')->name('category.delete');
   });

   Route::prefix('company')->group(function () {
       Route::get('/', 'CompanyController@index')->name('company');
       Route::get('new', 'CompanyController@create')->name('company.new');
       Route::post('store', 'CompanyController@store')->name('company.store');
       Route::get('show/{id}', 'CompanyController@show')->name('company.show');
       Route::post('update', 'CompanyController@update')->name('company.update');
       Route::get('delete/{id}', 'CompanyController@delete')->name('company.delete');
     });


     Route::prefix('customer')->group(function () {
         Route::get('/', 'CustomerController@index')->name('customer');
         Route::get('new', 'CustomerController@create')->name('customer.new');
         Route::post('store', 'CustomerController@store')->name('customer.store');
         Route::get('show/{id}', 'CustomerController@show')->name('customer.show');
         Route::post('update', 'CustomerController@update')->name('customer.update');
         Route::get('delete/{id}', 'CustomerController@delete')->name('customer.delete');
    });

   Route::prefix('invoice')->group(function () {
       Route::get('/', 'InvoiceController@index')->name('invoice');
       Route::get('select', 'InvoiceController@select')->name('invoice.select');
       Route::post('store', 'InvoiceController@store')->name('invoice.store');
       Route::get('prepare/{id}', 'InvoiceController@prepare')->name('invoice.prepare');
       Route::post('update', 'InvoiceController@update')->name('invoice.update');
       Route::get('delete/{id}', 'InvoiceController@delete')->name('invoice.delete');
       Route::get('pdf/{id}', 'InvoiceController@pdf')->name('invoice.pdf');
       Route::get('download/{id}', 'InvoiceController@download')->name('invoice.download');

      //Prepare or Invoices Products Routes
       Route::post('saveproduct', 'InvoiceController@saveProduct')->name('invoice.saveproduct');
       Route::post('updateproduct', 'InvoiceController@updateProduct')->name('invoice.updateproduct');
       Route::get('deleteproduct/{id}', 'InvoiceController@deleteProduct')->name('invoice.deleteproduct');

       Route::post('updateinformation', 'InvoiceController@updateInformation')->name('invoice.updateinformation');

       Route::get('/autocomplete/invoicecompany', 'InvoiceController@autocompleteInvoiceCompany');
       Route::get('/autocomplete/invoicecustomer', 'InvoiceController@autocompleteInvoiceCustomer');
       Route::get('/autocomplete/invoiceproduct', 'InvoiceController@autocompleteProduct');

       Route::get('paid/{id}', 'InvoiceController@paid')->name('invoice.paid');
  });

    Route::prefix('incoming_invoice')->group(function () {
        Route::get('/', 'IncomingInvoiceController@index')->name('incoming_invoice');
        Route::get('select', 'IncomingInvoiceController@select')->name('incoming_invoice.select');
        Route::post('store', 'IncomingInvoiceController@store')->name('incoming_invoice.store');
        Route::get('prepare/{id}', 'IncomingInvoiceController@prepare')->name('incoming_invoice.prepare');
        Route::post('update', 'IncomingInvoiceController@update')->name('incoming_invoice.update');
        Route::get('delete/{id}', 'IncomingInvoiceController@delete')->name('incoming_invoice.delete');

        //Prepare or Invoices Products Routes
        Route::post('saveproduct', 'IncomingInvoiceController@saveProduct')->name('incoming_invoice.saveproduct');
        Route::post('updateproduct', 'IncomingInvoiceController@updateProduct')->name('incoming_invoice.updateproduct');
        Route::get('deleteproduct/{id}', 'IncomingInvoiceController@deleteProduct')->name('incoming_invoice.deleteproduct');

        Route::post('updateinformation', 'IncomingInvoiceController@updateInformation')->name('incoming_invoice.updateinformation');

        Route::get('/autocomplete/invoicecompany', 'IncomingInvoiceController@autocompleteInvoiceCompany');
        Route::get('/autocomplete/invoicecustomer', 'IncomingInvoiceController@autocompleteInvoiceCustomer');
        Route::get('/autocomplete/invoiceproduct', 'IncomingInvoiceController@autocompleteProduct');

        Route::get('paid/{id}', 'IncomingInvoiceController@paid')->name('incoming_invoice.paid');
    });

  Route::prefix('offer')->group(function () {
    Route::get('/', 'OfferController@index')->name('offer');
    Route::get('select', 'OfferController@select')->name('offer.select');
    Route::post('store', 'OfferController@store')->name('offer.store');
    Route::get('prepare/{id}', 'OfferController@prepare')->name('offer.prepare');
    Route::post('update', 'OfferController@update')->name('offer.update');
    Route::get('delete/{id}', 'OfferController@delete')->name('offer.delete');
    Route::get('pdf/{id}', 'OfferController@pdf')->name('offer.pdf');
    Route::get('download/{id}', 'OfferController@download')->name('offer.download');

   //Prepare or Invoices Products Routes
    Route::post('saveproduct', 'OfferController@saveProduct')->name('offer.saveproduct');
    Route::post('updateproduct', 'OfferController@updateProduct')->name('offer.updateproduct');
    Route::get('deleteproduct/{id}', 'OfferController@deleteProduct')->name('offer.deleteproduct');

    Route::post('updateinformation', 'OfferController@updateInformation')->name('offer.updateinformation');

    Route::get('changetoinvoice/{id}', 'OfferController@changeToInvoice')->name('offer.changetoinvoice');


    });

    Route::prefix('contract')->group(function () {
        Route::get('/', 'ContractController@index')->name('contract');
        Route::get('new', 'CustomerController@create')->name('contract.new');
        Route::post('store', 'CustomerController@store')->name('contract.store');
        Route::get('show/{id}', 'CustomerController@show')->name('contract.show');
        Route::post('update', 'CustomerController@update')->name('contract.update');
        Route::get('delete/{id}', 'CustomerController@delete')->name('contract.delete');
   });

    Route::prefix('overview')->group(function () {
        Route::get('/', 'OverviewController@index')->name('overview');
        Route::get('show/{id}', 'CustomerController@show')->name('overview.show');
    });

});

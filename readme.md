# ERP
Open Source Simple Invoice and Offer Tool with Customers and Companies.

# Features
 - Invoices
   - Paid <-> Unpaid Option
   - PDF Download and Preview Option
   - Autocomplete Product with All Information
 - Offers
   - Create Invoice from Offer
 - Customers
   - Tax Information
 - Companies (Your Companies)
   - Bank Information
   - Invoice Information Section

# Getting started

## Installation
Clone the repository

    git clone git@github.com:kzorluoglu/erp.git

Switch to the repo folder

    cd erp

Install all the dependencies using composer

    composer install
    npm install

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env

Generate a new application key

    php artisan key:generate

Run the database migrations (**Set the database connection in .env before migrating**)

    php artisan migrate

Start the local development server

    php artisan serve

## Licence

MIT
# ERP
Open Source Simple Invoice and Offer Tool with Customers and Companies.

# Features
 - Invoices
   - Paid <-> Unpaid Option
   - PDF Download and Preview Option
   - Autocomplete Product with All Information
 - Offers
   - Create Invoice from Offer
   - PDF Download and Preview Option
 - Customers
   - Tax Information
 - Companies (Your Companies)
   - Bank Information
   - Invoice Information Section

# Screenshots
![Homepage](https://i.ibb.co/Mgvy68r/Homepage.png)
![Homepage](https://i.ibb.co/zQPGGJG/Login.png)
![Homepage](https://i.ibb.co/WxnyJ1V/Dashboard.png)
![Homepage](https://i.ibb.co/tZKh3fh/Customer.png)
![Homepage](https://i.ibb.co/hF49jbZ/Edit-Customer.png)
![Homepage](https://i.ibb.co/grKhb9m/Edit-Product.png)
![Homepage](https://i.ibb.co/6Xh561Z/Invoices.png)
![Homepage](https://i.ibb.co/vxXVrVs/Order-Overview.png)
![Homepage](https://i.ibb.co/4YJ6HB0/PDF-Preview.png)
![Homepage](https://i.ibb.co/9bCxN9c/Offer.png)
![Homepage](https://i.ibb.co/sWH8vvd/Product.png)

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

Disable "Register" for Daily use, after Setup.

    Auth::routes(); // replace this line with under..
    Auth::routes(['reset' => true, 'verify' => false, 'register' => false]); // Register Disabled
    
## Licence

MIT
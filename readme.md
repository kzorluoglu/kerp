# ERP
Open Source Simple Invoice and Offer Tool with Customers and Companies.

# Features
 - **Overview (New Added - 27.09.2020)**
   - Outgoing Invoices with Tax per Year
   - Incoming Invoices with Tax per Year
 - **Incoming Invoices (New Added - 27.09.2020)**
   - Intern Number per Invoice
   - Pad <-> Unpoad Option
   - Autocomplete Product with All Information (Price, Count, Title, Product Typ)
 - Invoices
   - Paid <-> Unpaid Option
   - PDF Download and Preview Option
   - Autocomplete Product with All Information (Price, Count, Title, Product Typ)
 - Offers
   - Create Invoice from Offer
   - PDF Download and Preview Option
   - Autocomplete Product with All Information (Price, Count, Title, Product Typ)
 - Customers
   - Tax Information
 - Companies (Your Companies)
   - Bank Information
   - Invoice Information Section

# Screenshots
![https://ibb.co/Mgvy68r](https://i.ibb.co/Mgvy68r/Homepage.png)

**Overview (New Added - 27.09.2020)**

![https://i.ibb.co/85prpnR](https://i.ibb.co/85prpnR/Overview.png)
![https://ibb.co/zQPGGJG](https://i.ibb.co/zQPGGJG/Login.png)
![https://ibb.co/WxnyJ1V](https://i.ibb.co/WxnyJ1V/Dashboard.png)
![https://ibb.co/tZKh3fh](https://i.ibb.co/tZKh3fh/Customer.png)
![https://ibb.co/hF49jbZ](https://i.ibb.co/hF49jbZ/Edit-Customer.png)
![https://ibb.co/grKhb9m](https://i.ibb.co/grKhb9m/Edit-Product.png)
![https://ibb.co/6Xh561Z](https://i.ibb.co/6Xh561Z/Invoices.png)
![https://ibb.co/vxXVrVs](https://i.ibb.co/vxXVrVs/Order-Overview.png)
![https://ibb.co/4YJ6HB0](https://i.ibb.co/4YJ6HB0/PDF-Preview.png)
![https://ibb.co/9bCxN9c](https://i.ibb.co/9bCxN9c/Offer.png)
![https://ibb.co/sWH8vvd](https://i.ibb.co/sWH8vvd/Product.png)

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

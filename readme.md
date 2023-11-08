# ERP
Open Source Simple Invoice and Offer Tool with Customers and Companies.

# Features
 - Multi Language Support
   - German
   - English
   - Turkish
 - **Overview (New Added - 27.09.2020)**
   - Outgoing Invoices with Tax per Year
   - Incoming Invoices with Tax per Year
 - **Incoming Invoices (New Added - 27.09.2020)**
   - Intern Number per Invoice
   - Pad <-> Unpoad Option
   - Autocomplete Product with All Information (Price, Count, Title, Product Typ)
 - **Invoices**
   - Paid <-> Unpaid Option
   - PDF Download and Preview Option
   - Autocomplete Product with All Information (Price, Count, Title, Product Typ)
 - **Offers**
   - Create Invoice from Offer
   - PDF Download and Preview Option
   - Autocomplete Product with All Information (Price, Count, Title, Product Typ)
 - **Customers**
   - Tax Information
- **Contracts**
  - Add/remove Monthly, Annual, Weekly, Daily Contracts
  - Displaying the remaining time
  - Automatic calculate and display of the expiration time
  -  Automatic calculate and displa date of the last contract cancellation submission
  - Contract Cancellation Notify via Cronjob, when is less than one month away.
 - **Companies (Your Companies)**
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

**Disable "Register" for Daily use, after Setup.**

    Auth::routes(); // replace this line with under..
    Auth::routes(['reset' => true, 'verify' => false, 'register' => false]); // Register Disabled

**Cronjob**

You can add this command to your crontab file to run automatically at a specified interval, like every day at midnight. For example, to run the command every day at midnight, add the following line to your crontab file:

`
0 0 * * * php /path/to/artisan send-cancellation-notification
`

## Licence

MIT

# Use the specified PHP version as the base image
FROM php:8.1-fpm

# Install the GD and MySQL PDO extensions along with other dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev libjpeg-dev libfreetype6-dev \
    default-mysql-client zip libzip-dev \
&& docker-php-ext-configure gd --with-freetype --with-jpeg \
&& docker-php-ext-install gd pdo pdo_mysql

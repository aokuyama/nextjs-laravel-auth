FROM php:7.1.33-fpm

ENV COMPOSER_ALLOW_SUPERUSER=1

RUN apt-get update -y && \
    apt-get install -y \
    git \
    zlib1g-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libpng-dev

RUN docker-php-ext-configure gd

RUN docker-php-ext-install -j$(nproc) \
    sockets \
    zip \
    pdo_mysql \
    gd

COPY --from=composer:1.5.2 /usr/bin/composer /usr/bin/composer

FROM php:7.1.33-fpm

ENV COMPOSER_ALLOW_SUPERUSER=1

COPY --from=composer:1.5.2 /usr/bin/composer /usr/bin/composer

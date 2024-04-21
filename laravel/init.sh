#!/bin/sh
php -d memory_limit=-1 $(which composer) install
if [ ! -e .env ]; then
  echo "APP_KEY=" > .env
  php artisan key:generate
fi
php artisan migrate

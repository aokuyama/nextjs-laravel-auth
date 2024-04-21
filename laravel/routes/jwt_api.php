<?php

Route::post('users/login', 'Api\Jwt\Users\LoginController')->name('api/jwt/users/login');
Route::middleware('jwt.auth')->get('users/me', 'Api\Jwt\Users\MeController')->name('api/jwt/users/me');

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
});

Route::post('/api/login', 'Api\LoginController')->name('api.login');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/api/csrf-cookie', 'Api\CsrfCookieController')->name('api.csrf-cookie');
Route::get('/api/logout', 'Api\LogoutController')->name('api.logout');
Route::get('/api/users/me', 'Api\Users\MeController')->name('api.users.me');

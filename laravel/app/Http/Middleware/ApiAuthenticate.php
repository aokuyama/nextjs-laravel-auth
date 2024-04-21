<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\Authenticate as Middleware;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\Exceptions\HttpResponseException;

class ApiAuthenticate extends Middleware
{
    protected function authenticate($request, array $guards)
    {
        try {
            parent::authenticate($request, $guards);
        } catch (AuthenticationException $e) {
            throw new HttpResponseException(response()->json(['message' => 'unauthorized'], 401));
        }
    }
}

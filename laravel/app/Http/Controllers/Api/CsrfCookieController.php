<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class CsrfCookieController extends Controller
{
    public function __construct()
    {
        
    }

    public function __invoke()
    {
        return ['message' => 'ok'];
    }
}

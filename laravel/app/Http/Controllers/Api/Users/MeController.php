<?php

namespace App\Http\Controllers\Api\Users;

use App\Http\Controllers\Controller;

class MeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth.web.api');
    }

    public function __invoke()
    {
        return ['message' => 'authenticated'];
    }
}

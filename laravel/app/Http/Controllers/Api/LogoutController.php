<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Http\Exceptions\HttpResponseException;

class LogoutController extends Controller
{
    use AuthenticatesUsers;

    public function __invoke(Request $request)
    {
        $this->logout($request);
    }

    protected function loggedOut(Request $request)
    {
        throw new HttpResponseException(response()->json(['message' => 'ok'], 200));
    }
}

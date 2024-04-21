<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Handlers\JwtAuthHandler;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    use AuthenticatesUsers { sendLoginResponse as sendLoginResponseAuthenticatesUsers; }
    
    public function __invoke(Request $request)
    {
        $this->login($request);
    }

    protected function sendFailedLoginResponse(Request $request)
    {
        throw new HttpResponseException(response()->json(['message' => 'unauthorized'], 401));
    }

    protected function sendLoginResponse(Request $request)
    {
        $this->sendLoginResponseAuthenticatesUsers($request);
        $user = Auth::user();
        $authHandler = new JwtAuthHandler;
        $token = $authHandler->GenerateToken($user);
        throw new HttpResponseException(response()->json([
            'code' => 'OK',
            'result' => [
                'id' => $user->id,
                'email' => $user->email,
                'token' => $token,
            ],
        ], 200));
    }
}

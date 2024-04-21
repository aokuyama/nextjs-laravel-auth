<?php

namespace App\Http\Controllers\Api\Jwt\Users;

use App\Handlers\JwtAuthHandler;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function __invoke(Request $request)
    {
        $input = $request->only('email', 'password');

        $validator = Validator::make($input, [
            'email' => 'required',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors(), 200);
        }

        $remember = $request->remember;

        if (Auth::attempt($input, $remember)) {
            $user = Auth::user();

            $authHandler = new JwtAuthHandler;
            $token = $authHandler->GenerateToken($user);

            $response = ['user' => $user, 'token' => $token];

            return response()->json($response, 200);
        }
        return response()->json(['error' => "Invalid Login credentials"], 401);
    }
}

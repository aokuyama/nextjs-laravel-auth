<?php

namespace App\Http\Controllers\Api\Users;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Handlers\JwtAuthHandler;

class MeController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth.web.api');
    }

    public function __invoke()
    {
        $user = Auth::user();
        $authHandler = new JwtAuthHandler;
        $token = $authHandler->GenerateToken($user);
        return response()->json([
            'code' => 'OK',
            'result' => [
                'id' => $user->id,
                'email' => $user->email,
                'token' => $token,
            ],
        ], 200);
    }
}

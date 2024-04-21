<?php

namespace App\Http\Controllers\Api\Jwt\Users;

use App\Http\Controllers\Controller;
use App\Helpers\PublicHelper;

class MeController extends Controller
{    
    public function __invoke()
    {
        return response()->json($this->GetAuthUser());
    }

    public function GetAuthUser()
    {
        $publicHelper = new PublicHelper();
        $token = $publicHelper->GetAndDecodeJWT();
        return $token->data;
    }
}

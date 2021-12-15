<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;

class DeviceTokensController extends Controller
{
    public function store(Request $request)
    {
        $user = User::find(2);
        $exists = $user->deviceTokens()
            ->where('token', '=', $request->post('token'))
            ->exists();
        if (!$exists) {
            $user->deviceTokens()->create([
                'token' => $request->post('token'),
                //'device' => $request->post('device'),
            ]);
        }

        return Response::json([]);
    }
}

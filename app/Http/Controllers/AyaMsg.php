<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use App\Notifications\MsgNotification;
use Illuminate\Http\Request;

class AyaMsg extends Controller
{
    public function index(){
       $d =  User::query()->find(2)->notify(new MsgNotification(new Order()));
       return $d;
    }
}

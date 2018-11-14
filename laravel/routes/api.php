<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/authenticate', 'OAuth\OAuthController@token');
Route::get('/authuser', 'OAuth\OAuthController@AuthUser')->middleware('auth:api');
Route::resource('users', 'UsersController');




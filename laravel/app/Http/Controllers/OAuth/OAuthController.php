<?php

namespace App\Http\Controllers\OAuth;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Validator;
use GuzzleHttp;

class OAuthController extends Controller
{
  public function token(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'username' => 'required|email',
      'password' => 'required',
    ]);

    if ($validator->passes()) {
      $http = new GuzzleHttp\Client;
      try {
        $response = $http->post(config('app.url').'/oauth/token', [
          'form_params' => [
            'grant_type' => 'password',
            'client_id' => config('passport.client_id'),
            'client_secret' => config('passport.secret'),
            'username' => $request->get('username'),
            'password' => $request->get('password'),
            'scope' => '',
          ],
        ]);
        return response()->json(json_decode($response->getBody()->getContents()));
      } catch (\Exception $e) {
        return response()->json(['error' => 'not authorized'.config('passport.client_id'), 'message' => $e->getMessage()], 401);
      }
    }

    return response()->json(['error' => $validator->messages()]);
  }

  public function AuthUser(Request $request) {
    return response()->json($request->user());
  }
}

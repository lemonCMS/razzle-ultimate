<?php namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\User as Users;

class UsersController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  public function index(Request $request)
  {
    $input = $request->only('search', 'searchField');
    $users = Users::where(function ($query) use ($input, $request) {
      if (!empty($input['search'])) {
        return $query->where('name', 'LIKE', '%' . $input['search'] . '%')
            ->orWhere('email', 'LIKE', '%' . $input['search'] . '%');
      }
    })->paginate(config('app.pagination'));

    return $users;

  }

  /**
   * Show the form for creating a new resource.
   *
   * @return Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @return Response
   */
  public function store(Request $request)
  {

  }

  /**
   * Display the specified resource.
   *
   * @param  int $id
   * @return Response
   */
  public function show($id)
  {
    //
    return response()->json(Users::findOrFail($id));

  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  int $id
   * @return Response
   */
  public function edit($id)
  {
    //
    return response()->json(Users::findOrFail($id));
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  Request $request
   * @param  int $user_id
   * @return Users
   */
  public function update(Request $request, $user_id)
  {
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  int $id
   * @return Response
   */
  public function destroy($user_id)
  {
    //
    Users::destroy($user_id);
    return response()->json(['success' => true]);
  }
}

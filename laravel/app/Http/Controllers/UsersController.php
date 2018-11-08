<?php namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use \App\User as Users;
use Functions;
use Validator;
use Hash;


class UsersController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @return Response
   */
  public function index(Request $request)
  {
    $input = $request->only('search', 'searchField', 'order', 'active');

    list($orderField, $orderSort) = Functions::order(['name', 'id', 'email', 'active'], isset($input['order']) ? $input['order'] : null);

    $users = Users::where(function ($query) use ($input, $request) {
      if (!empty($input['search'])) {
        $query->where('name', 'LIKE', '%' . $input['search'] . '%')
            ->orWhere('email', 'LIKE', '%' . $input['search'] . '%');
      }

      if (isset($input['active'])) {
        $query->where('active', (int)$input['active']);
      }
    })
        ->orderBy($orderField, $orderSort)
        ->paginate(config('app.pagination'));

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

    $faker = \Faker\Factory::create();

    $validator = $this->inputValidator($request);
    if ($validator->passes()) {
      $user = new User;
      $user->name = $request->get('name');
      $user->email = $request->get('email');
      $user->active = $request->get('active', 0);
      $user->password = Hash::make('Secret1!');
      $user->picture = $faker->imageUrl('640', '480', 'cats');
      $user->save();
      $user->save();

      return response()->json($user->fresh());

    } else {
      return response()->json($validator->messages(), 400);
    }
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

  private function inputValidator(Request $request, $id = null)
  {
    $validator = Validator::make($request->all(), [
        'name' => 'required|unique:users,name' . ($id !== null ? ',' . $id : null),
        'email' => 'required|unique:users,email' . ($id !== null ? ',' . $id : null),
        'active' => 'boolean',
    ]);

    return $validator;
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
    $validator = $this->inputValidator($request, $user_id);
    if ($validator->passes()) {
      $user = User::findOrFail($user_id);
      $user->name = $request->get('name');
      $user->email = $request->get('email');
      $user->active = $request->get('active');
      $user->save();

      return response()->json($user->fresh());

    } else {
      return response()->json($validator->messages(), 400);
    }
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

<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder {

  /**
   * Auto generated seed file
   *
   * @return void
   */
  public function run()
  { \DB::statement('SET FOREIGN_KEY_CHECKS=0;');

    \DB::table('users')->truncate();

    $faker = Faker\Factory::create();
    foreach (range(1, 100) as $index) {
      \DB::table('users')->insert(array(
          'name' => $faker->name(),
          'email' => $faker->unique()->safeEmail,
          'password' => Hash::make('Secret1!'),
          'created_at' => $faker->dateTime()->format("Y-m-d H:i:s"),
          'updated_at' => $faker->dateTime()->format("Y-m-d H:i:s"),
          'remember_token' => NULL,
      ));
    }


  }
}

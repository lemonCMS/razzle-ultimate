<?php

namespace App\Providers;

use App;
use App\Plugins\Functions;

use Illuminate\Support\ServiceProvider;

class FunctionsServiceProvider extends ServiceProvider
{
  /**
   * Bootstrap the application services.
   *
   * @return void
   */
  public function boot()
  {
    //
  }

  /**
   * Register the application services.
   *
   * @return void
   */
  public function register()
  {
    //
    App::bind('functions', function () {
      return new Functions;
    });
  }

}

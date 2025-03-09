<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * Define las rutas de la aplicación.
     */
    public function boot()
    {
        $this->routes(function () {
            Route::middleware('api')
                ->prefix('api') // <-- Asegúrate de que este prefijo está definido
                ->group(base_path('routes/api.php')); // <-- Se carga el archivo de rutas API

            Route::middleware('web')
                ->group(base_path('routes/web.php'));
        });
    }
}
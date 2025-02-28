<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;

// Obtener todas las películas
Route::get('/movies', [MovieController::class, 'index']);

// Obtener una película por ID
Route::get('/movies/{id}', [MovieController::class, 'show']);

// Crear una nueva película
Route::post('/movies', [MovieController::class, 'store']);
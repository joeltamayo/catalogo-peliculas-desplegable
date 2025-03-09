<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Movie;


class MovieController extends Controller
{
    // Obtener todas las películas
    public function index()
    {
        return response()->json(Movie::all(), 200);
    }

    // Obtener una película específica por ID
    public function show($id)
    {
        $movie = Movie::find($id);

        if (!$movie) {
            return response()->json(['message' => 'Película no encontrada'], 404);
        }

        return response()->json($movie, 200);
    }

    // Insertar una nueva película
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'synopsis' => 'required|string',
            'year' => 'required|integer',
            'cover' => 'required|string'
        ]);

        $movie = Movie::create($request->all());

        return response()->json($movie, 201);
    }

    // Modificar una pelicula
    public function update(Request $request, $id)
    {
        $movie = Movie::find($id); // Buscar la película por ID

        if (!$movie) {
            return response()->json(['message' => 'Película no encontrada'], 404);
        }

        // Validar datos de entrada
        $request->validate([
            'title' => 'required|string|max:255',
            'synopsis' => 'required|string',
            'year' => 'required|integer',
            'cover' => 'required|string'
        ]);

        // Actualizar los campos
        $movie->update($request->all());

        return response()->json([
            'message' => 'Película actualizada con éxito',
            'data' => $movie
        ], 200);
    }

    // Eliminar una pelicula
    public function destroy($id)
    {
        $movie = Movie::find($id); // Buscar la película por ID

        if (!$movie) {
            return response()->json(['message' => 'Película no encontrada'], 404);
        }

        $movie->delete(); // Eliminar el registro

        return response()->json(['message' => 'Película eliminada con éxito'], 200);
    }
}

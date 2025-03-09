<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up()
    {
        Schema::create('movies', function (Blueprint $table) {
            $table->id(); // Clave primaria
            $table->string('title'); // Título de la película
            $table->text('synopsis'); // Sinopsis
            $table->integer('year'); // Año de estreno
            $table->string('cover'); // URL o nombre de la portada
            $table->timestamps(); // Campos created_at y updated_at
        });
    }

    public function down()
    {
        Schema::dropIfExists('movies');
    }
};

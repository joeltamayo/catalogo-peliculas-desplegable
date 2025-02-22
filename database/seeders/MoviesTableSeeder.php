<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Movie;
use Faker\Factory as Faker;

class MoviesTableSeeder extends Seeder {
    public function run() {
        Movie::truncate(); // Borra datos anteriores

        $faker = Faker::create();

        for ($i = 0; $i < 10; $i++) {
            Movie::create([
                'title' => $faker->sentence(3),
                'synopsis' => $faker->paragraph(3),
                'year' => $faker->year(),
                'cover' => $faker->imageUrl(200, 300, 'movies'),
            ]);
        }
    }
}
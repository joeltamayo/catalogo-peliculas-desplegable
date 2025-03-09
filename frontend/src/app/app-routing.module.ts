import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesComponent } from './movies/movies.component'; // Componente para peliculas
import { MovieComponent } from './movie/movie.component';    // Componente para pelicula individual

const routes: Routes = [
  { path: '', component: MoviesComponent },  // Página principal muestra la lista de películas
  { path: 'movie/:id', component: MovieComponent } // Página para detalles de una película específica
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// Importación de componentes y servicios necesarios
import { Component } from '@angular/core';  // Decorador Component para declarar el componente Angular
import { Router } from '@angular/router'; // Router para la navegación entre rutas
import { MovieService } from '../services/movie.service'; // Servicio personalizado que maneja las películas

@Component({
  selector: 'app-movies',  // Define el nombre del selector para este componente en el HTML
  standalone: false,  // Este componente no es standalone, debe ser parte de un módulo
  templateUrl: './movies.component.html',  // Ruta al archivo HTML que contiene la plantilla del componente
  styleUrl: './movies.component.css'  // Ruta al archivo CSS que contiene los estilos del componente
})
// Clase MoviesComponent: lista de películas y lógica de navegación
export class MoviesComponent {
  // Lista de películas (simulada como ejemplo)
  movies = [
    { id: 1, title: 'Interstellar', director: 'Christopher Nolan', year: 2014 },
    { id: 2, title: 'Inception', director: 'Christopher Nolan', year: 2010 },
    { id: 3, title: 'The Matrix', director: 'Lana Wachowski, Lilly Wachowski', year: 1999 },
    { id: 4, title: 'The Dark Knight', director: 'Christopher Nolan', year: 2008 },
    { id: 5, title: 'Fight Club', director: 'David Fincher', year: 1999 },
    { id: 6, title: 'Pulp Fiction', director: 'Quentin Tarantino', year: 1994 },
    { id: 7, title: 'The Shawshank Redemption', director: 'Frank Darabont', year: 1994 },
    { id: 8, title: 'Forrest Gump', director: 'Robert Zemeckis', year: 1994 },
    { id: 9, title: 'The Godfather', director: 'Francis Ford Coppola', year: 1972 },
    { id: 10, title: 'Parasite', director: 'Bong Joon-ho', year: 2019 },
    { id: 11, title: 'Joker', director: 'Todd Phillips', year: 2019 },
    { id: 12, title: 'Avengers: Endgame', director: 'Anthony Russo, Joe Russo', year: 2019 },
    { id: 13, title: 'Gladiator', director: 'Ridley Scott', year: 2000 }
  ];

  // Constructor donde se inyectan los servicios necesarios
  constructor(private movieService: MovieService, private router: Router) { }

  // Método para ver los detalles de una película
  verDetalles(movie: any) {
    // Llamada al servicio para establecer la película seleccionada
    this.movieService.setMovie(movie);

    // Redirige al componente de detalles pasando el id de la película en la URL
    this.router.navigate(['/movie', movie.id]); // /movie/:id es la ruta para ver los detalles
  }
}
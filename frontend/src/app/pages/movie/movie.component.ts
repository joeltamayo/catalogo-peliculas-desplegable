import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie',
  standalone: false,
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Movie | undefined; // Objeto que almacenará los detalles de la película seleccionada

  constructor(
    private route: ActivatedRoute, // Servicio para acceder a los parámetros de la ruta
    private movieService: MovieService // Servicio para obtener y gestionar las películas
  ) {}

  ngOnInit(): void {
    this.loadMovie(); // Carga los detalles de la película al inicializar el componente
  }

  // Método para cargar los detalles de la película desde el backend
  loadMovie() {
    const movieId = Number(this.route.snapshot.paramMap.get('id')); // Obtiene el ID de la película desde la URL
    if (movieId) {
      this.movieService.getMovieById(movieId).subscribe(
        (response) => {
          this.movie = response; // Asigna los detalles de la película recibidos
        },
        (error) => {
          console.error('Error al obtener los detalles de la película:', error);
        }
      );
    }
  }
}
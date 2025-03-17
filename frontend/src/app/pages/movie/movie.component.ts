import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie, MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie', // Selector utilizado para hacer referencia a este componente en otros lugares de la aplicación
  standalone: false, // Indica que este componente no es autónomo y necesita un módulo para funcionar
  templateUrl: './movie.component.html', // Ubicación del archivo HTML del componente
  styleUrls: ['./movie.component.css'] // Ubicación del archivo de estilos del componente
})
export class MovieComponent {
  movie: Movie | undefined; // Objeto que almacenará los detalles de la película seleccionada

  constructor(
    private route: ActivatedRoute, // Servicio para acceder a los parámetros de la ruta
    private movieService: MovieService, // Servicio para obtener y gestionar las películas
  ) {
    // Obtiene el ID de la película desde los parámetros de la URL
    const movieId = Number(this.route.snapshot.paramMap.get('id'));
    
    // Busca la película por su ID usando el MovieService
    this.movie = this.movieService.getMovieById(movieId);
  }
}
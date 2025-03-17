import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie, MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies', // Selector utilizado para hacer referencia a este componente en otros lugares de la aplicación
  standalone: false, // Indica que este componente no es autónomo y necesita un módulo para funcionar
  templateUrl: './catalogo.component.html', // Ubicación del archivo HTML del componente
  styleUrls: ['./catalogo.component.css'] // Ubicación del archivo de estilos del componente
})
export class CatalogoComponent {
  movies: Movie[] = []; // Array que contendrá las películas obtenidas del servicio
  showForm: boolean = false; // Controla si el formulario de creación/edición está visible
  isEditing: boolean = false; // Determina si el formulario está en modo de edición
  selectedMovieId: number | null = null; // ID de la película seleccionada para editar

  movieData: Movie = { id: 0, title: '', synopsis: '', year: 0, cover: '' };
  // Objeto que contiene los datos de la película a agregar o editar

  constructor(private movieService: MovieService, private router: Router) {
    this.movies = this.movieService.getMovies(); // Obtiene las películas al inicializar el componente
  }

  // Método para ver los detalles de una película
  viewMovie(id: number) {
    this.router.navigate(['/movie', id]); // Redirige a la página de detalles de la película
  }
}
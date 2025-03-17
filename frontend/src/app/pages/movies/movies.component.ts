import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Movie, MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies', // Selector utilizado para hacer referencia a este componente en otros lugares de la aplicación
  standalone: false, // Indica que este componente no es autónomo y necesita un módulo para funcionar
  templateUrl: './movies.component.html', // Ubicación del archivo HTML del componente
  styleUrls: ['./movies.component.css'] // Ubicación del archivo de estilos del componente
})
export class MoviesComponent {
  movies: Movie[] = []; // Array que contendrá las películas obtenidas del servicio
  showForm: boolean = false; // Controla si el formulario de creación/edición está visible
  isEditing: boolean = false; // Determina si el formulario está en modo de edición
  selectedMovieId: number | null = null; // ID de la película seleccionada para editar

  movieData: Movie = { id: 0, title: '', synopsis: '', year: 0, cover: '' };
  // Objeto que contiene los datos de la película a agregar o editar

  constructor(private movieService: MovieService, private router: Router) {
    this.movies = this.movieService.getMovies(); // Obtiene las películas al inicializar el componente
  }

  // Método para abrir el formulario en modo de creación o edición
  openForm(editMode: boolean = false, movie?: Movie) {
    this.showForm = true; // Muestra el formulario
    this.isEditing = editMode; // Determina si está en modo edición

    // Si está en modo edición, carga los datos de la película seleccionada
    if (editMode && movie) {
      this.selectedMovieId = movie.id; // Establece el ID de la película seleccionada
      this.movieData = { ...movie }; // Rellena el formulario con los datos de la película seleccionada
    } else {
      this.selectedMovieId = null; // Si está en modo de creación, resetea el ID
      this.movieData = { id: 0, title: '', synopsis: '', year: 2000, cover: '' }; // Resetea los datos del formulario
    }
  }

  // Método para cerrar el formulario sin guardar cambios
  closeForm() {
    this.showForm = false; // Oculta el formulario
    this.selectedMovieId = null; // Resetea el ID de la película seleccionada
  }

  // Método para guardar una película, ya sea creando una nueva o actualizando una existente
  saveMovie() {
    // Verifica que todos los campos del formulario estén completos
    if (this.movieData.title && this.movieData.synopsis && this.movieData.cover) {
      if (this.isEditing && this.selectedMovieId !== null) {
        // Si está en modo de edición, actualiza la película
        this.movieService.updateMovie(this.selectedMovieId, this.movieData);
      } else {
        // Si está en modo de creación, agrega una nueva película
        this.movieService.addMovie(this.movieData);
      }
      this.movies = this.movieService.getMovies(); // Actualiza la lista de películas
      this.closeForm(); // Cierra el formulario después de guardar
    } else {
      alert("Todos los campos son obligatorios."); // Muestra una alerta si algún campo está vacío
    }
  }

  // Método para eliminar una película
  deleteMovie(id: number) {
    this.movieService.deleteMovie(id); // Elimina la película por su ID
    this.movies = this.movieService.getMovies(); // Actualiza la lista de películas
  }

  // Método para ver los detalles de una película
  viewMovie(id: number) {
    this.router.navigate(['/movie', id]); // Redirige a la página de detalles de la película
  }
}
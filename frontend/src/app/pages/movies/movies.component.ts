import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie, MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movies',
  standalone: false,
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = []; // Array que contendrá las películas obtenidas del servicio
  showForm: boolean = false; // Controla si el formulario de creación/edición está visible
  isEditing: boolean = false; // Determina si el formulario está en modo de edición
  selectedMovieId: number | null = null; // ID de la película seleccionada para editar

  movieData: Movie = { id: 0, title: '', synopsis: '', year: 0, cover: '' };
  // Objeto que contiene los datos de la película a agregar o editar

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit(): void {
    this.loadMovies(); // Carga las películas al inicializar el componente
  }

  // Método para cargar las películas desde el backend
  loadMovies() {
    this.movieService.getMovies().subscribe(
      (response) => {
        this.movies = response; // Asigna las películas recibidas
      },
      (error) => {
        console.error('Error al obtener las películas:', error);
      }
    );
  }

  // Método para guardar una película, ya sea creando una nueva o actualizando una existente
  saveMovie() {
    // Verifica que todos los campos del formulario estén completos
    if (this.movieData.title && this.movieData.synopsis && this.movieData.cover) {
      if (this.isEditing && this.selectedMovieId !== null) {
        // Si está en modo de edición, actualiza la película
        this.movieService.updateMovie(this.selectedMovieId, this.movieData).subscribe(
          (response) => {
            console.log('Película actualizada:', response);
            this.loadMovies(); // Recarga las películas después de actualizar
            this.closeForm(); // Cierra el formulario
          },
          (error) => {
            console.error('Error al actualizar la película:', error);
          }
        );
      } else {
        // Si está en modo de creación, agrega una nueva película
        this.movieService.addMovie(this.movieData).subscribe(
          (response) => {
            console.log('Película agregada:', response);
            this.loadMovies(); // Recarga las películas después de agregar
            this.closeForm(); // Cierra el formulario
          },
          (error) => {
            console.error('Error al agregar la película:', error);
          }
        );
      }
    } else {
      alert("Todos los campos son obligatorios."); // Muestra una alerta si algún campo está vacío
    }
  }

  // Métodos para eliminar una película
  showDeleteConfirm: boolean = false; // Controla si se muestra el modal de confirmación
  movieIdToDelete: number | null = null; // Almacena el ID de la película a eliminar

  // Método que se llama al hacer clic en "Eliminar", muestra el modal
  promptDelete(id: number) {
    this.movieIdToDelete = id;
    this.showDeleteConfirm = true;
  }

  // Confirmación real de eliminación
  confirmDelete() {
    if (this.movieIdToDelete !== null) {
      this.movieService.deleteMovie(this.movieIdToDelete).subscribe(
        () => {
          console.log('Película eliminada');
          this.loadMovies(); // Recargar lista
          this.showDeleteConfirm = false;
          this.movieIdToDelete = null;
        },
        (error) => {
          console.error('Error al eliminar la película:', error);
          this.showDeleteConfirm = false;
        }
      );
    }
  }

  // Cancelar la eliminación
  cancelDelete() {
    this.showDeleteConfirm = false;
    this.movieIdToDelete = null;
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

  // Método para ver los detalles de una película
  viewMovie(id: number) {
    this.router.navigate(['/movie', id]); // Redirige a la página de detalles de la película
  }
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie, MovieService } from '../../services/movie.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-movie',
  standalone: false,
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  movie: Movie | undefined; // Objeto que almacenará los detalles de la película seleccionada
  showEditForm: boolean = false; // Controla la visualización del modal de edición
  showDeleteConfirm: boolean = false; // Controla la visualización del modal de confirmación para eliminar

  // Objeto para editar la película; se inicializa con los datos actuales
  editData: Movie = { id: 0, title: '', synopsis: '', year: 0, cover: '' };

  constructor(
    private route: ActivatedRoute, // Servicio para acceder a los parámetros de la ruta
    private movieService: MovieService, // Servicio para obtener y gestionar las películas
    private router: Router,
    private location: Location // Para volver a la ruta anterior
  ) { }

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
          // Inicializamos editData con la información actual para poder editarla
          this.editData = { ...response };
        },
        (error) => {
          console.error('Error al obtener los detalles de la película:', error);
        }
      );
    }
  }

  // Método para abrir el modal de edición
  openEditForm(): void {
    this.showEditForm = true;
  }

  // Cierra el modal de edición sin guardar cambios
  closeEditForm(): void {
    this.showEditForm = false;
    // Reestablece editData a los valores actuales de la película (opcional)
    if (this.movie) {
      this.editData = { ...this.movie };
    }
  }

  // Guarda los cambios realizados en el modal de edición
  saveEdit(): void {
    if (this.editData.title && this.editData.synopsis && this.editData.cover) {
      // Actualiza la película usando el servicio
      this.movieService.updateMovie(this.editData.id, this.editData).subscribe(
        (response) => {
          console.log('Película actualizada:', response);
          // Actualizamos la película mostrada
          this.movie = response;

          // Después de editar la película correctamente
          this.loadMovie(); // Recarga los datos actualizados
          this.closeEditForm();
        },
        (error) => {
          console.error('Error al actualizar la película:', error);
        }
      );
    } else {
      alert("Todos los campos son obligatorios.");
    }
  }

  // Método para abrir el modal de confirmación de eliminación
  promptDelete(): void {
    this.showDeleteConfirm = true;
  }

  // Cancela el proceso de eliminación (cierra el modal)
  cancelDelete(): void {
    this.showDeleteConfirm = false;
  }

  // Confirma la eliminación de la película
  confirmDelete(): void {
    if (this.movie && this.movie.id) {
      this.movieService.deleteMovie(this.movie.id).subscribe(
        () => {
          console.log('Película eliminada');
          // Luego de eliminar, redirige a la lista de peliculas
          this.router.navigate(['/movies']);
        },
        (error) => {
          console.error('Error al eliminar la película:', error);
        }
      );
    }
    this.cancelDelete();
  }

  // Te regresa a la pagina anterior
  goBack(): void {
    this.location.back();
  }
}
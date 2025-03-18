import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie, MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-catalogo',
  standalone: false,
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})

export class CatalogoComponent implements OnInit {
  movies: Movie[] = []; // Array que contendrá las películas obtenidas del servicio

  constructor(
    private movieService: MovieService, // Servicio para obtener y gestionar las películas
    private router: Router // Servicio para manejar la navegación
  ) {}

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

  // Método para ver los detalles de una película
  viewMovie(id: number) {
    this.router.navigate(['/movie', id]); // Redirige a la página de detalles de la película
  }
}
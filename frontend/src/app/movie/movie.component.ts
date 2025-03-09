// Importaciones necesarias para el componente
import { Component, OnInit } from '@angular/core';  // Component y OnInit son necesarios para crear y manejar el ciclo de vida del componente
import { MovieService } from '../services/movie.service';  // Importamos el servicio que gestiona las películas
import { Router } from '@angular/router';  // Router se utiliza para la navegación entre rutas

@Component({
  selector: 'app-movie',  // Selector del componente, que se usará en el HTML
  standalone: false,  // Este componente no es standalone, será gestionado por el módulo correspondiente
  templateUrl: './movie.component.html',  // Ruta al archivo de plantilla HTML del componente
  styleUrls: ['./movie.component.css']  // Ruta al archivo de estilos CSS del componente
})
export class MovieComponent implements OnInit {
  movie: any;  // Variable que contendrá la información de la película seleccionada

  // Inyección de dependencias en el constructor
  constructor(private movieService: MovieService, private router: Router) { }

  // Este método se ejecuta cuando el componente se inicializa
  ngOnInit() {
    // Llamamos al servicio para obtener los detalles de la película
    // El servicio devuelve los datos de la película almacenada
    this.movie = this.movieService.getMovie();
  }

  // Método que se ejecuta cuando el usuario hace clic en el botón "Volver"
  volver() {
    // Usamos el router para navegar de regreso a la lista de películas (la ruta raíz '/')
    this.router.navigate(['/']);
  }
}
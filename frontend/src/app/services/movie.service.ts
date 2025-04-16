import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

// Define la interfaz Movie que define la estructura de los objetos de película
export interface Movie {
  id: number;          // ID único de la película
  title: string;       // Título de la película
  synopsis: string;    // Sinopsis de la película
  year: number;        // Año de la película
  cover: string;       // URL de la imagen de la portada
}

@Injectable({
  providedIn: 'root' // Indica que el servicio será inyectado en el root (es decir, estará disponible globalmente)
})
export class MovieService {
  private apiUrl = `${environment.apiUrl}/movies`;

  constructor(private http: HttpClient) {} // Inyecta HttpClient

  // Método para obtener todas las películas
  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl); // Solicitud GET a /api/movies
  }

  // Método para obtener una película por su ID
  getMovieById(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.apiUrl}/${id}`); // Solicitud GET a /api/movies/{id}
  }

  // Método para agregar una nueva película
  addMovie(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.apiUrl, movie); // Solicitud POST a /api/movies
  }

  // Método para actualizar una película existente
  updateMovie(id: number, updatedMovie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${this.apiUrl}/${id}`, updatedMovie); // Solicitud PUT a /api/movies/{id}
  }

  // Método para eliminar una película
  deleteMovie(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`); // Solicitud DELETE a /api/movies/{id}
  }
}
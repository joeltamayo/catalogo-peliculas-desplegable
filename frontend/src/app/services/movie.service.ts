import { Injectable } from '@angular/core'; // Importa Injectable para que el servicio pueda ser inyectado en los componentes

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
  private storageKey = 'movies'; // Clave para guardar y recuperar las películas del almacenamiento local

  constructor() {
    this.loadMovies(); // Carga las películas almacenadas al crear el servicio
  }

  private movies: Movie[] = []; // Array privado para almacenar las películas

  // Método para guardar las películas en el almacenamiento local
  private saveMovies() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.movies)); // Convierte las películas a JSON y las guarda
  }

  // Método para cargar las películas desde el almacenamiento local
  private loadMovies() {
    const storedMovies = localStorage.getItem(this.storageKey); // Obtiene las películas guardadas
    this.movies = storedMovies ? JSON.parse(storedMovies) : []; // Si existen, las convierte de JSON a objeto, si no, inicializa como array vacío
  }

  // Método para obtener todas las películas
  getMovies(): Movie[] {
    return [...this.movies]; // Devuelve una copia del array de películas para evitar modificaciones externas
  }

  // Método para obtener una película por su ID
  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id); // Busca la película con el ID proporcionado
  }

  // Método para agregar una nueva película
  addMovie(movie: Movie) {
    movie.id = new Date().getTime(); // Genera un ID único basado en el timestamp
    this.movies.push(movie); // Añade la nueva película al array de películas
    this.saveMovies(); // Guarda las películas actualizadas en el almacenamiento local
  }

  // Método para actualizar una película existente
  updateMovie(id: number, updatedMovie: Movie) {
    const index = this.movies.findIndex(movie => movie.id === id); // Encuentra el índice de la película por ID
    if (index !== -1) { // Si la película existe, actualiza sus datos
      this.movies[index] = { ...updatedMovie, id }; // Reemplaza la película existente por la actualizada, manteniendo el ID original
      this.saveMovies(); // Guarda las películas actualizadas
    }
  }

  // Método para eliminar una película
  deleteMovie(id: number) {
    this.movies = this.movies.filter(movie => movie.id !== id); // Filtra las películas eliminando la que tiene el ID dado
    this.saveMovies(); // Guarda las películas actualizadas
  }
}
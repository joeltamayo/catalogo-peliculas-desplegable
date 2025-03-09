import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private selectedMovie: any = null;

  setMovie(movie: any) {
    this.selectedMovie = movie;
  }

  getMovie() {
    return this.selectedMovie;
  }
}
import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  moviesList = [
    new Movie ('The Shawshank Redemption', '1994', 'Frank Darabont'),
    new Movie ('The Godfather', '1972', 'Francis Ford Coppola'),
    new Movie ('The Dark Knight', '2008', 'Christopher Nolan'),
    new Movie ('The Lord of the Rings: The Return of the King', '2003', 'Peter Jackson'),
  ]

  getMovies() {
    return this.moviesList;
  }

  addMovie(movietitle:string, moviedirector:string, movieyear:string) {
    this.moviesList.push({title:movietitle, year:movieyear, director:moviedirector})
  }
}

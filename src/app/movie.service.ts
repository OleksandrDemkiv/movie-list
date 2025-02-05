import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  moviesList = [
    { id: 1, title: 'The Shawshank Redemption', year: 1994, director: 'Frank Darabont' },
    { id: 2, title: 'The Godfather', year: 1972, director: 'Francis Ford Coppola' },
    { id: 3, title: 'The Dark Knight', year: 2008, director: 'Christopher Nolan' },
    { id: 4, title: 'The Lord of the Rings: The Return of the King', year: 2003, director: 'Peter Jackson' },
  ]

  getMovies() {
    return this.moviesList;
  }
}

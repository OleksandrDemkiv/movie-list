import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  moviesList = [
    { title: 'The Shawshank Redemption', year: '1994', director: 'Frank Darabont' },
    { title: 'The Godfather', year: '1972', director: 'Francis Ford Coppola' },
    { title: 'The Dark Knight', year: '2008', director: 'Christopher Nolan' },
    { title: 'The Lord of the Rings: The Return of the King', year: '2003', director: 'Peter Jackson' },
  ]

  getMovies() {
    return this.moviesList;
  }

  addMovie(movietitle:string, moviedirector:string, movieyear:string) {
    this.moviesList.push({title:movietitle, year:movieyear, director:moviedirector})
  }
}

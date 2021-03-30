import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Utils } from '../core/utils';
import { Movie } from './../model/movie';
import { MovieService } from './../core/movie.service';


@Component({
  selector: "app-movies",
  templateUrl: "movie-list.component.html"
})
export class MovieListComponent implements OnInit {
  displayedColumns = ["name"];
  error: string;
  dataSource = new MatTableDataSource();
  movies: Movie[];

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this._movieService.getMovies().subscribe(movies => {
      this.movies = movies;
      this.dataSource.data = movies;
    }, error => Utils.formatError(error));
  }
}

import { Component } from '@angular/core';
import { Router } from '@angular/router'
import { MaterialImports } from './../../material.imports';
import { MovieRetrieve } from 'src/app/components/movie/movie-retrieve/movie-retrieve';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.html',
  styleUrl: './movies.scss',
  imports: [
    MovieRetrieve,
    ...MaterialImports
  ]
})

export class Movies {

  constructor(private router: Router, private headerService: HeaderService) {

    headerService.setHeaderData({
      title: 'Movies',
      icon: 'movie',
      routerUri: ''
    })
  }

  navigateToMovieCreate() {
    this.router.navigate(['/movies/create']);
  };
}

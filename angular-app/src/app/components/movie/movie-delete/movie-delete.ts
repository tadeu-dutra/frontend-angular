import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';
import { MaterialImports } from 'src/app/material.imports';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-movie-delete',
  imports: [ ...MaterialImports ],
  templateUrl: './movie-delete.html',
  styleUrl: './movie-delete.scss'
})

export class MovieDelete {

  movie: Movie = {
    title: '',
    year: 0,
    genre: '',
    rating: 0
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private movieService: MovieService, 
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.movieService.getById(id!).subscribe(movie => {
      this.movie = movie;
    });
  }

  deleteMovie(): void {
    this.movieService.delete(this.movie.id!).subscribe(() => {
      this.sharedService.showMessage('Movie has been deleted');
      this.router.navigate(['/movies']);
    });
  }

  cancel() {
    this.router.navigate(['/movies'])
  }

}

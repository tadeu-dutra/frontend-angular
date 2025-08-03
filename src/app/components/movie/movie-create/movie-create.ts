import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-movie-create',
  imports: [ MatButtonModule ],
  templateUrl: './movie-create.html',
  styleUrl: './movie-create.scss'
})
export class MovieCreate {

  movie: Movie = {
    title: 'Back to the Begining',
    releaseYear: '2026',
    genres: 'Documentary, Music',
    rating: 5
  }

  constructor(private router: Router, private movieService: MovieService) {}

  createMovie(): void {
    this.movieService.create(this.movie).subscribe(() => {
      this.router.navigate(['/movies']);
    });
  }

  cancel() {
    this.router.navigate(['/movies'])
  }
}

import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router'

@Component({
  selector: 'app-movies',
  imports: [ MatCardModule, MatButtonModule ],
  templateUrl: './movies.html',
  styleUrl: './movies.scss'
})

export class Movies {

  constructor(private router: Router) {}

  navigateToMovieCreate() {
    this.router.navigate(['/movies/create']);
  };
}

import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';
import { MaterialImports } from 'src/app/material.imports';
import { SharedService } from '../../shared/shared.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-update',
  templateUrl: './movie-update.html',
  styleUrl: './movie-update.scss',
  imports: [ CommonModule, ReactiveFormsModule, FormsModule, ...MaterialImports ]
})

export class MovieUpdate {

  movie: Movie = {
    id: 0,
    title: '',
    year: 0,
    genre: '',
    rating: 0
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router, 
    private movieService: MovieService, 
    private sharedService: SharedService,
    private fb: FormBuilder
  ) {}

  updateForm!: FormGroup;

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    
    this.updateForm = this.fb.group({
      id,
      title: ['', [Validators.required, Validators.minLength(5)]],
      year: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      rating: ['', [Validators.required]]
    });

    this.movieService.getById(id!).subscribe((movie) => {
      this.movie = movie;
      this.updateForm.setValue({
        id: movie.id,
        title: movie.title,
        year: movie.year,
        genre: movie.genre,
        rating: movie.rating
      });
    });
  }
  
  errorHandlingForm = (control: string, error: string) => {
    return this.updateForm.controls[control].hasError(error);
  };

  updateMovie(): void {
    if (this.updateForm.valid) {
      this.movieService.update(this.updateForm.value).subscribe(() => {
        this.sharedService.showMessage('Movie has been updated');
        this.router.navigate(['/movies']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/movies'])
  }

}

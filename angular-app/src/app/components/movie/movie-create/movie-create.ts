import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { MaterialImports } from 'src/app/material.imports';
import { SharedService } from '../../shared/shared.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.html',
  styleUrl: './movie-create.scss',
  imports: [ CommonModule, ReactiveFormsModule, FormsModule, ...MaterialImports ]
})
export class MovieCreate {

  constructor(
    private router: Router, 
    private movieService: MovieService, 
    private sharedService: SharedService,
    private fb: FormBuilder
  ) {}

  createForm!: FormGroup;

  ngOnInit(): void {
    this.createForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      year: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      rating: ['', [Validators.required]]
    })

    // alternatively we can use it like this
    //  this.createForm = new FormGroup({
    //   title: new FormControl(['', Validators.required, Validators.minLength(5)]),
    //   year: new FormControl(['', Validators.required]),
    //   genre: new FormControl(['', Validators.required]),
    //   rating: new FormControl(['', Validators.required])
    // })
  }

  errorHandlingForm = (control: string, error: string) => {
    return this.createForm.controls[control].hasError(error);
  };

  createMovie(): void {
    if (this.createForm.valid) {
      this.movieService.create(this.createForm.value).subscribe(() => {
        this.sharedService.showMessage('Movie has been added');
        this.router.navigate(['/movies']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/movies'])
  }
}

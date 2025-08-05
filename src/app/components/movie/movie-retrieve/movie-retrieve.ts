import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie.model';
import { CommonModule } from '@angular/common';
import { MaterialImports } from 'src/app/material.imports';
import { RouterLink } from '@angular/router';
import { DialogService } from '../../shared/dialog.service';
import { SharedService } from '../../shared/shared.service';

@Component({
  selector: 'app-movie-retrieve',
  imports: [ CommonModule, RouterLink, ...MaterialImports ],
  templateUrl: './movie-retrieve.html',
  styleUrl: './movie-retrieve.scss'
})
export class MovieRetrieve {

  movies!: Movie[];
  displayedColumns: string[] = ['title', 'year', 'genre', 'rating', 'actions']

  constructor(private movieService: MovieService, private dialogService: DialogService, private sharedService: SharedService) {}

  ngOnInit(): void {
    this.updateMovies();
  }

  onDelete(id: any) {
    this.dialogService.openConfirmDialog('Delete item?').afterClosed().subscribe((res) => {
      if (res) {
        this.movieService.delete(id).subscribe(() => {
          this.sharedService.showMessage('Movie has been successfully deleted');
          this.updateMovies();
        })
      }
    })
  }

  updateMovies() {
    this.movieService.retrieve().subscribe((movies) => {
      this.movies = movies;
    })
  }
}

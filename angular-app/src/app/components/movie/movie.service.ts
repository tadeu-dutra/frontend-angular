import { Injectable } from '@angular/core';
import { Movie } from './movie.model';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

// import { API } from 'src/app/app.api';
import { SharedService } from '../shared/shared.service';
import { environment } from '../../../environments/environment';
const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  
  constructor(private http: HttpClient, private sharedService: SharedService) {}

  handleError(error: any): Observable<any> {
    let errorMessage;
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error: ${error.status}\nMessage: ${error.message}`;
    }

    this.sharedService.showMessage(errorMessage, true);
    return EMPTY;
  }

  create(movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(`${apiUrl}/movies`, movie).pipe(
      map(obj => obj), 
      catchError(e => this.handleError(e))
    );
  }

  retrieve(): Observable<Movie[]> {
    return this.http.get<Movie[]>(`${apiUrl}/movies`).pipe(
      map(obj => obj), 
      catchError(e => this.handleError(e))
    );
  }

  getById(id: string): Observable<Movie> {
    return this.http.get<Movie>(`${apiUrl}/movies/${id}`).pipe(
      map(obj => obj), 
      catchError(e => this.handleError(e))
    );
  }

  update(movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(`${apiUrl}/movies/${movie.id}`, movie).pipe(
      map(obj => obj), 
      catchError(e => this.handleError(e))
    );
  }

  delete(id: number): Observable<Movie> {
    return this.http.delete<Movie>(`${apiUrl}/movies/${id}`).pipe(
      map(obj => obj), 
      catchError(e => this.handleError(e))
    );
  }
}

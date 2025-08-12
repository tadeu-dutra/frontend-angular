
import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Movies } from './views/movies/movies';
import { MovieCreate } from './components/movie/movie-create/movie-create';
import { MovieUpdate } from './components/movie/movie-update/movie-update';
import { MovieDelete } from './components/movie/movie-delete/movie-delete';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "movies",
        component: Movies
    },
    {
        path: "movies/create",
        component: MovieCreate
    },
    {
        path: "movies/update/:id",
        component: MovieUpdate
    },
    {
        path: "movies/delete/:id",
        component: MovieDelete
    }
];

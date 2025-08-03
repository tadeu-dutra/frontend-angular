
import { Routes } from '@angular/router';
import { Home } from './views/home/home';
import { Movies } from './views/movies/movies';
import { Albums } from './views/albums/albums';
import { MovieCreate } from './components/movie/movie-create/movie-create';
import { AlbumCreate } from './components/album/album-create/album-create';

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
        path: "albums",
        component: Albums
    },
    {
        path: "movies/create",
        component: MovieCreate
    },
    {
        path: "albums/create",
        component: AlbumCreate
    }
];

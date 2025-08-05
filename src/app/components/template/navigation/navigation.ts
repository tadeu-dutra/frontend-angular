import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MaterialImports } from 'src/app/material.imports';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
  imports: [
    RouterLink, 
    RouterOutlet,
    ...MaterialImports
  ]
})

export class Navigation {

}

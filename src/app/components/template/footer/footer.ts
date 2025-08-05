import { Component } from '@angular/core';
import { MaterialImports } from 'src/app/material.imports';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  imports: [ ...MaterialImports ]
})

export class Footer {

}

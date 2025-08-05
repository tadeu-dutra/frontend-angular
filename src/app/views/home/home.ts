import { Component } from '@angular/core';
import { HeaderService } from 'src/app/components/template/header/header.service';
import { MaterialImports } from 'src/app/material.imports';

@Component({
  selector: 'app-home',
  templateUrl: './home.html',
  styleUrl: './home.scss',
  imports: [ ...MaterialImports ]
})

export class Home {

  constructor(private headerService: HeaderService) {
    headerService.setHeaderData({
      title: 'Dashboard',
      icon: 'home',
      routerUri: ''
    })
  }

}

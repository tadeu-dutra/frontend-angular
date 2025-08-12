import { Component } from '@angular/core';
import { MaterialImports } from 'src/app/material.imports';
import { HeaderService } from './header.service';
import { HeaderData } from './header-data.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.scss',
  imports: [ ...MaterialImports ]
})

export class Header {

  title: string = '';
  icon: string = '';
  routerUri: string = '';

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {
    this.headerService.headerData.subscribe((data: HeaderData) => {
      this.title = data.title;
      this.icon = data.icon;
      this.routerUri = data.routerUri
    });
  }

}

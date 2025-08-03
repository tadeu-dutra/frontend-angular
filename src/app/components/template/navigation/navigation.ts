import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [ MatListModule, MatSidenavModule, RouterLink, RouterOutlet ],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})

export class Navigation {

}

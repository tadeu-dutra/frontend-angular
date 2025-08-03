import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-albums',
  imports: [ MatCardModule, MatButtonModule ],
  templateUrl: './albums.html',
  styleUrl: './albums.scss'
})

export class Albums {

  constructor(private router: Router) {}

  navigateToAlbumCreate() {
    this.router.navigate(['/albums/create']);
  };
}

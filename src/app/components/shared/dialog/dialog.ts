import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MaterialImports } from 'src/app/material.imports';

@Component({
  selector: 'app-dialog',
  imports: [ ...MaterialImports ],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss'
})

export class Dialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Dialog } from './dialog/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  
  constructor(private dialog: MatDialog) {}

  openConfirmDialog(message: string) {
    return this.dialog.open(Dialog, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,
      data: {
        message: message
      }
    })
  }
  
}

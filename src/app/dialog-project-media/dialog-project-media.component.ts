import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose,MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { EMediaType, IDescriptedMedia } from '../Interfaces/IProject';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-dialog-project-media',
  standalone:true,
  imports: [MatDialogTitle, MatDialogContent, MatDialogActions, MatDialogClose, MatButtonModule, MatCardModule],
  templateUrl: './dialog-project-media.component.html',
  styleUrl: './dialog-project-media.component.scss'
})
export class DialogProjectMediaComponent {


  constructor(
    public dialogRef: MatDialogRef<DialogProjectMediaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IDescriptedMedia 
  ) {  }
  
  
}

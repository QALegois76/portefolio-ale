import { Component, ViewEncapsulation,Input,input } from '@angular/core';
import { IDescriptedMedia, IProject } from '../Interfaces/IProject';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { DialogProjectMediaComponent } from '../dialog-project-media/dialog-project-media.component';
import { MatCardModule } from '@angular/material/card';



@Component({
  selector: 'app-project-item',
  imports: [MatCardModule, CommonModule, CarouselModule, MatDialogModule, DialogProjectMediaComponent, MatCardModule],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss',
})
export class ProjectItemComponent {

  responsiveOptions = []

  @Input() project: IProject = {
    name: 'Project',
    description: 'description',
    icon: "assets/img.png",
    date: new Date(),
    images: [],
  };


  // constructor
  constructor(private dialog: MatDialog){}

  onCardItemClick(item: IDescriptedMedia)
  {
    this.dialog.open(DialogProjectMediaComponent,
      {
        data: item,
        width: '900px',
        maxWidth: '900px',
        maxHeight: '2000px',
        height:'auto',        
        panelClass : "dialog-project-media"
        
       });
  }

}

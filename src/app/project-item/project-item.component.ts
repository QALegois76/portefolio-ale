import { Component,Input,input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IProject } from '../Interfaces/IProject';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-project-item',
  imports: [MatCardModule, CommonModule, CarouselModule],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.css'
})
export class ProjectItemComponent {

  responsiveOptions = [

          ]

  @Input() project: IProject = {
    name: 'Project',
    description: 'description',
    icon: "assets/img.png",
    images: [],
  };

}

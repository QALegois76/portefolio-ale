import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ICompetence } from '../Interfaces/ICompetence';
import { CommonModule } from '@angular/common';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-competence-item',
  imports: [MatCardModule, CommonModule, MatProgressBarModule],
  templateUrl: './competence-item.component.html',
  styleUrl: './competence-item.component.scss'
})
export class CompetenceItemComponent {

  @Input() competence: ICompetence =
    {
      name: 'Competence',
      description: 'description',
      icon: "assets/img.png",
      progress:0.5,
      tags: []
    };
  
}



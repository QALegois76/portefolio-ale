import { Component, Input } from '@angular/core';
import { IExperience } from '../Interfaces/IExperience';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-experience-item',
  imports: [MatCardModule],
  templateUrl: './experience-item.component.html',
  styleUrl: './experience-item.component.css'
})
export class ExperienceItemComponent {

  @Input() experience: IExperience = {
    name: 'Experience',
    start: new Date(1970, 1, 1),
    end: new Date(1970, 1, 1),
    company: 'company',
    description: 'description',
    icon : "assets/img.png"
  };


  getDate(date: Date) {
    date = new Date(date);
    return date.getMonth().toString().padStart(2, '0') + '/' +  date.getFullYear();
  }

}

import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IExperience } from '../Interfaces/IExperience';
import { ExperienceItemComponent } from "../experience-item/experience-item.component";

@Component({
  selector: 'app-experiences-component',
  imports: [CommonModule, ExperienceItemComponent],
  templateUrl: './experiences-component.component.html',
  styleUrl: './experiences-component.component.css'
})
  
  
export class ExperiencesComponentComponent {

  experiences: IExperience[] = [];

  ngOnInit() {
    this.getExperiences();
  }

  async getExperiences() {
    try {
      var resp = await fetch('assets/experiences.json');

      resp.ok ? this.experiences = await resp.json() : console.log(resp.body);
      
    }
    catch (e) {
      console.log(e);
    }
  }

}

import { Component } from '@angular/core';
import { CompetenceItemComponent } from "../competence-item/competence-item.component";
import { CommonModule } from '@angular/common';
import { ICompetence } from '../Interfaces/ICompetence';


@Component({
  selector: 'app-competences-component',
  imports: [CompetenceItemComponent, CommonModule],
  templateUrl: './competences-component.component.html',
  styleUrl: './competences-component.component.css'
})
export class CompetencesComponentComponent {

    competences : ICompetence[] = [];

  ngOnInit() {
    this.getCompetences();
  }

  async getCompetences() {
    try {
      var resp = await fetch('assets/competence.json');

      resp.ok ? this.competences = await resp.json() : console.log(resp.body);
      
      if (this.competences.length != 0)
      {
        this.competences = this.competences.sort((a, b) => a.progress - b.progress).reverse();
      }
    }
    catch (e) {
      console.log(e);
    }
  }

}

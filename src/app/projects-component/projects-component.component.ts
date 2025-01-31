import { Component } from '@angular/core';
import { ProjectItemComponent } from "../project-item/project-item.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-projects-component',
  imports: [ProjectItemComponent, CommonModule],
  templateUrl: './projects-component.component.html',
  styleUrl: './projects-component.component.css'
})
  
  
export class ProjectsComponentComponent {

  projects = [];

  ngOnInit() {
    this.getProjects();
  }

  async getProjects() {
    try {
      var resp = await fetch('assets/projects.json');

      resp.ok ? this.projects = await resp.json() : console.log(resp.body);
      
    }
    catch (e) {
      console.log(e);
    }
  }


}

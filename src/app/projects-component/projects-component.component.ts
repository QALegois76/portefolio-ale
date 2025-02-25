import { Component } from '@angular/core';
import { ProjectItemComponent } from "../project-item/project-item.component";
import { CommonModule } from '@angular/common';
import { IProject } from '../Interfaces/IProject';


@Component({
  selector: 'app-projects-component',
  imports: [ProjectItemComponent, CommonModule],
  templateUrl: './projects-component.component.html',
  styleUrl: './projects-component.component.css'
})
  
  
export class ProjectsComponentComponent {

  projects : IProject[] = [];

  ngOnInit() {
    this.getProjects();
  }

  async getProjects() {
    try {
      var resp = await fetch('assets/projects.json');

      resp.ok ? this.projects = await resp.json() : console.log(resp.body);
      
      this.projects.sort((a,b)=> new Date(a.date).getTime() - new Date(b.date).getTime()).reverse()

    }
    catch (e) {
      console.log(e);
    }
  }


}

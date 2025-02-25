import { Component, inject } from '@angular/core';
import { FormationComponentComponent } from "../formationItem-component/formationItem-component.component";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { IFormation } from '../Interfaces/IFormation';


@Component({
  selector: 'app-formations-component',
  imports: [FormationComponentComponent, CommonModule],
  templateUrl: './formations-component.component.html',
  styleUrl: './formations-component.component.css'
})
  
  
  
export class FormationsComponentComponent {



    dataFormation: IFormation[] = [];


  ngOnInit() {
    this.getFormations();
  }

  // just for study
  private http: HttpClient = inject(HttpClient);
  
  constructor() {
  }
  
  async getFormations() {

    try
    {
      var res = await fetch('assets/formations.json');
      
      res.ok ? this.dataFormation = await res.json() : console.log(res.body);

      
      if (this.dataFormation.length != 0)
        {
          this.dataFormation = this.dataFormation.sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime()).reverse();
      }



    }
    catch (e)
    {
      console.log(e);
    }
    
  }




}

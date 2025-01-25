import { Component, inject } from '@angular/core';
import { FormationComponentComponent } from "../formationItem-component/formationItem-component.component";
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatCard } from '@angular/material/card';


@Component({
  selector: 'app-formations-component',
  imports: [FormationComponentComponent, CommonModule, MatCard],
  templateUrl: './formations-component.component.html',
  styleUrl: './formations-component.component.css'
})
  
  
  
export class FormationsComponentComponent {



    dataFormation: any;


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

    }
    catch (e)
    {
      console.log(e);
    }
    
  }




}

import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IFormation } from '../Interfaces/IFormation';

@Component({
  selector: 'formationItem-component',
  imports: [MatCardModule],
  templateUrl: './formationItem-component.component.html',
  styleUrl: './formationItem-component.component.css'
})
  
  
  
export class FormationComponentComponent {

  @Input() formation :IFormation ={
    name: 'Formation',
    start: '1970',
    end: '1970',
    diploma: '',
    option: '',
    icon: 'assets/img.png',
    description: ''
  };
}


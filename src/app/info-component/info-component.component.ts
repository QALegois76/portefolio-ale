import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { ViewEncapsulation } from '@angular/core'


@Component({
  selector: 'app-info-component',
  imports: [MatButtonModule, MatCardModule],
  templateUrl: './info-component.component.html',
  styleUrl: './info-component.component.css'
})
export class InfoComponentComponent {

}

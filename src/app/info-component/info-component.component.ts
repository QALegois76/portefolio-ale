import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import {  bootstrapLinkedin,bootstrapCarFrontFill } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-info-component',
  imports: [
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    NgIcon
  ],
  viewProviders: [provideIcons({ featherAirplay, bootstrapLinkedin,bootstrapCarFrontFill })],
  templateUrl: './info-component.component.html',
  styleUrl: './info-component.component.css'
})
export class InfoComponentComponent {

}

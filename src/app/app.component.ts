import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';





@Component({
  selector: 'app-root',
  imports:
    [
      RouterOutlet,
      MatIconModule,
      MatButtonModule,
      MatListModule,
      MatToolbarModule,
      MatCardModule,
      RouterModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
  

  
  
export class AppComponent {

  

  title = 'portefolio-ale';
}

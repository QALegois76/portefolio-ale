import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { StarBackgroundComponentComponent } from "./star-background-component/star-background-component.component";





@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    RouterModule,
    StarBackgroundComponentComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})




export class AppComponent {

  title = 'portefolio-ale';


}

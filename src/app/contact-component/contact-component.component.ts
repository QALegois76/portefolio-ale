import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { featherAirplay } from '@ng-icons/feather-icons';
import {  bootstrapLinkedin,bootstrapGithub } from '@ng-icons/bootstrap-icons';


@Component({
  selector: 'app-contact-component',
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    NgIcon
  ],
  viewProviders: [provideIcons({ featherAirplay, bootstrapLinkedin,bootstrapGithub })],
  templateUrl: './contact-component.component.html',
  styleUrl: './contact-component.component.css'
})
export class ContactComponentComponent {


  // Form data object
  formData = {
    name: '',
    email: '',
    message: '',
  };

  // Form submission handler
  onSubmit() {
    console.log('Form Data:', this.formData);
    alert('Thank you for your message! I will get back to you soon.');
    this.resetForm();
  }

  // Reset form after submission
  resetForm() {
    this.formData = {
      name: '',
      email: '',
      message: '',
    };
  }
}

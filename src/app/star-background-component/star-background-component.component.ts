import { Component, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-background-component',
  imports: [CommonModule],
  templateUrl: './star-background-component.component.html',
  styleUrl: './star-background-component.component.scss'
})
export class StarBackgroundComponentComponent implements OnInit {


  private starCount = 400; 
  private shootingStarChance = 0.1; 
  private shootingStarInterval: any;

  constructor(private el: ElementRef, private renderer: Renderer2) { }



  ngOnInit() {
    this.generateStars();
    this.startShootingStars();
    this.createNebula();
  }

  generateStars() {
    const container = this.el.nativeElement.querySelector('.star-container');

    for (let i = 0; i < this.starCount; i++) {
      const star = this.renderer.createElement('div');
      this.renderer.addClass(star, 'star');

      // Position aléatoire
      this.renderer.setStyle(star, 'top', `${Math.random() * 100}vh`);
      this.renderer.setStyle(star, 'left', `${Math.random() * 100}vw`);

      // Ajouter une profondeur aléatoire (couches de parallaxe)
      const depth = Math.random() * 3 + 1; // Entre 1 et 4
      this.renderer.setAttribute(star, 'data-depth', depth.toString());

      // Clignotement indépendant : durée et délai aléatoires
      const duration = Math.random() * 3 + 2; // Entre 2 et 5s
      const delay = Math.random() * 3; // Jusqu'à 3s de délai
      this.renderer.setStyle(star, 'animation-duration', `${duration}s`);
      this.renderer.setStyle(star, 'animation-delay', `-${delay}s`);

      container.appendChild(star);
    }
  }

  shootingStar() {
    if (Math.random() < this.shootingStarChance) {
      const container = this.el.nativeElement.querySelector('.star-container');
      const star = this.renderer.createElement('div');
      this.renderer.addClass(star, 'shooting-star');

      // Position initiale aléatoire
      const startX = Math.random() * 100;
      const startY = Math.random() * 100;
      this.renderer.setStyle(star, 'top', `${startY}vh`);
      this.renderer.setStyle(star, 'left', `${startX}vw`);

      container.appendChild(star);

      // Supprimer après animation
      setTimeout(() => container.removeChild(star), 1000);
    }
  }

   startShootingStars() {
    this.shootingStarInterval = setInterval(() => {
      this.createShootingStar();
    }, Math.random() * 1000); // Une étoile filante toutes les 3 à 8 secondes
  }

  createNebula() {
  const container = this.el.nativeElement.querySelector('.star-container');

  for (let i = 0; i < 3; i++) { // 3 nébuleuses pour varier l'effet
    const nebula = this.renderer.createElement('div');
    this.renderer.addClass(nebula, 'nebula');

    // Position aléatoire
    this.renderer.setStyle(nebula, 'top', `${Math.random() * 80}vh`);
    this.renderer.setStyle(nebula, 'left', `${Math.random() * 80}vw`);

    container.appendChild(nebula);
  }
}

  createShootingStar() {
    const container = this.el.nativeElement.querySelector('.star-container');
    const shootingStar = this.renderer.createElement('div');
    this.renderer.addClass(shootingStar, 'shooting-star');

    // Position initiale aléatoire (dans le coin supérieur gauche)
    this.renderer.setStyle(shootingStar, 'top', `${Math.random() * 100}vh`);
    this.renderer.setStyle(shootingStar, 'left', `${Math.random() * 100}vw`);

    container.appendChild(shootingStar);

    // Déclenche l'animation et supprime l'étoile filante une fois l'animation terminée
    setTimeout(() => {
      this.renderer.setStyle(shootingStar, 'animation', 'shooting-star 1.5s ease-out forwards');
    }, 50);

    setTimeout(() => {
      container.removeChild(shootingStar);
    }, 2000);
  }


   @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const stars = this.el.nativeElement.querySelectorAll('.star');
    const { clientX, clientY } = event;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    stars.forEach((star: HTMLElement) => {
      const depth = parseFloat(star.getAttribute('data-depth') || '1');
      const moveX = (clientX - centerX) / depth / 10; // Moins de mouvement pour les étoiles éloignées
      const moveY = (clientY - centerY) / depth / 10;

      this.renderer.setStyle(star, 'transform', `translate(${moveX}px, ${moveY}px)`);
    });
  }




}

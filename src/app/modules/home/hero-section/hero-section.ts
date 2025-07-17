import { Component } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  imports: [],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css'
})
export class HeroSection {

  scrollToSection() {
    const target = document.getElementById('targetScroll');
    if (target) {
      const navbarHeight = 80; // Ganti dengan tinggi navbar Anda (dalam piksel)
      const targetPosition = target.getBoundingClientRect().top + window.scrollY; // Posisi elemen relatif terhadap halaman
      const offsetPosition = targetPosition - navbarHeight; // Kurangi tinggi navbar

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth' // Scroll halus
      });
    }
  }


}

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash-screen',
  imports: [CommonModule],
  templateUrl: './splash-screen.html',
  styleUrl: './splash-screen.css'
})
export class SplashScreen implements OnInit {
  fadeOut = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Show splash for 3 seconds then fade out
    setTimeout(() => {
      this.fadeOut = true;

      // Navigate to home after fadeOut animation completes
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 500); // Transition duration matches CSS animation

    }, 3000);
  }
}
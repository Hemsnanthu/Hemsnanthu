import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isNavbarHidden = false;
  isMobileMenuOpen = false;
  private lastScrollTop = 0;

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > this.lastScrollTop && currentScroll > 50) {
      // 🔽 scrolling down → hide navbar
      this.isNavbarHidden = true;
    } else {
      // 🔼 scrolling up → show navbar
      this.isNavbarHidden = false;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  goToBlog() {
    this.router.navigate(['/blog']);
  }
}

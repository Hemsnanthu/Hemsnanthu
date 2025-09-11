import { NgClass } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
   isNavbarHidden = false;
  private lastScrollTop = 0;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScroll = window.scrollY;

    if (currentScroll > this.lastScrollTop) {
      // 🔽 scrolling down → hide navbar
      this.isNavbarHidden = true;
    } else {
      // 🔼 scrolling up → show navbar
      this.isNavbarHidden = false;
    }

    this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
  }

}

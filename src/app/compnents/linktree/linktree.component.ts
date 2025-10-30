import { Component } from '@angular/core';

@Component({
  selector: 'app-linktree',
  templateUrl: './linktree.component.html',
  styleUrls: ['./linktree.component.css']
})
export class LinktreeComponent {
  profile = {
    name: 'Nanthakumar',
    avatar: 'assets/profile.jpg', // place your image in assets folder
    links: [
      {
        label: 'LinkedIn',
        url: 'https://www.linkedin.com/in/your-profile',
        icon: 'bi bi-linkedin'
      },
      {
        label: 'WhatsApp',
        url: 'https://wa.me/919876543210', // replace with your number
        icon: 'bi bi-whatsapp'
      },
      {
        label: 'Mail',
        url: 'mailto:yourmail@example.com',
        icon: 'bi bi-envelope-fill'
      },
      {
        label: 'GitHub',
        url: 'https://github.com/your-username',
        icon: 'bi bi-github'
      }
    ]
  };
}

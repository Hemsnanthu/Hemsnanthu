import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Add this
import { FooterComponent } from "../footer/footer.component";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent, CommonModule], // <-- Add CommonModule here
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  statusMessage: string = '';

  sendEmail(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    // Optional: Set status to sending so user knows it's working
    this.statusMessage = 'Sending...';

    emailjs.sendForm(
      'service_jc9entp',   
      'template_9athmco',  
      form,
      'TInT1ZxxbHyb63G8U'       
    )
    .then(
      (result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.statusMessage = 'Message sent successfully!';
        form.reset(); 
      },
      (error) => {
        console.error(error.text);
        this.statusMessage = 'Failed to send message. Please try again.';
      }
    );
  }
}

import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  statusMessage: string = '';

  sendEmail(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    emailjs.sendForm(
      'service_jc9entp',   // Replace with your EmailJS Service ID
      'template_9athmco',  // Replace with your EmailJS Template ID
      form,
      'TInT1ZxxbHyb63G8U'       // Replace with your EmailJS User ID / Public Key
    )
    .then(
      (result: EmailJSResponseStatus) => {
        console.log(result.text);
        this.statusMessage = 'Message sent successfully!';
        form.reset(); // Reset form after sending
      },
      (error) => {
        console.error(error.text);
        this.statusMessage = 'Failed to send message. Please try again.';
      }
    );
  }
}

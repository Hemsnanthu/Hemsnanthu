import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './compnents/home/home.component';
import { HeaderComponent } from './compnents/header/header.component';
import { FooterComponent } from './compnents/footer/footer.component';
import { SkillsComponent } from './compnents/skills/skills.component';
import { ProjectsComponent } from './compnents/projects/projects.component';
import { ContactComponent } from './compnents/contact/contact.component';
import { AboutComponent } from "./compnents/about/about.component";
import { BlogComponent } from './compnents/blog/blog.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BlogComponent, HomeComponent, HeaderComponent, AboutComponent, FooterComponent, SkillsComponent, ProjectsComponent, ContactComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}

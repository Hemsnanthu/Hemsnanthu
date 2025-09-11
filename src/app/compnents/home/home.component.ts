import { Component } from '@angular/core';
import { SkillsComponent } from "../skills/skills.component";
import { HeaderComponent } from "../header/header.component";
import { AboutComponent } from "../about/about.component";
import { ProjectsComponent } from "../projects/projects.component";
import { ContactComponent } from "../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';
import { BlogComponent } from "../blog/blog.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, SkillsComponent, HeaderComponent, AboutComponent, ProjectsComponent, ContactComponent, FooterComponent, BlogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

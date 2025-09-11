import { Routes } from '@angular/router';
import { AboutComponent } from './compnents/about/about.component';
import { ContactComponent } from './compnents/contact/contact.component';
import { HomeComponent } from './compnents/home/home.component';
import { HeaderComponent } from './compnents/header/header.component';
import { FooterComponent } from './compnents/footer/footer.component';
import { SkillsComponent } from './compnents/skills/skills.component';
import { ProjectsComponent } from './compnents/projects/projects.component';
import { BlogComponent } from './compnents/blog/blog.component';


export const routes: Routes = [

     { path: '', component: HomeComponent },   // Home + sections
  { path: 'blog', component: BlogComponent },
  { path: '**', redirectTo: '' }  
];

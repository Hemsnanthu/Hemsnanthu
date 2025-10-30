import { Routes } from '@angular/router';
import { AboutComponent } from './compnents/about/about.component';
import { ContactComponent } from './compnents/contact/contact.component';
import { HomeComponent } from './compnents/home/home.component';
import { HeaderComponent } from './compnents/header/header.component';
import { FooterComponent } from './compnents/footer/footer.component';
import { SkillsComponent } from './compnents/skills/skills.component';
import { ProjectsComponent } from './compnents/projects/projects.component';
import { BlogComponent } from './compnents/blog/blog.component';
import { LinktreeComponent } from './compnents/linktree/linktree.component';


export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'portfolio' },         // Home + sections
  { path: 'portfolio', component: HomeComponent },   // Home + sections
  { path: 'blog', component: BlogComponent },
  {path:'links',component:LinktreeComponent},
  { path: '**', redirectTo: 'portfolio' }
];

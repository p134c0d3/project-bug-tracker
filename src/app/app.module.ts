import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BugsComponent } from './bugs/bugs.component';
import { ClientsComponent } from './bugs/clients/clients.component';
import { ClientComponent } from './bugs/clients/client/client.component';
import { ProjectsComponent } from './bugs/projects/projects.component';
import { ProjectComponent } from './bugs/projects/project/project.component';
import { BugComponent } from './bugs/projects/project/bug/bug.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './home/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BugsComponent,
    ClientsComponent,
    ClientComponent,
    ProjectsComponent,
    ProjectComponent,
    BugComponent,
    ProfileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

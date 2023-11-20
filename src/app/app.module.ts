import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Router, RouterModule, Routes } from '@angular/router';

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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { FilterPipe } from './bugs/filter.pipe';
import { ShortenPipe } from './bugs/shorten.pipe';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'clients', component: ClientComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'profile', component: ProfileComponent },
];
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
    NavbarComponent,
    FilterPipe,
    ShortenPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { TuteurComponent } from './admin/tuteur/tuteur.component';
import { ProfesseurComponent } from './admin/professeur/professeur.component';
import { EtudiantComponent } from './admin/etudiant/etudiant.component';
import { StageComponent } from './admin/stage/stage.component';
import { EntrepriseComponent } from './admin/entreprise/entreprise.component';
import { AuthentificationComponent } from './admin/authentification/authentification.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './shared/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TuteurComponent,
    ProfesseurComponent,
    EtudiantComponent,
    StageComponent,
    EntrepriseComponent,
    AuthentificationComponent,
    FooterComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

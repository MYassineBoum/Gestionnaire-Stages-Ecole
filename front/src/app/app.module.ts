import { MatSidenavModule } from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material-module';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { LayoutComponent } from './admin/layout/layout.component';
import { IdentificationComponent } from './shared/identification/identification.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { PromotionComponent } from './admin/promotion/promotion.component';
import { TypeComponent } from './admin/type/type.component';
import { AppHttpInterceptor } from './interceptors/app-http.interceptor';
import { PromotionPopupComponent } from './admin/promotion-popup/promotion-popup.component';
import { ProfesseurPopupComponent } from './admin/professeur-popup/professeur-popup.component';

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
    DashboardComponent,
    LayoutComponent,
    IdentificationComponent,
    PromotionComponent,
    TypeComponent,
    PromotionPopupComponent,
    ProfesseurPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MaterialModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

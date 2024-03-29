import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AuthentificationComponent } from './admin/authentification/authentification.component';
import { EntrepriseComponent } from './admin/entreprise/entreprise.component';
import { EtudiantComponent } from './admin/etudiant/etudiant.component';
import { ProfesseurComponent } from './admin/professeur/professeur.component';
import { StageComponent } from './admin/stage/stage.component';
import { TuteurComponent } from './admin/tuteur/tuteur.component';
import { LayoutComponent } from './admin/layout/layout.component';
import { IdentificationComponent } from './shared/identification/identification.component';
import { UserInterfaceComponent } from './userinterface/userinterface.component';
import { PromotionComponent } from './admin/promotion/promotion.component';
import { TypeComponent } from './admin/type/type.component';
import { authenticationGuard } from './guards/authentication.guard';
import { CompetenceComponent } from './admin/competence/competence.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', component: HomeComponent },
  ]},

  { path: 'userinterface', component: UserInterfaceComponent, children: [
    { path: '', component: UserInterfaceComponent },
  ]},
  
  { path: 'identification', component: IdentificationComponent, children: [
    { path: '', component: IdentificationComponent },
  ]},

  { path: 'promotion', component: LayoutComponent, canActivate: [authenticationGuard], children: [
    { path: '', component: PromotionComponent },
  ]},

  { path: 'type', component: LayoutComponent, canActivate: [authenticationGuard], children: [
    { path: '', component: TypeComponent },
  ]},

  { path: 'dashboard', component: LayoutComponent, canActivate: [authenticationGuard], children: [
    { path: '', component: DashboardComponent },
  ]},

  { path: 'authentification', component: AuthentificationComponent, children: [
    { path: '', component: AuthentificationComponent },
  ]},

  { path: 'entreprise', component: LayoutComponent, canActivate: [authenticationGuard], children: [
    { path: '', component: EntrepriseComponent },
  ]},

  { path: 'etudiant', component: LayoutComponent, canActivate: [authenticationGuard], children: [
    { path: '', component: EtudiantComponent },
  ]},

  { path: 'compétence', component: LayoutComponent, canActivate: [authenticationGuard], children: [
    { path: '', component: CompetenceComponent },
  ]},

  { path: 'professeur', component: LayoutComponent, canActivate: [authenticationGuard], children: [
    { path: '', component: ProfesseurComponent },
  ]},

  { path: 'stage', component: LayoutComponent, canActivate: [authenticationGuard], children: [
    { path: '', component: StageComponent },
  ]},

  { path: 'tuteur', component: LayoutComponent, canActivate: [authenticationGuard], children: [
    { path: '', component: TuteurComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

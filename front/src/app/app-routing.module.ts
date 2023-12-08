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

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', component: HomeComponent },
  ]},

  { path: 'dashboard', component: LayoutComponent, children: [
    { path: '', component: DashboardComponent },
  ]},

  { path: 'authentification', component: AuthentificationComponent, children: [
    { path: '', component: AuthentificationComponent },
  ]},

  { path: 'entreprise', component: LayoutComponent, children: [
    { path: '', component: EntrepriseComponent },
  ]},

  { path: 'etudiant', component: LayoutComponent, children: [
    { path: '', component: EtudiantComponent },
  ]},

  { path: 'professeur', component: LayoutComponent, children: [
    { path: '', component: ProfesseurComponent },
  ]},

  { path: 'stage', component: LayoutComponent, children: [
    { path: '', component: StageComponent },
  ]},

  { path: 'tuteur', component: LayoutComponent, children: [
    { path: '', component: TuteurComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

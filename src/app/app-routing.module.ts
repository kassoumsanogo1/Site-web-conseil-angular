import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { HomeComponent } from './home/home.component';
import { SingupComponent } from './singup/singup.component';
import { AdminComponent } from './admin/admin.component';
import { FiltreResultComponent } from './filtre-result/filtre-result.component';
import { ProfilComponent } from './profil/profil.component';


const routes: Routes = [
  
  {
    path : 'login',
    component: LoginComponent
  },
  {
    path : 'recherche',
    component: FormulaireComponent
  },
  {
    path : 'resultats',
    component: ResultatsComponent
  },
  {
    path : '',
    component: HomeComponent
  },
  {
    path : 'signup',
    component: SingupComponent
  },
  {
    path: 'admin',
    component : AdminComponent,
  },
  {
    path: 'filtre',
    component : FiltreResultComponent,
  }, 
  {
    path: 'profil',
    component : ProfilComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

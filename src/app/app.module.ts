import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebook, faTwitter, faInstagram, faTiktok, faPinterest, faSnapchat } from '@fortawesome/free-brands-svg-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FooterComponent } from './footer/footer.component';
import { ResultatsComponent } from './resultats/resultats.component';
import { HomeComponent } from './home/home.component';
import { SingupComponent } from './singup/singup.component';
import { AdminComponent } from './admin/admin.component';
import { FiltreResultComponent } from './filtre-result/filtre-result.component';
import { ProfilComponent } from './profil/profil.component';

library.add(faFacebook, faTwitter, faInstagram, faTiktok, faPinterest, faSnapchat);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormulaireComponent,
    NavbarComponent,
    PresentationComponent,
    FooterComponent,
    ResultatsComponent,
    HomeComponent,
    SingupComponent,
    AdminComponent,
    FiltreResultComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

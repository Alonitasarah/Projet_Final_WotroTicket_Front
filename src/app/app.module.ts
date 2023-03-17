import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ContactComponent } from './contact/contact.component';
import { AproposComponent } from './apropos/apropos.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormallerComponent } from './formaller/formaller.component';
import { FormallerretourComponent } from './formallerretour/formallerretour.component';
import { RechercheComponent } from './recherche/recherche.component';
import { ReserverComponent } from './reserver/reserver.component';
import { GareComponent } from './gare/gare.component';
import { HttpClientModule  } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AcceuilComponent,
    ContactComponent,
    AproposComponent,
    ConnecterComponent,
    InscriptionComponent,
    FormallerComponent,
    FormallerretourComponent,
    RechercheComponent,
    ReserverComponent,
    GareComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

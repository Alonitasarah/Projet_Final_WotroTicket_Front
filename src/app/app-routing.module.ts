import { ReserverComponent } from './reserver/reserver.component';
import { FooterComponent } from './footer/footer.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactComponent } from './contact/contact.component';
import { ConnecterComponent } from './connecter/connecter.component';
import { RechercheComponent } from './recherche/recherche.component';
import { FormallerretourComponent } from './formallerretour/formallerretour.component';
import { FormallerComponent } from './formaller/formaller.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GareComponent } from './gare/gare.component';

const routes: Routes = [
// {
//     path: "",
//     component: AcceuilComponent

// },
{
  path: 'acceuil',
  component: AcceuilComponent
},
{ path: '',   redirectTo: '/acceuil', pathMatch: 'full' },

{
  path: 'formaller',
  component: FormallerComponent
},

{
  path: 'formallerretour',
  component: FormallerretourComponent
},

{
  path: 'recherche',
  component: RechercheComponent
},
{
  path:'contact',
  component:ContactComponent
},
{
  path:'apropos',
  component: AproposComponent,
},
{
  path: 'connecter',
  component: ConnecterComponent
},
{
  path:'inscrire',
  component:InscriptionComponent
},
{
  path:'footer',
  component:FooterComponent
},
{
  path:'navbar',
  component:NavbarComponent
},
{
  path:'gare',
  component:GareComponent
},
{
  path:'reserver',
  component:ReserverComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

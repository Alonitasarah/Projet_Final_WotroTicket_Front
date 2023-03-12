import { FormallerretourComponent } from './formallerretour/formallerretour.component';
import { FormallerComponent } from './formaller/formaller.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class CompagnieModule { 
  "id_compagny"!: number;
  "nom": string;
  "email": string;
  "adresse": string;
  "telephone": string;
}

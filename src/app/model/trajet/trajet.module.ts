import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TrajetModule { 
  "id_trajet"!: number;
  "typ_voyage": string;
  "depart": string;
  "destination": string;
  "datealler": Date;

}

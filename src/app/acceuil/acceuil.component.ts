import { Component } from '@angular/core';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent {
linkactive= false;

onactive(){
  
  if (!this.linkactive) {
    this.linkactive=true;
  }else{
    this.linkactive = false;
  }
  

}
}

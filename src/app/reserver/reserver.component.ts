import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-reserver',
  templateUrl: './reserver.component.html',
  styleUrls: ['./reserver.component.css']
})
export class ReserverComponent implements OnInit{
  

  
  formaller!:FormGroup;
  formSearch!: FormGroup;

  numero: string = '';
  nom: string = '';

  
  data!:any;

  constructor(private apiservice : ApiService,private fb: FormBuilder, private route: ActivatedRoute){

  }

  
ngOnInit(): void {
  this.data ={
    "villedepart":this.route.snapshot.queryParams['villedepart'],
    "villearriver":this.route.snapshot.queryParams['villearriver'],
    "datealler":this.route.snapshot.queryParams['datealler'],
    "nombrepersonne":this.route.snapshot.queryParams['nombrepersonne'],
  }

  // initialiser un tableau vide  
  this.formSearch = this.fb.group({
    villedepart: [''],
    villedestination: [''],
    datealler: [''],
    nombrepersonne: [''],
  });

// pour récupérer l'id des éléments des champs remplis par l'utilisateur
  let gotoHome = this.route.snapshot.queryParams['keyword'] ?? false;
  console.log(this.route.snapshot.queryParams['villearriver'] );
  if ( !(typeof gotoHome == "boolean") ) {
    this.formSearch.controls["villedepart"].setValue( this.route.snapshot.queryParams['villedepart'] );
    this.formSearch.controls["villearriver"].setValue( this.route.snapshot.queryParams['villearriver'] );
    this.formSearch.controls["datealler"].setValue( this.route.snapshot.queryParams['datealler'] );
    this.formSearch.controls["nombrepersonne"].setValue( this.route.snapshot.queryParams['nombrepersonne'] );
  }  

}

// pour cachr le paiemment
  show =false;
  message= false
  afficher(){
    this.show = true
  }
// afficher le paiement
  showMessage()
  {
    this.message =true
    this.nom = ""
    this.numero =""
  }
}

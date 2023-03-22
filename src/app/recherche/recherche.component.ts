import { Component, OnInit } from '@angular/core';
import { ApiService } from './../service/api.service';
import { TrajetModule } from './../model/trajet/trajet.module';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  
  dataSearch: {} = {};
  formSearch!: FormGroup;
  show=false;
  data!:any;

  constructor(private apiservice : ApiService,private fb: FormBuilder, private route: ActivatedRoute){

  }

  trajet!: TrajetModule[];

  ngOnInit(): void {
    
// pour afficher les trajets correspondants à celui que l'utilisateur à rentrer
    if(this.route.snapshot.queryParams['villedepart'] == "abidjan" && this.route.snapshot.queryParams['villearriver'] == "agboville" && this.route.snapshot.queryParams['transporteur'] == "sbta" && this.route.snapshot.queryParams['transporteur'])
    {
      if (this.show=true) {
        this.show=true
      }
      
    }else{
      this.show=false
    }

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

}

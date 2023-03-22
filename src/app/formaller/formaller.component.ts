import { TrajetModule } from './../model/trajet/trajet.module';
import { CompagnieModule } from './../model/compagnie/compagnie.module';
import { VilleModule } from './../model/ville/ville.module';
import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, NgForm, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-formaller',
  templateUrl: './formaller.component.html',
  styleUrls: ['./formaller.component.css']
})
export class FormallerComponent implements OnInit{

  formaller !:FormGroup
  villedepart = 0;
  villearriver = 0;
  transporteur = 0;
  datealler=0;
  nombrepersonne=0;
  dataToServer :any;

  constructor(private apiservice : ApiService, private FormBuilder:FormBuilder,private router:Router){}

   loader:boolean = false
   villes!:VilleModule[];
   compagnies!: CompagnieModule[];
   trajet!: TrajetModule[];

  ngOnInit(): void {
  
     // j'ai définie les champs du formulaire et les validateurs
     this.formaller = this.FormBuilder.group({
      villedepart: ['',[Validators.required]],
      villearriver: ['',[Validators.required]],
      transporteur: ['',[Validators.required]],
      datealler: [['',[Validators.required]]]
     });

     this.afficherVille();
     this.afficherCompagnie();
  }

  afficherVille(){
   
    this.loader=true;
    this.apiservice.selectVille().subscribe({
         
      next:data => {
        this.villes=data as any;
        console.log(this.villes);
        
      },
      error:error=>{
      console.log(error);
      
      }
    })
  }

  afficherCompagnie(){
   
    this.loader=true;
    this.apiservice.selectcompagnie().subscribe({

      next:data => {
        this.compagnies=data as any;
        console.log(data);
        
      },
      error:error=>{
      console.log(error);
      
      }
    })
  }
    //  Envoyer les données du formulaire au serveur ou les traiter localement
     onSubmit(){
      if(this.formaller.valid){
        // on déclaré une variable pour pouvoir recupérer les éléments du formulaire pour les metres en paramétre dans la route
        let dataForDetailPage = this.formatValue();
        console.log(this.formatValue())
        let adData =  this.formaller.value 
        let Data = {...this.formaller.value, ...adData}
        // navigate permet de rediriger 
        this.router.navigate(['/recherche'],{queryParams:dataForDetailPage})
        console.log(Data);
        }else{
         alert('Veuillez remplir tout les champs')
       } 
     } 

// Permet de récupérer l'id et nom des éléments renseignés par l'utilisateur, afficher le name et envoyer l'id à l'API
    formatValue(){
      let data = {
        villedepart : '',
        villearriver : '',
        transporteur:'',
        // nombrepersonne:'',
        // datealler:''
      } ;
      const villeDepart = this.formaller.get('villedepart')?.value as string;
      const villeSpited = villeDepart.split("/");
      console.log(villeSpited)
      data["villedepart"] = villeSpited[1]
      this.formaller.get("villedepart")?.setValue(villeSpited[0]);

      const villearriver = this.formaller.get('villearriver')?.value as string;
      const villearriverSpited = villearriver.split("/");
      data["villearriver"] = villearriverSpited[1]
      this.formaller.get("villearriver")?.setValue(villearriverSpited[0]);

      const transporteur = this.formaller.get('transporteur')?.value as string;
      const transporteurSpited = transporteur.split("/");
      data["transporteur"] = transporteurSpited[1]
      this.formaller.get("transporteur")?.setValue(transporteurSpited[0]);

      // const nombrepersonne = this.formaller.get('nombrepersonne')?.value as string;
      // const nombrepersonneSpited = nombrepersonne.split("/");
      // data["nombrepersonne"] = nombrepersonneSpited[1]
      // this.formaller.get("nombrepersonne")?.setValue(nombrepersonneSpited[0]);

      // const datealler = this.formaller.get('datealler')?.value as string;
      // const dateallerSpited = datealler.split("/");
      // data["datealler"] = dateallerSpited[1]
      // this.formaller.get("datealler")?.setValue(dateallerSpited[0]);


      return data;
    }

    // pour afficher les éléments trajets sur la page recherche
}

import { CompagnieModule } from './../model/compagnie/compagnie.module';
import { VilleModule } from './../model/ville/ville.module';
import { ApiService } from './../service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formaller',
  templateUrl: './formaller.component.html',
  styleUrls: ['./formaller.component.css']
})
export class FormallerComponent implements OnInit{

  constructor(private apiservice : ApiService){}

   loader:boolean = false
   villes!:VilleModule[];
   compagnies!: CompagnieModule[];

  ngOnInit(): void {
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
}

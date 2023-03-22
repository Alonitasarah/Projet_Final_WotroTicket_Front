import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
// la route de l'application
  rootURL = 'http://localhost:8888';

  HttpHeaders(){
    return new HttpHeaders({
      'Content-Type':'application/json',
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods': 'POST,GET,OPTIONS,PUT',
      'Accept':'application/json',
    })
  };


  //methode de recherche

  rechercheTrajet(data:any){
    return this.http.post(this.rootURL+'/trajet/listtrajetparcompagnie', data);
  }

  // methode pour recupérer les villes 
  selectVille(){
    return this.http.get(this.rootURL+'/ville/list', {
      // headers:this.HttpHeaders()
    })
  }
  // methode pour recupérer les compagnies
  selectcompagnie(){
    return this.http.get(this.rootURL+'/compagnie/list', {
      // headers:this.HttpHeaders()
    })
  }

  post(parameter : Required<{endpoint: string, data : any}>){
    return this.http.post(`${this.rootURL}${parameter.endpoint}`,parameter.data,{headers : this.HttpHeaders()})
  }

}

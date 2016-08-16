import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/operator/map';
import {Headers} from '@angular/http';

export interface Actor {
    active;
    birthDate;
    birthName;
    email;
    id;
    name; 
    image;
}

@Injectable() 

export class ActorService {
    http: Http;
    baseURL: string;
    
    constructor(private _http: Http) {
        this.baseURL = 'http://192.168.0.21:8081/RESTFramework/rest/actors/'   
    }
    
    getActors() {
        return this._http.get(this.baseURL)
            .map((response: Response) => <Actor>response.json().result)       
    }

    getActors2(page: number, size: number, search: string, sort: string, order) {
	    return  this._http.get(this.baseURL + '?page=' + page + '&size=' +
        size + '&sSearch=' + search + '&sortBy=' +  sort + '&sDir=' + order)
    }
    
    download() {
        this._http.get(this.baseURL + '?page=1&size=100')
            .map((response: Response) => <Actor>response.json().result)
            .subscribe(response => {alasql("SELECT * INTO XLSX('data.xlsx', {headers:true}) FROM ?",[response])});
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
    getActor(id: number) {
        return this.getActors()
        .map(actors => actors.find(actor => actor.id == id));  
    }
    
    deleteActor(actor: Actor) {
         return this._http
            .delete(this.baseURL + actor.id);         
    }

    addActor(actor: Actor) {
        let data = new FormData();
        let body = JSON.stringify(actor);
        data.append("actor", body);
        let input = document.getElementById('fileUpload');
        let file = input.files[0];
        data.append("file", file, file.name)
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
        } 
    }); 
        xhr.open("POST", this.baseURL + 'add');
        xhr.send(data);
    }

    updateActor(actor: Actor) {
        let data = new FormData();
        let body = JSON.stringify(actor);
        data.append("actor", body);
        let input = document.getElementById('fileUpload');
        let file = input.files[0];
        if (file == null) {
        } else {
            data.append("file", file, file.name)
        }
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
        } 
    }); 
        xhr.open("PUT", this.baseURL + actor.id);      
        xhr.send(data);

    }

    upload() {
        let data = new FormData();
        let input = document.getElementById('readFile');
        let file = input.files[0];
        data.append("file", file, file.name)
        let xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
           if (this.readyState === 4) {
      } 
    }); 
        xhr.open("POST", this.baseURL + 'add');
        xhr.send(data);       
    }
}
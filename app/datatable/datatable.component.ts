import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {ROUTER_DIRECTIVES, Router, RouteParams} from '@angular/router-deprecated';

import {DataTable,Dialog,Column,LazyLoadEvent} from 'primeng/primeng';
import {Actor} from '../services/actor.service';
import {ActorService} from '../services/actor.service';
import {DownloadComponent} from '../download/download.component';
import {UploadComponent} from '../upload/upload.component';

@Component({
	templateUrl: 'app/datatable/datatable.component.html',
	selector: 'my-datatable',
    directives: [ROUTER_DIRECTIVES,DataTable,Dialog,Column, DownloadComponent, UploadComponent],
	providers: [HTTP_PROVIDERS]
})

export class DisplayComponent {
    totalRecords: number;
	displayDialog: boolean;
    actor: Actor = new PrimeActor();  
    newActor: boolean;
    actors: Actor[];
    data: Observable<Actor[]>;
    values='';

    constructor(private _actorService: ActorService,
                private _routeParams: RouteParams,
                private _router: Router)
                {}

    //filtering input
    onKey(value: string) {
        this.values = value;
        return value;
    }

    //server-side processing
    loadActorsLazy(event: LazyLoadEvent) {
        let filters = this.values; 
        if (event.sortOrder == 1) {
            event.sortOrder = 'asc';
            } else if (event.sortOrder == -1) {
            event.sortOrder = 'dsc';
            }

        //send the required data and get the total records
        this._actorService.getActors2(Math.floor(event.first/event.rows) + 1,event.rows, filters,
        event.sortField, event.sortOrder)
            .do((response: any) => {
                this.totalRecords = response.json().totalCount - 1;
            })
            .map((response:any) => <Actor[]>response.json().result)
            .subscribe(actors => {this.actors = actors}); 
        }

    onRowSelect(event) {
        this.newActor = false;
        this.actor = this.cloneActor(event.data);
        this.displayDialog = true;
    }

    cloneActor(c: Actor): Actor {
        let actor = new PrimeActor();
        for(let prop in c) {
            actor[prop] = c[prop];
        }
        return actor;
    }

    delete() {
        this._actorService.deleteActor(this.actor)
            .subscribe(() => {
                let modal = document.getElementById('myModal1');
                modal.style.display = "block";
                this.displayDialog = false;
                this._gotoActors();   
            })
    }

    update() {
        this._actorService.updateActor(this.actor);
        let modal = document.getElementById('myModal2');
                modal.style.display = "block";
        this.displayDialog = false;
        
    }

    private _gotoActors() {
        let route = ['Actors']
        this._router.navigate(route);
    }

    close() {
            let modal2 = document.getElementById('myModal2')
            let modal1 = document.getElementById('myModal1')
                modal2.style.display = "none";
                modal1.style.display = "none";
        }
}




class PrimeActor implements Actor {

    constructor(public active?, public birthDate?, 
    public birthName?, public email?, 
    public id?, public name?, public image?) {}
}    

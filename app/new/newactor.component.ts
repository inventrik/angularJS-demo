import {Component, Input} from "@angular/core";
import {Router} from '@angular/router-deprecated';

import {ActorService, Actor} from "../services/actor.service";
import {DownloadComponent} from '../download/download.component';
import {UploadComponent} from '../upload/upload.component';

@Component({
  selector: 'my-new',
  templateUrl:'app/new/newactor.component.html',
  directives: [UploadComponent, DownloadComponent],
  providers:[ActorService]
})
export class NewActorComponent {
    @Input() actor: Actor;
    addActor: Actor = <Actor>{};
    date: string;
    constructor(
      private _actorService:ActorService,
      private _router : Router)
    {}

    onAddActor() {
        this._actorService.addActor(this.addActor)
        let modal = document.getElementById('myModal');
        modal.style.display = "block";
    }
    
    private _gotoActors() {
        let route = ['Actors', {id: this.actor ? this.actor.id : null}]
        this._router.navigate(route);
    }

    close() {
        let modal = document.getElementById('myModal');
        modal.style.display = "none";
    }
}
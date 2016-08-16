import {Component} from '@angular/core';

import {Actor, ActorService} from '../services/actor.service';

@Component({
    selector: 'download',
    template:  `<button class="btn btn-info btn-lg" (click)="downloadFile() ">
    <span class="glyphicon glyphicon-download"></span>Download</button>`,
    providers: [ActorService]
})

export class DownloadComponent {
  constructor(private _actorService: ActorService) 
  {}

  downloadFile() {
        this._actorService.download();
    } 
}
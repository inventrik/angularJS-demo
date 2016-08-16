import {Component} from '@angular/core';

import {ActorService} from '../services/actor.service';

@Component({
    selector: 'upload',
    template: ` <div id ="upload">
    <b>Upload an Excel File:</b> <p> <br>
   <input id="readFile" 
                type="file" (change)="uploadFile($event)"/></div>`
})

export class UploadComponent {
      constructor(private _actorService: ActorService)
      {}

      uploadFile(event) {     
        alasql('select id, name, birthName, birthDate, email, active, image from file(?,{headers:true})',[event],function(res){
          let data = new FormData();
          for (var i=0; i<res.length; i++ ) {
            let body = JSON.stringify(res[i]);
            data.append("actor", body);
            let xhr = new XMLHttpRequest();
            xhr.open("POST", 'http://192.168.0.21:8081/RESTFramework/rest/actors/add');
            xhr.send(data);
        }
      })
  };
}
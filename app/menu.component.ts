import 'rxjs/Rx';
import {Component} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {Actor, ActorService} from './services/actor.service';
import {NewActorComponent} from './new/newactor.component';
import {InputText} from 'primeng/primeng';
import {DisplayComponent} from './datatable/datatable.component';
import {DownloadComponent} from './download/download.component';
import {UploadComponent} from './upload/upload.component';
import {DashboardComponent} from './dashboard/dashboard.component';

@Component({
    selector: 'my-app',
    template: `<ul class="nav">
    <div id="menu">
        <li class="icon">
            <a href="javascript:void(0);" style="font-size:15px;" (click)="responsive()">&#9776;
            </a>
        </li>
        <li>
        <a *ngFor="let item of menuItems" [routerLink]="item.link" href=""><li>
            <span class="glyphicon glyphicon-{{item.icon}}">
            </span>{{item.caption}}
            </li>
            </a>
        </li>
    </div>
</ul>
<br>

<download></download>

<button class="btn btn-info btn-lg" [routerLink]="['/Upload']">
    <span class="glyphicon glyphicon-upload">
    </span>
    Upload
</button>

<router-outlet></router-outlet>
`,
    directives: [ROUTER_DIRECTIVES, DisplayComponent, DownloadComponent],
    providers: [
        HTTP_PROVIDERS, ActorService, ROUTER_PROVIDERS
    ]
})

@RouteConfig([
  { path: '/actors', name: 'Actors', component: DisplayComponent},
  { path: '/dashboard', name: 'Dashboard', component: DashboardComponent, useAsDefault: true},
  { path: '/new', name: 'New', component: NewActorComponent },
  { path: '/upload', name: 'Upload', component: UploadComponent}
])
export class AppComponent {
    public menuItems = [
        {caption: 'Dashboard', link: ['Dashboard'], icon: 'dashboard' },
        {caption: 'Actors', link: ['Actors'], icon: 'user' },
        {caption: 'Add', link: ['New'], icon: 'plus'}
    ];
    
    responsive() {
    document.getElementsByClassName("nav")[0].classList.toggle("responsive");
}
    }

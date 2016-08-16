"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require('rxjs/Rx');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var actor_service_1 = require('./services/actor.service');
var newactor_component_1 = require('./new/newactor.component');
var datatable_component_1 = require('./datatable/datatable.component');
var download_component_1 = require('./download/download.component');
var upload_component_1 = require('./upload/upload.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var AppComponent = (function () {
    function AppComponent() {
        this.menuItems = [
            { caption: 'Dashboard', link: ['Dashboard'], icon: 'dashboard' },
            { caption: 'Actors', link: ['Actors'], icon: 'user' },
            { caption: 'Add', link: ['New'], icon: 'plus' }
        ];
    }
    AppComponent.prototype.responsive = function () {
        document.getElementsByClassName("nav")[0].classList.toggle("responsive");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<ul class=\"nav\">\n    <div id=\"menu\">\n        <li class=\"icon\">\n            <a href=\"javascript:void(0);\" style=\"font-size:15px;\" (click)=\"responsive()\">&#9776;\n            </a>\n        </li>\n        <li>\n        <a *ngFor=\"let item of menuItems\" [routerLink]=\"item.link\" href=\"\"><li>\n            <span class=\"glyphicon glyphicon-{{item.icon}}\">\n            </span>{{item.caption}}\n            </li>\n            </a>\n        </li>\n    </div>\n</ul>\n<br>\n\n<download></download>\n\n<button class=\"btn btn-info btn-lg\" [routerLink]=\"['/Upload']\">\n    <span class=\"glyphicon glyphicon-upload\">\n    </span>\n    Upload\n</button>\n\n<router-outlet></router-outlet>\n",
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, datatable_component_1.DisplayComponent, download_component_1.DownloadComponent],
            providers: [
                http_1.HTTP_PROVIDERS, actor_service_1.ActorService, router_deprecated_1.ROUTER_PROVIDERS
            ]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/actors', name: 'Actors', component: datatable_component_1.DisplayComponent },
            { path: '/dashboard', name: 'Dashboard', component: dashboard_component_1.DashboardComponent, useAsDefault: true },
            { path: '/new', name: 'New', component: newactor_component_1.NewActorComponent },
            { path: '/upload', name: 'Upload', component: upload_component_1.UploadComponent }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=menu.component.js.map
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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_deprecated_1 = require('@angular/router-deprecated');
var primeng_1 = require('primeng/primeng');
var actor_service_1 = require('../services/actor.service');
var download_component_1 = require('../download/download.component');
var upload_component_1 = require('../upload/upload.component');
var DisplayComponent = (function () {
    function DisplayComponent(_actorService, _routeParams, _router) {
        this._actorService = _actorService;
        this._routeParams = _routeParams;
        this._router = _router;
        this.actor = new PrimeActor();
        this.values = '';
    }
    //filtering input
    DisplayComponent.prototype.onKey = function (value) {
        this.values = value;
        return value;
    };
    //server-side processing
    DisplayComponent.prototype.loadActorsLazy = function (event) {
        var _this = this;
        var filters = this.values;
        if (event.sortOrder == 1) {
            event.sortOrder = 'asc';
        }
        else if (event.sortOrder == -1) {
            event.sortOrder = 'dsc';
        }
        //send the required data and get the total records
        this._actorService.getActors2(Math.floor(event.first / event.rows) + 1, event.rows, filters, event.sortField, event.sortOrder)
            .do(function (response) {
            _this.totalRecords = response.json().totalCount - 1;
        })
            .map(function (response) { return response.json().result; })
            .subscribe(function (actors) { _this.actors = actors; });
    };
    DisplayComponent.prototype.onRowSelect = function (event) {
        this.newActor = false;
        this.actor = this.cloneActor(event.data);
        this.displayDialog = true;
    };
    DisplayComponent.prototype.cloneActor = function (c) {
        var actor = new PrimeActor();
        for (var prop in c) {
            actor[prop] = c[prop];
        }
        return actor;
    };
    DisplayComponent.prototype.delete = function () {
        var _this = this;
        this._actorService.deleteActor(this.actor)
            .subscribe(function () {
            var modal = document.getElementById('myModal1');
            modal.style.display = "block";
            _this.displayDialog = false;
            _this._gotoActors();
        });
    };
    DisplayComponent.prototype.update = function () {
        this._actorService.updateActor(this.actor);
        var modal = document.getElementById('myModal2');
        modal.style.display = "block";
        this.displayDialog = false;
    };
    DisplayComponent.prototype._gotoActors = function () {
        var route = ['Actors'];
        this._router.navigate(route);
    };
    DisplayComponent.prototype.close = function () {
        var modal2 = document.getElementById('myModal2');
        var modal1 = document.getElementById('myModal1');
        modal2.style.display = "none";
        modal1.style.display = "none";
    };
    DisplayComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/datatable/datatable.component.html',
            selector: 'my-datatable',
            directives: [router_deprecated_1.ROUTER_DIRECTIVES, primeng_1.DataTable, primeng_1.Dialog, primeng_1.Column, download_component_1.DownloadComponent, upload_component_1.UploadComponent],
            providers: [http_1.HTTP_PROVIDERS]
        }), 
        __metadata('design:paramtypes', [actor_service_1.ActorService, router_deprecated_1.RouteParams, router_deprecated_1.Router])
    ], DisplayComponent);
    return DisplayComponent;
}());
exports.DisplayComponent = DisplayComponent;
var PrimeActor = (function () {
    function PrimeActor(active, birthDate, birthName, email, id, name, image) {
        this.active = active;
        this.birthDate = birthDate;
        this.birthName = birthName;
        this.email = email;
        this.id = id;
        this.name = name;
        this.image = image;
    }
    return PrimeActor;
}());
//# sourceMappingURL=datatable.component.js.map
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
var core_1 = require("@angular/core");
var router_deprecated_1 = require('@angular/router-deprecated');
var actor_service_1 = require("../services/actor.service");
var download_component_1 = require('../download/download.component');
var upload_component_1 = require('../upload/upload.component');
var NewActorComponent = (function () {
    function NewActorComponent(_actorService, _router) {
        this._actorService = _actorService;
        this._router = _router;
        this.addActor = {};
    }
    NewActorComponent.prototype.onAddActor = function () {
        this._actorService.addActor(this.addActor);
        var modal = document.getElementById('myModal');
        modal.style.display = "block";
    };
    NewActorComponent.prototype._gotoActors = function () {
        var route = ['Actors', { id: this.actor ? this.actor.id : null }];
        this._router.navigate(route);
    };
    NewActorComponent.prototype.close = function () {
        var modal = document.getElementById('myModal');
        modal.style.display = "none";
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], NewActorComponent.prototype, "actor", void 0);
    NewActorComponent = __decorate([
        core_1.Component({
            selector: 'my-new',
            templateUrl: 'app/new/newactor.component.html',
            directives: [upload_component_1.UploadComponent, download_component_1.DownloadComponent],
            providers: [actor_service_1.ActorService]
        }), 
        __metadata('design:paramtypes', [actor_service_1.ActorService, router_deprecated_1.Router])
    ], NewActorComponent);
    return NewActorComponent;
}());
exports.NewActorComponent = NewActorComponent;
//# sourceMappingURL=newactor.component.js.map
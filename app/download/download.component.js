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
var actor_service_1 = require('../services/actor.service');
var DownloadComponent = (function () {
    function DownloadComponent(_actorService) {
        this._actorService = _actorService;
    }
    DownloadComponent.prototype.downloadFile = function () {
        this._actorService.download();
    };
    DownloadComponent = __decorate([
        core_1.Component({
            selector: 'download',
            template: "<button class=\"btn btn-info btn-lg\" (click)=\"downloadFile() \">\n    <span class=\"glyphicon glyphicon-download\"></span>Download</button>",
            providers: [actor_service_1.ActorService]
        }), 
        __metadata('design:paramtypes', [actor_service_1.ActorService])
    ], DownloadComponent);
    return DownloadComponent;
}());
exports.DownloadComponent = DownloadComponent;
//# sourceMappingURL=download.component.js.map
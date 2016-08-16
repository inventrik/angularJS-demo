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
var UploadComponent = (function () {
    function UploadComponent(_actorService) {
        this._actorService = _actorService;
    }
    UploadComponent.prototype.uploadFile = function (event) {
        alasql('select id, name, birthName, birthDate, email, active, image from file(?,{headers:true})', [event], function (res) {
            var data = new FormData();
            for (var i = 0; i < res.length; i++) {
                var body = JSON.stringify(res[i]);
                data.append("actor", body);
                var xhr = new XMLHttpRequest();
                xhr.open("POST", 'http://192.168.0.21:8081/RESTFramework/rest/actors/add');
                xhr.send(data);
            }
        });
    };
    ;
    UploadComponent = __decorate([
        core_1.Component({
            selector: 'upload',
            template: " <div id =\"upload\">\n    <b>Upload an Excel File:</b> <p> <br>\n   <input id=\"readFile\" \n                type=\"file\" (change)=\"uploadFile($event)\"/></div>"
        }), 
        __metadata('design:paramtypes', [actor_service_1.ActorService])
    ], UploadComponent);
    return UploadComponent;
}());
exports.UploadComponent = UploadComponent;
//# sourceMappingURL=upload.component.js.map
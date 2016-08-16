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
var Rx_1 = require('rxjs/Rx');
require('rxjs/operator/map');
var ActorService = (function () {
    function ActorService(_http) {
        this._http = _http;
        this.baseURL = 'http://192.168.0.21:8081/RESTFramework/rest/actors/';
    }
    ActorService.prototype.getActors = function () {
        return this._http.get(this.baseURL)
            .map(function (response) { return response.json().result; });
    };
    ActorService.prototype.getActors2 = function (page, size, search, sort, order) {
        return this._http.get(this.baseURL + '?page=' + page + '&size=' +
            size + '&sSearch=' + search + '&sortBy=' + sort + '&sDir=' + order);
    };
    ActorService.prototype.download = function () {
        this._http.get(this.baseURL + '?page=1&size=100')
            .map(function (response) { return response.json().result; })
            .subscribe(function (response) { alasql("SELECT * INTO XLSX('data.xlsx', {headers:true}) FROM ?", [response]); });
    };
    ActorService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    ActorService.prototype.getActor = function (id) {
        return this.getActors()
            .map(function (actors) { return actors.find(function (actor) { return actor.id == id; }); });
    };
    ActorService.prototype.deleteActor = function (actor) {
        return this._http
            .delete(this.baseURL + actor.id);
    };
    ActorService.prototype.addActor = function (actor) {
        var data = new FormData();
        var body = JSON.stringify(actor);
        data.append("actor", body);
        var input = document.getElementById('fileUpload');
        var file = input.files[0];
        data.append("file", file, file.name);
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
            }
        });
        xhr.open("POST", this.baseURL + 'add');
        xhr.send(data);
    };
    ActorService.prototype.updateActor = function (actor) {
        var data = new FormData();
        var body = JSON.stringify(actor);
        data.append("actor", body);
        var input = document.getElementById('fileUpload');
        var file = input.files[0];
        if (file == null) {
        }
        else {
            data.append("file", file, file.name);
        }
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
            }
        });
        xhr.open("PUT", this.baseURL + actor.id);
        xhr.send(data);
    };
    ActorService.prototype.upload = function () {
        var data = new FormData();
        var input = document.getElementById('readFile');
        var file = input.files[0];
        data.append("file", file, file.name);
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4) {
            }
        });
        xhr.open("POST", this.baseURL + 'add');
        xhr.send(data);
    };
    ActorService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ActorService);
    return ActorService;
}());
exports.ActorService = ActorService;
//# sourceMappingURL=actor.service.js.map
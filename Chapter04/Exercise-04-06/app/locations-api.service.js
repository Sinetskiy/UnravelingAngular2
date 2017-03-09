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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var URL = 'http://unraveling-ng.azurewebsites.net/api/dive/location/';
var USER_ID = '3ef7c9b4-94b5-4601-a021-27c9e8033b0c';
var USER_SECRET = '5e7ee2b0c7e8403b97a7e292a47bdf17964a899e36344d72bf2c4b8e6b423b31e78d5b8e65da4dbfbccd031cc7a9e0a2';
var LocationsApiService = (function () {
    function LocationsApiService(http) {
        this.http = http;
        this.locations = [];
    }
    LocationsApiService.prototype.getLocations = function () {
        var options = new http_1.RequestOptions({
            headers: this.getHeaders()
        });
        return this.http.get(URL, options).toPromise()
            .then(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    LocationsApiService.prototype.getLocationById = function (id) {
        var options = new http_1.RequestOptions({
            headers: this.getHeaders()
        });
        return this.http.get(URL + id, options).toPromise()
            .then(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    LocationsApiService.prototype.addLocation = function (location) {
        var options = new http_1.RequestOptions({
            headers: this.getHeaders()
        });
        return this.http.post(URL, location, options).toPromise()
            .then(function (resp) { return resp.json(); })
            .catch(this.handleError);
    };
    LocationsApiService.prototype.removeLocation = function (id) {
        var options = new http_1.RequestOptions({
            headers: this.getHeaders()
        });
        return this.http.delete(URL + id, options).toPromise()
            .then()
            .catch(this.handleError);
    };
    LocationsApiService.prototype.updateLocation = function (location) {
        var options = new http_1.RequestOptions({
            headers: this.getHeaders()
        });
        return this.http.put(URL, location, options).toPromise()
            .then()
            .catch(this.handleError);
    };
    LocationsApiService.prototype.getHeaders = function () {
        return new http_1.Headers({
            'Authorization': "TenantSecret " + USER_ID + "," + USER_SECRET
        });
    };
    LocationsApiService.prototype.handleError = function (err) {
        var errMsg = (err.message)
            ? err.message
            : err.status ? err.status + ": " + err.statusText : 'Server error';
        console.error(errMsg);
        return Promise.reject(errMsg);
    };
    return LocationsApiService;
}());
LocationsApiService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], LocationsApiService);
exports.LocationsApiService = LocationsApiService;
//# sourceMappingURL=locations-api.service.js.map
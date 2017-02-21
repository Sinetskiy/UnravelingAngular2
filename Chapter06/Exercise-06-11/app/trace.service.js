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
var TraceService = (function () {
    function TraceService() {
    }
    TraceService.prototype.trace = function (message) {
        console.log(message);
    };
    return TraceService;
}());
TraceService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], TraceService);
exports.TraceService = TraceService;
var AdvancedTraceService = AdvancedTraceService_1 = (function () {
    function AdvancedTraceService() {
        this.instance = ++AdvancedTraceService_1.count;
    }
    AdvancedTraceService.prototype.trace = function (message) {
        console.log("Instance: " + this.instance + " - " + message);
    };
    return AdvancedTraceService;
}());
AdvancedTraceService.count = 0;
AdvancedTraceService = AdvancedTraceService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], AdvancedTraceService);
exports.AdvancedTraceService = AdvancedTraceService;
var AdvancedTraceService_1;
//# sourceMappingURL=trace.service.js.map
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
var operators_1 = require("rxjs/operators");
var ContactService = /** @class */ (function () {
    function ContactService(http) {
        this.http = http;
    }
    ContactService.prototype.postContact = function (contact) {
        var body = JSON.stringify(contact);
        var headerOptions = new http_1.Headers({ 'Content-Type': 'application/json' });
        var requestOptions = new http_1.RequestOptions({ method: http_1.RequestMethod.Post, headers: headerOptions });
        return this.http.post('http://localhost:49896/api/contacts', body, requestOptions).pipe(operators_1.map(function (x) { return x.json(); }));
    };
    ContactService.prototype.putContact = function (id, contact) {
        var body = JSON.stringify(contact);
        var headerOptions = new http_1.Headers({ 'Content-Type': 'application/json' });
        var requestOptions = new http_1.RequestOptions({ method: http_1.RequestMethod.Put, headers: headerOptions });
        return this.http.put('http://localhost:49896/api/contacts/' + id, body, requestOptions).pipe(operators_1.map(function (x) { return x.json(); }));
    };
    ContactService.prototype.deleteContact = function (id) {
        return this.http.delete('http://localhost:49896/api/contacts/' + id).pipe(operators_1.map(function (x) { return x.json(); }));
    };
    ContactService.prototype.getContacts = function () {
        var _this = this;
        this.http.get('http://localhost:49896/api/contacts')
            .pipe(operators_1.map(function (data) {
            return data.json();
        })).toPromise().then(function (x) {
            _this.contactList = x;
        });
    };
    ContactService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], ContactService);
    return ContactService;
}());
exports.ContactService = ContactService;
//# sourceMappingURL=contact.service.js.map
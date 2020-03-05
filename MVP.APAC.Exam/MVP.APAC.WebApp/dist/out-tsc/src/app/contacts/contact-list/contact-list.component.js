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
var contact_service_1 = require("../shared/contact.service");
var ngx_toastr_1 = require("../../../../node_modules/ngx-toastr");
var ContactListComponent = /** @class */ (function () {
    function ContactListComponent(contactService, toastr) {
        this.contactService = contactService;
        this.toastr = toastr;
    }
    ContactListComponent.prototype.ngOnInit = function () {
        this.contactService.getContacts();
    };
    ContactListComponent.prototype.showForEdit = function (contact) {
        this.contactService.selectedContact = Object.assign({}, contact);
    };
    ContactListComponent.prototype.onDelete = function (id) {
        var _this = this;
        if (confirm('Are you sure to delete this contact?') == true) {
            this.contactService.deleteContact(id).subscribe(function (x) {
                _this.contactService.getContacts();
                _this.toastr.warning("Contact was deleted.", "Delete Contact");
            });
        }
    };
    ContactListComponent = __decorate([
        core_1.Component({
            selector: 'app-contact-list',
            templateUrl: './contact-list.component.html',
            styleUrls: ['./contact-list.component.css']
        }),
        __metadata("design:paramtypes", [contact_service_1.ContactService, ngx_toastr_1.ToastrService])
    ], ContactListComponent);
    return ContactListComponent;
}());
exports.ContactListComponent = ContactListComponent;
//# sourceMappingURL=contact-list.component.js.map
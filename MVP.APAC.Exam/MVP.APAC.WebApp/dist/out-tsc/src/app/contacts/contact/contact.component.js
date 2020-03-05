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
var ngx_toastr_1 = require("ngx-toastr");
var ContactComponent = /** @class */ (function () {
    function ContactComponent(contactService, toastrService) {
        this.contactService = contactService;
        this.toastrService = toastrService;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    ContactComponent.prototype.resetForm = function (form) {
        if (form != null)
            form.reset();
        this.contactService.selectedContact = {
            ContactId: null,
            FirstName: '',
            MiddleName: '',
            LastName: '',
            MobileNumber: '',
            Email: '',
            Organization: '',
            OrgPosition: '',
            IsDeleted: false
        };
    };
    ContactComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (form.value.ContactId == null) {
            this.contactService.postContact(form.value).subscribe(function (data) {
                _this.resetForm(form);
                _this.contactService.getContacts();
                _this.toastrService.success('Contact successfuly saved.', 'Add Contact');
            });
        }
        else {
            var contactName = form.value.FirstName + ' ' + form.value.LastName;
            this.contactService.putContact(form.value.ContactId, form.value).subscribe(function (data) {
                _this.resetForm(form);
                _this.contactService.getContacts();
                _this.toastrService.info('Contact ' + contactName + ' successfully updated.', 'Update Contact');
            });
        }
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.css']
        }),
        __metadata("design:paramtypes", [contact_service_1.ContactService, ngx_toastr_1.ToastrService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map
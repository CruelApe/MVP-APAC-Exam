import { Component, OnInit } from '@angular/core';
import { NgForm} from '@angular/forms';
import { ContactService } from '../shared/contact.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private contactService : ContactService, private toastrService : ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){

    if(form != null)
      form.reset();

    this.contactService.selectedContact = {
      ContactId : 0,
      FirstName : '',
      MiddleName : '',
      LastName : '',
      MobileNumber : '',
      Email : '',
      Organization : '',
      OrgPosition : '',
      IsDeleted : false,
      IsEdit : false
    };
  }

  onSubmit(form : NgForm){
    if(form.value.ContactId == 0){
      this.contactService.postContact(form.value).subscribe(data =>{
        this.resetForm(form);
        this.contactService.getContacts();
        this.toastrService.success('Contact successfuly saved.','Add Contact');
      });
    }
    else
    {
      var contactName = form.value.FirstName + ' ' + form.value.LastName;
      this.contactService.putContact(form.value.ContactId, form.value).subscribe(data => {
        this.resetForm(form);
        this.contactService.getContacts();
        this.toastrService.info('Contact ' + contactName + ' successfully updated.','Update Contact');
      });
    }
  }
}

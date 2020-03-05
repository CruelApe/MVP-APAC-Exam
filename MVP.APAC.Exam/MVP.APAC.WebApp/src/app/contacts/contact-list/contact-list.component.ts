import { Component, OnInit } from '@angular/core';
import { ContactService } from '../shared/contact.service';
import { Contact } from '../shared/contact.model';
import { ToastrService } from '../../../../node_modules/ngx-toastr';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private contactService : ContactService, private toastr : ToastrService) { }

  ngOnInit() {
    this.contactService.getContacts();
  }

  showForEdit(contact : Contact){
    contact.IsEdit = true;
    this.contactService.selectedContact = Object.assign({}, contact);
  }

  onDelete(id : number){
    if(confirm('Are you sure to delete this contact?') == true){
      this.contactService.deleteContact(id).subscribe(x=> {
        this.contactService.getContacts();
        this.toastr.warning("Contact was deleted.","Delete Contact");
      })
    }
  }
}

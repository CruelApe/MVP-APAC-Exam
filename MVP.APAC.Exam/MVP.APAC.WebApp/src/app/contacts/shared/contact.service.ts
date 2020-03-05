import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable,  } from 'rxjs';
import { map } from 'rxjs/operators';

import {Contact} from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  selectedContact : Contact;
  contactList : Contact[];
  constructor(private http: Http) { }

  postContact(contact : Contact){
    var body = JSON.stringify(contact);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post, headers : headerOptions});
    return this.http.post('http://localhost:49896/api/contacts', body, requestOptions).pipe(map(x => x.json()));
  }

  putContact(id, contact){
    var body = JSON.stringify(contact);
    var headerOptions = new Headers({'Content-Type':'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Put, headers : headerOptions});
    return this.http.put('http://localhost:49896/api/contacts/' + id, body, requestOptions).pipe(map(x => x.json()));
  }

  deleteContact(id : number){
    return this.http.delete('http://localhost:49896/api/contacts/' + id).pipe(map(x => x.json()));
  }

  getContacts(){
    this.http.get('http://localhost:49896/api/contacts')
    .pipe(map((data : Response) => {
        return data.json() as Contact[];
    })).toPromise().then(x => {
      this.contactList = x;
    });
  }
}


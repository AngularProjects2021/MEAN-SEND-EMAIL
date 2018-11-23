import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
    private http: HttpClient
  ) { }

  sendContact(contact) {
    console.log(contact);
    // return this.http.post('http://localhost:8080/users/register', user)
    //     .map(res => res.json());
    return this.http.post('http://localhost:9090/email/send-email', contact);
        // .map(res => res.json());
  }
}

// import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

// import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    // private http: Http,
    private http: HttpClient
    ) { }
  register(user) {
    console.log(user);
    // return this.http.post('http://localhost:8080/users/register', user)
    //     .map(res => res.json());
    return this.http.post('http://localhost:8080/users/register', user);
        // .map(res => res.json());
  }

  login(user) {
    // return this.http.post('http://localhost:8080/users/login', user)
    //     .map(res => res.json());
        return this.http.post('http://localhost:8080/users/login', user);
        // .map(res => res.json());
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  LoggedInSubject = new Subject()
  constructor(private http: HttpClient) {}

  login(payload: any) {
    sessionStorage.setItem('LoggedIn', 'true');
    if (payload.username.toLowerCase() === 'abhishek') {
      sessionStorage.setItem('role', 'admin');
    } else {
      sessionStorage.setItem('role', 'user');
    }
    this.LoggedInSubject.next(true)
    return new Observable((obs) => obs.next('LoggedIn'));
  }

  getUsers() {
    return this.http.get(`https://jsonplaceholder.typicode.com/users`);
  }
  getUserById(Id: any) {
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${Id}`);
  }
  getProduts(){
    return this.http.get(`https://fakestoreapi.com/products`)
  }
  getProdutById(id:any){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }

  logout() {
    sessionStorage.clear();
    this.LoggedInSubject.next(false)
  }
}

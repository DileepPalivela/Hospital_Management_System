import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminauthService {

  constructor() { }
  authenticate(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('username2', username);
      return true;
    } else {
      return false;
    }
  }
  isUserLoggedIn() {
    console.log("user logged in");
    let user = sessionStorage.getItem('username2');
    return !(user === null);
  }
  logout() {
    console.log("user logged out");
    sessionStorage.removeItem('username2');
  }
}

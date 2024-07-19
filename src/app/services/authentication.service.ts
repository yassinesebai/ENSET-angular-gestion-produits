
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor() { }

  login(username: string, password: string): Observable<boolean> {
    if (username === 'user' && password === 'password') {
      localStorage.setItem('currentUser', 'true');
      return of(true);
    } else {
      return of(false);
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(): boolean {

    return localStorage.getItem('currentUser') === 'true';
  }
}

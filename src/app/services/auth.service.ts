import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  private apiUrl = "https://sea-lion-app-772a9.ondigitalocean.app/v1/users/login";
  private authSubject  = new BehaviorSubject<boolean>(false);
  auth$ = this.authSubject.asObservable();

  login(email: string, password: string){
    return this.http.post<{token: string}>(this.apiUrl, {email, password}).subscribe( response => {
      console.log(response);
      localStorage.setItem('token', response.token);
      this.authSubject.next(true);
      this.router.navigate(['/tasks']);
    });
  }

  logout(){
    localStorage.removeItem('token');
    this.authSubject.next(false);
    this.router.navigate(['/']);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  isAuthenticated(){
    return !!this.getToken();
  }

}

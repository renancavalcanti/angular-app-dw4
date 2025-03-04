import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  private apiUrl = "https://sea-lion-app-772a9.ondigitalocean.app/v1/users/login";

  login(email: string, password: string){
    return this.http.post<{token: string}>(this.apiUrl, {email, password}).subscribe( response => {
      console.log(response);
      localStorage.setItem('token', response.token);
      this.router.navigate(['/tasks']);
    });
  }

  getToken(){
    return localStorage.getItem('token');
  }

}

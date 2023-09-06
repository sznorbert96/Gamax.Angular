import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
  export class LoginService {
    private baseUrl = 'https://localhost:7024/api';
    public logedInUserEmail: string = '';
    public isUserLogedIn = false;
  
    constructor(private http: HttpClient) {}
  
    tryLogin(data: LoginParameters) {
        const result = this.http.post<LoginResponse>(`${this.baseUrl}/Login`, data);
        result.subscribe(
            response => {
                this.isUserLogedIn = true;
                localStorage.setItem('isUserLogedIn', "true");
                this.logedInUserEmail = response.email;
                localStorage.setItem('logedInUserEmail', this.logedInUserEmail);
            })
        return result;
    }

    getLogedInUserEmail(){
        const logedInUserEmail = localStorage.getItem('logedInUserEmail');
        if (logedInUserEmail) {
            this.logedInUserEmail = logedInUserEmail;
        }
        return this.logedInUserEmail;
    }

    getIsUserLogedIn(){
        const isUserLogedIn = localStorage.getItem('isUserLogedIn');
        if (isUserLogedIn == "true") {
            this.isUserLogedIn = true;
        }
        return this.isUserLogedIn;
    }

  }

  export interface LoginParameters{
    email: string;
    password: string;
  }

  export interface LoginResponse{
    email: string;
    token: string;
    isSuccessful: boolean;
  }
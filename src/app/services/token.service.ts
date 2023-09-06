import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokenService{
  private token: string = '';

  constructor() {}

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    const storedToken = localStorage.getItem('token');
        if (storedToken) {
            this.token = storedToken;
        }
    return this.token;
  }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
  export class UserService {
    private baseUrl = 'https://localhost:7024/api';
  
    constructor(private http: HttpClient) {}
  
    getUsers() {
      return this.http.get<UserListVm[]>(`${this.baseUrl}/User/all`);
    }
    
  }

  export interface UserListVm {
    UserId: string;
    FirstName: string;
    LastName: string;
    BirthDate: string;
    Email: string;
    Password: string;
  }
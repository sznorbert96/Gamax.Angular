import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { TokenService } from './token.service';

@Injectable({
    providedIn: 'root',
  })
  export class UserService {
    private baseUrl = 'https://localhost:7024/api';
    
    constructor(private http: HttpClient, private tokenService: TokenService) {}
  
    getUsers() {
      return this.http.get<UserListVm[]>(`${this.baseUrl}/User/all`, this.getHttpOptions());
    }

    getUserById(id: string) {
      return this.http.get<UserListVm>(`${this.baseUrl}/User/${id}`, this.getHttpOptions());
    }

    createUser(user: UserCreateVm) {
      return this.http.post<CreateUserResponse>(`${this.baseUrl}/User/`, user, this.getHttpOptions());
    }

    deleteUser(id: string){
      return this.http.delete(`${this.baseUrl}/User/${id}`, this.getHttpOptions())
    }

    updateUser(user: UserUpdateVm){
      return this.http.put(`${this.baseUrl}/User/`, user, this.getHttpOptions())
    }
    
    getHttpOptions(){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.tokenService.getToken()}`,
        })
      };

      return httpOptions;
    }

  }

  export interface UserListVm {
    userId: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    email: string;
    password: string;
  }

  export interface UserCreateVm {
    firstName: string;
    lastName: string;
    birthDate: Date;
    email: string;
    password: string;
  }

  export interface CreateUserResponse{
    success:boolean;
    message: string;
    ValidationErrors: string[];
    user: UserListVm
  }

  export interface UserUpdateVm{
    userId: string;
    firstName: string;
    lastName: string;
    birthDate: Date;
    email: string;
    password: string;
  }
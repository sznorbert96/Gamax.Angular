import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  loginService: LoginService;
  constructor(private router: Router, private tokenService: TokenService, loginService: LoginService,){
    this.loginService = loginService;
  }
  onSubmit(){
    if(this.email != null && this.password != null){
      const param = {
        email: this.email,
        password: this.password
      }

      this.loginService.tryLogin(param).subscribe(
        response => {
          console.log('Sikeresen elküldve:', response);
          this.tokenService.setToken(response.token);
          localStorage.setItem('token', response.token);
          if(response.isSuccessful){
            console.log("Authentication succeded!")
            this.router.navigate(['user-view']);
          }
          else{
            this.router.navigate(['']);
            console.log("Authentication failed!")
          }
          
        },
          error => {
            console.error('Hiba történt:', error);
          });
    }
  }

  onLogout(){
    this.loginService.isUserLogedIn = false;
    localStorage.removeItem('token');
    localStorage.removeItem('isUserLogedIn');
    localStorage.removeItem('logedInUserEmail');
    this.tokenService.setToken('');
    console.log("Logged out!");
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app-component/app.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from 'src/routes';
import { UserViewComponent } from './components/user-view/user-view.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { UserModifyComponent } from './components/user-modify/user-modify.component';
import { LoginService } from './services/login.service';
import { TokenService } from './services/token.service';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserViewComponent,
    UserCreateComponent,
    UserDeleteComponent,
    UserModifyComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UserService, LoginService, TokenService],
  bootstrap: [AppComponent, LoginComponent, UserViewComponent, UserCreateComponent, UserDeleteComponent, UserModifyComponent]
})
export class AppModule { }

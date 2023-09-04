import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './app/components/login/login.component';
import { UserViewComponent } from './app/components/user-view/user-view.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'user-view', component: UserViewComponent}
];
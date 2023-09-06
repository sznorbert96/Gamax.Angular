import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-root',
  template: '<app-navbar></app-navbar><router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'Gamax.Angular';
}

import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { Inject } from '@angular/core';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent{
  firstName = '';
  lastName = '';
  birthDate ='';
  email = '';
  password = '';

  constructor(@Inject(MAT_DIALOG_DATA) private userService: UserService, 
  public dialogRef: MatDialogRef<UserCreateComponent>) {}

  save(){
    this.dialogRef.close({
      birthDate: new Date(this.birthDate),
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
    });
  }

  close(){
    this.dialogRef.close();
  }
}
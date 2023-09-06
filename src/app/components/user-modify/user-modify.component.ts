import { Component } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserListVm, UserService } from 'src/app/services/user.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-user-modify',
  templateUrl: './user-modify.component.html',
  styleUrls: ['./user-modify.component.css']
})
export class UserModifyComponent {
  users: UserListVm[];
  selectedUser?: UserListVm;

  constructor(@Inject(MAT_DIALOG_DATA)public data: any, private userService: UserService, 
  public dialogRef: MatDialogRef<UserModifyComponent>) {
    this.users = data;
  }

  updateUser(){
    if(this.selectedUser)
    {
      this.dialogRef.close(this.selectedUser);
    }
  }

  close(){
    this.dialogRef.close();
  }
  
  onSelectUser(user: any): void{
    this.selectedUser = user;
  }
}

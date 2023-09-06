import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserListVm, UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent {
  selectedUser?: UserListVm;
  users: UserListVm[];

  constructor(@Inject(MAT_DIALOG_DATA)public data: any, private userService: UserService, 
  public dialogRef: MatDialogRef<UserDeleteComponent>) {
    this.users = data;
  }

  deleteUser(){
    if(this.selectedUser){
      this.dialogRef.close(this.selectedUser.userId);
    }
  }

  close(){
    this.dialogRef.close();
  }
  onSelectUser(user: any): void{
    this.selectedUser = user;
  }
}

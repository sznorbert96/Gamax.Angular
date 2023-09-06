import { Component, OnInit } from '@angular/core';
import { UserListVm, UserService } from 'src/app/services/user.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UserCreateComponent } from '../user-create/user-create.component';
import { UserDeleteComponent } from '../user-delete/user-delete.component';
import { UserModifyComponent } from '../user-modify/user-modify.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  users: UserListVm[] = [];
  isDialogOpened: boolean = false;
  dialog: MatDialog;

  constructor(private userService: UserService, dialog: MatDialog) {
    this.dialog = dialog;
  }

  ngOnInit() {
    this.getUsers();
  }

  openUserCreateDialog(): void {
    if(!this.isDialogOpened){
      this.isDialogOpened = true;
      const dialogRef: MatDialogRef<UserCreateComponent> = this.dialog?.open(UserCreateComponent, {
      height: '500px',
      width: '1080px'
    });
    dialogRef?.afterClosed().subscribe(data => {
      if(data){
        this.userService.createUser(data).subscribe(
          response => {
            this.getUsers();
            console.log('Sikeresen elküldve:', response);
          },
            error => {
              console.error('Hiba történt:', error);
            });
      }
      this.isDialogOpened = false;
      });
    }
  }

  userDeleteDialog(): void{
    if(!this.isDialogOpened){
      this.isDialogOpened = true;
      const dialogRef: MatDialogRef<UserDeleteComponent> = this.dialog?.open(UserDeleteComponent, {
      height: '500px',
      width: '1080px',
      data: this.users
    });
    dialogRef?.afterClosed().subscribe(data => {
      if(data){
        this.userService.deleteUser(data).subscribe(
          response => {
            this.getUsers();
            console.log('Sikeresen elküldve:', response);},
            error => {
              console.error('Hiba történt:', error);
            });
      }
      this.isDialogOpened = false;
      });
    }
  }

  userModifyDialog(): void{
    if(!this.isDialogOpened){
      this.isDialogOpened = true;
      const dialogRef: MatDialogRef<UserModifyComponent> = this.dialog?.open(UserModifyComponent, {
      height: '500px',
      width: '1080px',
      data: this.users
    });
    dialogRef?.afterClosed().subscribe(data => {
      if(data){
        this.userService.updateUser(data).subscribe(
          response => {
            this.getUsers();
            console.log('Sikeresen elküldve:', response);},
            error => {
              console.error('Hiba történt:', error);
            });
      }
      this.isDialogOpened = false;
      });
    }
  }

  getUsers(){
    this.userService.getUsers().subscribe(( data: UserListVm[]) => {
      this.users = data;
    }, error => {
      console.error('Error occured when getting users list!', error);
    });
  }

  usersCount(){
    return this.users.length;
  }
}

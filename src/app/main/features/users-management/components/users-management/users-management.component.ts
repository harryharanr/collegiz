import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddNewUserComponent } from '../add-new-user/add-new-user.component';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }

  // You can restructure the properties in the below array of objects the way you want
  rows: any[] = [
    {
      sno: '1',
      emailId: 'rajesh@gmail.com',
      firstName: 'Rajesh',
      lastName: 'Shukla',
      role: 'Chennai Branch Admin',
      branch: ['Chennai Branch'], 
      department: ['ECE', 'EEE', 'CSE', 'IT']
    },
    {
      sno: '2',
      emailId: 'ravi@gmail.com',
      firstName: 'Ravi',
      lastName: 'Chahar',
      role: 'ECE & CSE Dept Admin(Chennai)',
      branch: [], 
      department: ['ECE', 'CSE']
    },
  ];

  ngOnInit() {
    
  }

  addNewUser() {
    this._bottomSheet.open(AddNewUserComponent);
  }

}

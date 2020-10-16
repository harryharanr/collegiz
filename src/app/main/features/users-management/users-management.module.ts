import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Route } from "@angular/router";

import { SharedModule } from '../../shared/shared.module';

import { UsersManagementComponent } from './components/users-management/users-management.component';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';

const routes: Route[] = [
  {
    path: '**',
    component: UsersManagementComponent
  }
];

@NgModule({
  declarations: [UsersManagementComponent, AddNewUserComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class UsersManagementModule { }

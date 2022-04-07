import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { zip } from 'rxjs';
import { LoginComponent } from './home/login/login.component';
import { SignupComponent } from './home/signup/signup.component';
import { ListTaskComponent } from './task/list-task/list-task.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full' //coincidencia de rutas
  },
  {
    path: 'tasks',
    component: ListTaskComponent
  },
  {
    path: 'create',
    component: ListTaskComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

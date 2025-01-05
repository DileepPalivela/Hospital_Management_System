import { Component } from '@angular/core';
import { AdmindashComponent } from './admindash/admindash.component';
import { Routes } from '@angular/router';
import { Appointment } from './appointment';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomeComponent } from './home/home.component';
import { CreateComponentComponent } from './create appointment/create-component.component';
import { DocloginComponent } from './doclogin/doclogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatepatientComponent } from './createpatient/createpatient.component';
import { MedicineComponent } from './medicine/medicine.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';

export const routes: Routes = [
  {
    path: 'appointment',
    component: AppointmentComponent
  },
  {
    path: 'admin',
    component: AdmindashComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'newappoint',
    component: CreateComponentComponent
  },
  {
    path: '',
     redirectTo:'home',pathMatch:'full'
  },
  {
    path: 'doclogin',
    component: DocloginComponent
  },
  {
    path: 'adminlogin',
    component: AdminloginComponent
  },
  {
    path: 'docdash',
    component: DocdashComponent
  },{
  path:"createpatient",
  component:CreatepatientComponent
  },
  {
  path:"medicine-info",
  component:MedicineComponent
  },
  {
  path:"medicine-entry",
  component:MedicineListComponent
  }
];

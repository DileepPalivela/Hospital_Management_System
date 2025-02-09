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
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { ViewPatientComponent } from './view-patient/view-patient.component';
import { UpdateMedicineComponent } from './update-medicine/update-medicine.component';
import { DocauthService } from './docauth.service';
import { DocauthguardService } from './docauthguard.service';
import { AdminauthguardService } from './adminauthguard.service';
import { AdminPatientComponent } from './admin-patient/admin-patient.component';
import { DocappointmentComponent } from './docappointment/docappointment.component';
import { PatientappointComponent } from './patientappoint/patientappoint.component';

export const routes: Routes = [
  {
    path: 'appointment',
    component: AppointmentComponent,
    canActivate:[AdminauthguardService]
  },
  {
    path: 'admin_patient',
    component: AdminPatientComponent,
    canActivate:[AdminauthguardService]
  },
  {
    path: 'admin',
    component: AdmindashComponent,
    canActivate:[AdminauthguardService]
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'newappoint',
    component: CreateComponentComponent,
    canActivate:[AdminauthguardService]
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
    path: 'patientappoint',
    component: PatientappointComponent
  },
  {
    path: 'adminlogin',
    component: AdminloginComponent
  },
  {
    path: 'docdash',
    component: DocdashComponent,
    canActivate:[DocauthguardService]
  },{
  path:"createpatient",
  component:CreatepatientComponent,
  canActivate:[DocauthguardService]
  },
  {
    path: 'docappointment',
    component: DocappointmentComponent,
    canActivate:[DocauthguardService]
  },
  {
  path:"medicine-info",
  component:MedicineComponent,canActivate:[DocauthguardService]
  },
  {
  path:"medicine-entry",
  component:MedicineListComponent,canActivate:[DocauthguardService]
  },
  {
    path:"update-patient/:id",
    component:UpdatePatientComponent,canActivate:[DocauthguardService]
    },
    {
      path:"view-patient/:id",
      component:ViewPatientComponent,canActivate:[DocauthguardService]
      },
      {
        path:"update-medicine/:id",
        component:UpdateMedicineComponent,canActivate:[DocauthguardService]
        }


];

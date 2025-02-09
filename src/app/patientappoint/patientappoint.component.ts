import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Appointment } from '../appointment';
import { AppointmentService } from '../../appointment.service';
import { AdminauthService } from '../adminauth.service';

@Component({
  selector: 'app-patientappoint',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './patientappoint.component.html',
  styleUrl: './patientappoint.component.css'
})
export class PatientappointComponent {

  appointment:Appointment=new Appointment();
  constructor(private appointmentService:AppointmentService,private router:Router,private adminauthService:AdminauthService) { }
  saveAppointment(){
    this.appointmentService.createAppointment(this.appointment).subscribe(data=>{
      console.log(data);

    })
  }
  onSubmit(){
    console.log(this.appointment);
    this.saveAppointment();
    alert("Appointment Booked Successfully  ");
  this.router.navigate(['/home']);
  }

}



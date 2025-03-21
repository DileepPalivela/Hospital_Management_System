import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../../appointment.service';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AdminauthService } from '../adminauth.service';
@Component({
  selector: 'app-create-component',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './create-component.component.html',
  styleUrl: './create-component.component.css'
})
export class CreateComponentComponent {

  appointment:Appointment=new Appointment();
  constructor(private appointmentService:AppointmentService,private router:Router,private adminauthService:AdminauthService) { }
  saveAppointment(){
    this.appointmentService.createAppointment(this.appointment).subscribe(data=>{
      console.log(data);
      this.goToAppointment();
    })
  }
  onSubmit(){
    console.log(this.appointment);
    this.saveAppointment();
  }
  goToAppointment(){
    this.router.navigate(['/appointment']);
}
logout() {
  this.adminauthService.logout();
  this.router.navigate(['/home']);
}
}

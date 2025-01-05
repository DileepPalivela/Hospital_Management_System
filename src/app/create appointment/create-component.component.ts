import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../../appointment.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-component',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './create-component.component.html',
  styleUrl: './create-component.component.css'
})
export class CreateComponentComponent {

  appointment:Appointment=new Appointment();
  constructor(private appointmentService:AppointmentService,private router:Router) { }
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

}

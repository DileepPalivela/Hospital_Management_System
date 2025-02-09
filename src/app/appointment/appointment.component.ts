import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Appointment } from '../appointment';
import { AppointmentService } from './../../appointment.service';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AdminauthService } from '../adminauth.service';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule,RouterLink,RouterOutlet,FormsModule],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {
  logout() {
    this.adminauthService.logout();
    this.router.navigate(['/home']);
  }

  appointments:Appointment[]=[];

  constructor(private appointmentService:AppointmentService,private adminauthService:AdminauthService,private router:Router) { }

  ngOnInit(): void {
    this.getAppointements();
  }
  getAppointements(){
    this.appointmentService.getAllAppointments().subscribe(data=>{
      this.appointments=data;
  })
  }
  delete(id:number) {
    this.appointmentService.deleteAppointments(id).subscribe((data) => {
      console.log(data);
      this.getAppointements();
    });
  }


}


import { Component } from '@angular/core';
import { Appointment } from '../appointment';
import { AppointmentService } from '../../appointment.service';
import { DocauthService } from '../docauth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-docappointment',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './docappointment.component.html',
  styleUrl: './docappointment.component.css'
})
export class DocappointmentComponent {
  logout(){
    this.docauthService.logout();
    this.router.navigate(['/home']);
    }

      appointments:Appointment[]=[];

      constructor(private appointmentService:AppointmentService,private docauthService:DocauthService,private router:Router) { }

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

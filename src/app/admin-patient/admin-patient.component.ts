import { AdminauthService } from './../adminauth.service';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-admin-patient',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './admin-patient.component.html',
  styleUrl: './admin-patient.component.css'
})
export class AdminPatientComponent {
  logout() {
    this.adminauthService.logout();
    this.router.navigate(['/home']);
  }
onSubmit() {
this.savePatient();

}
patient:Patient = new Patient();
constructor(private patientService:PatientService,private router:Router,private adminauthService:AdminauthService) {


}
savePatient() {
this.patientService.createPatient(this.patient).subscribe(data=>
  {console.log(data);
    this.goToPatientlist();
});
}
goToPatientlist() {
this.router.navigate(['/admin']);
}
}

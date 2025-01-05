import { PatientService } from './../patient.service';
import { Component } from '@angular/core';
import { Patient } from '../patient';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-createpatient',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './createpatient.component.html',
  styleUrl: './createpatient.component.css'
})
export class CreatepatientComponent {
onSubmit() {
this.savePatient();

}
patient:Patient = new Patient();
constructor(private patientService:PatientService,private router:Router) {


}
savePatient() {
this.patientService.createPatient(this.patient).subscribe(data=>
  {console.log(data);
    this.goToPatientlist();
});
}
goToPatientlist() {
this.router.navigate(['/docdash']);
}
}

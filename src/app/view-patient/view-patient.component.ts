import { ActivatedRoute, RouterLink } from '@angular/router';
import { PatientService } from './../patient.service';
import { Component } from '@angular/core';
import { Patient } from '../patient';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-patient',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './view-patient.component.html',
  styleUrl: './view-patient.component.css'
})
export class ViewPatientComponent {
  id:number=0;
  patient:Patient=new Patient();
constructor(private patientService:PatientService ,private route:ActivatedRoute) {}

ngOnInit(): void {
this.id=this.route.snapshot.params['id'];
this.patientService.getPatientById(this.id).subscribe((data)=>{
  console.log('API Response:', data); // Log API response
  this.patient = data;
});
}
}

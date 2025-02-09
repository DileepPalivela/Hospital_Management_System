import { AdminauthService } from './../adminauth.service';
import { PatientService } from './../patient.service';
import { Component } from '@angular/core';
import { Patient } from '../patient';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DocauthService } from '../docauth.service';


@Component({
  selector: 'app-docdash',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {
logout(){
this.docauthService.logout();
this.router.navigate(['/home']);
}

  view(id: number)
    {
   this.router.navigate(['view-patient',id]);
    }

  delete(id: number) {
    this.patientService.deletePatient(id).subscribe((data) => {
      console.log(data);
      this.getPatients();
    });
}
  patients: Patient[] = [];

  constructor(private patientService: PatientService,private router:Router,private docauthService:DocauthService) {}

  ngOnInit(): void {
    this.getPatients();
  }

  update(id: number) {
    this.router.navigate(['/update-patient', id]);
    }

  getPatients(): void {
    this.patientService.getPatientList().subscribe(
      (data: Patient[]) => {
        console.log('Fetched patients:', data); // Check if data is fetched
        this.patients = data;
      },
      (error) => {
        console.error('Error fetching patient data:', error); // Log any errors
      }
    );


  }
}


function view(id: any, number: any) {
  throw new Error('Function not implemented.');
}


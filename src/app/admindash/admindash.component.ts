import { AdminauthService } from './../adminauth.service';
import { DocauthService } from './../docauth.service';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admindash',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterOutlet,RouterLink],
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
logout() {
  this.adminauthService.logout();
  this.router.navigate(['/home']);
}
delete(id: number) {
    this.patientService.deletePatient(id).subscribe((data) => {
      console.log(data);
      this.getPatients();
    });
}
  patients: Patient[] = [];

  constructor(private patientService: PatientService,private adminauthService:AdminauthService,private router:Router) {}

  ngOnInit(): void {
    this.getPatients();
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

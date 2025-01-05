import { PatientService } from './../patient.service';
import { Component } from '@angular/core';
import { Patient } from '../patient';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-docdash',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {
  delete(id: number) {
    this.patientService.deletePatient(id).subscribe((data) => {
      console.log(data);
      this.getPatients();
    });
}
  patients: Patient[] = [];

  constructor(private patientService: PatientService) {}

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



import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-admindash',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {
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

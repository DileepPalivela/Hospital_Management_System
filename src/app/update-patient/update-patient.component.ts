import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-patient',
  standalone: true,
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css'],
})
export class UpdatePatientComponent implements OnInit {
  patient: Patient = new Patient();
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(
      (data) => {
        this.patient = data;
      },
      (error) => console.log(error)
    );
  }

  onSubmit(): void {
    this.patientService.updatePatient(this.id, this.patient).subscribe(
      (data) => {
        console.log('Patient updated successfully:', data);
        this.goToDocDash();
      },
      (error) => console.log(error)
    );
  }

  goToDocDash(): void {
    this.router.navigate(['docdash']);
  }
}

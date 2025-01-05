import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MedicineService } from './../medicine.service';
import { Medicine } from '../medicine';

@Component({
  selector: 'app-medicine',
  standalone: true,
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css'] // Corrected property name
})
export class MedicineComponent implements OnInit {



  medicines: Medicine[] = [];

  constructor(private medicineService: MedicineService) {}

  ngOnInit(): void {
    this.getMedicines();
  }

  getMedicines() {
    this.medicineService.getMedicines().subscribe(
      (data) => {
        this.medicines = data;
      },
      (error) => {
        console.error('Error fetching medicines:', error);
      }
    );
  }

  deleteMedicine(id: number) {
    this.medicineService.deleteMedicine(id).subscribe(
      (data) => {
        console.log('Medicine deleted successfully:', data);
        this.getMedicines();
      },
      (error) => {
        console.error('Error deleting medicine:', error);
      }
    );
  }
  onSubmit() {
    // Implement your form submission logic here
    console.log('Form submitted!');
  }
}

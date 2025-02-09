import { MedicineService } from './../medicine.service';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { Medicine } from '../medicine';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-medicine-list',
  standalone: true,
  imports: [RouterLinkActive,RouterLink,CommonModule,FormsModule],
  templateUrl: './medicine-list.component.html',
  styleUrl: './medicine-list.component.css'
})
export class MedicineListComponent {
  medicine:Medicine = new Medicine();
constructor(private medicineService:MedicineService,private router:Router){}
onSubmit(): void {

  this.saveMedicine();
}
saveMedicine()  {
  this.medicineService.createMedicine(this.medicine).subscribe(data=>
     {
      console.log('Patient updated successfully:', data);
      this.goToMedicine();
    },
    (error) => console.log(error)
  );
}

  goToMedicine(): void {
    this.router.navigate(['medicine-info']);
  }

}


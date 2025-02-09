import { Component } from '@angular/core';
import { Medicine } from '../medicine';
import { Action } from 'rxjs/internal/scheduler/Action';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MedicineService } from '../medicine.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-medicine',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './update-medicine.component.html',
  styleUrl: './update-medicine.component.css'
})
export class UpdateMedicineComponent {
  medicine: Medicine=new Medicine();
  id:number=0;
  constructor(private route:ActivatedRoute,private medicineService:MedicineService,private router:Router) {}
  ngOnInit(){
    this.id=this.route.snapshot.params['id'];
    this.medicineService.getMedicineById(this.id).subscribe(data=>{
      this.medicine=data;
    },error=>console.log(error));
  }
onSubmit() {

  this.medicineService.updateMedicine(this.id,this.medicine).subscribe(data=>{
     console.log(data);
    this.goToMedicineList();
  },error=>console.log(error));
}
goToMedicineList():void{

  this.router.navigate(['medicine-info']);
}
}

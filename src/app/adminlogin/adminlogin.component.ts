import { Component } from '@angular/core';

import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {
checkLogin() {
throw new Error('Method not implemented.');
}
  username:string=''
  password:string=''
  inValidLogin=false;





}

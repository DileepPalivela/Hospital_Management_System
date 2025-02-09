import { Component } from '@angular/core';

import { Router, RouterLink } from '@angular/router';
import { AdminauthService } from '../adminauth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-adminlogin',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent {


  username: string="";
  password: string="";
  inValidLogin: boolean=false;
  constructor(private router: Router,private adminauth:AdminauthService) { }
checkLogin() {
  if(this.adminauth.authenticate(this.username,this.password)) {

    this.router.navigate(['/admin']);
    this.inValidLogin = false;
  } else {
    this.inValidLogin = true;
    alert("Invalid credentials");
    this.router.navigate(['/home']);

  }
}



}

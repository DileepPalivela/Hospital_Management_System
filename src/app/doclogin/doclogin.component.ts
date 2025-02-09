import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { DocauthService } from '../docauth.service';

@Component({
  selector: 'app-doclogin',
  standalone: true,
  imports: [RouterOutlet,RouterLink ,RouterLinkActive,CommonModule,FormsModule],
  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css'
})


export class DocloginComponent {

  username: string="";
  password: string="";
  inValidLogin: boolean=false;
  constructor(private router: Router,private docauth:DocauthService) { }
checkLogin() {
  if(this.docauth.authenticate(this.username,this.password)) {

    this.router.navigate(['/docdash']);
    this.inValidLogin = false;
  } else {
    this.inValidLogin = true;
    alert("Invalid credentials");
    this.router.navigate(['/home']);
    
  }
}

}



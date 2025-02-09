import { Injectable } from '@angular/core';
import { AdminauthService } from './adminauth.service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminauthguardService implements CanActivate {

  constructor(private adminauthService:AdminauthService,private router:Router) { }
  canActivate(){
   if( this.adminauthService.isUserLoggedIn()) {
    return true;
  }
  else {
   this.router.navigate(['/adminlogin']);
    return false;
  }
}
}

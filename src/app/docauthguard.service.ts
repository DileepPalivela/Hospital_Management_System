import { CanActivate, Router } from '@angular/router';
import { DocauthService } from './docauth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocauthguardService implements CanActivate {

  constructor(private docauthService:DocauthService,private router:Router) { }
  canActivate(){
   if( this.docauthService.isUserLoggedIn()) {
    return true;
  }
  else {
   this.router.navigate(['/doclogin']);
    return false;
  }
}
}

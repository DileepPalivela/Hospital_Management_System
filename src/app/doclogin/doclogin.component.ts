import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-doclogin',
  standalone: true,
  imports: [RouterOutlet,RouterLink ,RouterLinkActive],
  templateUrl: './doclogin.component.html',
  styleUrl: './doclogin.component.css'
})
export class DocloginComponent {
checkLogin() {
throw new Error('Method not implemented.');
}

}

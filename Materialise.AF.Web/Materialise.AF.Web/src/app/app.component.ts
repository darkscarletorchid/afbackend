import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  constructor(private authService: AuthService, private router: Router) { }

   ngOnInit() {
  //   let isAuth  = this.authService.isAuth;
  //   if (isAuth) {
  //     this.router.navigate(['/register']);
  //   } else {
  //     this.router.navigate(['/quest']);
  //   }  
   }
}

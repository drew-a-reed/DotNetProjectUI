import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuth } from 'src/app/models/jwtAuth';
import { Login } from 'src/app/models/login';
import { Register } from 'src/app/models/register';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  loginDto = new Login();
  registerDto = new Register();
  JwtDto = new JwtAuth();

  constructor(private authService: AuthenticationService,
    private router: Router){}

  register(registerDto: Register){
    this.authService.register(registerDto).subscribe({
      next: (response) => {
        const userId = response.userId;
        this.router.navigate(['users', userId]);
      }
    });
  }

}

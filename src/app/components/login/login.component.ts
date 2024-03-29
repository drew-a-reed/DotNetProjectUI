import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtAuth } from 'src/app/models/jwtAuth';
import { Login } from 'src/app/models/login';
import { Register } from 'src/app/models/register';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginDto = new Login();
  registerDto = new Register();
  JwtDto = new JwtAuth();

  constructor(private authService: AuthenticationService,
    private router: Router){}

  login(loginDto: Login){
    this.authService.login(loginDto).subscribe((JwtDto => {
      localStorage.setItem('jwtToken', JwtDto.token);
      console.log(JwtDto.token);
      const userId = JwtDto.userId;
        this.router.navigate(['users', userId]);
    }));
  }

}

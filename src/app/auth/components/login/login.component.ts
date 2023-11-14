import { Router } from '@angular/router';
import { AuthService } from './../../../core/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  constructor(private auth: AuthService,
              private router: Router) {}

  ngOnInit(): void {
    throw new Error('Methode pas implementer.');
  }

  onLogin() {
    this.auth.login();
    this.router.navigateByUrl('/facesnaps');
  }
}

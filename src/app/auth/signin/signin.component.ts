import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signinform: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router ) { }

  ngOnInit() {
    this.signinform = this.fb.group({
      username: [],
      password: []
    });
  }

  onSubmit() {
    this.authService.signin(this.signinform.value).subscribe(
      (res:any) => {
      this.authService.userId = res.user._id;
      localStorage.setItem('user', JSON.stringify(res));
      this.router.navigate(['/products']);
    },
    err => {
      alert('Error signin in');
    }
    );
  }

}

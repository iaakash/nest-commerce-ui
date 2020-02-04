import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupform: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService ) { }

  ngOnInit() {
    this.signupform = this.fb.group({
      username: [],
      password: [],
      seller: [false]
    })
  }

  onSubmit() {
    this.authService.signup(this.signupform.value).subscribe(res => {
      debugger;
    })
  }

}

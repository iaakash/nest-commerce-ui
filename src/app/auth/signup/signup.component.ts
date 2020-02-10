import { Router } from '@angular/router';
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
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router ) { }

  onAvatarUpload(event) {
    const avatar = event.target.files[0];
    this.signupform.get('avatar').setValue(avatar);
  }

  ngOnInit() {
    this.signupform = this.fb.group({
      email: [],
      avatar: [],
      username: [],
      password: [],
      seller: [false]
    });
  }

  onSubmit() {
    this.authService.signup(this.signupform.value).subscribe(
      (res:any) => {
        debugger;
        this.authService.userId = res.userCreated._id;
        localStorage.setItem('user', JSON.stringify(res));
        this.router.navigate(['/products']);
      },
      err => {
        alert('Error Signin Up');
      }
    );
  }

}

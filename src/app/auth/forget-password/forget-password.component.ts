import { AuthService } from './../auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  forgetPasswordForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  initForm() {
    this.forgetPasswordForm = this.fb.group({
      email: [''],
    });
  }
  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this.authService.sendEmailToRecoverPassword(this.forgetPasswordForm.value).subscribe(res => {
      alert('Email success');
    },
    err => {
      alert('Error Happened');
    }
    )
  }

}

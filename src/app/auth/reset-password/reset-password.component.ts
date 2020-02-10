import { AuthService } from './../auth.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  token:string;

  constructor(private fb: FormBuilder, private authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  initForm() {
    this.resetPasswordForm = this.fb.group({
      password: [''],
    });
  }
  ngOnInit() {
    this.route.paramMap.subscribe((res:any) => {
      this.token = res.params.token;
    });
    this.initForm();
  }

  onSubmit() {
    this.authService.changePassword(this.resetPasswordForm.value, this.token).subscribe(res => {
      alert('Email success');
      this.router.navigate(['/auth/signin']);
    },
    err => {
      alert('Error Happened');
    }
    )
  }

}

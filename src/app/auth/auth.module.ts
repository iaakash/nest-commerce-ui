import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

@NgModule({
  declarations: [SigninComponent, SignupComponent, ForgetPasswordComponent, ResetPasswordComponent],
  imports: [
    AuthRoutingModule,
    SharedModule,
    CommonModule,
    CoreModule,
  ]
})
export class AuthModule { }

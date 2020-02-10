import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DashboardService } from './../dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {

  constructor(private dashboardService: DashboardService, private fb: FormBuilder, private router:Router ) { }

  editUserForm: FormGroup;
  userDetails:any;

  initUserForm() {
    this.editUserForm = this.fb.group({
      username: [''],
      address: this.fb.group({
      addr1: [''],
      addr2: [''],
      city: [''],
      state: [''],
      country: [''],
      zip: ['']
    })
    });
  }

  private patchForm() {
    this.editUserForm.patchValue({
      username: this.userDetails.username,
      address: {
        addr1: this.userDetails.address && this.userDetails.address.addr1 ? this.userDetails.address.addr1 : '',
        addr2: this.userDetails.address && this.userDetails.address.addr2 ? this.userDetails.address.addr2 : '',
      city: this.userDetails.address && this.userDetails.address.city ?  this.userDetails.address.city : '',
      state: this.userDetails.address && this.userDetails.address.state ? this.userDetails.address.state : '',
      country: this.userDetails.address && this.userDetails.address.country ? this.userDetails.address.country : '',
      zip: this.userDetails.address && this.userDetails.address.zip ? this.userDetails.address.zip : '',
      }
    });
  }

  onUpdate() {
    const payload = {...this.userDetails, ...this.editUserForm.value};
    this.dashboardService.updateUser(payload).subscribe(user => {
      // localStorage.setItem('user', JSON.stringify(user));
      this.getUserDetailsAndPatch();
      alert('User Successfully Updated');
    });
  }

  getUserDetailsAndPatch() {
    this.dashboardService.fetchUser().subscribe(res => {
      this.userDetails = res;
      this.patchForm();
    });
  }

  ngOnInit() {
    this.initUserForm();
    this.getUserDetailsAndPatch();
  }

}

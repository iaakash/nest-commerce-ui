import { DashboardService } from './../dashboard.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {

  createProductForm: FormGroup;

  constructor(private fb: FormBuilder, private dashboardService: DashboardService) { }

  ngOnInit() {
    this.createProductForm = this.fb.group({
      title: [],
      description: [],
      image: [],
      price: [],
    });
  }

  onSubmit() {
    this.dashboardService.createProduct(this.createProductForm.value).subscribe(res => {
      alert('Product Created');
      this.createProductForm.reset();
    })
  }

  onFileUpload(event) {
    this.createProductForm.get('image').setValue(event.target.files[0]);
  }
}


// owner: {
//   type: mongoose.Schema.Types.ObjectId,
//   ref: 'User',
// },
// title: String,
// description: String,
// image: String,
// price: Number,
// created: {
//   type: Date,
//   defaut: Date.now(),
// },

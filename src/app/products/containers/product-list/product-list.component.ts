import { ProductsService } from './../../products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products;

  constructor(private productsService: ProductsService ) { }

  ngOnInit() {
    this.productsService.fetchAllProducts().subscribe(res => {
      this.products = res;
    })
  }

}

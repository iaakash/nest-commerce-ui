import { SharedModule } from './../shared/shared.module';
import { ProductRoutingModule } from './products-routing.module';
import { ShellComponent } from './containers/shell/shell.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './containers/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [ShellComponent, ProductListComponent, ProductComponent],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule,
  ]
})
export class ProductsModule { }

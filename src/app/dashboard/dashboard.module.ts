import { CoreModule } from './../core/core.module';
import { SharedModule } from './../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ShellComponent, CreateProductComponent, EditUserComponent],
  imports: [
    SharedModule,
    DashboardRoutingModule,
    CommonModule,
    CoreModule,
  ]
})
export class DashboardModule { }

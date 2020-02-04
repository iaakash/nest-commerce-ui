import { EditUserComponent } from './edit-user/edit-user.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ShellComponent } from './shell/shell.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'create-product',
        component: CreateProductComponent
      },
      {
        path: 'edit-user',
        component: EditUserComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

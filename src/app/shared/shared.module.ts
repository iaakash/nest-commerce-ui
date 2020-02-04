import { SafeHtmlPipe } from './safe-html.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [SafeHtmlPipe],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [FormsModule, ReactiveFormsModule, SafeHtmlPipe]
})
export class SharedModule { }

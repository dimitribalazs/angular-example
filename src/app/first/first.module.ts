import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { firstRouter } from './first.router';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    firstRouter
  ],
  exports: [RouterModule],
  declarations: [HomeComponent, DetailComponent]
})
export class FirstModule { }

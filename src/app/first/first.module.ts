import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { firstRouter } from './first.router';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    firstRouter
  ],
  exports: [RouterModule],
  declarations: [HomeComponent, DetailComponent]
})
export class FirstModule { }

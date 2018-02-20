import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { secondRouter } from './secound.router';
import { SharedModule } from '../shared/shared.module';
import { UsernameComponent } from '../shared/components/username/username.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    secondRouter,
  ],
    declarations: [HomeComponent]
})
export class SecondModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsernameComponent } from './components/username/username.component';
import { DataService } from './services/data.service';


@NgModule({
    imports: [
      CommonModule,
    ],
  exports: [UsernameComponent],
  declarations: [UsernameComponent],
  providers: [DataService]
  })
  export class SharedModule { }
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentpageComponent } from './components/currentpage/currentpage.component';
import { DataService } from './services/data.service';


@NgModule({
    imports: [
      CommonModule,
    ],
  exports: [CurrentpageComponent],
  declarations: [CurrentpageComponent],
  providers: [DataService]
  })
  export class SharedModule { }
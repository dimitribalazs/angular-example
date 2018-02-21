import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentpageComponent } from './components/currentpage/currentpage.component';


@NgModule({
    imports: [
      CommonModule,
    ],
  exports: [CurrentpageComponent],
  declarations: [CurrentpageComponent],
  providers: []
  })
export class SharedModule { 
  // static forRoot(): ModuleWithProviders {
  //   return {
  //     ngModule: SharedModule,
  //     providers: [ DataService ]                      
  //   };
  // }
  }
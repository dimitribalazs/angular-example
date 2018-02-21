import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { appRouter } from './app.router';
import { FirstModule } from './first/first.module';
import { SharedModule } from './shared/shared.module';
import { DataService } from './shared/services/data.service';
import { SecondModule } from './second/second.module';

@NgModule({
  imports: [
    BrowserModule,
    SharedModule,    
    appRouter,    
  ],
  declarations: [
    AppComponent,
  ],
  exports: [RouterModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

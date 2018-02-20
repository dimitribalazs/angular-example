import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';

 const SECOND_ROUTER: Routes = [
   
       { path: 'home', component: HomeComponent},
       { path: '', pathMatch: 'full',redirectTo: '/home'},
 ]


export const secondRouter = RouterModule.forChild(SECOND_ROUTER);

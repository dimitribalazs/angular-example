import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

 const FIRST_ROUTER: Routes = [
   
       { path: 'home', component: HomeComponent},
       { path: 'detail', component: DetailComponent},
       { path: '', pathMatch: 'full',redirectTo: '/home'},
 ]


export const firstRouter = RouterModule.forChild(FIRST_ROUTER);

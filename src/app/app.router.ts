import { Routes, RouterModule, Router } from '@angular/router';

export const APP_ROUTER: Routes = [
    { path: 'first', loadChildren: './first/first.module#FirstModule'  },
    { path: 'second',    loadChildren: './second/second.module#SecondModule'   },
    {
      path: '',
      redirectTo: '/first',
      pathMatch: 'full'
    }
];
  
export const appRouter = RouterModule.forRoot(APP_ROUTER, {enableTracing: true})
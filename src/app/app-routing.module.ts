import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PipesComponent } from './pipes/pipes.component';

const routes: Routes = [
  {
      path : "first", component: FirstComponent
  },
  {
    path : "second", 
    loadComponent: ()=> import("./second/second.component").then(m=>m.SecondComponent)
  },
  {
    path : "company", 
    loadComponent: ()=> import("./company/company.component").then(m=>m.CompanyComponent)
  },
  {
    path : "dashboard", component: DashboardComponent
  },
  {
    path : "pipes" , component: PipesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

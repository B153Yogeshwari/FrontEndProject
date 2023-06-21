import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './Components/login/login.component';

import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { EmicalculatorComponent } from './Components/emicalculator/emicalculator.component';

const routes: Routes = [
  {
    path:'',redirectTo:'dash',pathMatch:'full'
  },
  {
    path:'dash',component:DashboardComponent,
    
    children:[
     
      {
        path:'aboutus',component:AboutusComponent
      },
      {
        path:'emi',component:EmicalculatorComponent
      },
      {
        path:'login', component:LoginComponent, children:[{
          path:'re',loadChildren: ()=>import('src/app/Module/re/re.module').then(m=>m.ReModule)
        }]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


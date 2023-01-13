import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { RepositorioComponent } from './components/repositorio/repositorio.component';

const routes: Routes = [
  {
    path:"",
    component:InicioComponent
  },
  {
    path:"login",
component:LoginComponent
  },{
  path:"dashboard",
  component:DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

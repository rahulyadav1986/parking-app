import { SearchVehicleComponent } from './search-vehicle/search-vehicle.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { VechiclesListComponent } from './vechicles-list/vechicles-list.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'vehicle-list',
    component: VechiclesListComponent
  },
  {
    path: 'add-vehicle',
    component: AddVehicleComponent
  },
  {
    path: 'search-vehicle',
    component: SearchVehicleComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

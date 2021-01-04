
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { VechiclesListComponent } from './vechicles-list/vechicles-list.component';
import { FooterComponent } from './footer/footer.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { SearchVehicleComponent } from './search-vehicle/search-vehicle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VechiclesListComponent,
    FooterComponent,
    AddVehicleComponent,
    SearchVehicleComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

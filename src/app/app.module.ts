import { RouterModule } from '@angular/router';
import { KlijentserviceService } from './klijentservice.service';
import { CentriService } from './centri.service';

import { MyMaterial } from './material';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { KlijentComponent } from './klijent/klijent.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ReginComponent } from './regin/regin.component';
import { IstorijaComponent } from './istorija/istorija.component';
import { LogInNavComponent } from './log-in-nav/log-in-nav.component';

  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    KlijentComponent,
    LoginComponent,
    ReginComponent,
    IstorijaComponent,
    LogInNavComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterial,
    RouterModule,
    ReactiveFormsModule,
    
  ],
  
  
  providers: [CentriService, KlijentserviceService],
  bootstrap: [AppComponent],
 
})
export class AppModule { 
  registrovan:boolean=false;
}

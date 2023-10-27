import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { JobProfessionComponent } from './job-profession/job-profession.component';
import { FormsModule } from '@angular/forms';


// for using api calls
import {HttpClientModule} from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JobSearchComponent,
    JobDescriptionComponent,
    JobProfessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

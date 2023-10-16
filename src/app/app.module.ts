import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { JobDescriptionComponent } from './job-description/job-description.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JobSearchComponent,
    JobDescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

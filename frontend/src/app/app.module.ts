import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { StaffComponent } from './staff/staff.component';

const appRoutes: Routes = [
  {path: "staff", component: StaffComponent},
  {path: "staff/:id", component: StaffComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    StaffComponent
  ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

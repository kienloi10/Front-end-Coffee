import { DepartmentsService } from './shared/services/departments.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DepartmentsComponent } from './departments/departments.component';
import { AppRoutingModule } from './app.routing';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SidebarModule } from 'ng-sidebar';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesService } from './shared/services/employees.service';
import { SexPipe } from './shared/pipes/sex.pipe';
import { kindEmployService } from './shared/services/kindEmploy.service';
import { PositionPipe } from './shared/pipes/position.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DepartmentsComponent,
    HeaderComponent,
    MainComponent,
    EmployeesComponent,
    SexPipe,
    PositionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    SidebarModule.forRoot()
  ],
  providers: [DepartmentsService, EmployeesService, kindEmployService],
  bootstrap: [AppComponent]
})
export class AppModule { }

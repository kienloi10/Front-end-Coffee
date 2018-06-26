import { EmployeesComponent } from './employees/employees.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';
import { DepartmentsComponent } from './departments/departments.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {
        path: '', component: LoginComponent
    }, {
        path: 'login', component: LoginComponent
    }, {
        path: 'home', component: MainComponent, children: [
            {
                path: 'departments', component: DepartmentsComponent
            }, {
                path: 'employees', component: EmployeesComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [LoginComponent];

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';

const APP_ROUTES: Routes = [
    { path : 'employee', component : EmployeeDetailsComponent}
]


@NgModule({
    imports : [RouterModule.forRoot(APP_ROUTES)],
    exports : [RouterModule]
})

export class AppRoutingModule {

}
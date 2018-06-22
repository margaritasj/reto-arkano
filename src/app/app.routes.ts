import { RouterModule, Routes } from '@angular/router'

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardFormComponent } from './components/dashboard-form/dashboard-form.component';

const app_routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'dashboardForm', component: DashboardFormComponent},
    {path: '**', pathMatch: 'full', redirectTo: ''}
];

export const app_routing = RouterModule.forRoot(app_routes);
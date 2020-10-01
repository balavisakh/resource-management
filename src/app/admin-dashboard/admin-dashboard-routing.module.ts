import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard.component';
import { ResourceAllocationComponent } from './resource-allocation/resource-allocation.component';

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'resource-allocation', component: ResourceAllocationComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminDashboardRoutingModule {}

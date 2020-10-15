import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProjectComponent } from './add-project/add-project.component';

import { DashboardComponent } from './dashboard.component';
import { InterviewManagementComponent } from './interview-management/interview-management.component';
import { InterviewTableComponent } from './interview-table/interview-table.component';
import { InterviewComponent } from './interview/interview.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsTableComponent } from './projects-table/projects-table.component';
import { ResourceAllocationComponent } from './resource-allocation/resource-allocation.component';
import { ResourceTableComponent } from './resource-table/resource-table.component';
import { TrainingTableComponent } from './training-table/training-table.component';
import { TrainingComponent } from './training/training.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'training', component: TrainingComponent },
      { path: 'project-details', component: ProjectDetailsComponent },
      { path: 'interview', component: InterviewComponent },
      {path: 'interview-management', component: InterviewManagementComponent},
      {path: 'add-project', component: AddProjectComponent},
      {path: 'resource-allocation', component: ResourceAllocationComponent},
      {path: 'training-table', component: TrainingTableComponent},
      {path: 'interview-table', component: InterviewTableComponent},
      {path: 'projects-table', component: ProjectsTableComponent},
      {path: 'resource-table', component: ResourceTableComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}

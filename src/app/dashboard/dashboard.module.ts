import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TrainingComponent } from './training/training.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { InterviewComponent } from './interview/interview.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { InterviewManagementComponent } from './interview-management/interview-management.component';
import { MatSelectModule } from '@angular/material/select';
import { AddProjectComponent } from './add-project/add-project.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ResourceAllocationComponent } from './resource-allocation/resource-allocation.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import { TrainingTableComponent } from './training-table/training-table.component';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { InterviewTableComponent } from './interview-table/interview-table.component';
import { ProjectsTableComponent } from './projects-table/projects-table.component';
import { ResourceTableComponent } from './resource-table/resource-table.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SideNavComponent,
    TrainingComponent,
    ProjectDetailsComponent,
    InterviewComponent,
    InterviewManagementComponent,
    AddProjectComponent,
    ResourceAllocationComponent,
    TrainingTableComponent,
    InterviewTableComponent,
    ProjectsTableComponent,
    ResourceTableComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatCardModule,
    MatSelectModule,
    MatDatepickerModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule
  ],
})
export class DashboardModule {}

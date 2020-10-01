import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { AdminDashboardComponent } from './admin-dashboard.component';
import {DashboardModule} from '../dashboard/dashboard.module';
import { AdminSideNavComponent } from './admin-side-nav/side-nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import { ResourceAllocationComponent } from './resource-allocation/resource-allocation.component';
import { MatCardModule } from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';





@NgModule({
  declarations: [AdminDashboardComponent, AdminSideNavComponent, ResourceAllocationComponent],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    DashboardModule,
    MatToolbarModule,
    MatMenuModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatChipsModule,
    MatAutocompleteModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule
  ]
})
export class AdminDashboardModule { }

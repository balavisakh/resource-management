import { Component, AfterViewInit, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  projectName: string;
  clientName: string;
  clientLocation: string;
  projectDuration: string;
}

const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  styleUrls: ['./projects-table.component.css']
})
export class ProjectsTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'color', 'actions'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) =>
      this.createNewUser(k + 1)
    );

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
   }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  /** Builds and returns a new User. */
  createNewUser(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
      ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
      '.';

    return {
      id: id.toString(),
      projectName: name,
      clientName: 'focaloid',
      clientLocation: 'kochi',
      projectDuration: '12:000:30'
    };
  }

}

import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import {
  MatAutocompleteSelectedEvent,
  MatAutocomplete,
} from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

interface Project {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-resource-allocation',
  templateUrl: './resource-allocation.component.html',
  styleUrls: ['./resource-allocation.component.css'],
})
export class ResourceAllocationComponent implements OnInit {
  projects: Project[] = [
    { value: 'project1', viewValue: 'Project 1' },
    { value: 'project2', viewValue: 'Project 2' },
    { value: 'project3', viewValue: 'Project 3' },
  ];
  visible = true;
  selectable = true;
  removable = true;
  leadseparatorKeysCodes: number[] = [ENTER, COMMA];
  teamseparatorKeysCodes: number[] = [ENTER, COMMA];
  leadCtrl = new FormControl();
  teamCtrl = new FormControl();
  filteredLeads: Observable<string[]>;
  filteredTeams: Observable<string[]>;
  leads: string[] = ['Lead 1'];
  teams: string[] = ['Team 1'];
  allLeads: string[] = ['Lead 1', 'Lead 2', 'Lead 3', 'Lead 4', 'Lead 5'];
  allTeams: string[] = ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5'];
  @ViewChild('leadInput') leadInput: ElementRef<HTMLInputElement>;
  @ViewChild('teamInput') teamInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;
  constructor() {
    this.filteredLeads = this.leadCtrl.valueChanges.pipe(
      startWith(null as string),
      map((fruit: string | null) =>
        fruit ? this._leadfilter(fruit) : this.allLeads.slice()
      )
    );

    this.filteredTeams = this.teamCtrl.valueChanges.pipe(
      startWith(null as string),
      map((fruit: string | null) =>
        fruit ? this._teamfilter(fruit) : this.allTeams.slice()
      )
    );
  }
  ngOnInit(): void {}

  addLead(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.leads.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.leadCtrl.setValue(null);
  }
  // team
  addTeam(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.teams.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.teamCtrl.setValue(null);
  }
  removeLead(lead: string, team: string): void {
    const leadindex = this.leads.indexOf(lead);

    if (leadindex >= 0) {
      this.leads.splice(leadindex, 1);
    }
  }
  // team
  removeTeam(lead: string, team: string): void {
    const teamindex = this.teams.indexOf(team);
    if (teamindex >= 0) {
      this.teams.splice(teamindex, 1);
    }
  }

  leadselected(event: MatAutocompleteSelectedEvent): void {
    this.leads.push(event.option.viewValue);
    this.leadInput.nativeElement.value = '';
    this.leadCtrl.setValue(null);
  }
  teamselected(event: MatAutocompleteSelectedEvent): void {
    this.teams.push(event.option.viewValue);
    this.teamCtrl.setValue(null);
    this.teamInput.nativeElement.value = '';
  }
  private _leadfilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allLeads.filter(
      (lead) => lead.toLowerCase().indexOf(filterValue) === 0
    );
  }

  private _teamfilter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTeams.filter(
      (team) => team.toLowerCase().indexOf(filterValue) === 0
    );
  }
}

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
  visibleLead = true;
  selectableLead = true;
  removableLead = true;
  leadseparatorKeysCodes: number[] = [ENTER, COMMA];
  leadCtrl = new FormControl();
  filteredLeads: Observable<string[]>;
  leads: string[] = ['Lead 1'];
  allLeads: string[] = ['Lead 1', 'Lead 2', 'Lead 3', 'Lead 4', 'Lead 5'];
  // team
  visibleTeam = true;
  selectableTeam = true;
  removableTeam = true;
  separatorKeysCodesTeam: number[] = [ENTER, COMMA];
  teamCtrl = new FormControl();
  filteredTeams: Observable<string[]>;
  teams: string[] = ['Team 1'];
  allTeams: string[] = ['Team 1', 'Team 2', 'Team 3', 'Team 4', 'Team 5'];

  @ViewChild('leadInput') leadInput: ElementRef<HTMLInputElement>;
  @ViewChild('leadauto') matAutocompleteLead: MatAutocomplete;
  // team
  @ViewChild('teamInput') teamInput: ElementRef<HTMLInputElement>;
  @ViewChild('teamauto') matAutocompleteTeam: MatAutocomplete;
  projects: Project[] = [
    { value: 'project-1', viewValue: 'project-1' },
    { value: 'project-2', viewValue: 'project-2' },
    { value: 'project-3', viewValue: 'project-3' },
  ];
  constructor() {
    this.filteredLeads = this.leadCtrl.valueChanges.pipe(
      startWith(null as string),
      map((lead: string | null) =>
        lead ? this._filter(lead) : this.allLeads.slice()
      )
    );
    // team
    this.filteredTeams = this.teamCtrl.valueChanges.pipe(
      startWith(null as string),
      map((team: string | null) =>
        team ? this._filterTeam(team) : this.allTeams.slice()
      )
    );
  }
  ngOnInit(): void {}
  leadadd(event: MatChipInputEvent): void {
    const Leadinput = event.input;
    const Leadvalue = event.value;

    // Add our fruit
    if ((Leadvalue || '').trim()) {
      this.leads.push(Leadvalue.trim());
    }

    // Reset the input value
    if (Leadinput) {
      Leadinput.value = '';
    }

    this.leadCtrl.setValue(null);
  }
  // team
  addTeam(event: MatChipInputEvent): void {
    const Teaminput = event.input;
    const Teamvalue = event.value;

    // Add our fruit
    if ((Teamvalue || '').trim()) {
      this.leads.push(Teamvalue.trim());
    }

    // Reset the input value
    if (Teaminput) {
      Teaminput.value = '';
    }

    this.teamCtrl.setValue(null);
  }
  removeLead(lead: string): void {
    const index = this.leads.indexOf(lead);

    if (index >= 0) {
      this.leads.splice(index, 1);
    }
  }
  // team
  removeTeam(team: string): void {
    const index = this.teams.indexOf(team);

    if (index >= 0) {
      this.teams.splice(index, 1);
    }
  }
  selectedLead(event: MatAutocompleteSelectedEvent): void {
    this.leads.push(event.option.viewValue);
    this.leadInput.nativeElement.value = '';
    this.leadCtrl.setValue(null);
  }
  // team
  selectedTeam(event: MatAutocompleteSelectedEvent): void {
    this.teams.push(event.option.viewValue);
    this.teamInput.nativeElement.value = '';
    this.teamCtrl.setValue(null);
  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allLeads.filter(
      (lead) => lead.toLowerCase().indexOf(filterValue) === 0
    );
  }
  // team
  private _filterTeam(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allTeams.filter(
      (team) => team.toLowerCase().indexOf(filterValue) === 0
    );
  }
}

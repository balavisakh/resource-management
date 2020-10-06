import { Component, OnInit } from '@angular/core';
interface AllStatus {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-interview-management',
  templateUrl: './interview-management.component.html',
  styleUrls: ['./interview-management.component.css'],
})
export class InterviewManagementComponent implements OnInit {
  allstatus: AllStatus[] = [
    { value: 'Initial screening completed', viewValue: 'Initial screening completed' },
    { value: 'Initial technical evaluation cleared', viewValue: 'Initial technical evaluation cleared' },
    { value: 'Machine test completed', viewValue: 'Machine test completed' },
    { value: 'Technical round completed', viewValue: 'Technical round completed' },
    { value: 'HR round completed', viewValue: 'HR round completed' },
    { value: 'Offer letter sent', viewValue: 'Offer letter sent' },
    { value: 'Offer letter accepted', viewValue: 'Offer letter accepted' },
  ];
  constructor() {}

  ngOnInit(): void {}
}

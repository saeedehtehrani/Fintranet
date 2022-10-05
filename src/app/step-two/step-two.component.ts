import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface status {
  name: string,
  code: string
}  

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.scss'],
})


export class StepTwoComponent implements OnInit {
  value: number;
  date12: Date;
  invalidDates: Array<Date>;
  minDate: Date;
  maxDate: Date;
  endDate: any;
  status: status[];
  selectedStatus: string;
  val:string;

  constructor(private router: Router) {
    this.status = [
      {name: 'acive', code: 'ac'},
      {name: 'deactivate', code: 'de'},
      {name: 'in progress', code: 'in'},
      {name: 'canceled', code: 'ca'},
  ];

  }

  ngOnInit(): void {
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = month === 0 ? 11 : month - 1;
    let prevYear = prevMonth === 11 ? year - 1 : year;
    let nextMonth = month === 11 ? 0 : month + 1;
    let nextYear = nextMonth === 0 ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(month);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);

    let endDateRage = today.getDay();
    this.endDate = endDateRage + 7;

    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today, invalidDate];
  }
  nextPage() {
    this.router.navigate(['./step-three']);
  }
}

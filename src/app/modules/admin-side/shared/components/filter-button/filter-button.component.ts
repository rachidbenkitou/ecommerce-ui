import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment'

@Component({
  selector: 'app-filter-button',
  templateUrl: './filter-button.component.html',
  styleUrls: ['./filter-button.component.scss']
})
export class FilterButtonComponent implements OnInit {
  @Output() filterDate = new EventEmitter<{startDate:string, endDate:string}>();
  today: string;
  constructor() { }

  ngOnInit(): void {
  }

  toggleDate(val: number) {
    let startDate: string;
    let endDate:string;
    let lastMonday = moment(this.today).startOf('isoWeek');
    let beginOfMonth = moment().startOf('month');
    let beginOfYear = moment().startOf('year');
    let begin = moment('2021-01-01').startOf('year');

    // Aujourd'hui
    if (val === 1) {
      startDate = moment(this.today).format("YYYY-MM-DD");
      endDate = moment(this.today).format("YYYY-MM-DD");
    }
    // Hier
    else if (val === 2) {
      startDate = moment(this.today).subtract(1, 'd').format("YYYY-MM-DD");
      endDate = moment(this.today).format("YYYY-MM-DD");
    }
    // Cette semaine
    else if (val === 3) {
      startDate = lastMonday.format("YYYY-MM-DD");
      endDate = moment(this.today).format("YYYY-MM-DD");
    }
    // Ce mois
    else if (val === 4) {
      startDate = beginOfMonth.format("YYYY-MM-DD");
      endDate = moment(this.today).format("YYYY-MM-DD");
    }
    // Semaine dernière
    else if (val === 5) {
      startDate = lastMonday.subtract(1, 'w').format("YYYY-MM-DD");
      endDate = lastMonday.add(6, 'd').format("YYYY-MM-DD");
    }
    // mois dernièr
    else if (val === 6) {
      startDate = beginOfMonth.subtract(1, 'M').format("YYYY-MM-DD");
      endDate = beginOfMonth.add(1, 'M').subtract(1, 'd').format("YYYY-MM-DD");
    } 
    // Cette année
    else if (val === 7) {
      startDate = beginOfYear.format("YYYY-MM-DD");
      endDate = moment(this.today).format("YYYY-MM-DD");
    } 
    // Tous
    else if (val === 8) {
      startDate = begin.format("YYYY-MM-DD");
      endDate = moment(this.today).format("YYYY-MM-DD");

    }

    this.filterDate.emit({startDate: startDate, endDate: endDate})
  }
}

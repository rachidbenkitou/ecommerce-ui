import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, UntypedFormBuilder } from '@angular/forms';
import * as moment from 'moment'
// import { UserService } from 'src/app/users/services/user/user.service';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  dateList: any[] = []
  yearsList: number[] = []
  currentYear: number
  currentMonth: number
  lastMonday: any
  beginOfMonth: any
  beginOfYear: any
  beginOfAll: any
  today: string;
  thisMonth: string;
  thisWeek: string;
  freamSearch!: FormGroup;
  //statistics DATA
  @Input() dataDisplay: any[] = []
  @Input() labelsDirection: string = 'right'
  @Input() extraParam: boolean = false
  @Output() extraDateList: EventEmitter<any[]> = new EventEmitter();
  @Output() startEndDate: EventEmitter<{ periode: string, start: string, end: string }> = new EventEmitter();
  @Input() dayData: any
  @Input() weekData: any
  @Input() monthData: any
  @Input() yearData: any
  @Input() allData: any


  constructor(
    // private userService: UserService,
     private formBuilder: UntypedFormBuilder) { }

  ngOnInit(): void {
    this.initForm()
    this.today = new Date().toISOString().slice(0, 10)
    this.lastMonday = moment(this.today).startOf('isoWeek').format("YYYY-MM-DD");
    this.beginOfMonth = moment().startOf('month').format("YYYY-MM-DD");
    this.beginOfYear = moment().startOf('year').format("YYYY-MM-DD");
    this.beginOfAll = moment('2021-05-01').format("YYYY-MM-DD");

    this.currentYear = +(new Date().getFullYear())
    this.setYearsList()
    this.freamSearch.controls.day.setValue(this.today)
    this.freamSearch.controls.week.setValue(this.lastMonday)
    this.freamSearch.controls.month.setValue(this.beginOfMonth)
    this.freamSearch.controls.year.setValue(this.beginOfYear)
    this.freamSearch.controls.all.setValue(this.beginOfAll)
    this.freamSearch.controls.selectedYear.setValue(this.currentYear)
    this.freamSearch.controls.selectedMonth.setValue(moment().get('M'))
    this.freamSearch.controls.selectedWeek.setValue(moment().get('W'))

    for (const date of ['day', 'week', 'month', 'year', 'tous']) {
      this.search(date)
    }
  }

  initForm() {
    this.freamSearch = this.formBuilder.group({
      day: [],
      week: [],
      month: [],
      year: [],
      all: [],
      selectedWeek: [],
      selectedMonth: [],
      selectedYear: [],
    });
  }

  search(date: string, valueChange?: any) {
    // this.userService.changeLoadingState(true)
    if (date === 'day') {
      let data = { periode: date, start: this.freamSearch.value.day, end: this.freamSearch.value.day }
      this.startEndDate.emit(data)
      if (this.extraParam) {
        this.searchDateParams(data)
      }

    } else if (date === 'week') {

      let begin = moment(this.freamSearch.value.week).startOf('isoWeek')
      let end = moment(begin).add(1, 'w').subtract(1, 'd').format("YYYY-MM-DD")
      let data = { periode: date, start: begin.format("YYYY-MM-DD"), end: end }
      this.startEndDate.emit(data)
      if (this.extraParam) {
        this.searchDateParams(data)
      }
    }
    else if (date === 'month') {

      let begin = moment(this.freamSearch.value.month).startOf('month')
      let end = moment(begin).add(1, 'M').subtract(1, 'd').format("YYYY-MM-DD")
      let data = { periode: date, start: begin.format("YYYY-MM-DD"), end: end }
      this.startEndDate.emit(data)
      if (this.extraParam) {
        this.searchDateParams(data)
      }

    }
    else if (date === 'year') {
      let begin = this.freamSearch.value.year
      let end = this.today
      if (valueChange) {
        begin = moment(`${valueChange}-01-01`).startOf('year').format("YYYY-MM-DD");
        end = moment(`${valueChange}-01-01`).startOf('year').add(1, 'y').subtract(1, 'd').format("YYYY-MM-DD");
      }
      let data = { periode: date, start: begin, end: end }
      this.startEndDate.emit(data)
      if (this.extraParam) {
        this.searchDateParams(data)
      }

    }
    else if (date === 'tous') {
      let begin = this.freamSearch.value.all
      let end = this.today
      let data = { periode: date, start: begin, end: end }
      this.startEndDate.emit(data)
      if (this.extraParam) {
        this.searchDateParams(data)
      }
    }
  }

  setYearsList() {
    let firstYear = 2021
    let dif = this.currentYear - firstYear
    for (let i = 0; i <= dif; i++) {
      this.yearsList.push(firstYear + i)
    }

  }

  setMonth(year: string, month: number) {
    month++
    this.thisMonth = `${year}-0${month.toString()}`
    this.freamSearch.controls.month.setValue(this.thisMonth)

  }

  setWeek(year: string, week: number) {
    this.thisWeek = `${year}-W${week.toString()}`
    this.freamSearch.controls.week.setValue(this.thisWeek)

  }

  //set and update la liste des dates
  searchDateParams(date: any) {
    let chek = this.dateList.find(c => c.periode === date.periode);
    if (chek) {
      this.dateList[this.dateList.findIndex(el => el.periode === date.periode)] = date;
    } else {
      this.dateList.push(date)
    }
    this.extraDateList.emit(this.dateList)
  }

}

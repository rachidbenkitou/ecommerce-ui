import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexYAxis,
  ApexLegend,
  ApexXAxis,
  ApexTooltip,
  ApexTheme,
  ApexGrid
} from 'ng-apexcharts';
import { ActionsService } from '../../services/actions.service';

export type chartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: any;
  theme: ApexTheme;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
  legend: ApexLegend;
  colors: string[];
  markers: any;
  grid: ApexGrid;
};

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.scss']
})
export class ChartLineComponent implements OnInit {
  @Input() seriesData: any[] = []
  @Output() yearEvent: EventEmitter<number> = new EventEmitter();

  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public chartOptions: Partial<chartOptions>;

  constructor(private actionService: ActionsService) {
    this.chartOptions = {
      series: this.seriesData,
      chart: {
        fontFamily: 'Nunito Sans,sans-serif',
        height: 250,
        type: 'area',
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      markers: {
        size: 3,
        strokeColors: 'transparent',
      },
      stroke: {
        curve: 'smooth',
        width: '2',
      },
      colors: ['#2962ff', '#4fc3f7', '#0BB7AF'],
      legend: {
        show: true,
      },
      grid: {
        show: true,
        strokeDashArray: 0,
        borderColor: 'rgba(0,0,0,0.1)',
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      xaxis: {
        type: 'category',
        categories: [
          'Janv',
          'Févr',
          'Mars',
          'Avr',
          'Mai',
          'Juin',
          'Juill',
          'Août',
          'Sept',
          'Oct',
          'Nov',
          'Déc'
        ],
        labels: {
          style: {
            colors: '#a1aab2'
          }
        }
      },
      tooltip: {
        theme: 'dark'
      }
    };
  }

  //list of years
  yearsList: number[] = []
  currentYear: number
  setYearsList() {
    let firstYear = 2021
    let dif = this.currentYear - firstYear
    for (let i = 0; i <= dif; i++) {
      this.yearsList.push(firstYear + i)
    }
  }

  getYear(year: number) {
    this.actionService.sendYearEvent(year)
  }

  ngOnInit(): void {
    this.currentYear = +(new Date().getFullYear())
    this.setYearsList()
  }

}

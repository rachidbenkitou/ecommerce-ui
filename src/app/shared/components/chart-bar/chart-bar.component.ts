import { Component, OnInit, ViewChild, Input } from '@angular/core';

import {
  ApexChart,
  ApexStroke,
  ChartComponent,
  ApexDataLabels,
  ApexLegend,
  ApexTooltip,
  ApexAxisChartSeries,
  ApexTheme,
  ApexPlotOptions,
  ApexXAxis,
  ApexYAxis,
  ApexGrid,
  ApexFill
} from 'ng-apexcharts';
import { ActionsService } from '../../services/actions.service';

export interface chartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  legends: ApexLegend;
  labels: any;
  name: any;
  tooltip: ApexTooltip;
  colors: string[];
  plotOptions: ApexPlotOptions,
  grid: ApexGrid,
  fill: ApexFill,
  xaxis: ApexXAxis,
  yaxis: ApexYAxis,
  theme: ApexTheme
}

@Component({
  selector: 'app-chart-bar',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.scss']
})
export class ChartBarComponent implements OnInit {
  @Input() seriesData: any[] = []
  @Input() year: number

  @ViewChild("chart") chart: ChartComponent = Object.create(null);
  public chartOptions: Partial<chartOptions>;

  constructor(private actionService: ActionsService) {
    this.chartOptions = {
      series: [],
      chart: {
        type: 'line',
        height: 300,
        fontFamily: 'Nunito Sans,sans-serif',
        toolbar: {
          show: false,
        },
        stacked: false,
      },
      tooltip: {
        fillSeriesColor: false,
        theme: "dark"
      },
      dataLabels: {
        enabled: false,
      },
      legends: {
        show: true,
      },
      labels: ['Day', 'Month'],
      plotOptions: {
        bar: {
          columnWidth: "30%",
        },
      },
      colors: ['#2962ff', '#4fc3f7', '#0BB7AF'],
      fill: {
        type: "solid",
        colors: ['#2962ff', '#4fc3f7', '#0BB7AF'],
        opacity: 1
      },
      stroke: {
        width: 0,
      },
      grid: {
        padding: {
          left: 0,
          right: 0,
        },
        borderColor: "rgba(0,0,0,0.1)",
      },
      xaxis: {
        categories: [
          1,
          2,
          3,
          4,
          5,
          6,
          7,
          8,
          9,
          10,
          11,
          12,
          13,
          14,
          15,
          16,
          17,
          18,
          19,
          20,
          21,
          22,
          23,
          24,
          25,
          26,
          27,
          28,
          29,
          30,
          31
        ],
        labels: {
          show: true,
          style: {
            colors: [
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
              "#99abb4",
            ],
            fontSize: "12px",
            fontFamily: "'Nunito Sans', sans-serif",
          },
        },
      },
      yaxis: {
        labels: {
          show: true,
          style: {
            colors: "#99abb4",
            fontSize: "12px",
            fontFamily: "'Nunito Sans', sans-serif",
          },
        },
      },
    };
  }

    //list of Months
    monthList: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
    getMonth(month: number) {
      let date = `${month}/${this.year}`
      console.log(date);
  
    }
  
    ngOnInit(): void {
      this.year = +(new Date().getFullYear())
      this.actionService.getYearEvent().subscribe((yearEvent)=>{
        this.year = yearEvent
      })
      
    }

}

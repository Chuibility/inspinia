import { Component } from '@angular/core';
import {Router} from '@angular/router';

// Import Chart.js library
import 'chart.js';

import { FlotChartDirective } from '../../components/charts/flotChart';

declare var jQuery:any;

@Component({
  selector: 'dashboard1',
  templateUrl: 'dashboard1.template.html'
})

export class Dashboard1Component {


  // Dounghunt chart

  public doughnutChartType:string = 'doughnut';

  public doughnutChartLabels1:string[] = ['App', 'Software', 'Laptop'];
  public doughnutChartData1:number[] = [70, 27, 85];

  public doughnutChartLabels2:string[] = ['App', 'Software', 'Laptop'];
  public doughnutChartData2:number[] = [300, 50, 100];

  public colors:Array<any> = [{backgroundColor: ["#a3e1d4", "#dedede", "#9CC3DA"]}];


  // Main Chart

  public flotDataset:Array<any> = [
    [[0, 4], [1, 8], [2, 5], [3, 10], [4, 4], [5, 16], [6, 5], [7, 11], [8, 6], [9, 11], [10, 30], [11, 10], [12, 13], [13, 4], [14, 3], [15, 3], [16, 6]],
    [[0, 1], [1, 0], [2, 2], [3, 0], [4, 1], [5, 3], [6, 1], [7, 5], [8, 2], [9, 3], [10, 2], [11, 1], [12, 0], [13, 2], [14, 8], [15, 0], [16, 0]]
  ];

  public flotOptions:any =
  {
    series: {splines: {show: true, tension: 0.4, lineWidth: 1, fill: 0.4},},
    grid: {tickColor: "#d5d5d5", borderWidth: 1, color: '#d5d5d5'},
    colors: ["#1ab394", "#1C84C6"],
  };

  // Peity chart

  public peityType1:string = "bar";
  public peityOptions1:any = { fill: ["#1ab394", "#d7d7d7"], width:100};

  public peityType2:string = "line";
  public peityOptions2:any = { fill: '#1ab394',stroke:'#169c81', width: 64 };

  // Sparkline chart

  public sparklineData:Array<any> = [5, 6, 7, 2, 0, 4, 2, 4, 5, 7, 2, 4, 12, 14, 4, 2, 14, 12, 7];
  public sparklineOptions:any = { type: 'bar', barWidth: 8, height: '150px', barColor: '#1ab394', negBarColor: '#c6c6c6'};

}

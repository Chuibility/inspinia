import { Component, OnDestroy, OnInit, } from '@angular/core';


declare var jQuery:any;

@Component({
  selector: 'dashboard4',
  templateUrl: 'dashboard4.template.html'
})

export class Dashboard4Component implements OnDestroy, OnInit {

  public nav:any;

  public constructor() {
    this.nav = document.querySelector('nav.navbar');
  }

  public ngOnInit():any {
    this.nav.className += " white-bg";
  }


  public ngOnDestroy():any {
    this.nav.classList.remove("white-bg");
  }

  public lineChartData:Array<any> = [
    {data: [48, 48, 60, 39, 56, 37, 30], label: 'Example data 1'},
    {data: [65, 59, 40, 51, 36, 25, 40], label: 'Example data 2'},
  ];
  public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartType:string = 'line';

  public lineChartColors:Array<any> = [
    {
      backgroundColor: "rgba(26,179,148,0.5)",
      borderColor: "rgba(26,179,148,0.7)",
      pointBackgroundColor: "rgba(26,179,148,1)",
      pointBorderColor: "#fff",
    },
    {
      backgroundColor: "rgba(220,220,220,0.5)",
      borderColor: "rgba(220,220,220,1)",
      pointBackgroundColor: "rgba(220,220,220,1)",
      pointBorderColor: "#fff",
    }
  ];

  public flotDataset:Array<any> = [
    { label: "Data 1", data: [[1262304000000, 6], [1264982400000, 3057], [1267401600000, 20434], [1270080000000, 31982], [1272672000000, 26602], [1275350400000, 27826], [1277942400000, 24302], [1280620800000, 24237], [1283299200000, 21004], [1285891200000, 12144], [1288569600000, 10577], [1291161600000, 10295]], color: '#17a084'},
    { label: "Data 2", data: [[1262304000000, 5], [1264982400000, 200], [1267401600000, 1605], [1270080000000, 6129], [1272672000000, 11643], [1275350400000, 19055], [1277942400000, 30062], [1280620800000, 39197], [1283299200000, 37000], [1285891200000, 27000], [1288569600000, 21000], [1291161600000, 17000]], color: '#127e68' }
  ];

  public flotOptions:any =
  {
    xaxis: {
      tickDecimals: 0
    },
    series: {
      lines: {
        show: true,
        fill: true,
        fillColor: {
          colors: [{
            opacity: 1
          }, {
            opacity: 1
          }]
        },
      },
      points: {
        width: 0.1,
        show: false
      },
    },
    grid: {
      show: false,
      borderWidth: 0
    },
    legend: {
      show: false,
    }
  };

  public peityType:string = "pie";
  public peityOptions:any = { fill: ['#1ab394', '#d7d7d7', '#ffffff']};

}

import { Component, OnDestroy, OnInit, } from '@angular/core';


declare var jQuery:any;

@Component({
  selector: 'dashboard3',
  templateUrl: 'dashboard3.template.html'
})

export class Dashboard3Component implements OnDestroy, OnInit {

  public nav:any;
  public wrapper:any;

  public constructor() {
    this.nav = document.querySelector('nav.navbar');
    this.wrapper = document.getElementById('page-wrapper');
  }

  public ngOnInit():any {
    this.nav.className += " white-bg";
    this.wrapper.className += " sidebar-content";
  }

  public ngOnDestroy():any {
    this.nav.classList.remove("white-bg");
    this.wrapper.classList.remove("sidebar-content");
  }

  public lineChartData:Array<any> = [
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Example data 1'},
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Example data 2'},
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

  public peityType1:string = "bar";
  public peityType2:string = "line";
  public peityOptions1:any = { fill: ["#1ab394", "#d7d7d7"], width:100};
  public peityOptions2:any = { fill: ["#1ab394", "#d7d7d7"]};
  public peityOptions3:any = { fill: '#1ab394', stroke:'#169c81'};

}

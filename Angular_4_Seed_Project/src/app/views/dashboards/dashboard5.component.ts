import { Component, OnDestroy, OnInit, } from '@angular/core';


declare var jQuery:any;

@Component({
  selector: 'dashboard5',
  templateUrl: 'dashboard5.template.html'
})

export class Dashboard5Component implements OnDestroy, OnInit {

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

  public flotDataset:Array<any> = [
    [[0, 4], [1, 8], [2,5],[3,10],[4,4],[5,16],[6,5],[7,11],[8,6],[9,11],[10,20],[11,10],[12,13],[13,4],[14,7],[15,8],[16,12]],
    [[0, 0], [1, 2], [2,7],[3,4],[4,11],[5,4],[6,2],[7,5],[8,11],[9,5],[10,4],[11,1],[12,5],[13,2],[14,5],[15,2],[16,0]]
  ];

  public flotOptions:any =
  {
    series: {
      lines: {
        show: false,
        fill: true
      },
      splines: {
        show: true,
        tension: 0.4,
        lineWidth: 1,
        fill: 0.4
      },
      points: {
        radius: 0,
        show: true
      },
      shadowSize: 2
    },
    grid: {
      hoverable: true,
      clickable: true,

      borderWidth: 2,
      color: 'transparent'
    },
    colors: ["#1ab394", "#1C84C6"],
    xaxis:{
    },
    yaxis: {
    },
    tooltip: false
  };

  public sparklineData:Array<any> = [34, 43, 43, 35, 44, 32, 44, 52];
  public sparklineData2:Array<any> = [32, 11, 25, 37, 41, 32, 34, 42];
  public sparklineOptions:any = {type: 'line', width: '100%', height: '50', lineColor: '#1ab394', fillColor: "transparent"};


}

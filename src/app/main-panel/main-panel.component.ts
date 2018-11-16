import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { chart } from 'highcharts';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
@ViewChild(`chartTarget`) chartTarget: ElementRef;
title = 'app';
chart: Highcharts.chartObject;
ngAfterViewInit(): void {
  Highcharts.Options = {

    chart: {
      renderTo: 'container',
      type: 'line'
    },
    title: {
      text: 'Energy Production'
    },
    xAxis: {
      categories: ['Apples', 'Bananas', 'Oranges']
    },
    yAxis: {
      title: {
        text: 'Fruit eaten'
      }
    },
    series: [{
      name: 'Jane',
      data: [1, 0, 4]
    }, {
      name: 'John',
      data: [5, 7, 3]
    }]
  }
  this.chart = chart(this.chartTarget.nativeElement, Highcharts.Options); 
}
}

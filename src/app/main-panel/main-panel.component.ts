import { Component, OnInit, ViewChild, ElementRef,Input } from '@angular/core';
import { HighchartsService } from '../highcharts.service';
import * as Highcharts from 'highcharts';
import {chartSelectedService} from '../chart-select.service';
@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css'],
})
export class MainPanelComponent implements OnInit {
  
  public selectedRegion;

  @ViewChild(`chartTarget`) chartTarget: ElementRef;
  chartsList;
  
  constructor(private chartService : chartSelectedService,public hcs: HighchartsService) { 
    
    this.chartService.myMethod$.subscribe((data) => {
      this.selectedRegion = data;
      if(this.selectedRegion==1){
        document.querySelector("#chartArea").innerHTML="";
        this.hcs.createChart(document.querySelector("#chartArea"),this.Options1);
      }else if(this.selectedRegion==2){
        document.querySelector("#chartArea").innerHTML="";
        this.hcs.createChart(document.querySelector("#chartArea"),this.Options2);
        
      }
      else if(this.selectedRegion==3){
        document.querySelector("#chartArea").innerHTML="";
        this.hcs.createChart(document.querySelector("#chartArea"),this.Options3);
        
      }
      else if(this.selectedRegion==4){
        document.querySelector("#chartArea").innerHTML="";
        this.hcs.createChart(document.querySelector("#chartArea"),this.Options4);
        
      }
      console.log(this.selectedRegion );
    })
    
  } 
  
  ngOnInit() {
    this.selectedRegion=1;
    this.hcs.createChart(document.querySelector("#chartArea"),this.Options1); 
    
  
  }
  chartNumbertoShow;
 
  
  
  // chart: Highcharts.chartObject;

  Options2 = {
      
    chart: {
      renderTo: 'container',
      type: 'line'
    },
    title: {
      text: 'Energy Production'
    },
    xAxis: {
      type: 'datetime',
      alignTicks: true,
    },
    yAxis: {
      title: {
        text: 'KW'
      }
    },
    series: [{
      data: [74, 63, 80, 85, 73, 83, 92, 56, 69, 99, 57, 82, 81, 84, 65, 95, 71, 54, 77, 59, 76, 90, 72, 93, 91, 66, 97, 60, 61, 55, 64, 98, 51, 79, 96, 50, 88, 94, 78, 67, 89, 87, 58, 70, 100, 75, 62, 68, 86, 52, 53, 77, 54, 89, 98, 65, 100, 67, 83, 96, 52, 97, 99, 76, 92, 69, 63, 90, 94, 64, 72, 51, 93, 50, 71, 88, 59, 62, 87, 78, 84, 81, 74, 75, 58, 55, 86, 56, 61, 80, 91, 79, 60, 73, 85, 68, 66, 70, 95, 82],
      pointStart: Date.UTC(2018, 10, 1),
      pointInterval: 24 * 3600 * 1000
    }]
  }

  

  Options4 = {

    chart: {
      renderTo: 'container',
      type: 'line'
    },
    title: {
      text: 'Energy Production'
    },
    xAxis: {
      type: 'datetime',
      alignTicks: true,
    },
    yAxis: {
      title: {
        text: 'KW'
      }
    },
    series: [{
      data: [74, 63, 80, 85, 73, 83, 92, 56, 69, 99, 57, 82, 81, 84, 65, 95, 71, 54, 77, 59, 76, 90, 72, 93, 91, 66, 97, 60, 61, 55, 64, 98, 51, 79, 96, 50, 88, 94, 78, 67, 89, 87, 58, 70, 100, 75, 62, 68, 86, 52, 53, 77, 54, 89, 98, 65, 100, 67, 83, 96, 52, 97, 99, 76, 92, 69, 63, 90, 94, 64, 72, 51, 93, 50, 71, 88, 59, 62, 87, 78, 84, 81, 74, 75, 58, 55, 86, 56, 61, 80, 91, 79, 60, 73, 85, 68, 66, 70, 95, 82],
      pointStart: Date.now(),
      pointInterval: 24 * 3600 * 1000
    }]
  }
  Options3 = {

    chart: {
      renderTo: 'container',
      type: 'line'
    },
    title: {
      text: 'Energy Production'
    },
    xAxis: {
      type: 'datetime',
      alignTicks: true,
    },
    yAxis: {
      title: {
        text: 'KW'
      }
    },
    series: [{
      data: [74, 63, 80, 85, 73, 83, 92, 56, 69, 99, 57, 82, 81, 84, 65, 95, 71, 54, 77, 59, 76, 90, 72, 93, 91, 66, 97, 60, 61, 55, 64, 98, 51, 79, 96, 50, 88, 94, 78, 67, 89, 87, 58, 70, 100, 75, 62, 68, 86, 52, 53, 77, 54, 89, 98, 65, 100, 67, 83, 96, 52, 97, 99, 76, 92, 69, 63, 90, 94, 64, 72, 51, 93, 50, 71, 88, 59, 62, 87, 78, 84, 81, 74, 75, 58, 55, 86, 56, 61, 80, 91, 79, 60, 73, 85, 68, 66, 70, 95, 82],
      pointStart: Date.now(),
      pointInterval: 24 * 3600 * 1000
    }]
  }
  Options1 = {

    chart: {
      renderTo: 'container',
      type: 'line'
    },
    title: {
      text: 'Energy Production'
    },
    xAxis: {
      type: 'datetime',
      alignTicks: true,
    },
    yAxis: {
      title: {
        text: 'KW'
      }
    },
    series: [{
      data: [74, 63, 80, 85, 73, 83, 92, 56, 69, 99, 57, 82, 81, 84, 65, 95, 71, 54, 77, 59, 76, 90, 72, 93, 91, 66, 97, 60, 61, 55, 64, 98, 51, 79, 96, 50, 88, 94, 78, 67, 89, 87, 58, 70, 100, 75, 62, 68, 86, 52, 53, 77, 54, 89, 98, 65, 100, 67, 83, 96, 52, 97, 99, 76, 92, 69, 63, 90, 94, 64, 72, 51, 93, 50, 71, 88, 59, 62, 87, 78, 84, 81, 74, 75, 58, 55, 86, 56, 61, 80, 91, 79, 60, 73, 85, 68, 66, 70, 95, 82],
      pointStart: Date.now(),
      pointInterval: 24 * 3600 * 1000
    }]
  }

}


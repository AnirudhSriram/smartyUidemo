import { Component } from '@angular/core';
import {regionData} from "./regionData";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})




export class AppComponent {
  chartNumber:number = 1;
  onSelectedRegion(region:number){
    this.chartNumber = region;
  }
  
 
}



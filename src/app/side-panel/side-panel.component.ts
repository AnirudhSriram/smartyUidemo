import { Component, OnInit } from '@angular/core';
import {regionData} from "../regionData";
import {chartSelectedService} from '../chart-select.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],
  
})
export class SidePanelComponent implements OnInit {

  constructor(private chartSelectedService:chartSelectedService) { 
    
  }

  ngOnInit() {
    
  }
 

  regionList : regionData[] = [
    {id:1,name:"Region-1"},
    {id:2,name:"Region-2"},
    {id:3,name:"Region-3"},
    {id:4,name:"Region-4"},

  ]
  public selectedRegion= {};
  
  setRegion(id){
      this.selectedRegion = id;
      this.chartSelectedService.myMethod(this.selectedRegion);
  }

  
}

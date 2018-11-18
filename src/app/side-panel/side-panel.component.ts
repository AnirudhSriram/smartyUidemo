import { Component, OnInit } from '@angular/core';
import { regionData } from "../regionData";
import { chartSelectedService } from '../chart-select.service';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.css'],

})
export class SidePanelComponent implements OnInit {

  constructor(private chartSelectedService: chartSelectedService) {

  }
  regionList: regionData[] = [
    { id: 1, name: "Anholt", country: "Denmark", outreach: "1 million", capacity: "400MW", turbines: 111 ,continent:"Europe",actions:[{action:"SWT-3.6-120-22",status:"Pending"},{action:"SWT-3.6-120-24",status:"Execution"},{action:"SWT-3.6-120-22",status:"Cancelled"}],events:["Annual Site Check","Installation of SWT-3.6-120-66"]},
    { id: 2, name: "London Array", country: "United Kingdom", outreach: "560,000", capacity: "630MW", turbines: 175,continent:"Europe" ,actions:[{action:"SWT-3.6-120-170",status:"Execution"},{action:"SWT-3.6-120-21",status:"Completed"},{action:"SWT-3.6-120-174",status:"Pending"}],events:["Service Technician Training","Component Servicing"]},
    { id: 3, name: "Borkum Riffgrund 1", country: "Germany", outreach: "30000", capacity: "4MW", turbines: 78 ,continent:"Europe",actions:[{action:"SWT-4.0-120-28",status:"Pending"},{action:"MHI V164",status:"Execution"},{action:"SWT-4.0-120-92",status:"Execution"}],events:["Vestas Turbine Servicing","Alarms Check"]},
    { id: 4, name: "Bay State Wind", country: "United States", outreach: "3 million", capacity: "2000MW", turbines: 3000 ,continent:"North America",actions:[],events:["Arrival of Turbines at Site","Turbine Installation"]},
    { id: 5, name: 'Greater Changhua', country: "Taiwan", outreach: "500,000", capacity: "632MW", turbines: 80,continent:"Asia",actions:[{action:"SWT-3.6-120-22",status:"Pending"},{action:"SG-8.0-167 DD 22",status:"Execution"},{action:"SG-8.0-167 DD 12",status:"Pending"}],events:["Planning of Site Events","Taiwan Govt. site check"] }

  ]
   public selectedRegion;
  ngOnInit() {
    this.selectedRegion = 1;
    this.chartSelectedService.myMethod(this.selectedRegion);
    this.chartSelectedService.details(this.regionList[this.selectedRegion-1]);
      
  }
  setRegion(id) {
    this.selectedRegion = id;
    this.chartSelectedService.myMethod(this.selectedRegion);
    this.chartSelectedService.details(this.regionList[id-1]);
  }


}

import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPanelComponent} from "./main-panel/main-panel.component";
import {MapViewComponent} from "./map-view/map-view.component";
const routes:Routes =[ 
  {
    path:'' ,
    component:MainPanelComponent
  },
  {
    path:'mapView',
    component:MapViewComponent
  }
]
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[
    RouterModule
  ]
  
})
export class AppRoutingModule { }

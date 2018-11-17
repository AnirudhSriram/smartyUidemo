import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {chartSelectedService} from "./chart-select.service"
import { AppComponent } from './app.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { MainPanelComponent } from './main-panel/main-panel.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { MapViewComponent } from './map-view/map-view.component';
import { HighchartsService } from './highcharts.service';
@NgModule({
  declarations: [
    AppComponent,
    SidePanelComponent,
    MainPanelComponent,
    HeaderComponent,
    MapViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [chartSelectedService,HighchartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

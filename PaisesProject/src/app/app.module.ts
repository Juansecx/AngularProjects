import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaisInputComponent } from './pais-input/pais-input.component';
import { TablaInputComponent } from './tabla-input/tabla-input.component';
import { PorPaisComponent } from './por-pais/por-pais.component';
import { PorRegionComponent } from './por-region/por-region.component';
import { PorCapitalComponent } from './por-capital/por-capital.component';
import { SidebarComponent } from './shared/sidebar/sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    PaisInputComponent,
    TablaInputComponent,
    PorPaisComponent,
    PorRegionComponent,
    PorCapitalComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    PaisInputComponent,
    TablaInputComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

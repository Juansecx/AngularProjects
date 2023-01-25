import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipeDateComponent } from './pipe-date/pipe-date.component';
import { PipeNumberComponent } from './pipe-number/pipe-number.component';
import { PipeJSONComponent } from './pipe-json/pipe-json.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeDateComponent,
    PipeNumberComponent,
    PipeJSONComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

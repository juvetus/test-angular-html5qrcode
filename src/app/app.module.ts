import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxHtml5QrcodeModule } from 'ngx-html5-qrcode';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxHtml5QrcodeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

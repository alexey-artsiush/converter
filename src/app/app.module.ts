import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { InputCurrencyComponent } from './input-currency/input-currency.component';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    InputCurrencyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

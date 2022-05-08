import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ConverterComponent } from './converter/converter.component';
import { InputCurrencyComponent } from './input-currency/input-currency.component';
import { СurrenciesListComponent } from './currencies-list/currencies-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    InputCurrencyComponent,
    СurrenciesListComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

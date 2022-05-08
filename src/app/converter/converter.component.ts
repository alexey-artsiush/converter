import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Rates} from "../../Models/Rates";
import { CurrenciesService } from '../currencies.service';
import { response } from 'express';

export interface Сurrency {
  codeCurrency: string
  typeCurrency: string
  value: any
}

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  response:any = undefined
  rates: Rates | undefined;

  constructor(private httpClient: HttpClient) {}

  getCurrencies() {
    this.httpClient.get('http://localhost:4000/getRates')
    .subscribe((response) => {
      this.response = response;
      const data = JSON.stringify(response)
      console.log(response);
      return response
    })
    return this.response
  }

  currencies: Сurrency[] = [
    {codeCurrency: 'USD', typeCurrency: 'доллар', value: 24},
    {codeCurrency: 'EUR', typeCurrency: 'евро', value: 26 },
    {codeCurrency: 'UAH', typeCurrency: 'гривна', value: 1},  
  ]
  
  currenciesList:any
  ngOnInit() {
    this.getCurrencies()
    }
}

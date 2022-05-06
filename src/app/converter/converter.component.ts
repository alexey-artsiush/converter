import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Rates} from "../../Models/Rates";

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  response:any
  rates: Rates | undefined;


  // async getCurrencies() {
  //   const response = await fetch('https://belarusbank.by/api/kursExchange?city=Брест>')
  //   const data = await response.json()
  //   const result = await data
  //   console.log(result);
  // }

  constructor(private http: HttpClient) {

  }
  search() {
    //const url = 'https://currate.ru/api/?get=rates&pairs=USDRUB,EURRUB&key=94ee1ecac71d9753fee7b971b357bab2';
    const serverUrl = 'http://localhost:4000/getRates'

    this.http.get(serverUrl)
    .subscribe((response) => {
      this.response = response;

      console.log('response: ' + JSON.stringify(response));

      const { data : { status, data } } = this.response
      if(status === 200) {
        this.rates = data;
      }

      console.log('rates: ' + JSON.stringify(this.rates));
    })

  }

  ngOnInit(): void {
  }
}

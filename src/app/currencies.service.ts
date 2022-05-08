import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {
  response:any

  constructor(private httpClient: HttpClient) { }
    getCurrencies() {
    const serverUrl = 'http://localhost:4000/getRates'
    this.httpClient.get(serverUrl)
    .subscribe((response) => {
      this.response = response;
      const data = JSON.stringify(response)
      console.log(data);
    })
  }
}



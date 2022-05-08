import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-currencies-list',
  templateUrl: './currencies-list.component.html',
  styleUrls: ['./currencies-list.component.scss']
})
export class СurrenciesListComponent {

  constructor(private httpClient: HttpClient) { }  
  
  getCurrencies() {
    const urlServer = 'http://localhost:4000/getRates'
    return this.httpClient.get(urlServer)
    // .subscribe((response) => {
    //   this.response = response;
    //   const data = JSON.stringify(response)
    //   console.log('response: ' + data);
    // })
    
  }

}

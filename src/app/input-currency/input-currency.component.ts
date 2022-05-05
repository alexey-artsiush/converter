import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-currency',
  templateUrl: './input-currency.component.html',
  styleUrls: ['./input-currency.component.scss']
})
export class InputCurrencyComponent implements OnInit {

  codeCurrency = "USD"
  typeCurrency = "доллар США"

  constructor() { }

  ngOnInit(): void {
  }

}

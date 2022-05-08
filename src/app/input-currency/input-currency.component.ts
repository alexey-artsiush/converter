import { Component, Input, OnInit } from '@angular/core';
import {Сurrency} from "../converter/converter.component"

@Component({
  selector: 'app-input-currency',
  templateUrl: './input-currency.component.html',
  styleUrls: ['./input-currency.component.scss']
})

export class InputCurrencyComponent implements OnInit {
  @Input() currency: Сurrency = { codeCurrency:'', typeCurrency: '', value: 1};
  @Input() index!: number
  

  ngOnInit(): void {
  }

}

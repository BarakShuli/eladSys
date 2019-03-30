import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  currencyList: Observable<object[]>;
  defaultValue = "select";
  baseCurrency:string;
  drpFromCurrencySelected = this.defaultValue;
  drpToCurrencySelected = this.defaultValue;
  txtAmmount:number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.initParams();
  }

  initParams() {
    this.currencyList = this.route.snapshot.data.currencyList;
    this.baseCurrency = this.currencyList[0].source;
  }

  setSelectedFromCurrency(evt:any) {
    this.drpFromCurrencySelected = evt;
  }

  setSelectedToCurrency(evt:any) {
    this.drpToCurrencySelected = evt;
  }

  doConvert() {
    const selctedCurrencyFromBaseValue  = +this.drpFromCurrencySelected.split(",")[1];
    const selctedCurrencyToBaseValue    = +this.drpToCurrencySelected.split(",")[1];
    const resultToBase                  = this.convertToBaseCurrency(selctedCurrencyFromBaseValue, this.txtAmmount);
    const resultFromBaseToSelected      = this.convertFromBaseCurrency(selctedCurrencyToBaseValue, resultToBase);
    this.formatResultOutput(resultFromBaseToSelected);
  }

  formatResultOutput(resultFromBaseToSelected:number) {
    let resultText = `${this.txtAmmount} ${this.drpFromCurrencySelected.split(",")[0]} =  ${resultFromBaseToSelected.toFixed(3)} ${this.drpToCurrencySelected.split(",")[0]}`;
    document.getElementById('resultContainer').innerHTML = resultText;
  }

  isValidConvertion() {
    let flag = false;
    if(this.txtAmmount
      && this.drpFromCurrencySelected !== this.defaultValue
      && this.drpToCurrencySelected !== this.defaultValue) {
      flag = true;
    }
    return flag;
  }

  convertToBaseCurrency(currency:number, ammount:number) {
    return ammount / currency;
  }

  convertFromBaseCurrency(currency:number, ammount:number) {
    return ammount * currency;
  }

  switchCurrency() {
    const temp = this.drpFromCurrencySelected;
    this.drpFromCurrencySelected = this.drpToCurrencySelected;
    this.drpToCurrencySelected = temp;
  }

}

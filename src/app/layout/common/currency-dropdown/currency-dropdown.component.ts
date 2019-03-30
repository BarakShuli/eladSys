import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-currency-dropdown',
  templateUrl: './currency-dropdown.component.html',
  styleUrls: ['./currency-dropdown.component.scss']
})
export class CurrencyDropdownComponent implements OnInit {
  
  currencyList: Observable<object[]>;

  @Output() selectedCurrency: EventEmitter<any> = new EventEmitter();
  @Input() public selectedValue: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.currencyList = this.route.snapshot.data.currencyList;
  }

  setSelectedCurrency(evt:any) {
    this.selectedCurrency.emit(evt.target.selectedOptions[0].value);
  }

}

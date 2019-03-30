import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { MainResolver } from './services/resolver/main.service';
import { CurrencyDropdownComponent } from './layout/common/currency-dropdown/currency-dropdown.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CurrencyDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [MainResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }

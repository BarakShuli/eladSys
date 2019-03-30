import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MainResolver } from './services/resolver/main.service';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    resolve: { currencyList: MainResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

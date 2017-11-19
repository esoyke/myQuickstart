import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {CustomersComponent} from './customer/customers.component';
import {CustomerComponent} from './customer/customer.component';

// EBS had to add import of FormsModule to get 2-way binding from forms working (banana in a box notation ->  [(ngModel)] )
import { FormsModule } from '@angular/forms';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  //why do we need to declare nested CustomerComponent as well?
  declarations: [ AppComponent, CustomersComponent, CustomerComponent], 
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

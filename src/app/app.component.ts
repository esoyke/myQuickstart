import { Component } from '@angular/core';
import {CustomersComponent} from './customer/customers.component';
import {CustomerService} from './customer/customer.service';

@Component({
  selector: 'my-app',
  moduleId: __moduleName,  
  templateUrl: 'app.component.html',
  //directives: [CustomerComponent]  'directives' is deprecated, insert into ngModule declarations instead
  providers: [CustomerService]  
})

export class AppComponent  { 
  constructor (private _customerService: CustomerService){}
  // [] means property binding - C to D
  // () means event binding - D to C
  name = 'Angular'; 
  title = 'Customer App';
  customColor = 'red';

  changeColor(){
    this.customColor = this.customColor === 'blue' ? 'red' : 'blue';
  }
}

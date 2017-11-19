import { Component, OnInit } from '@angular/core';
import {CustomerComponent} from './customer.component';
import {CustomerService} from './customer.service';

@Component({
    // with inclusion of moduleId we can now avoid having to specify pathing to the component, 
    // you must change tsconfig.json's module option from commonJS to system
    moduleId: __moduleName,
    selector: 'app-customers',
    // templateUrl: 'app/customer/customers.component.html'
    templateUrl: 'customers.component.html',
    providers: [CustomerService] // <-- if you define same provider in child it will be new scope not the parent's
})

export class CustomersComponent implements OnInit {

    constructor(private _customerService: CustomerService) { }

    customers: any[];

    ngOnInit() { 
        this.customers = this._customerService.getCustomers();
    }
}

import { Injectable } from '@angular/core';

@Injectable()
export class CustomerService {

    constructor() { }

    getCustomers(){
        return [
            {id: 1, name: 'Ward'},
            {id: 2, name: 'Joe'},
            {id: 3, name: 'Sally'},
            {id: 4, name: 'Eric'},
            {id: 5, name: 'Bob'},
          ];
    }
}

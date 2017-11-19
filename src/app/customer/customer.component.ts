import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-customer',
    moduleId: __moduleName,    
    templateUrl: 'customer.component.html'
})

export class CustomerComponent implements OnInit {
    // customer: any;
    @Input() customer: {id: number, name: string};

    myColor = 'gray';

    constructor() { }

    ngOnInit() { }
}



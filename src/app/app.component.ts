import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html' 
})

export class AppComponent  { 
  // [] means property binding
  // () means event binding
  name = 'Angular'; 
  title = 'Customer App';
  customColor = 'red';
  changeColor(){
    this.customColor = this.customColor === 'blue' ? 'red' : 'blue';
  }
}

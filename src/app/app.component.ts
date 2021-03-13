import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';
  isOn:boolean = false;

  clicked(){
    this.isOn = !this.isOn;
  }

  get message(){
    return `The light is ${this.isOn ? 'On' : 'Off'}`;
  }

  add(num1:number, num2:number):number {
    return num1+num2;
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-content-other',
  template:
    '<button (click)="alert()"> Click Me! </button> <div> {{ value }} </div>',
})
export class ContentOtherComponent {
  value = '';

  alert(): void {
    this.value === '' ? (this.value = 'Hi Hey Hello') : (this.value = '');
    console.log(this.value);
  }
}

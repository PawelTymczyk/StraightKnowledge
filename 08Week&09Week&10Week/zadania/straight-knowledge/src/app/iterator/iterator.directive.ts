import { Directive } from '@angular/core';

@Directive({
  selector: '[appIterator]',
})
export class IteratorDirective {
  isShowed = false;

  show(): void {
    this.isShowed = !this.isShowed;
  }

  canClick(): void {
    console.log('Somebody want to know something.');
  }
}

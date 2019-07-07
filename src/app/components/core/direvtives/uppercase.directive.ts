import { Directive, Input, Output, EventEmitter, OnInit } from '@angular/core';
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[uppercase]',
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '[value]': 'uppercase',
    '(input)': 'format($event.target.value)'
  }
})
export class UppercaseDirective {

  @Input() uppercase: string;
  @Output() uppercaseChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
    this.uppercase = this.uppercase || '';
    this.format(this.uppercase);
  }

  format(value) {
    value = value.toUpperCase();
    this.uppercaseChange.next(value);
  }

}
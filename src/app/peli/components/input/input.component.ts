import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: [
  ]
})
export class InputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();


  termino: string = '';

  ngOnInit () {
  }

  buscar () {
    this.onEnter.emit(this.termino);
  }


}

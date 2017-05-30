import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-item-done',
  templateUrl: 'button-item-done.html'
})
export class ButtonItemDoneComponent {

  @Input()
  task;

  @Output('doneClick')
  doneClick = new EventEmitter();

  constructor() {

  }

  protected showCheckmark() {
    return this.task.doCountPerCycle === 1 || this.isDone();
  }

  protected isDone() {
    return this.task.doCountPerCycle - this.task.doneCountPerCycle <= 0;
  }

  protected onDoneClick() {
    this.doneClick.emit();
  }
}

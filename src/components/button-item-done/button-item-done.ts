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
    return 
  }

  protected isDone() {
    const cycles = this.task.task_cycles
    if (cycles.length == 0) {
      return this.task.is_done;
    } else {
      const day = cycles.find((c) => c.repeat == "day");
      return (day.do_count - )
    }
  }

  protected onDoneClick() {
    this.doneClick.emit();
  }
}

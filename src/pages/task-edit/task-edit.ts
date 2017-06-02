import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-task-edit',
  templateUrl: 'task-edit.html',
})
export class TaskEditPage {

  defaultTask = {
    title: '',
    duration: 0,
    cycle: 'day',
    doCountPerCycle: 1,
    doneCountPerCycle: 0,
    before: 0,
    lives: 3,
    livesLeft: 3,
    complete: false,
  }

  task;
  isNewTask;
  editTaskForm;
  durationMultiplier = 1;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
  ) {
    this.task = navParams.get('task');
    if (this.task === null) {
      this.isNewTask = true;
      this.task = this.defaultTask;
    }
    this.editTaskForm = this.createEditTaskForm();
  }

  onTaskSave() {
    this.task.duration *= this.durationMultiplier;

  }

  private createEditTaskForm(): FormGroup {
    return this.formBuilder.group(Object.assign({}, this.task, {
      'title': [this.task.title, Validators.required]
    }))
  }

}

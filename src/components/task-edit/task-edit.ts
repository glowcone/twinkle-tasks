import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService, Task } from '../../api/task.service';

@Component({
  selector: 'page-task-edit',
  templateUrl: 'task-edit.html',
})
export class TaskEditModal {

  task;
  isNewTask;
  editTaskForm;

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    public formBuilder: FormBuilder,
    private taskService: TaskService,
  ) {
    this.task = navParams.get('task');
    if (this.task === null) {
      this.isNewTask = true;
      this.task = new Task();
    }
    this.editTaskForm = this.createEditTaskForm();
  }

  onTaskSave() {
    this.taskService.create(this.task).subscribe();
  }

  private createEditTaskForm(): FormGroup {
    return this.formBuilder.group(Object.assign({}, this.task, {
      'title': [this.task.title, Validators.required]
    }))
  }

}

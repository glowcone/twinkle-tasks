import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-task-edit',
  templateUrl: 'task-edit.html',
})
export class TaskEditPage {

  private task;
  private isNewTask;
  private newTask = 
    {
      title: '',
      duration: 0,
      cycle: 1,
      doCountPerCycle: 1,
      doneCountPerCycle: 0,
      lives: 3,
      livesLeft: 2,
      complete: false,
    }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.task = navParams.get('task');
    this.isNewTask = (this.task === null);
  }

}

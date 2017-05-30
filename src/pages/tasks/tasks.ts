import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  tasks = [
    {
      title: 'Practice Piano',
      duration: 30,
      cycle: 1,
      doCountPerCycle: 1,
      doneCountPerCycle: 0,
      lives: 3,
      livesLeft: 2,
      complete: false,
    },
    {
      title: 'Drink Water',
      duration: null,
      cycle: 1,
      doCountPerCycle: 6,
      doneCountPerCycle: 6,
      lives: 6,
      livesLeft: 6,
      complete: false,
    },
    {
      title: 'Do Homework',
      duration: null,
      cycle: 1,
      doCountPerCycle: 2,
      doneCountPerCycle: 1,
      lives: 2,
      livesLeft: 1,
      complete: false,
    }
  ]

  constructor(public navCtrl: NavController) {
  }

  private onTaskDone(task) {
    console.log("done");
  }

  private onTaskExpand(task) {
    task.isExpanded = !task.isExpanded;
  }

  private onTaskNew() {
    this.navCtrl.push('TaskEditPage', {
      task: null
    });
  }

  private onTaskEdit(task) {
    this.navCtrl.push('TaskEditPage', {
      task: task
    });
  }
}

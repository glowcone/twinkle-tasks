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
      cycle: 'day',
      doCountPerCycle: 1,
      doneCountPerCycle: 0,
      before: 0,
      lives: 3,
      livesLeft: 2,
      complete: false,
    },
    {
      title: 'Drink Water',
      duration: null,
      cycle: 'day',
      doCountPerCycle: 6,
      doneCountPerCycle: 6,
      before: 0,
      lives: 6,
      livesLeft: 6,
      complete: false,
    },
    {
      title: 'Do Homework',
      duration: null,
      cycle: 'week',
      doCountPerCycle: 3,
      doneCountPerCycle: 1,
      before: 0,
      lives: 2,
      livesLeft: 1,
      complete: false,
    }
  ]

  constructor(public navCtrl: NavController) {
  }

  onTaskDone(task) {
    console.log("done");
  }

  onTaskExpand(task) {
    task.isExpanded = !task.isExpanded;
  }

  onTaskNew() {
    this.navCtrl.push('TaskEditPage', {
      task: null
    });
  }

  onTaskEdit(task) {
    this.navCtrl.push('TaskEditPage', {
      task: task
    });
  }
}

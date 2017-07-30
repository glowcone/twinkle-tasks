import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { IonicPage, NavController } from 'ionic-angular';
import { TaskService, Task } from '../../api/task.service';

@IonicPage()
@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html',
})
export class TasksPage {

  tasks: Task[];

  constructor(
    private http: Http,
    private navCtrl: NavController,
    private taskService: TaskService
  ) {
    this.getTasks();
  }

  onTaskDone(task) {
    this.taskService.update(task.id, {
      increment_done_count: true
    })
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

  getTasks() {
    this.taskService.query().subscribe((tasks) => this.tasks = tasks)
  }
}

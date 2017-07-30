import { ApiService } from './api.service';
import { TaskCycle } from './task-cycle.service'

export class Task {
  id: number;
  name: string;
  points: number;
  task_cycles: TaskCycle[];
}

export class TaskService extends ApiService<Task> {
  get many():string { return 'tasks' }
  get one():string { return 'task' }
}

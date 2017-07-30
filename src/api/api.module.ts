import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { UserService } from './user.service';
import { TaskService } from './task.service';

@NgModule({
  imports: [
    HttpModule,
  ],
  providers: [
    UserService,
    TaskService,
  ]
})
export class ApiModule {}

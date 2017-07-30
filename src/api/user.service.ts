import { ApiService } from './api.service';

export interface User {
  id: number;
  email: string;
  name: string;
  children: User[];
  masters: User[];
}

export class UserService extends ApiService<User> {
  get many():string { return 'users' }
  get one():string { return 'user' }
}

import {Injectable} from '@angular/core';
import {User} from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User [] = [];

  constructor() {
    let u = new User();
    u.id = 1;
    u.name = 'Hovno';
    u.surname = 'velké';
    let uf = new User();
    uf.id = 2;
    uf.name = 'Larva';
    uf.surname = 'Hnusná';
    this.users.push(u, uf);
  }

  getUsers(): User[] {
    return this.users;
  }

  getUser(id: number): User {
    return this.users.find(x => x.id === id);
  }

  createUser(user: User): User {
    user.id = this.users.length + 2;
    this.users.push(user);
    return user;
  }
}

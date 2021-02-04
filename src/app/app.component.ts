import { Component } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'The good Angular programmer';

  currentUser: User = new User();
  userList: User[] = [];

  constructor(private userService: UserService,) {}

  ngOnInit(): void {
    this.userList = this.userService.list;
  }

  onSelectUser(user: User): void {
    this.currentUser = user;
  }

  onUpdateUser(user: User): void {
    this.userService.updateUser(user)
  }

  onDeleteUser(user: User): void {
    this.userService.removeUser(user)
  }

}

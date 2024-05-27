import { Component, Input, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input({ required: true }) avatar!: string;
  @Input({ required: true }) name!: string;

  constructor() {
    //this.avatar = DUMMY_USERS[0].avatar;
  }
  // selectedUser = signal(DUMMY_USERS[randomIndex]);

  // imagePath = computed(
  //   () => '../../assets/users/' + this.selectedUser().avatar
  // );
  get imagePath() {
    return '../../assets/users/' + this.avatar;
  }

  onSelectUser() {
    //   const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    //   this.selectedUser.set(DUMMY_USERS[randomIndex]);
    // }
  }
}

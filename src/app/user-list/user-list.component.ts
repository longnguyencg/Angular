import {Component, OnInit} from '@angular/core';
import {IUser} from '../user/IUser';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  data: IUser[] = [];
  count;
  userList: IUser[] = [
    {
      name: 'Tuan',
      age: 18,
      phone: 987654321
    },
    {
      name: 'Thang',
      age: 19,
      phone: 97514534
    }
  ];
  text: string;

  filterSeach(value): IUser[] {
    return this.data.filter(user => user.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
  }

  searchText(value) {
    this.text = value;
    if (this.filterSeach(this.text).length === 0) {
      this.userList = this.data;
    } else {
      this.userList = this.filterSeach(this.text);
    }
  }

  constructor() {
    this.data = this.userList;
  }

  ngOnInit(): void {
  }
}

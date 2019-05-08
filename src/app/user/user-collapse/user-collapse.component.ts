import {Component, Input, OnInit} from '@angular/core';

import {User} from '../user.model';

@Component({
  selector: 'app-user-collapse',
  templateUrl: './user-collapse.component.html',
  styleUrls: ['./user-collapse.component.scss']
})
export class UserCollapseComponent implements OnInit {


@Input() public user: User;
  public isCollapsed = false;

  constructor() {
  }

  ngOnInit() {
  }

}

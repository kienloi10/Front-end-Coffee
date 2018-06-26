import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  username: String = localStorage.getItem('username');
  password: String = localStorage.getItem('password');
  login: Boolean;
  constructor() { }

  ngOnInit() {
    if (this.username && this.password) {
      this.login = true;
    }
  }

}

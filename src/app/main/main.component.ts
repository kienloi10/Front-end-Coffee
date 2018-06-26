import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  private _opened: Boolean = false;
  private _docked: Boolean = true;
  private _mode: String = 'slide';
  private _dockedSize: String = '60px';
  constructor(private route: Router) { }

  ngOnInit() {
  }
  private _toggleSidebar() {
    this._opened = !this._opened;
    this._docked = !this._docked;
  }
  depart() {
    this.route.navigate(['/home/departments']);
  }
  employ() {
    this.route.navigate(['/home/employees']);
  }
}

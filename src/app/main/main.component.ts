import { Component, OnInit } from '@angular/core';
import { AuthGuard } from '../services/auth.guard';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  loggedIn: boolean = false;

  constructor(private _authGuard: AuthGuard) { }

  ngOnInit(): void {
    if (this._authGuard.isLoggedIn()) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  logout() {
    this._authGuard.logout();
  }
}

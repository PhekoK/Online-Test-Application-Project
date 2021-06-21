import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register-update',
  templateUrl: './register-update.component.html',
  styleUrls: ['./register-update.component.css'],
  providers: [UserService]
})
export class RegisterUpdateComponent implements OnInit {

  id: any;

  user: User = new User();

  constructor( private _userService: UserService, 
               private _router: Router,
               private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._userService.getUserById(this.id).subscribe(res => {
      this.user = res;
    }, (error) => { console.log(error); })
  }

  updateDetails(){
    this._userService.updateExitingUser(this.user).subscribe(result => {
      alert('Your Details Have Been Updated...!!');
      this._router.navigate(['/login']);
    }, (error) => { console.log(error) ; })
  }

}

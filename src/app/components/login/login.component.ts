import { Component, OnInit } from '@angular/core';
import { IdentityService } from '../../services/identity.service';
import { IUser } from '../../models/user.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string;
  pass: string;
  isValidated = false;
  userReturn: IUser;
  userConfirmated = false;
  isErrorUser = false;
  constructor(private _Identity: IdentityService, private router: Router  ) { }

  ngOnInit() {
  }
  public validar() {
    // console.log(':D');
    this.isValidated = true;
    this._Identity.authenticate(this.user, this.pass).subscribe(ans => {
      this.userReturn = ans;
       if (this.userReturn === undefined) {
         this.userConfirmated = true;
        } else {
          this.userConfirmated = false;
       }
       if (ans) {
         this.router.navigate(['/account']);
       } else {
          this.isErrorUser = true;
       }
       console.log('Usario: ', ans);
    });

  }

  public isValid (v: string): boolean {
    return !this.isValidated || this.isValidated && v ? true : false;
  }
}

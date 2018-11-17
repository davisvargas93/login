import { Status } from 'tslint/lib/runner';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IdentityService } from '../../services/identity.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private _serviceIdentity: IdentityService) { }
estado = false;
  ngOnInit() {
    this.estado = this._serviceIdentity.isAuthenticated();
  }

}

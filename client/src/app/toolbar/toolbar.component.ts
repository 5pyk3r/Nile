import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../core/services/tokenService/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {


  public roles: string[];
  isLoggedIn = false;
  adminRole = false;
  userRole = false;
  email: string;
  routerUrl: string;

  constructor(private tokenStorageService: TokenStorageService, private router: Router) {
    this.getRoute();
  }

  ngOnInit(): void {
    if (this.tokenStorageService.getToken() != null){
      this.isLoggedIn = true;
    }

    if (this.isLoggedIn === true) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.adminRole = this.roles.includes('ROLE_ADMIN');
      this.userRole = this.roles.includes('ROLE_USER');

      this.email = user.email;
    }
  }

  logout(): void {
    this.tokenStorageService.logout();
    window.location.reload();
  }

  getRoute(): void{
    this.routerUrl = this.router.url;

  }

}

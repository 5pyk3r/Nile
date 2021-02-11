import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {TokenStorageService} from '../tokenService/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  constructor(private  token: TokenStorageService, private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const user = this.token.getUser();

    if (user != null && user.roles.toString() === next.data.roles ) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}

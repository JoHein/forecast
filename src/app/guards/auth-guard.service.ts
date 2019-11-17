import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router  } from '@angular/router';

import { AuthServiceService } from '../services/auth-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

    constructor(private router: Router, private authService: AuthServiceService) { }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
        const currentUser = this.authService.getUserLoggedIn;
        console.log('currentUser guard', currentUser);
        if (currentUser) {
            return true;
        }
            this.router.navigate(['']);
            return false;

        

        // not logged in so redirect to login page with the return url

    }
}

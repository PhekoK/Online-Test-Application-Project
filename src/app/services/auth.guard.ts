import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private _router: Router){ }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
        if(this.isLoggedIn()){
            return true;
        }
        this._router.navigate(['/login']);

        return false;
    }

    isLoggedIn(): boolean {
        let status = false;
        if(localStorage.getItem('isLoggedIn') == "true"){
            status = true;
        } else {
            status = false;
        }

        return status;
    }

    logout(){
        localStorage.setItem('isLoggedIn', 'false');
        localStorage.removeItem('user');
        this._router.navigate(['/login']);
    }

}
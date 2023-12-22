import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { MyServiceService } from "./my-service.service";

@Injectable({providedIn:"root"})
export class AuthGuard implements CanActivate {
    constructor(private authService:MyServiceService) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.authService.sLogin;
    }
}
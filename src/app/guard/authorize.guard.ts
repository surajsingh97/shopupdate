import { Injectable } from "@angular/core";
import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    UrlTree,
    Router,
    NavigationCancel,
} from "@angular/router";
import { Observable, Subject } from "rxjs";
import { SetNavbarService } from "../services/set-navbar.service";
import { filter } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class AuthorizeGuard implements CanActivate {
    constructor(private service: SetNavbarService, private route: Router) {
        route.events
            .pipe(filter((event) => event instanceof NavigationCancel))
            .subscribe((event: NavigationCancel) => {
                localStorage.setItem("url", event.url);
            });
    }

    canActivate(): boolean {
        if (this.service.loggedIn()) {
            return true;
        } else {
            this.route.navigate(["/auth"]);
        }
    }
}

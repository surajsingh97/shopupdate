import { Component, OnInit } from "@angular/core";
import { SetNavbarService } from "src/app/services/set-navbar.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-profile-menu",
    templateUrl: "./profile-menu.component.html",
    styleUrls: ["./profile-menu.component.css"],
})
export class ProfileMenuComponent implements OnInit {
    showloginDetails = true;
    constructor(public setnav: SetNavbarService, private router: Router) {}
    ngOnInit(): void {}

    logout(): void {
        localStorage.removeItem("token");
        localStorage.removeItem("url");
        this.router.navigateByUrl("/home");
    }
}

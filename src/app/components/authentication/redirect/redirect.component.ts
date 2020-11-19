import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: "app-redirect",
    templateUrl: "./redirect.component.html",
    styleUrls: ["./redirect.component.css"],
})
export class RedirectComponent implements OnInit {
    // objData:any;
    public token: any;

    constructor(
        private router: Router,
        private redirectService: ApiService,
        private activateRoute: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const key = this.activateRoute.snapshot.params["token"];
        this.token = {
            tokken: key,
        };
    }
    async clickFunction(): Promise<void> {
        await this.redirectService.request("register", this.token);
        this.router.navigateByUrl("/home");
    }
}

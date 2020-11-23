import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
    showCategory = false;
    showwomenCategory = false;
    showkidCategory = false;
    @ViewChild("f", { static: false }) searchForm: NgForm;

    constructor(private route: Router) {}

    ngOnInit(): void {}

    showMen(): void {
        this.showCategory = !this.showCategory;
        this.showwomenCategory = false;
        this.showkidCategory = false;
    }
    showWomen(): void {
        this.showwomenCategory = !this.showwomenCategory;
        this.showCategory = false;
        this.showkidCategory = false;
    }
    showKid(): void {
        this.showkidCategory = !this.showkidCategory;
        this.showwomenCategory = false;
        this.showCategory = false;
    }
}

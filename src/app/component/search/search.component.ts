import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
    selector: "app-search",
    templateUrl: "./search.component.html",
    styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
    @ViewChild("f", { static: false }) searchForm: NgForm;
    constructor(private route: Router) {}

    ngOnInit(): void {}

    onsubmit(form: NgForm): void {
        console.log(this.searchForm.value.search);
        this.route.navigate(["/shop"], {
            queryParams: { category: this.searchForm.value.search },
        });
        this.searchForm.reset();
    }
}

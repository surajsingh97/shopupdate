import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-header-dropdown",
    templateUrl: "./header-dropdown.component.html",
    styleUrls: ["./header-dropdown.component.css"],
})
export class HeaderDropdownComponent implements OnInit {
    topWear = [
        "Casual Shirts",
        "Formal Shirts",
        "T-Shirt",
        "Sweaters",
        "Jackets",
        "Suits",
    ];
    bottomWear = [
        "Jeans",
        "Casual Trousers",
        "Formal Trousers",
        "Shorts",
        "Track Pants & Joggers",
    ];
    footWear = ["Casual Shoes", "Sports Shoes", "Formal Shoes", "Sneakers"];

    constructor(private router: Router) {}

    ngOnInit(): void {}

    onClick(option): void {
        if (option) {
            this.router.navigate(["/shop"], {
                queryParams: { category: option },
            });
        }
    }
}

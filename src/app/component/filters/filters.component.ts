import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "app-filters",
    templateUrl: "./filters.component.html",
    styleUrls: ["./filters.component.css"],
})
export class FiltersComponent implements OnInit {
    categories = [];
    constructor(private route: Router) {}

    ngOnInit(): void {
        this.categories = [
            {
                heading: "CATEGORIES",
                value: [
                    "Casual Shirts",
                    "Formal Shirts",
                    "T-Shirt",
                    "Sweaters",
                    "Jackets",
                    "Suits",
                    "Jeans",
                    "Casual Trousers",
                    "Formal Trousers",
                    "Shorts",
                    "Track Pants & Joggers",
                    "Casual Shoes",
                    "Sports Shoes",
                    "Formal Shoes",
                    "Sneakers",
                ],
            },
            { heading: "GENDER", value: ["Male", "Female", "Kids"] },
            {
                heading: "SIZE",
                value: ["Small", "Medium", "Large", "X-large", "XX-large"],
            },
        ];
    }

    onClick(event): void {
        console.log(event.target.outerText);
        this.route.navigate(["/shop"], {
            queryParams: { category: event.target.outerText },
        });
    }
}

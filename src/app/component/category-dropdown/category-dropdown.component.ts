import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-category-dropdown",
    templateUrl: "./category-dropdown.component.html",
    styleUrls: ["./category-dropdown.component.css"],
})
export class CategoryDropdownComponent implements OnInit {
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
    showtopPopup = false;
    constructor() {}

    ngOnInit(): void {}
}

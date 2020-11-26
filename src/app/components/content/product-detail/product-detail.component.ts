import { Component, OnInit } from "@angular/core";
import { SetItemService } from "src/app/services/set-item.service";

@Component({
    selector: "app-product-detail",
    templateUrl: "./product-detail.component.html",
    styleUrls: ["./product-detail.component.css"],
})
export class ProductDetailComponent implements OnInit {
    item: any;
    constructor(private setService: SetItemService) {}

    ngOnInit(): void {
        this.item = this.setService.getValue();
    }
}

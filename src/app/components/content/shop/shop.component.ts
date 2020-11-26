import {
    Component,
    OnInit,
    Input,
    AfterViewInit,
    DoCheck,
} from "@angular/core";
import { NavigationEnd, ActivatedRoute, Router } from "@angular/router";
import * as _ from "lodash";
import { SetItemService } from "src/app/services/set-item.service";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: "app-shop",
    templateUrl: "./shop.component.html",
    styleUrls: ["./shop.component.css"],
})
export class ShopComponent implements OnInit {
    totalPost;
    page = 1;
    post: Array<any>;
    CategoryMode: boolean;
    request: any;
    config: any;
    filterOption: string;
    @Input() public parentData;
    filterData: any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private setitem: SetItemService,
        private apiService: ApiService
    ) {
        this.post = new Array<any>();
        this.loadData();
    }

    pageChanged(event): void {
        this.config.currentPage = event;
    }

    ngOnInit(): void {}

    sorting(event): void {
        const option = event.target.value;
        if (option === "Low to High") {
            this.post = this.post.sort((a, b) => a.Price - b.Price);
        } else if (option === "High to Low") {
            this.post = this.post.sort((a, b) => b.Price - a.Price);
            this.post.reverse();
        } else {
            this.post.reverse();
        }
        this.config = {
            itemsPerPage: 12,
            currentPage: 1,
            totalItems: this.post.length,
        };
    }

    async loadData(): Promise<void> {
        this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.CategoryMode = this.route.snapshot.queryParams.category
                    ? true
                    : false;
                const request = this.route.snapshot.queryParams.category;
                console.log(request);
                if (this.CategoryMode) {
                    this.apiService.request("getItem").then((res: any) => {
                        console.log(res);
                        this.post = _.filter(res, (o) => {
                            if (
                                o.subCategory.toLowerCase() ===
                                    request.toLowerCase() ||
                                o.Category.toLowerCase() ===
                                    request.toLowerCase() ||
                                o.Size.toLowerCase() ===
                                    request.toLowerCase() ||
                                o.Gender === request
                            ) {
                                console.log(o);
                                return o;
                            }
                        });
                    });
                    this.config = {
                        itemsPerPage: 12,
                        currentPage: 1,
                        totalItems: this.post.length,
                    };
                } else {
                    this.apiService.request("getItem").then((res) => {
                        this.post = res;
                        console.log(res);
                    });
                    this.config = {
                        itemsPerPage: 12,
                        currentPage: 1,
                        totalItems: this.post.length,
                    };
                }
            }
        });
    }

    onShop(element): void {
        this.setitem.setValue(element);
        this.router.navigateByUrl("details");
    }
}

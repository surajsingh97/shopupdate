import { Component, OnInit } from "@angular/core";
import { Validators, FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { SetItemService } from "src/app/services/set-item.service";
import { ApiService } from "src/app/services/api.service";
import { ToasterService } from "src/app/toaster.service";

@Component({
    selector: "app-additem",
    templateUrl: "./additem.component.html",
    styleUrls: ["./additem.component.css"],
})
export class AdditemComponent implements OnInit {
    heading = "Add Product";
    editMode = false;
    req: any;
    images: any;
    newItem: FormGroup;
    Genders = ["Male", "Female", "Others"];
    data: any;
    itemData: any;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private apiService: ApiService,
        private toasterService: ToasterService,
        private setService: SetItemService
    ) {
        this.editMode = this.route.snapshot.queryParams._name ? true : false;
        this.req = this.route.snapshot.queryParams._name;
    }
    show: any;
    showButton = true;
    showDropdown = false;

    ngOnInit(): void {
        this.newItem = new FormGroup({
            productName: new FormControl(null, [Validators.required]),
            Description: new FormControl(null, Validators.required),
            Price: new FormControl(null, Validators.required),
            Size: new FormControl(null, Validators.required),
            Quantity: new FormControl(null, Validators.required),
            Gender: new FormControl(null, Validators.required),
            File: new FormControl(null, Validators.required),
            Suplier: new FormControl(null, Validators.required),
            Category: new FormControl(null, Validators.required),
            subCategory: new FormControl(null, Validators.required),
        });
        if (this.editMode) {
            this.populateData();
        }
    }
    populateData(): void {
        this.data = this.setService.getValue();
        console.log(this.data);
        this.newItem.patchValue({
            productName: this.data.productName,
            Description: this.data.Description,
            Price: this.data.Price,
            Gender: this.data.Gender,
            Quantity: this.data.Quantity,
            size: this.data.Size,
            Suplier: this.data.Suplier,
            Category: this.data.Category,
            subCategory: this.data.subCategory,
        });
    }

    async onsubmit(e): Promise<void> {
        const formData = new FormData();
        formData.append("productName", this.newItem.get("productName").value);
        formData.append("Description", this.newItem.get("Description").value);
        formData.append("Size", this.newItem.get("Size").value);
        formData.append("Quantity", this.newItem.get("Quantity").value);
        formData.append("Price", this.newItem.get("Price").value);
        formData.append("Gender", this.newItem.get("Gender").value);
        formData.append("Suplier", this.newItem.get("Suplier").value);
        formData.append("Category", this.newItem.get("Category").value);
        formData.append("subCategory", this.newItem.get("subCategory").value);
        // formData.append("newItem", JSON.stringify(this.newItem.value));
        formData.append("file", this.images);
        if (Boolean(this.req)) {
            formData.append("req", this.req);
            await this.apiService.request("Update", formData);
            this.router.navigateByUrl("/admin");
        } else {
            console.log(formData);
            if (this.newItem.valid) {
                await this.apiService.request("uploadItem", formData);
                this.router.navigateByUrl("/admin");
            } else {
                this.toasterService.showToaster("Form is not filled");
            }
        }
    }

    selectImages(event): void {
        if (event.target.files.length > 0) {
            const files = event.target.files[0];
            this.images = files;
            console.log(this.images);
        }
        console.log(event);
    }
    clear(): void {
        localStorage.removeItem("elementIndex");
        this.router.navigate(["admin"]);
    }
}

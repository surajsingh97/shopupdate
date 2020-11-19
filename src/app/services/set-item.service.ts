import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "./api.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root",
})
export class SetItemService {
    Data: any;
    constructor(private http: HttpClient) {}

    public setValue(value): void {
        this.Data = value;
    }

    public getValue(): void {
        return this.Data;
    }
}

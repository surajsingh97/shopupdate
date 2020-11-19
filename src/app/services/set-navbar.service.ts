import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class SetNavbarService {
    loggedIn(): string {
        return localStorage.getItem("token");
    }
}

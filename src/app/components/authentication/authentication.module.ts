import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { AuthComponent } from "./auth/auth.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    declarations: [AuthComponent],
    imports: [CommonModule, AuthenticationRoutingModule, SharedModule],
})
export class AuthenticationModule {}

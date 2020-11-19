import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { RedirectComponent } from "./redirect/redirect.component";

const routes: Routes = [
    {
        path: "",
        children: [
            { path: "auth", component: AuthComponent },
            { path: "redirect/:token", component: RedirectComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthenticationRoutingModule {}

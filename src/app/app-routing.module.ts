import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from "./components/authentication/auth/auth.component";
const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    {
        path: "",
        loadChildren: () =>
            import("src/app/components/admin/admin.module").then(
                (m) => m.AdminModule
            ),
    },
    {
        path: "",
        loadChildren: () =>
            import(
                "src/app/components/authentication/authentication.module"
            ).then((m) => m.AuthenticationModule),
    },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DatatableComponent } from "./datatable/datatable.component";
import { UplodpostComponent } from "./uplodpost/uplodpost.component";
import { AuthorizeGuard } from "src/app/guard/authorize.guard";

const routes: Routes = [
    {
        path: "",
        canActivate: [AuthorizeGuard],
        children: [
            { path: "admin", component: DatatableComponent },
            { path: "item", component: UplodpostComponent },
            { path: "item/edit-item", component: UplodpostComponent },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedRoutingModule } from "./shared-routing.module";
import { CategoryDropdownComponent } from "../component/category-dropdown/category-dropdown.component";
import { HeaderDropdownComponent } from "../component/header-dropdown/header-dropdown.component";
import { SearchComponent } from "../component/search/search.component";
import { LoginformComponent } from "./loginform/loginform.component";
import { SignupformComponent } from "./signupform/signupform.component";
import { FooterComponent } from "./footer/footer.component";
import { ProfileMenuComponent } from "../component/profile-menu/profile-menu.component";
import { TableComponent } from "./table/table.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatTableModule } from "@angular/material/table";
import { AdditemComponent } from "./additem/additem.component";

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        CategoryDropdownComponent,
        HeaderDropdownComponent,
        SearchComponent,
        LoginformComponent,
        SignupformComponent,
        ProfileMenuComponent,
        TableComponent,
        AdditemComponent,
    ],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatListModule,
        MatIconModule,
        MatButtonModule,
        FlexLayoutModule,
        MatToolbarModule,
        FormsModule,
        ReactiveFormsModule,
        SharedRoutingModule,
        MatPaginatorModule,
        MatTableModule,
    ],
    exports: [
        HeaderComponent,
        LoginformComponent,
        SignupformComponent,
        TableComponent,
        AdditemComponent,
    ],
})
export class SharedModule {}

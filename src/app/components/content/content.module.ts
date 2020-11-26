import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContentRoutingModule } from "./content-routing.module";
import { MatExpansionModule } from "@angular/material/expansion";
import { MDBBootstrapModule } from "angular-bootstrap-md";
import { HomeComponent } from "./home/home.component";
import { ImageSliderComponent } from "src/app/component/image-slider/image-slider.component";
import { HomeContentComponent } from "src/app/component/home-content/home-content.component";
import { CarouselModule } from "ngx-owl-carousel-o";
import { ShopComponent } from "./shop/shop.component";
import { FiltersComponent } from "src/app/component/filters/filters.component";
import { NgxPaginationModule } from "ngx-pagination";
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
    declarations: [
        HomeComponent,
        HomeContentComponent,
        FiltersComponent,
        ImageSliderComponent,
        ShopComponent,
        ProductDetailComponent,
    ],
    imports: [
        CommonModule,
        ContentRoutingModule,
        MDBBootstrapModule,
        CarouselModule,
        MatExpansionModule,
        NgxPaginationModule,
    ],
})
export class ContentModule {}

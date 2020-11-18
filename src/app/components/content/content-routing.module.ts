import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import { AuthorizeGuard } from 'src/app/guard/authorize.guard';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'shop', component: ShopComponent, canActivate: [AuthorizeGuard] },
    { path: 'shop/:option', component: ShopComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ContentRoutingModule {}

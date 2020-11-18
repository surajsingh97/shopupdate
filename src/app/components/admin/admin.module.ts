import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { UplodpostComponent } from './uplodpost/uplodpost.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [DatatableComponent, UplodpostComponent],
    imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContentModule } from './components/content/content.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthenticationModule } from './components/authentication/authentication.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AdminModule } from './components/admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent],
    imports: [
        SharedModule,
        CarouselModule,
        BrowserModule,
        MDBBootstrapModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ContentModule,
        HttpClientModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        // AuthenticationModule,
        // AdminModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}

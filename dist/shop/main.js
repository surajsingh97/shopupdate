(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+VhB":
/*!****************************************************************************!*\
  !*** ./src/app/component/category-dropdown/category-dropdown.component.ts ***!
  \****************************************************************************/
/*! exports provided: CategoryDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDropdownComponent", function() { return CategoryDropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function CategoryDropdownComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryDropdownComponent_div_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const top_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toogle(top_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const top_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](top_r3);
} }
function CategoryDropdownComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryDropdownComponent_div_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const bottom_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.toogle(bottom_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bottom_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bottom_r6);
} }
function CategoryDropdownComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CategoryDropdownComponent_div_9_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const foot_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.toogle(foot_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const foot_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](foot_r9);
} }
class CategoryDropdownComponent {
    constructor() {
        this.topWear = [
            'Casual Shirts',
            'Formal Shirts',
            'T-Shirt',
            'Sweaters',
            'Jackets',
            'Suits',
        ];
        this.bottomWear = [
            'Jeans',
            'Casual Trousers',
            'Formal Trousers',
            'Shorts',
            'Track Pants & Joggers',
        ];
        this.footWear = ['Casual Shoes', 'Sports Shoes', 'Formal Shoes', 'Sneakers'];
        this.showtopPopup = false;
    }
    ngOnInit() { }
}
CategoryDropdownComponent.ɵfac = function CategoryDropdownComponent_Factory(t) { return new (t || CategoryDropdownComponent)(); };
CategoryDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryDropdownComponent, selectors: [["app-category-dropdown"]], decls: 10, vars: 3, consts: [["id", "div1", 1, "dropdown"], ["id", "heading", 1, "dropdown-item"], ["class", "dropdown", 4, "ngFor", "ngForOf"], [1, "dropdown"], [1, "dropdown-item", 3, "click"]], template: function CategoryDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Topwear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CategoryDropdownComponent_div_3_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bottomwear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CategoryDropdownComponent_div_6_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Footwear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CategoryDropdownComponent_div_9_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topWear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bottomWear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.footWear);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".categorydropdown[_ngcontent-%COMP%] {\n    background-color: whitesmoke;\n    border: none;\n    border-radius: 0 0.25em 0.25em 0.25em;\n    display: block;\n    width: 20%;\n}\n\n.dropdown-item1[_ngcontent-%COMP%] {\n    color: black;\n    display: block;\n    text-align: center;\n    cursor: pointer;\n    text-decoration: none;\n}\n\n.dropdown-sub-item[_ngcontent-%COMP%] {\n    color: black;\n    display: block;\n    cursor: pointer;\n    text-decoration: none;\n}\n\n#heading[_ngcontent-%COMP%] {\n    border-top: 1px solid;\n    border-width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NhdGVnb3J5LWRyb3Bkb3duL2NhdGVnb3J5LWRyb3Bkb3duLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLHFDQUFxQztJQUNyQyxjQUFjO0lBQ2QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFDQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvY2F0ZWdvcnktZHJvcGRvd24vY2F0ZWdvcnktZHJvcGRvd24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXRlZ29yeWRyb3Bkb3duIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAwIDAuMjVlbSAwLjI1ZW0gMC4yNWVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAyMCU7XG59XG5cbi5kcm9wZG93bi1pdGVtMSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLmRyb3Bkb3duLXN1Yi1pdGVtIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbiNoZWFkaW5nIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxMDAlO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryDropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-dropdown',
                templateUrl: './category-dropdown.component.html',
                styleUrls: ['./category-dropdown.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "/sPK":
/*!******************************************************************!*\
  !*** ./src/app/component/image-slider/image-slider.component.ts ***!
  \******************************************************************/
/*! exports provided: ImageSliderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSliderComponent", function() { return ImageSliderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");



class ImageSliderComponent {
    constructor() { }
    ngOnInit() { }
}
ImageSliderComponent.ɵfac = function ImageSliderComponent_Factory(t) { return new (t || ImageSliderComponent)(); };
ImageSliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageSliderComponent, selectors: [["app-image-slider"]], decls: 17, vars: 1, consts: [[1, "carousel", "slide", "carousel-fade", 3, "animation"], [1, "view", "w-100"], ["src", "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/10/26/b76176b6-0485-4078-b20c-eefc00833fd71603731402047-cat-fest-dk-men-winter.jpg", "alt", "First slide", 1, "d-block", "w-100"], ["mdbWavesEffect", "", 1, "mask", "rgba-black-light", "waves-light"], ["src", "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/10/26/7527228e-4f93-4b4e-812a-2f30fedc2f901603731402121-desktop-banner.jpg", "alt", "Second slide", 1, "d-block", "w-100"], ["mdbWavesEffect", "", 1, "mask", "rgba-black-strong", "waves-light"], ["src", "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/9/5/6bbc57c4-11e4-40e1-8280-e025183f7e481599319889896-HRX-K-K_Desk.jpg", "alt", "Third slide", 1, "d-block", "w-100"], ["mdbWavesEffect", "", 1, "mask", "rgba-black-slight", "waves-light"], ["src", "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/9/7/936795f6-8d4a-4193-b806-fefb0a579dca1599498581330-Roadster_Desk_Banner--1-.jpg", "alt", "Third slide", 1, "d-block", "w-100"]], template: function ImageSliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdb-carousel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdb-carousel-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mdb-carousel-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mdb-carousel-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mdb-carousel-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animation", "fade");
    } }, directives: [angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["SlideComponent"], angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_1__["WavesDirective"]], styles: [".d-block[_ngcontent-%COMP%] {\n    height: 360px;\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: contain;\n}\n.h3-responsive[_ngcontent-%COMP%] {\n    float: left;\n}\n@media only screen and (max-width: 650px) {\n    .d-block[_ngcontent-%COMP%] {\n        height: 290px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2ltYWdlLXNsaWRlci9pbWFnZS1zbGlkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9pbWFnZS1zbGlkZXIvaW1hZ2Utc2xpZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZC1ibG9jayB7XG4gICAgaGVpZ2h0OiAzNjBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG4uaDMtcmVzcG9uc2l2ZSB7XG4gICAgZmxvYXQ6IGxlZnQ7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XG4gICAgLmQtYmxvY2sge1xuICAgICAgICBoZWlnaHQ6IDI5MHB4O1xuICAgIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageSliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-image-slider',
                templateUrl: './image-slider.component.html',
                styleUrls: ['./image-slider.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/wittybrains/shop/src/main.ts */"zUnb");


/***/ }),

/***/ "1Bl0":
/*!*********************************************************!*\
  !*** ./src/app/shared/loginform/loginform.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginformComponent", function() { return LoginformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







const _c0 = ["f"];
function LoginformComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.msg, " ");
} }
function LoginformComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*Please enter a valid email!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function LoginformComponent_span_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*Enter valid password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class LoginformComponent {
    constructor(router, login) {
        this.router = router;
        this.login = login;
        this.show = false;
        this.previousUrl = localStorage.getItem('url') ? true : false;
    }
    ngOnInit() { }
    onsubmit(form) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.loginForm.valid) {
                try {
                    const username = this.loginForm.controls.email.value;
                    const password = this.loginForm.controls.password.value;
                    const res = yield this.login.request('login', {
                        email: username,
                        password,
                    });
                    localStorage.setItem('token', res.token);
                    const url = localStorage.getItem('url');
                    if (this.previousUrl) {
                        this.router.navigateByUrl(url);
                    }
                    this.router.navigateByUrl('/home');
                }
                catch (error) {
                    this.show = true;
                    console.log(error.error.message);
                    this.msg = error.error.message;
                }
            }
        });
    }
}
LoginformComponent.ɵfac = function LoginformComponent_Factory(t) { return new (t || LoginformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"])); };
LoginformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginformComponent, selectors: [["app-loginform"]], viewQuery: function LoginformComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.loginForm = _t.first);
    } }, decls: 37, vars: 3, consts: [[3, "ngSubmit"], ["f", "ngForm"], ["id", "head2"], [1, "form-group"], ["class", "alert", "role", "alert", 4, "ngIf"], [1, "col-md-10"], ["for", "email"], ["type", "email", "id", "exampleInputEmail1", "placeholder", "Enter registered Email", "ngModel", "", "name", "email", "required", "", "email", "", 1, "form-control"], ["email", "ngModel"], ["class", "help-block", 4, "ngIf"], ["for", "Password"], ["type", "password", "ngModel", "", "name", "password", "id", "exampleInputPassword1", "placeholder", "Enter your Password", "required", "", 1, "form-control"], ["password", "", "pass", "ngModel"], ["id", "b", 1, "form-check"], [1, "form-check-label"], ["type", "checkbox", 1, "form-check-input"], ["id", "a", "routerLink", "/forgotpass"], [1, "loginbutton"], ["type", "submit", "id", "but", 1, "btn", "btn-info", "btn-lg"], ["id", "para2"], [1, "social", "form-group", "text-center", "pt-2", "logo-align"], ["type", "submit", "id", "social", "value", "Sign In WIth Google", 1, "site-btn-google"], ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAQOSURBVFiFvZdbTFxlFIW/fc4AA8jVGGwlQsMQoEUrCTZUW6ORay9EILWNpok+SOKDjbZRmthETeMz1Zroi40xMVW0qZRLaSnipZq21igBCqU2Ek0rpQ9cLIVh5pztA1hhOmdmwI7r4Tyctc5e6/+T8/97i6oSEYqLYybSXNWirEXUg+JB8KDEAqPANYTzYhmdPrd+nd5+ZjKSshIuwPgTRammGVtvwy6B+yJLyw0VfTslZqyR9kve5QV4S4zJ7x5+A2Q3cFeExoG4LCJ7kjrPNC8pwFhZcYqprsOgVcs0DkRHspVQQ3f3TCDhCnwxWV6Sa9quY4jm3yHzCdR+N5g5BOzAVGlJhqXai3DPHTIfEtuuTvrqx4tOgkU7YIkegvDmCldEGUR0EBUbEQ9oPrBqgeyEbc3uSO3+eTxUrVsBJsrWvSgqm0KJBbpR3Zfcde6HYPx42frHDbX3AEPJ6Vmv0dRkhVuMqCregxk53pasHmxJdNDdFNUdSV3nWsIVXCoMADN/tD5u+8VEifcHNVdlazTMAUSbMP1p/A6s1PE4vEdysa8nLBBQm9R19mg0zAEM627KgZUAkurFvXMAM28MAIVvo2kOYKhF5aI3sRZxNZdwrRu5JiIN0TQHEF8nzUB1EG7EVaorwhWoOTDzqahsX6b/9waQ7UAOLLNo5BDuNYCsoJxwIer+Ohcg+HWoc79oNKFgG8CwA/lgtAMAVx0DAIX/RwCXU4B+Oznp1c4NxSfLTp8PVUHQd8D40llhrwXZG/xb+sXfyWaF1oVEu72Cfb5Cexaje3BzR2m4ZYRCbaP3NPBoME7FKDLMMTqAKwA2QqM/lwbfA/gQQ9AnC1orti7XvK5x9hknc0HOHn055heDbWoBH93AxS7fQxyyVgUqP1ndXvHYUs2fapzZqNgHnXhb7Q9g/jacst0f1s4+cv0bO2gvkqTK8YL2ii2RmtcdmNlpIKdA0h0k4zHi/uxWgJTy6d/+VPf+EDUTUFoK2ipOFrRWrXcSrWmr3FjYUvfFlPvCx0CsczlpbHqFaQjoCQvaKptBg90LgRhGGEJ1aK4l0xyQ1cy3ZKImGaP1pE0EaapVDx/d7X5W5w/ART2h6eJ5y08PkBkmQDZKNkg5Asw9/vUQi5GM9/G6h8kYrUfU/Ifqdv3lfk4XnL63zQWFxyo9lmk3z6/oPyNheg2ZV/di+lP6XL64DU0NTCzkbzvv+6o7flUrvkTAcZpZCm7G9/NH5ps/SYxdFWgOIUYzQSSvvfx1URpY5mgmcFlFGgY2dRxx1IQbTnNOlaXEeo0XgJeA+yMxVhgX1f3mdOp7fduaZkOGjHQ8l8+fNvMSJ7eIrUVArggeBQ+KH+gD+sTQXkT7Ykyjt6f8xFQkdf8GbfON88yeJlUAAAAASUVORK5CYII="], ["type", "submit", "id", "social", "value", "Sign In With Facebook", 1, "site-btn-facebook"], ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjDB4KEwU1ID7qAAAA4ElEQVRIx2NgwAv+M/2P+L/m/6P/3//DQCsD8eC/0v8L/9HBUlQ1LHi0yzAcZZAgZAkTHrl5hLXjMeC/GYMrMd7E7QJfHOJfiQ0DYxTeRoYZDK8ZGBgYGG4S4y4GBob/p5BC/s9/XtK9wIHE/sj4mXQDkME/3FLEGYAHoAXifxMGZyhTFEmY8385TAHDcsbH+IJu6X9CoBi/FxgJupkRvwEkg8FnwGuCOl7hDZL/TAz8UOYRBi248FsGVSjrH+NHVB1o6YDxH8N7qFF/kc1lfE+3MBg1YNSAwWbAAxxsNAAA9/B3b6iUNKIAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMTItMzBUMTA6MTk6MDUrMDA6MDBk90HnAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTEyLTMwVDEwOjE5OjA1KzAwOjAwFar5WwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="], ["role", "alert", 1, "alert"], [1, "help-block"]], template: function LoginformComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function LoginformComponent_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); return ctx.onsubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, LoginformComponent_div_5_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, LoginformComponent_span_11_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Password ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, LoginformComponent_span_19_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Forgot Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Or Login With");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "input", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](10);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.show);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r2.valid && _r2.touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !_r5.valid && _r5.touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["EmailValidator"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["*[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n}\n.container3[_ngcontent-%COMP%] {\n    \n    width: 500px;\n    padding-left: 50px;\n    padding-bottom: 20px;\n    margin-left: 20px;\n}\n.alert[_ngcontent-%COMP%] {\n    background-color: rgb(233, 92, 92);\n    color: black;\n}\n#b[_ngcontent-%COMP%] {\n    margin-left: 20px;\n}\n.help-block[_ngcontent-%COMP%] {\n    color: red;\n}\n#a[_ngcontent-%COMP%] {\n    margin-left: 25px;\n    color: darkgrey;\n}\n#a[_ngcontent-%COMP%]:hover {\n    color: rgb(93, 93, 196);\n}\n#but[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    margin-left: 20px;\n    \n    border-radius: 20px;\n}\n#para[_ngcontent-%COMP%] {\n    margin-top: 25px;\n    margin-left: 70px;\n}\n#l[_ngcontent-%COMP%] {\n    margin-left: 5px;\n}\n#para2[_ngcontent-%COMP%] {\n    text-align: center;\n    font-weight: 200px;\n    font-family: cursive;\n}\n#oc[_ngcontent-%COMP%] {\n    margin-left: 45px;\n}\n#head2[_ngcontent-%COMP%] {\n    padding-top: 30px;\n    font-size: 40px;\n    margin-bottom: 30px;\n    font-weight: lighter;\n    color: rgb(12, 11, 11);\n    padding-left: 120px;\n}\n\n#social1[_ngcontent-%COMP%] {\n    font-size: 35px;\n    color: rgb(27, 205, 236);\n    margin-left: 60px;\n}\n.logo-align[_ngcontent-%COMP%] {\n    transform: scale(0.9);\n}\n.login100-social-item[_ngcontent-%COMP%]:hover {\n    color: rgb(236, 56, 11);\n}\n#social[_ngcontent-%COMP%] {\n    border-radius: 20px;\n}\n.logo-align[_ngcontent-%COMP%] {\n    position: relative;\n}\n.text-center[_ngcontent-%COMP%] {\n    text-align: center !important;\n}\n.pt-2[_ngcontent-%COMP%], .py-2[_ngcontent-%COMP%] {\n    padding-top: 0.5rem !important;\n}\n.social[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n}\n#social[_ngcontent-%COMP%] {\n    overflow: visible;\n}\n#social[_ngcontent-%COMP%] {\n    margin: 0;\n    font-family: inherit;\n    font-size: inherit;\n    line-height: inherit;\n}\n.site-btn-google[_ngcontent-%COMP%] {\n    width: 100%;\n    display: inline-block;\n    border: 1px solid #e2e2e2;\n    font-size: 16px;\n    font-weight: 600;\n    min-width: 167px;\n    padding: 18px 47px 14px;\n    border-radius: 50px;\n    text-transform: uppercase;\n    background: none !important;\n    color: #333;\n    line-height: normal;\n    cursor: pointer;\n    text-align: center;\n    border-radius: 0;\n}\nimg[_ngcontent-%COMP%] {\n    max-width: 100%;\n}\nimg[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    border-style: none;\n}\n.site-btn-facebook[_ngcontent-%COMP%] {\n    font-size: 16px;\n    background: #496cb3 !important;\n}\n.site-btn-custom[_ngcontent-%COMP%], .site-btn-facebook[_ngcontent-%COMP%] {\n    width: 100%;\n    display: inline-block;\n    border: none;\n    font-weight: 600;\n    min-width: 167px;\n    padding: 18px 47px 14px;\n    border-radius: 50px;\n    text-transform: uppercase;\n    color: #fff;\n    line-height: normal;\n    cursor: pointer;\n    text-align: center;\n    border-radius: 0;\n}\n.logo-align[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    left: 2%;\n    bottom: 14.5%;\n}\nimg[_ngcontent-%COMP%] {\n    max-width: 100%;\n}\nimg[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    border-style: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvZ2luZm9ybS9sb2dpbmZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6QyxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7QUFDQTs7Ozs7R0FLRztBQUNIO0lBQ0ksZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksNkJBQTZCO0FBQ2pDO0FBQ0E7O0lBRUksOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksU0FBUztJQUNULG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QiwyQkFBMkI7SUFDM0IsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDhCQUE4QjtBQUNsQztBQUNBOztJQUVJLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2xvZ2luZm9ybS9sb2dpbmZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uY29udGFpbmVyMyB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTsgKi9cbiAgICB3aWR0aDogNTAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuLmFsZXJ0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMzLCA5MiwgOTIpO1xuICAgIGNvbG9yOiBibGFjaztcbn1cbiNiIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbi5oZWxwLWJsb2NrIHtcbiAgICBjb2xvcjogcmVkO1xufVxuXG4jYSB7XG4gICAgbWFyZ2luLWxlZnQ6IDI1cHg7XG4gICAgY29sb3I6IGRhcmtncmV5O1xufVxuI2E6aG92ZXIge1xuICAgIGNvbG9yOiByZ2IoOTMsIDkzLCAxOTYpO1xufVxuI2J1dCB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzgsIDEyMywgMjAyKTsgKi9cbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuI3BhcmEge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XG59XG4jbCB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuI3BhcmEyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDIwMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xufVxuI29jIHtcbiAgICBtYXJnaW4tbGVmdDogNDVweDtcbn1cbiNoZWFkMiB7XG4gICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgZm9udC1zaXplOiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgY29sb3I6IHJnYigxMiwgMTEsIDExKTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEyMHB4O1xufVxuLyogLnlve1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgIHBhZGRpbmctcmlnaHQ6NTBweDtcbiAgICAgcGFkZGluZy1sZWZ0OjMwcHg7XG4gfSAgXG4gICovXG4jc29jaWFsMSB7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGNvbG9yOiByZ2IoMjcsIDIwNSwgMjM2KTtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbn1cbi5sb2dvLWFsaWduIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG5cbi5sb2dpbjEwMC1zb2NpYWwtaXRlbTpob3ZlciB7XG4gICAgY29sb3I6IHJnYigyMzYsIDU2LCAxMSk7XG59XG5cbiNzb2NpYWwge1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4ubG9nby1hbGlnbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cbi5wdC0yLFxuLnB5LTIge1xuICAgIHBhZGRpbmctdG9wOiAwLjVyZW0gIWltcG9ydGFudDtcbn1cbi5zb2NpYWwge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbiNzb2NpYWwge1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuI3NvY2lhbCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbn1cbi5zaXRlLWJ0bi1nb29nbGUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTJlMmUyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIG1pbi13aWR0aDogMTY3cHg7XG4gICAgcGFkZGluZzogMThweCA0N3B4IDE0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cbmltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuaW1nIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cbi5zaXRlLWJ0bi1mYWNlYm9vayB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGJhY2tncm91bmQ6ICM0OTZjYjMgIWltcG9ydGFudDtcbn1cbi5zaXRlLWJ0bi1jdXN0b20sXG4uc2l0ZS1idG4tZmFjZWJvb2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtaW4td2lkdGg6IDE2N3B4O1xuICAgIHBhZGRpbmc6IDE4cHggNDdweCAxNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbn1cbi5sb2dvLWFsaWduIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDIlO1xuICAgIGJvdHRvbTogMTQuNSU7XG59XG5pbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbn1cbmltZyB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-loginform',
                templateUrl: './loginform.component.html',
                styleUrls: ['./loginform.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }]; }, { loginForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['f', { static: false }]
        }] }); })();


/***/ }),

/***/ "320Y":
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _component_header_dropdown_header_dropdown_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../component/header-dropdown/header-dropdown.component */ "mB7w");
/* harmony import */ var _component_search_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../component/search/search.component */ "Lr6l");
/* harmony import */ var _component_profile_menu_profile_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../component/profile-menu/profile-menu.component */ "u7bB");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../footer/footer.component */ "jQpT");
/* harmony import */ var _component_category_dropdown_category_dropdown_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../component/category-dropdown/category-dropdown.component */ "+VhB");















const _c0 = ["f"];
function HeaderComponent_app_category_dropdown_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-category-dropdown", 28);
} }
function HeaderComponent_app_category_dropdown_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-category-dropdown", 28);
} }
function HeaderComponent_app_category_dropdown_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-category-dropdown", 28);
} }
class HeaderComponent {
    constructor(route) {
        this.route = route;
        this.showcategory = false;
        this.showwomenCategory = false;
        this.showkidCategory = false;
    }
    ngOnInit() { }
    showMen() {
        this.showcategory = !this.showcategory;
        this.showwomenCategory = false;
        this.showkidCategory = false;
    }
    showWomen() {
        this.showwomenCategory = !this.showwomenCategory;
        this.showcategory = false;
        this.showkidCategory = false;
    }
    showKid() {
        this.showkidCategory = !this.showkidCategory;
        this.showwomenCategory = false;
        this.showcategory = false;
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], viewQuery: function HeaderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchForm = _t.first);
    } }, decls: 58, vars: 3, consts: [["fullscreen", ""], ["sidenav", ""], ["href", "", "mat-list-item", "", 1, "close-but", 3, "click"], [1, "fa", "fa-close", "close-btn", "text-right"], ["href", "#", "mat-list-item", "", 1, "list-item", 3, "click"], [1, "fa", "fa-caret-down"], ["mat-list-item", "", 4, "ngIf"], ["color", "bg-white"], ["mat-icon-button", "", "fxShow", "true", "fxHide.gt-sm", "", 3, "click"], ["href", "javascript:void('0')", "routerLink", "/home", 2, "color", "black"], [2, "font-family", "cursive"], [1, "menu-spacer"], ["fxShow", "true", "fxHide.lt-md", ""], ["href", "#", "id", "nav-link", "data-toggle", "dropdown", "mat-button", "", 1, "action-content"], [1, "dropdown-menu", 2, "margin-top", "12px"], ["id", "nav-link", "href", "#", "data-toggle", "dropdown", "mat-button", ""], [1, "menu-spacer1"], [1, "action"], ["href", "#", "data-toggle", "dropdown", 1, "action-content"], ["mat-button", "", 1, "fa", "fa-user", 2, "font-size", "24px"], [1, "dropdown-menu", 2, "margin", "18px 70px", "width", "15%"], ["href", "javascript:void('0')", 1, "action-content"], ["mat-button", "", 1, "fa", "fa-heart-o", 2, "font-size", "24px"], ["mat-button", "", 1, "fa", "fa-shopping-bag", 2, "font-size", "24px"], [1, "content"], ["main", ""], [1, "footer", 2, "margin-top", "20px"], ["footer", ""], ["mat-list-item", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_7_listener() { return ctx.showMen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "MEN \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderComponent_app_category_dropdown_10_Template, 1, 0, "app-category-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_11_listener() { return ctx.showWomen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "WOMEN \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HeaderComponent_app_category_dropdown_14_Template, 1, 0, "app-category-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_15_listener() { return ctx.showKid(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "KIDS \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HeaderComponent_app_category_dropdown_18_Template, 1, 0, "app-category-dropdown", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-toolbar", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Modern closet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "MEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "app-header-dropdown", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "WOMEN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-header-dropdown", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "KIDS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "app-header-dropdown", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "app-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "app-profile-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showcategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showwomenCategory);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showkidCategory);
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_2__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarRow"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultShowHideDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _component_header_dropdown_header_dropdown_component__WEBPACK_IMPORTED_MODULE_9__["HeaderDropdownComponent"], _component_search_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"], _component_profile_menu_profile_menu_component__WEBPACK_IMPORTED_MODULE_11__["ProfileMenuComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"], _component_category_dropdown_category_dropdown_component__WEBPACK_IMPORTED_MODULE_13__["CategoryDropdownComponent"]], styles: [".menu-spacer[_ngcontent-%COMP%] {\n    flex: 0.1 0.1 auto;\n}\n.menu-spacer1[_ngcontent-%COMP%] {\n    flex: 0.4 0.4 auto;\n}\n.action-content[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    color: black;\n}\n.close-btn[_ngcontent-%COMP%] {\n    margin-left: 100px;\n}\n.close-but[_ngcontent-%COMP%]:hover {\n    background-color: white;\n}\n#nav-link[_ngcontent-%COMP%] {\n    font-weight: lighter;\n    font-family: cursive;\n    font-size: 16px;\n}\n.list-item[_ngcontent-%COMP%] {\n    margin-top: 10px;\n}\n.dropdown-menu[_ngcontent-%COMP%] {\n    \n    overflow-block: 20px;\n}\n@media only screen and (max-width: 589px) {\n    .py-1[_ngcontent-%COMP%] {\n        width: 200px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQixvQkFBb0I7SUFDcEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSTtRQUNJLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1zcGFjZXIge1xuICAgIGZsZXg6IDAuMSAwLjEgYXV0bztcbn1cbi5tZW51LXNwYWNlcjEge1xuICAgIGZsZXg6IDAuNCAwLjQgYXV0bztcbn1cbi5hY3Rpb24tY29udGVudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLmNsb3NlLWJ0biB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xufVxuLmNsb3NlLWJ1dDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4jbmF2LWxpbmsge1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5saXN0LWl0ZW0ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uZHJvcGRvd24tbWVudSB7XG4gICAgLyogd2lkdGg6IDQwJTsgKi9cbiAgICBvdmVyZmxvdy1ibG9jazogMjBweDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTg5cHgpIHtcbiAgICAucHktMSB7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { searchForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['f', { static: false }]
        }] }); })();


/***/ }),

/***/ "34WZ":
/*!***************************************!*\
  !*** ./src/app/core/api.endpoints.ts ***!
  \***************************************/
/*! exports provided: ApiEndpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiEndpoint", function() { return ApiEndpoint; });
class ApiEndpoint {
    static data() {
        return {
            login: {
                url: 'login',
                method: 'POST',
            },
            register: {
                url: 'register',
                method: 'POST',
            },
            verify: {
                url: 'verify',
                method: 'POST',
            },
            uploadItem: {
                url: 'upload',
                method: 'POST',
            },
            getItem: {
                url: 'getitem',
                method: 'GET',
            },
        };
    }
}


/***/ }),

/***/ "3x+k":
/*!**************************************************************!*\
  !*** ./src/app/components/content/content-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ContentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentRoutingModule", function() { return ContentRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "WxwB");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shop/shop.component */ "xxYb");
/* harmony import */ var src_app_guard_authorize_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/guard/authorize.guard */ "deXX");







const routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'shop', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__["ShopComponent"], canActivate: [src_app_guard_authorize_guard__WEBPACK_IMPORTED_MODULE_4__["AuthorizeGuard"]] },
    { path: 'shop/:option', component: _shop_shop_component__WEBPACK_IMPORTED_MODULE_3__["ShopComponent"] },
];
class ContentRoutingModule {
}
ContentRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContentRoutingModule });
ContentRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContentRoutingModule_Factory(t) { return new (t || ContentRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "5c0r":
/*!************************************************!*\
  !*** ./src/app/services/set-navbar.service.ts ***!
  \************************************************/
/*! exports provided: SetNavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetNavbarService", function() { return SetNavbarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SetNavbarService {
    loggedIn() {
        return localStorage.getItem('token');
    }
}
SetNavbarService.ɵfac = function SetNavbarService_Factory(t) { return new (t || SetNavbarService)(); };
SetNavbarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SetNavbarService, factory: SetNavbarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetNavbarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "7UK8":
/*!*************************!*\
  !*** ./src/app/data.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

var data = [
    {
        id: '0',
        Description: 'iiis',
        Price: '250',
        Gender: 'Male',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Size: 'Medium',
        Quantity: '6',
        Productname: 'ibbefbibi',
        Subcategory: 'Casual Shirts',
        Suplier: 'ddsadja',
    },
    {
        id: '1',
        Description: 'iii',
        Gender: 'Male',
        Price: '225',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Size: 'Medium',
        Quantity: '8',
        Productname: 'ibbefbibi',
        Subcategory: 'Formal Shirts',
        Suplier: 'ddsadja',
    },
    {
        id: '2',
        Description: 'iii',
        Price: '600',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Size: 'Medium',
        Gender: 'Male',
        Quantity: '10',
        Productname: 'ibbefbibi',
        Subcategory: 'T-shirt',
        Suplier: 'ddsadja',
    },
    {
        id: '3',
        Description: 'iii',
        Price: '200',
        Gender: 'Male',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Size: 'Medium',
        Quantity: '3',
        Productname: 'suraj',
        Subcategory: 'Sweaters',
        Suplier: 'ddsadja',
    },
    {
        id: '4',
        Description: 'iii',
        Price: '500',
        Gender: 'Male',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Size: 'Medium',
        Quantity: '15',
        Productname: 'abhinav',
        Subcategory: 'Jackets',
        Suplier: 'ddsadja',
    },
    {
        id: '5',
        Description: 'iii',
        Price: '650',
        Gender: 'Male',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Size: 'Medium',
        Quantity: '25',
        Productname: 'ibbefbibi',
        Subcategory: 'Suits',
        Suplier: 'ddsadja',
    },
    {
        id: '6',
        Description: 'iii',
        Price: '150',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Size: 'Medium',
        Gender: 'Male',
        Quantity: '12',
        Productname: 'ibbefbibi',
        Subcategory: 'Jeans',
        Suplier: 'ddsadja',
    },
    {
        id: '7',
        Description: 'iii',
        Price: '100',
        Gender: 'Male',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Size: 'Medium',
        Quantity: '20',
        Productname: 'ibbefbibi',
        Subcategory: 'Shorts',
        Suplier: 'ddsadja',
    },
    {
        id: '8',
        Description: 'iii',
        Price: '150',
        Gender: 'Male',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Size: 'Medium',
        Quantity: '20',
        Productname: 'ibbefbibi',
        Subcategory: 'Formal Trousers',
        Suplier: 'ddsadja',
    },
    {
        id: '9',
        Description: 'iii',
        Price: '1000',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Productname: 'ibbefbibi',
        Size: 'Medium',
        Gender: 'Male',
        Quantity: '20',
        Subcategory: 'Casual Trouser ',
        Suplier: 'ddsadja',
    },
    {
        id: '10',
        Description: 'iii',
        Price: '850',
        Gender: 'Male',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Productname: 'ibbefbibi',
        Subcategory: 'Track Pants & Joggers',
        Size: 'Medium',
        Quantity: '20',
        Suplier: 'ddsadja',
    },
    {
        id: '11',
        Description: 'iii',
        Price: '650',
        Gender: 'Male',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Size: 'Medium',
        Gender: 'Male',
        Quantity: '20',
        Productname: 'ibbefbibi',
        Subcategory: 'Casual Shoes',
        Suplier: 'ddsadja',
    },
    {
        id: '12',
        Description: 'iii',
        Price: '635',
        Gender: 'Male',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Size: 'Medium',
        Quantity: '20',
        Productname: 'ibbefbibi',
        Subcategory: 'Sports Shoes',
        Suplier: 'ddsadja',
    },
    {
        id: '13',
        Description: 'iii',
        Price: '260',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Productname: 'ibbefbibi',
        Subcategory: 'Formal shoes',
        Size: 'Medium',
        Gender: 'Male',
        Quantity: '20',
        Suplier: 'ddsadja',
    },
    {
        id: '14',
        Description: 'iii',
        Price: '325',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Productname: 'ibbefbibi',
        Subcategory: 'sneakers',
        Size: 'Medium',
        Quantity: '20',
        Gender: 'Male',
        Suplier: 'ddsadja',
    },
    {
        id: '15',
        Description: 'iii',
        Size: 'Medium',
        Quantity: '20',
        Price: '786',
        ender: 'Male',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Productname: 'ibbefbibi',
        Subcategory: 'sneakers',
        Suplier: 'ddsadja',
    },
    {
        id: '16',
        Description: 'iii',
        Price: '580',
        Category: 'Topwear',
        Size: 'Medium',
        Gender: 'Male',
        Quantity: '20',
        Image: './assets/images/2.jpg',
        Productname: 'ibbefbibi',
        Subcategory: 'Casual Trousers',
        Suplier: 'ddsadja',
    },
    {
        id: '17',
        Description: 'iii',
        Size: 'Medium',
        Quantity: '20',
        Gender: 'Male',
        Price: '900',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Productname: 'ibbefbibi',
        Subcategory: 'Formal Trousers',
        Suplier: 'ddsadja',
    },
    {
        id: '18',
        Description: 'iii',
        Price: '920',
        Size: 'Medium',
        Quantity: '20',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Productname: 'ibbefbibi',
        Subcategory: 'Shorts',
        Gender: 'Male',
        Suplier: 'ddsadja',
    },
    {
        id: '19',
        Gender: 'Male',
        Description: 'iii',
        Price: '50',
        Size: 'Medium',
        Quantity: '20',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Productname: 'ibbefbibi',
        Subcategory: 'Track Pants & Joggers',
        Suplier: 'ddsadja',
    },
    {
        id: '20',
        Size: 'Medium',
        Quantity: '20',
        Description: 'iii',
        Price: '780',
        Gender: 'Female',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Productname: 'ibbefbibi',
        Subcategory: 'Casual shoes',
        Suplier: 'ddsadja',
    },
    {
        id: '21',
        Size: 'Medium',
        Quantity: '20',
        Description: 'iii',
        Price: '180',
        Category: 'Topwear',
        Image: './assets/images/2.jpg',
        Productname: 'ibbefbibi',
        Subcategory: 'Sports shoes',
        Gender: 'Male',
        Suplier: 'ddsadja',
    },
    {
        id: '22',
        Description: 'iii',
        Price: '540',
        Size: 'Medium',
        Quantity: '20',
        Gender: 'Male',
        Category: 'Bottomwear',
        Image: './assets/images/2.jpg',
        Productname: 'ibbefbibi',
        Subcategory: 'Sneakers',
        Suplier: 'ddsadja',
    },
];
module.exports = data;
//# sourceMappingURL=data.js.map

/***/ }),

/***/ "88Q5":
/*!*************************************************!*\
  !*** ./src/app/shared/table/table.component.ts ***!
  \*************************************************/
/*! exports provided: TableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComponent", function() { return TableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "EVdn");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_set_item_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/set-item.service */ "bAqz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");














function TableComponent_th_15_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_th_15_i_2_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r26.ascendingOrder("name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_th_15_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_th_15_i_3_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r28.descendingOrder("name"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Name \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TableComponent_th_15_i_2_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TableComponent_th_15_i_3_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.nAcending);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.nDecending);
} }
function TableComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("id", "row_", element_r30.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r30.Productname, " ");
} }
function TableComponent_th_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r31.Description, " ");
} }
function TableComponent_th_21_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_th_21_i_2_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r34.ascendingOrder("Price"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_th_21_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_th_21_i_3_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r36.descendingOrder("Price"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_th_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Price \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TableComponent_th_21_i_2_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TableComponent_th_21_i_3_Template, 1, 0, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.pAcending);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.pDecending);
} }
function TableComponent_td_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](2, 1, element_r38.Price, "INR"), " ");
} }
function TableComponent_th_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Suplier");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r39.Suplier, " ");
} }
function TableComponent_th_27_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_th_27_i_2_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r42.ascendingOrder("size"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_th_27_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_th_27_i_3_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r44.descendingOrder("size"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Size \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TableComponent_th_27_i_2_Template, 1, 0, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TableComponent_th_27_i_3_Template, 1, 0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.sAcending);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.sDecending);
} }
function TableComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](element_r46.Size);
} }
function TableComponent_th_30_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_th_30_i_2_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r50); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r49.ascendingOrder("quantity"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_th_30_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_th_30_i_3_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r51.descendingOrder("quantity"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Quantity \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TableComponent_th_30_i_2_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TableComponent_th_30_i_3_Template, 1, 0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.qAcending);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r10.qDecending);
} }
function TableComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r53.Quantity, " ");
} }
function TableComponent_th_33_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_th_33_i_2_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r57); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r56.ascendingOrder("category"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_th_33_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_th_33_i_3_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r59); const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r58.descendingOrder("category"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Category \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TableComponent_th_33_i_2_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TableComponent_th_33_i_3_Template, 1, 0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.cAcending);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.cDecending);
} }
function TableComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r60 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r60.Category, " ");
} }
function TableComponent_th_36_i_2_Template(rf, ctx) { if (rf & 1) {
    const _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_th_36_i_2_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r64); const ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r63.ascendingOrder("subcategory"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_th_36_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_th_36_i_3_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66); const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r65.descendingOrder("subcategory"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Subcategory \u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TableComponent_th_36_i_2_Template, 1, 0, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, TableComponent_th_36_i_3_Template, 1, 0, "i", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.subAcending);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.subDecending);
} }
function TableComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r67 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", element_r67.Subcategory, " ");
} }
function TableComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r68 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", element_r68.Image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function TableComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_td_43_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72); const element_r69 = ctx.$implicit; const i_r70 = ctx.index; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r71.edit(element_r69, i_r70); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    const _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TableComponent_td_46_Template_i_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r76); const element_r73 = ctx.$implicit; const i_r74 = ctx.index; const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r75.fucn(element_r73, i_r74); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TableComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 39);
} }
function TableComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tr", 40);
} }
class TableComponent {
    constructor(setitem, route, activated, apiService) {
        this.setitem = setitem;
        this.route = route;
        this.activated = activated;
        this.apiService = apiService;
        this.custompageindex = 0;
        this.nAcending = true;
        this.nDecending = false;
        this.pAcending = true;
        this.pDecending = false;
        this.cAcending = true;
        this.cDecending = false;
        this.sAcending = true;
        this.sDecending = false;
        this.qAcending = true;
        this.qDecending = false;
        this.subAcending = true;
        this.subDecending = false;
        this.displayedColumns = [
            'productName',
            'Description',
            'Price',
            'suplier',
            'category',
            'size',
            'quantity',
            'subCategory',
            'file',
            'edit',
            'delete',
        ];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.setitem.post);
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const gap = yield this.apiService.request('getItem');
            console.log();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](gap);
            let variable = 0;
            if (localStorage.getItem('elementIndex') !== null) {
                variable = parseInt(localStorage.getItem('elementIndex'), 0);
                variable--;
            }
            this.paginator.pageIndex = Math.floor(variable / 10);
            this.dataSource.paginator = this.paginator;
            setTimeout(() => {
                if (variable > 1) {
                    jquery__WEBPACK_IMPORTED_MODULE_5___default()('html, body').animate({
                        scrollTop: jquery__WEBPACK_IMPORTED_MODULE_5___default()('#row_' + variable++).offset().top,
                    }, 1000);
                }
            }, 500);
        });
    }
    applyFilter(filterValue) {
        filterValue = filterValue.trim();
        filterValue = filterValue.toLowerCase();
        this.dataSource.filter = filterValue;
    }
    edit(element, i) {
        console.log(element);
        this.id = element.id;
        localStorage.setItem('edit', JSON.stringify(element));
        localStorage.setItem('elementIndex', this.id);
        this.route.navigate(['/admin/edit-item'], {
            queryParams: { _id: this.id },
        });
    }
    fucn(element, i) {
        const v = confirm('Are u sure?');
        if (v === true) {
            this.setitem.delete(element, i);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.setitem.post);
            this.dataSource.paginator = this.paginator;
        }
    }
    ascendingOrder(option) {
        if (option === 'name') {
            const arr = lodash__WEBPACK_IMPORTED_MODULE_4__["sortBy"](this.setitem.post, [(o) => o.Productname]);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](arr);
            this.nAcending = false;
            this.nDecending = true;
        }
        else if (option === 'Price') {
            const arr = this.setitem.post.sort((a, b) => a.Price - b.Price);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](arr);
            this.pAcending = false;
            this.pDecending = true;
        }
        else if (option === 'category') {
            const arr = lodash__WEBPACK_IMPORTED_MODULE_4__["sortBy"](this.setitem.post, [(o) => o.Category]);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](arr);
            this.cDecending = true;
            this.cAcending = false;
        }
        else if (option === 'size') {
            const arr = lodash__WEBPACK_IMPORTED_MODULE_4__["sortBy"](this.setitem.post, [(o) => o.size]);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](arr);
            this.sAcending = false;
            this.sDecending = true;
        }
        else if (option === 'quantity') {
            const arr = this.setitem.post.sort((a, b) => a.Quantity - b.Quantity);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](arr);
            this.qAcending = false;
            this.qDecending = true;
        }
        else if (option === 'subcategory') {
            const arr = lodash__WEBPACK_IMPORTED_MODULE_4__["sortBy"](this.setitem.post, [(o) => o.Subcategory]);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](arr);
            this.subAcending = false;
            this.subDecending = true;
        }
        this.dataSource.paginator = this.paginator;
    }
    descendingOrder(option) {
        if (option === 'name') {
            const arr = lodash__WEBPACK_IMPORTED_MODULE_4__["sortBy"](this.setitem.post, [(o) => o.Productname]);
            arr.reverse();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](arr);
            this.nAcending = true;
            this.nDecending = false;
        }
        else if (option === 'Price') {
            const arr = this.setitem.post.sort((a, b) => b.Price - a.Price);
            arr.reverse();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](arr);
            this.pAcending = true;
            this.pDecending = false;
        }
        else if (option === 'category') {
            const arr = lodash__WEBPACK_IMPORTED_MODULE_4__["sortBy"](this.setitem.post, [(o) => o.Category]);
            arr.reverse();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](arr);
            this.cDecending = false;
            this.cAcending = true;
        }
        else if (option === 'size') {
            const arr = lodash__WEBPACK_IMPORTED_MODULE_4__["sortBy"](this.setitem.post, [(o) => o.size]);
            arr.reverse();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](arr);
            this.sAcending = true;
            this.sDecending = false;
        }
        else if (option === 'quantity') {
            const arr = this.setitem.post.sort((a, b) => a.Quantity - b.Quantity);
            arr.reverse();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](arr);
            this.qAcending = true;
            this.qDecending = false;
        }
        else if (option === 'subcategory') {
            const arr = lodash__WEBPACK_IMPORTED_MODULE_4__["sortBy"](this.setitem.post, [(o) => o.Subcategory]);
            arr.reverse();
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](arr);
            this.subAcending = true;
            this.subDecending = false;
        }
        this.dataSource.paginator = this.paginator;
    }
}
TableComponent.ɵfac = function TableComponent_Factory(t) { return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_set_item_service__WEBPACK_IMPORTED_MODULE_6__["SetItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"])); };
TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TableComponent, selectors: [["app-table"]], viewQuery: function TableComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
    } }, decls: 51, vars: 5, consts: [[1, "search-div"], [1, "form-inline", "my-2", "my-lg-0"], ["type", "search", "id", "get1", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "col-md-12", 3, "keyup"], [1, "uploadButton", 2, "float", "right"], ["routerLink", "/admin/upload", 1, "btn-outline-info", 2, "border", "transparent", "block-size", "40px", "border-radius", "10px"], ["aria-hidden", "true", 1, "fa", "fa-plus", 2, "opacity", "0.8"], [1, "container-fluid"], [1, "example-container", "mat-elevation-z1"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "productName"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "id", 4, "matCellDef"], ["matColumnDef", "Description"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Price"], ["matColumnDef", "suplier"], ["matColumnDef", "size"], ["matColumnDef", "quantity"], ["matColumnDef", "category"], ["matColumnDef", "subCategory"], ["matColumnDef", "file"], ["matColumnDef", "edit"], ["matColumnDef", "delete"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "pagiantor"], ["showFirstLastButtons", "", 3, "pageSize", "hidePageSize"], ["mat-header-cell", ""], ["class", "fa fa-sort-amount-asc", "style", "cursor: pointer", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-amount-desc", "aria-hidden", "true", "style", "cursor: pointer", 3, "click", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-sort-amount-asc", 2, "cursor", "pointer", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-sort-amount-desc", 2, "cursor", "pointer", 3, "click"], ["mat-cell", "", 3, "id"], ["mat-cell", ""], ["class", "fa fa-sort-amount-asc", "style", "cursor: pointer", "style", "cursor: pointer", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["class", "fa fa-sort-amount-desc", "style", "cursor: pointer", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["id", "productImage", "alt", "", 3, "src"], [1, "fa", "fa-edit", 2, "font-size", "24px", "cursor", "pointer", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-trash", 2, "font-size", "24px", "cursor", "pointer", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function TableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function TableComponent_Template_input_keyup_2_listener($event) { return ctx.applyFilter($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00A0\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Upload New ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](14, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, TableComponent_th_15_Template, 4, 2, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, TableComponent_td_16_Template, 2, 2, "td", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](17, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, TableComponent_th_18_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, TableComponent_td_19_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](20, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, TableComponent_th_21_Template, 4, 2, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, TableComponent_td_22_Template, 3, 4, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](23, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, TableComponent_th_24_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, TableComponent_td_25_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](26, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, TableComponent_th_27_Template, 4, 2, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](28, TableComponent_td_28_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](29, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, TableComponent_th_30_Template, 4, 2, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, TableComponent_td_31_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](32, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, TableComponent_th_33_Template, 4, 2, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, TableComponent_td_34_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](35, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, TableComponent_th_36_Template, 4, 2, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, TableComponent_td_37_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](38, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](39, TableComponent_th_39_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, TableComponent_td_40_Template, 2, 1, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](41, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](42, TableComponent_th_42_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, TableComponent_td_43_Template, 2, 0, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](44, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](45, TableComponent_th_45_Template, 2, 0, "th", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, TableComponent_td_46_Template, 2, 0, "td", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, TableComponent_tr_47_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, TableComponent_tr_48_Template, 1, 0, "tr", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "mat-paginator", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("pageSize", 10)("hidePageSize", true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLink"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"]], styles: ["table[_ngcontent-%COMP%] {\n    width: 100%;\n    padding-top: 150px;\n}\n#detail[_ngcontent-%COMP%] {\n    font-size: 20px;\n    color: blue;\n}\n#get[_ngcontent-%COMP%] {\n    border-radius: 10px;\n    color: black;\n    background-color: teal;\n    font-weight: lighter;\n    border: 1px solid black;\n}\n#productImage[_ngcontent-%COMP%] {\n    height: 50px;\n    border-radius: 25px;\n}\n.btn-outline-info[_ngcontent-%COMP%] {\n    float: right;\n}\n.mat-paginator[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsdUJBQXVCO0FBQzNCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL3RhYmxlL3RhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZy10b3A6IDE1MHB4O1xufVxuI2RldGFpbCB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGNvbG9yOiBibHVlO1xufVxuXG4jZ2V0IHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0ZWFsO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuI3Byb2R1Y3RJbWFnZSB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG59XG4uYnRuLW91dGxpbmUtaW5mbyB7XG4gICAgZmxvYXQ6IHJpZ2h0O1xufVxuLm1hdC1wYWdpbmF0b3Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-table',
                templateUrl: './table.component.html',
                styleUrls: ['./table.component.css'],
            }]
    }], function () { return [{ type: src_app_services_set_item_service__WEBPACK_IMPORTED_MODULE_6__["SetItemService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }]
        }] }); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "H+bZ":
/*!*****************************************!*\
  !*** ./src/app/services/api.service.ts ***!
  \*****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _core_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/app.constants */ "vGwx");
/* harmony import */ var _core_api_endpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/api.endpoints */ "34WZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../toaster.service */ "onSw");








class ApiService {
    constructor(http, router, toaster) {
        this.http = http;
        this.router = router;
        this.toaster = toaster;
    }
    request(endPointName, payload, { paramsData = [], clearCache = false } = {}) {
        const endPointData = _core_api_endpoints__WEBPACK_IMPORTED_MODULE_3__["ApiEndpoint"].data()[endPointName];
        if (!endPointData) {
            this.toaster.showToaster('Api path is not found');
        }
        const restFull = endPointData.restFull;
        let paramsString = '';
        if (restFull && paramsData.length) {
            paramsString = '/' + paramsData.join('/');
        }
        return new Promise((resolve, reject) => {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('clearCache', clearCache.toString());
            this.http
                .request(endPointData.method, `${_core_app_constants__WEBPACK_IMPORTED_MODULE_2__["AppConstants"].API_ENPOINT}/${endPointData.url}${paramsString}`, {
                body: payload,
                observe: 'body',
                params,
            })
                .subscribe((res) => {
                console.log(res);
                resolve(JSON.parse(JSON.stringify(res)));
            }, (err) => {
                reject(err);
            });
        });
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "Lr6l":
/*!******************************************************!*\
  !*** ./src/app/component/search/search.component.ts ***!
  \******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




const _c0 = ["f"];
class SearchComponent {
    constructor(route) {
        this.route = route;
    }
    ngOnInit() { }
    onsubmit(form) {
        console.log(this.searchForm.value.search);
        this.route.navigate(['/shop'], {
            queryParams: { category: this.searchForm.value.search },
        });
        this.searchForm.reset();
    }
}
SearchComponent.ɵfac = function SearchComponent_Factory(t) { return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SearchComponent, selectors: [["app-search"]], viewQuery: function SearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.searchForm = _t.first);
    } }, decls: 9, vars: 0, consts: [[1, "search"], [1, "form-inline", "my-2", "my-lg-0", 2, "border-radius", "75px", 3, "ngSubmit"], ["f", "ngForm"], [1, "input-group", "md-form", "form-sm", "form-1", "pl-0"], [1, "input-group-prepend"], ["id", "basic-text1", 1, "input-group-text", "purple", "lighten-3", 2, "background-color", "white"], ["aria-hidden", "true", 1, "fa", "fa-search", "text-black"], ["mat-button", "", "type", "text", "placeholder", "Search for products and,category", "aria-label", "Search", "ngModel", "", "name", "search", "required", "", "search", "", 1, "form-control", "my-0", "py-1", 2, "width", "267px"], ["search", "ngModel"]], template: function SearchComponent_Template(rf, ctx) { if (rf & 1) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SearchComponent_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return ctx.onsubmit(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { searchForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['f', { static: false }]
        }] }); })();


/***/ }),

/***/ "M/G4":
/*!*****************************************************!*\
  !*** ./src/app/shared/additem/additem.component.ts ***!
  \*****************************************************/
/*! exports provided: AdditemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditemComponent", function() { return AdditemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_services_set_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/set-item.service */ "bAqz");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_toaster_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/toaster.service */ "onSw");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");









function AdditemComponent_span_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *This Field Is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdditemComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdditemComponent_span_15_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.newitem.get("productName").errors["required"]);
} }
function AdditemComponent_span_21_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *This Field Is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdditemComponent_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdditemComponent_span_21_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.newitem.get("Description").errors["required"]);
} }
function AdditemComponent_span_27_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *This Field Is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdditemComponent_span_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdditemComponent_span_27_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.newitem.get("Price").errors["required"]);
} }
function AdditemComponent_span_37_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *This Field Is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdditemComponent_span_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdditemComponent_span_37_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.newitem.get("gender").errors["required"]);
} }
function AdditemComponent_span_53_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *This Field Is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdditemComponent_span_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdditemComponent_span_53_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.newitem.get("size").errors["required"]);
} }
function AdditemComponent_span_59_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *This Field Is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdditemComponent_span_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdditemComponent_span_59_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.newitem.get("Quantity").errors["required"]);
} }
function AdditemComponent_span_65_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *This Field Is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdditemComponent_span_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdditemComponent_span_65_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.newitem.get("file").errors["required"]);
} }
function AdditemComponent_span_75_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *This Field Is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdditemComponent_span_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdditemComponent_span_75_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.newitem.get("suplier").errors["required"]);
} }
function AdditemComponent_span_87_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *This Field Is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdditemComponent_span_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdditemComponent_span_87_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.newitem.get("category").errors["required"]);
} }
function AdditemComponent_span_117_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " *This Field Is Required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AdditemComponent_span_117_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AdditemComponent_span_117_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.newitem.get("subCategory").errors["required"]);
} }
function AdditemComponent_button_121_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_button_121_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.clear(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AdditemComponent {
    constructor(setitem, route, router, apiService, toasterService) {
        this.setitem = setitem;
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.toasterService = toasterService;
        this.heading = 'Add Product';
        this.editMode = false;
        this.Genders = ['Male', 'Female', 'Others'];
        this.showButton = true;
        this.showdropdown = false;
        this.editMode = this.route.snapshot.queryParams._id ? true : false;
        console.log('this is items', this.setitem.post);
        this.itemData = this.setitem.post.filter((res) => {
            return res;
        });
    }
    ngOnInit() {
        this.newitem = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            productName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            Description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            size: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            Quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            file: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            suplier: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            subCategory: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
        if (this.editMode) {
            this.populateData();
        }
    }
    populateData() {
        this.data = JSON.parse(localStorage.getItem('edit'));
        this.newitem.patchValue({
            Productname: this.data.Productname,
            Description: this.data.Description,
            Gender: this.data.Gender,
            Quantity: this.data.Quantity,
            Size: this.data.Size,
            Price: this.data.Price,
            Suplier: this.data.Suplier,
            Category: this.data.Category,
            Subcategory: this.data.Subcategory,
        });
    }
    onsubmit(e) {
        if (this.editMode) {
        }
        else {
            const formData = new FormData();
            formData.append('productName', this.newitem.get('productName').value);
            formData.append('Description', this.newitem.get('Description').value);
            formData.append('size', this.newitem.get('size').value);
            formData.append('quantity', this.newitem.get('Quantity').value);
            formData.append('Price', this.newitem.get('Price').value);
            formData.append('gender', this.newitem.get('gender').value);
            formData.append('suplier', this.newitem.get('suplier').value);
            formData.append('category', this.newitem.get('category').value);
            formData.append('subCategory', this.newitem.get('subCategory').value);
            formData.append('file', this.images);
            console.log(formData);
            if (this.newitem.valid) {
                this.apiService.request('uploadItem', formData);
            }
            else {
                this.toasterService.showToaster('Form is not filled');
            }
        }
    }
    selectImages(event) {
        if (event.target.files.length > 0) {
            const files = event.target.files[0];
            this.images = files;
            console.log(this.images);
        }
        console.log(event);
    }
    clear() {
        localStorage.removeItem('elementIndex');
        this.router.navigate(['admin']);
    }
}
AdditemComponent.ɵfac = function AdditemComponent_Factory(t) { return new (t || AdditemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_set_item_service__WEBPACK_IMPORTED_MODULE_2__["SetItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"])); };
AdditemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdditemComponent, selectors: [["app-additem"]], decls: 122, vars: 12, consts: [["id", "gram"], [1, "container3"], [1, "form-subhead"], ["id", "form1", 3, "formGroup"], [1, "form-group"], [1, "col-md-8"], ["for", "Product Name"], ["type", "text", "formControlName", "productName", "id", "exampleInputEmail1", 1, "form-control"], ["name", ""], ["class", "help-block", 4, "ngIf"], [1, "form-group", "green-border-focus"], ["for", "Product Description"], ["formControlName", "Description", "id", "exampleFormControlTextarea5", "rows", "3 ", 1, "form-control"], ["for", "price"], ["type", "text", "formControlName", "Price", "id", "exampleInputEmail1", "placeholder", "Enter Price", 1, "form-control"], ["for", "gender"], ["formControlName", "gender", 1, "custom-select", "custom-select-sm"], ["value", "Male"], ["value", "Female"], ["for", "size"], ["formControlName", "size", 1, "custom-select", "custom-select-sm"], ["value", "Small"], ["value", "Medium"], ["value", "Large"], ["value", "X-Large"], ["value", "XX-Large"], ["for", "Quantity"], ["type", "number", "formControlName", "Quantity", "id", "exampleInputEmail1", "placeholder", "Enter Quantity", 1, "form-control"], ["for", "upload", 1, "col-form-label"], ["type", "file", "formControlName", "file", "placeholder", "Select Image", 1, "form-control", 3, "change"], [1, "head"], ["for", "Supplier"], ["type", "text", "formControlName", "suplier", "id", "exampleInputEmail1", 1, "form-control"], ["for", "category"], ["formControlName", "category", 1, "custom-select", "custom-select-sm"], ["value", "Topwear"], ["value", "Bottomwear"], ["value", "Footwear"], ["for", "subCategory"], ["formControlName", "subCategory", 1, "custom-select", "custom-select-sm"], ["value", "Tshirt"], ["value", "Shirts"], ["value", "Jackets"], ["value", "Suits"], ["value", "Jeans"], ["value", "Trousers"], ["value", "Shorts"], ["value", "Joggers"], ["value", "Casual shoes"], ["value", "Sports shoes"], ["value", "Formal shoes"], ["value", "Sneakers"], [1, "button"], ["type", "submit", 1, "btn", "btn-success", 3, "click"], ["type", "submit", "id", "cancel", "class", "btn btn-danger", 3, "click", 4, "ngIf"], [1, "help-block"], ["type", "submit", "id", "cancel", 1, "btn", "btn-danger", 3, "click"]], template: function AdditemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "New Product");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Basic Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Product Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AdditemComponent_span_15_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Product Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AdditemComponent_span_21_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AdditemComponent_span_27_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Gender");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "select", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Male");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Female");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, AdditemComponent_span_37_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Medium");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "X-Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "X-Large");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, AdditemComponent_span_53_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](59, AdditemComponent_span_59_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "label", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Upload");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AdditemComponent_Template_input_change_64_listener($event) { return ctx.selectImages($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](65, AdditemComponent_span_65_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Supplier & category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Supplier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "input", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, AdditemComponent_span_75_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "label", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "select", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "option", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Topwear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "option", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Bottomwear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "option", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Footwear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, AdditemComponent_span_87_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "label", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Sub category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "select", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "option", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "TShirt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "option", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Shirts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "option", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Jackets");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "option", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Suits");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "option", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Jeans");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "option", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Trousers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "option", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Shorts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "option", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Joggers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "option", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Casual shoes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "option", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Sports shoes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "option", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Formal shoes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "option", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Sneakers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](117, AdditemComponent_span_117_Template, 2, 1, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "button", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdditemComponent_Template_button_click_119_listener($event) { return ctx.onsubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " Save ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, AdditemComponent_button_121_Template, 2, 0, "button", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.newitem);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newitem.get("productName").valid && ctx.newitem.get("productName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newitem.get("Description").valid && ctx.newitem.get("Description").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newitem.get("Price").valid && ctx.newitem.get("Price").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newitem.get("gender").valid && ctx.newitem.get("gender").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newitem.get("size").valid && ctx.newitem.get("size").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newitem.get("Quantity").valid && ctx.newitem.get("Quantity").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newitem.get("file").valid && ctx.newitem.get("file").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newitem.get("suplier").valid && ctx.newitem.get("suplier").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newitem.get("category").valid && ctx.newitem.get("category").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.newitem.get("subCategory").valid && ctx.newitem.get("subCategory").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.editMode);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"]], styles: [".form-head[_ngcontent-%COMP%] {\n    \n    margin-left: 100px;\n}\n\n.button[_ngcontent-%COMP%] {\n    padding-left: 16px;\n    margin-top: 30px;\n}\n\n.help-block[_ngcontent-%COMP%] {\n    color: red;\n}\n\n.container3[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 0 auto;\n    padding: 50px;\n    background-color: white;\n    \n}\n\n#cancel[_ngcontent-%COMP%] {\n    margin-left: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FkZGl0ZW0vYWRkaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxVQUFVO0FBQ2Q7O0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7SUFDdkI7OzBCQUVzQjtBQUMxQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9hZGRpdGVtL2FkZGl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWhlYWQge1xuICAgIC8qIHdpZHRoOjYwJTsgKi9cbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XG59XG5cbi5idXR0b24ge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuLmhlbHAtYmxvY2sge1xuICAgIGNvbG9yOiByZWQ7XG59XG4uY29udGFpbmVyMyB7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIC8qIG1hcmdpbi1yaWdodDo0MDBweDtcbiAgICBtYXJnaW4tbGVmdDogMzAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMDBweDsgKi9cbn1cbiNjYW5jZWwge1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdditemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-additem',
                templateUrl: './additem.component.html',
                styleUrls: ['./additem.component.css'],
            }]
    }], function () { return [{ type: src_app_services_set_item_service__WEBPACK_IMPORTED_MODULE_2__["SetItemService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: src_app_toaster_service__WEBPACK_IMPORTED_MODULE_5__["ToasterService"] }]; }, null); })();


/***/ }),

/***/ "PCNd":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "320Y");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared-routing.module */ "Sj5B");
/* harmony import */ var _component_category_dropdown_category_dropdown_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/category-dropdown/category-dropdown.component */ "+VhB");
/* harmony import */ var _component_header_dropdown_header_dropdown_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../component/header-dropdown/header-dropdown.component */ "mB7w");
/* harmony import */ var _component_search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../component/search/search.component */ "Lr6l");
/* harmony import */ var _loginform_loginform_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loginform/loginform.component */ "1Bl0");
/* harmony import */ var _signupform_signupform_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./signupform/signupform.component */ "pkGf");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/footer.component */ "jQpT");
/* harmony import */ var _component_profile_menu_profile_menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../component/profile-menu/profile-menu.component */ "u7bB");
/* harmony import */ var _table_table_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./table/table.component */ "88Q5");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _additem_additem_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./additem/additem.component */ "M/G4");























class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _shared_routing_module__WEBPACK_IMPORTED_MODULE_10__["SharedRoutingModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
        _component_category_dropdown_category_dropdown_component__WEBPACK_IMPORTED_MODULE_11__["CategoryDropdownComponent"],
        _component_header_dropdown_header_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["HeaderDropdownComponent"],
        _component_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
        _loginform_loginform_component__WEBPACK_IMPORTED_MODULE_14__["LoginformComponent"],
        _signupform_signupform_component__WEBPACK_IMPORTED_MODULE_15__["SignupformComponent"],
        _component_profile_menu_profile_menu_component__WEBPACK_IMPORTED_MODULE_17__["ProfileMenuComponent"],
        _table_table_component__WEBPACK_IMPORTED_MODULE_18__["TableComponent"],
        _additem_additem_component__WEBPACK_IMPORTED_MODULE_21__["AdditemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        _shared_routing_module__WEBPACK_IMPORTED_MODULE_10__["SharedRoutingModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"]], exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
        _loginform_loginform_component__WEBPACK_IMPORTED_MODULE_14__["LoginformComponent"],
        _signupform_signupform_component__WEBPACK_IMPORTED_MODULE_15__["SignupformComponent"],
        _table_table_component__WEBPACK_IMPORTED_MODULE_18__["TableComponent"],
        _additem_additem_component__WEBPACK_IMPORTED_MODULE_21__["AdditemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                    _component_category_dropdown_category_dropdown_component__WEBPACK_IMPORTED_MODULE_11__["CategoryDropdownComponent"],
                    _component_header_dropdown_header_dropdown_component__WEBPACK_IMPORTED_MODULE_12__["HeaderDropdownComponent"],
                    _component_search_search_component__WEBPACK_IMPORTED_MODULE_13__["SearchComponent"],
                    _loginform_loginform_component__WEBPACK_IMPORTED_MODULE_14__["LoginformComponent"],
                    _signupform_signupform_component__WEBPACK_IMPORTED_MODULE_15__["SignupformComponent"],
                    _component_profile_menu_profile_menu_component__WEBPACK_IMPORTED_MODULE_17__["ProfileMenuComponent"],
                    _table_table_component__WEBPACK_IMPORTED_MODULE_18__["TableComponent"],
                    _additem_additem_component__WEBPACK_IMPORTED_MODULE_21__["AdditemComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenavModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                    _shared_routing_module__WEBPACK_IMPORTED_MODULE_10__["SharedRoutingModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_19__["MatPaginatorModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_20__["MatTableModule"],
                ],
                exports: [
                    _header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"],
                    _loginform_loginform_component__WEBPACK_IMPORTED_MODULE_14__["LoginformComponent"],
                    _signupform_signupform_component__WEBPACK_IMPORTED_MODULE_15__["SignupformComponent"],
                    _table_table_component__WEBPACK_IMPORTED_MODULE_18__["TableComponent"],
                    _additem_additem_component__WEBPACK_IMPORTED_MODULE_21__["AdditemComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "PODb":
/*!******************************************************!*\
  !*** ./src/app/components/content/content.module.ts ***!
  \******************************************************/
/*! exports provided: ContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentModule", function() { return ContentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _content_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content-routing.module */ "3x+k");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "WxwB");
/* harmony import */ var src_app_component_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/component/image-slider/image-slider.component */ "/sPK");
/* harmony import */ var src_app_component_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/component/home-content/home-content.component */ "XiDl");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _shop_shop_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shop/shop.component */ "xxYb");
/* harmony import */ var src_app_component_filters_filters_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/component/filters/filters.component */ "TqIo");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "oOf3");













class ContentModule {
}
ContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ContentModule });
ContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ContentModule_Factory(t) { return new (t || ContentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _content_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContentRoutingModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ContentModule, { declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        src_app_component_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_7__["HomeContentComponent"],
        src_app_component_filters_filters_component__WEBPACK_IMPORTED_MODULE_10__["FiltersComponent"],
        src_app_component_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_6__["ImageSliderComponent"],
        _shop_shop_component__WEBPACK_IMPORTED_MODULE_9__["ShopComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _content_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContentRoutingModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
        ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                    src_app_component_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_7__["HomeContentComponent"],
                    src_app_component_filters_filters_component__WEBPACK_IMPORTED_MODULE_10__["FiltersComponent"],
                    src_app_component_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_6__["ImageSliderComponent"],
                    _shop_shop_component__WEBPACK_IMPORTED_MODULE_9__["ShopComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _content_routing_module__WEBPACK_IMPORTED_MODULE_2__["ContentRoutingModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_4__["MDBBootstrapModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionModule"],
                    ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "Sj5B":
/*!*************************************************!*\
  !*** ./src/app/shared/shared-routing.module.ts ***!
  \*************************************************/
/*! exports provided: SharedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedRoutingModule", function() { return SharedRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class SharedRoutingModule {
}
SharedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedRoutingModule });
SharedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedRoutingModule_Factory(t) { return new (t || SharedRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/data */ "7UK8");
/* harmony import */ var src_app_data__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(src_app_data__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/header/header.component */ "320Y");




class AppComponent {
    constructor() {
        localStorage.setItem('items', JSON.stringify(src_app_data__WEBPACK_IMPORTED_MODULE_1___default.a));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TqIo":
/*!********************************************************!*\
  !*** ./src/app/component/filters/filters.component.ts ***!
  \********************************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function FiltersComponent_mat_expansion_panel_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_mat_expansion_panel_1_div_3_Template_input_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const val_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onSelected(val_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FiltersComponent_mat_expansion_panel_1_div_3_Template_label_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const val_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "defaultInline1_", val_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("for", "defaultInline1_", val_r3, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](val_r3);
} }
function FiltersComponent_mat_expansion_panel_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FiltersComponent_mat_expansion_panel_1_div_3_Template, 5, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const cat_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r1.heading, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cat_r1.value);
} }
class FiltersComponent {
    constructor(route) {
        this.route = route;
        this.categories = [];
    }
    ngOnInit() {
        this.categories = [
            {
                heading: 'CATEGORIES',
                value: [
                    'Casual Shirts',
                    'Formal Shirts',
                    'T-Shirt',
                    'Sweaters',
                    'Jackets',
                    'Suits',
                    'Jeans',
                    'Casual Trousers',
                    'Formal Trousers',
                    'Shorts',
                    'Track Pants & Joggers',
                    'Casual Shoes',
                    'Sports Shoes',
                    'Formal Shoes',
                    'Sneakers',
                ],
            },
            { heading: 'GENDER', value: ['Male', 'Female', 'Kids'] },
            {
                heading: 'SIZE',
                value: ['Small', 'Medium', 'Large', 'X-large', 'XX-large'],
            },
        ];
    }
    onClick(event) {
        console.log(event.target.outerText);
        this.route.navigate(['/shop'], {
            queryParams: { category: event.target.outerText },
        });
    }
}
FiltersComponent.ɵfac = function FiltersComponent_Factory(t) { return new (t || FiltersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
FiltersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FiltersComponent, selectors: [["app-filters"]], decls: 2, vars: 1, consts: [[4, "ngFor", "ngForOf"], [1, "custom-control", "custom-radio"], ["type", "radio", "name", "groupOfDefaultCheckbox", 1, "custom-control-input", 3, "id", "click"], [1, "custom-control-label", 3, "for", "click"]], template: function FiltersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FiltersComponent_mat_expansion_panel_1_Template, 4, 2, "mat-expansion-panel", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.categories);
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9maWx0ZXJzL2ZpbHRlcnMuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FiltersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filters',
                templateUrl: './filters.component.html',
                styleUrls: ['./filters.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "WxwB":
/*!***********************************************************!*\
  !*** ./src/app/components/content/home/home.component.ts ***!
  \***********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_component_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/component/image-slider/image-slider.component */ "/sPK");
/* harmony import */ var src_app_component_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/component/home-content/home-content.component */ "XiDl");




class HomeComponent {
    constructor() { }
    ngOnInit() { }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 4, vars: 0, consts: [[1, "section"], [1, "container-fluid"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-image-slider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-home-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [src_app_component_image_slider_image_slider_component__WEBPACK_IMPORTED_MODULE_1__["ImageSliderComponent"], src_app_component_home_content_home_content_component__WEBPACK_IMPORTED_MODULE_2__["HomeContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XiDl":
/*!******************************************************************!*\
  !*** ./src/app/component/home-content/home-content.component.ts ***!
  \******************************************************************/
/*! exports provided: HomeContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeContentComponent", function() { return HomeContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");



function HomeContentComponent_ng_template_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Green bomber jacket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "$ 1800");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeContentComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Yellow pullover");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "$ 600");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeContentComponent_ng_template_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Blue ethinc wear suit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "$ 560");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeContentComponent_ng_template_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Blue denim jacket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "$ 450");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomeContentComponent_ng_template_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Red formal jacket");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "$ 300");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class HomeContentComponent {
    constructor() { }
    ngOnInit() {
        this.customOptions = {
            loop: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            dots: false,
            navSpeed: 700,
            navText: ['', ''],
            responsive: {
                0: { items: 1 },
                400: { items: 2 },
                740: { items: 3 },
                940: { items: 5 },
            },
            nav: true,
        };
    }
}
HomeContentComponent.ɵfac = function HomeContentComponent_Factory(t) { return new (t || HomeContentComponent)(); };
HomeContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeContentComponent, selectors: [["app-home-content"]], decls: 45, vars: 1, consts: [[1, "row"], [1, "col-sm-6", "col-md-3"], [1, "card", "space-categ", "cursor-pointer"], ["src", "https://api.deebaco.com//uploads/categories/w3.jpg", "alt", "https://api.deebaco.com//uploads/categories/w3.jpg", 1, "img-responsive"], [1, "card-body", "text-center"], [1, "item_categ"], ["src", "https://api.deebaco.com//uploads/categories/w2.jpg", "alt", "https://api.deebaco.com//uploads/categories/w2.jpg", 1, "img-responsive"], ["src", "https://api.deebaco.com//uploads/categories/w1.jpg", "alt", "https://api.deebaco.com//uploads/categories/w1.jpg", 1, "img-responsive"], ["src", "https://api.deebaco.com//uploads/categories/w4.jpg", "alt", "https://api.deebaco.com//uploads/categories/w4.jpg", 1, "img-responsive"], [1, "container-fluid"], ["href", "#"], [1, "banner"], ["src", "https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2020/9/7/580104e5-baeb-4eac-b92b-90d4f225133c1599498581141-dk.jpg", "alt", ""], [1, "head-tag", "text-center"], [2, "margin-top", "10px"], [3, "options"], ["carouselSlide", ""], [1, "row", "padding-t"], [1, "col-md-6", "cursor-pointer"], ["src", "https://www.leemboodi.com/media/wysiwyg/Leemboodi_Banner_1510x460_02-min.jpg", "title", "Ethnic-wear", "alt", "", 1, "hover-image"], [1, "col-md-6", "cursor-pointer", "response"], ["src", "assets/images/rsz_photo-1483985988355-763728e1935b.jpg", "title", "casual-wear", "alt", "", 1, "hover-image"], ["src", "assets/images/pexels-photo-594610.jpeg"], [1, "detail", "text-center"], [1, "details"], ["src", "assets/images/pexels-photo-1183266.jpeg", 2, "width", "100%"], ["src", "assets/images/pexels-photo-1193941.jpeg"], ["src", "assets/images/pexels-photo-1384219.jpeg"], ["src", "assets/images/pexels-photo-1390600.jpeg", 2, "width", "100%"], [1, "text-center", "detail"]], template: function HomeContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dresses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Kurtis & Tunics");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Shirts & Tops");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Bottoms");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "EXPLORE MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "owl-carousel-o", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, HomeContentComponent_ng_template_33_Template, 7, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, HomeContentComponent_ng_template_34_Template, 7, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, HomeContentComponent_ng_template_35_Template, 7, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, HomeContentComponent_ng_template_36_Template, 7, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, HomeContentComponent_ng_template_37_Template, 7, 0, "ng-template", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);
    } }, directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselSlideDirective"]], styles: [".row[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    margin-right: -15px;\n    margin-left: -15px;\n}\n.col-sm-6[_ngcontent-%COMP%] {\n    width: 50%;\n}\n.col-sm-6[_ngcontent-%COMP%]   .col-md-3[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    padding-right: 15px;\n    padding-left: 15px;\n}\n.card[_ngcontent-%COMP%] {\n    border: none;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n.space-categ[_ngcontent-%COMP%] {\n    margin-top: 10px;\n}\n.card[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n    word-wrap: break-word;\n    background-color: #fff;\n    background-clip: border-box;\n    border: 1px solid rgba(0, 0, 0, 0.125);\n    border-radius: 0.25rem;\n}\nimg[_ngcontent-%COMP%] {\n    max-width: 100%;\n}\nimg[_ngcontent-%COMP%] {\n    vertical-align: middle;\n    border-style: none;\n}\n.space-categ[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n    padding: 0.25rem 0 0 !important;\n}\n.card-body[_ngcontent-%COMP%] {\n    padding: 0.25rem 0 0.75rem;\n}\n.text-center[_ngcontent-%COMP%] {\n    text-align: center !important;\n}\n.card-body[_ngcontent-%COMP%] {\n    flex: 1 1 auto;\n    min-height: 1px;\n    padding: 1.25rem;\n}\n.item_categ[_ngcontent-%COMP%], .item_categ_slide[_ngcontent-%COMP%] {\n    font-family: 'lato', sans-serif;\n    font-weight: 100;\n    color: #c96;\n    text-transform: uppercase;\n}\n.item_categ[_ngcontent-%COMP%] {\n    margin-top: 0;\n    font-size: 5px;\n    color: #585858;\n}\n.container-fluid[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 15px;\n}\n.cursor-pointer[_ngcontent-%COMP%] {\n    cursor: pointer;\n}\n.col-12[_ngcontent-%COMP%] {\n    flex: 0 0 100%;\n    max-width: 100%;\n}\n.hover-image[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 100%;\n    \n}\n.item_categ[_ngcontent-%COMP%] {\n    font-size: 27px !important;\n    font-weight: 500 !important;\n    margin: 3% 0 0 !important;\n    line-height: 1.6;\n}\n.head-tag[_ngcontent-%COMP%] {\n    font-size: 27px !important;\n    font-weight: 500 !important;\n    margin: 3% 0 0 !important;\n    line-height: 1.6;\n}\n.padding-t[_ngcontent-%COMP%] {\n    padding-top: 2%;\n}\n.carousel[_ngcontent-%COMP%] {\n    width: 20%;\n}\n.container[_ngcontent-%COMP%] {\n    margin-left: 5px;\n    border: 1px solid grey;\n}\n.details[_ngcontent-%COMP%] {\n    font-size: 15px;\n    color: #111;\n    margin-bottom: 0;\n    font-family: sans-serif;\n    font-weight: lighter;\n    margin-top: 10px;\n}\n@media only screen and (max-width: 768px) {\n    .response[_ngcontent-%COMP%] {\n        margin-top: 10px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvbWUtY29udGVudC9ob21lLWNvbnRlbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUVJLGFBQWE7SUFFYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBRWxCLGFBQWE7SUFFYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHNDQUFzQztJQUN0QyxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSw2QkFBNkI7QUFDakM7QUFDQTtJQUVJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCO0FBQ0E7O0lBRUksK0JBQStCO0lBQy9CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUVJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaG9tZS1jb250ZW50L2hvbWUtY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvdyB7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcbn1cbi5jb2wtc20tNiB7XG4gICAgd2lkdGg6IDUwJTtcbn1cbi5jb2wtc20tNiAuY29sLW1kLTMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cbi5jYXJkIHtcbiAgICBib3JkZXI6IG5vbmU7XG59XG4uY3Vyc29yLXBvaW50ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5zcGFjZS1jYXRlZyB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5jYXJkIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1pbi13aWR0aDogMDtcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbmltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuaW1nIHtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cbi5zcGFjZS1jYXRlZyAuY2FyZC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAgMCAhaW1wb3J0YW50O1xufVxuLmNhcmQtYm9keSB7XG4gICAgcGFkZGluZzogMC4yNXJlbSAwIDAuNzVyZW07XG59XG4udGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xufVxuLmNhcmQtYm9keSB7XG4gICAgLW1zLWZsZXg6IDEgMSBhdXRvO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xufVxuLml0ZW1fY2F0ZWcsXG4uaXRlbV9jYXRlZ19zbGlkZSB7XG4gICAgZm9udC1mYW1pbHk6ICdsYXRvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIGNvbG9yOiAjYzk2O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4uaXRlbV9jYXRlZyB7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBmb250LXNpemU6IDVweDtcbiAgICBjb2xvcjogIzU4NTg1ODtcbn1cbi5jb250YWluZXItZmx1aWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDE1cHg7XG59XG4uY3Vyc29yLXBvaW50ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jb2wtMTIge1xuICAgIC1tcy1mbGV4OiAwIDAgMTAwJTtcbiAgICBmbGV4OiAwIDAgMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG59XG4uaG92ZXItaW1hZ2Uge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICAvKiBtYXJnaW4tbGVmdDogMTVweDsgKi9cbn1cbi5pdGVtX2NhdGVnIHtcbiAgICBmb250LXNpemU6IDI3cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAzJSAwIDAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xufVxuLmhlYWQtdGFnIHtcbiAgICBmb250LXNpemU6IDI3cHggIWltcG9ydGFudDtcbiAgICBmb250LXdlaWdodDogNTAwICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luOiAzJSAwIDAgIWltcG9ydGFudDtcbiAgICBsaW5lLWhlaWdodDogMS42O1xufVxuLnBhZGRpbmctdCB7XG4gICAgcGFkZGluZy10b3A6IDIlO1xufVxuLmNhcm91c2VsIHtcbiAgICB3aWR0aDogMjAlO1xufVxuLmNvbnRhaW5lciB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmV5O1xufVxuLmRldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBjb2xvcjogIzExMTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLnJlc3BvbnNlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-content',
                templateUrl: './home-content.component.html',
                styleUrls: ['./home-content.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ "PCNd");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _components_content_content_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/content/content.module */ "PODb");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-bootstrap-md */ "dbUT");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-owl-carousel-o */ "bhfF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _components_content_content_module__WEBPACK_IMPORTED_MODULE_6__["ContentModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
        _components_content_content_module__WEBPACK_IMPORTED_MODULE_6__["ContentModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_8__["CarouselModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_7__["MDBBootstrapModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                    _components_content_content_module__WEBPACK_IMPORTED_MODULE_6__["ContentModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "bAqz":
/*!**********************************************!*\
  !*** ./src/app/services/set-item.service.ts ***!
  \**********************************************/
/*! exports provided: SetItemService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetItemService", function() { return SetItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./api.service */ "H+bZ");




class SetItemService {
    constructor(http, apiservice) {
        this.http = http;
        this.apiservice = apiservice;
        this.post = JSON.parse(localStorage.getItem('items'));
        this.url = 'http://localhost:3000/';
    }
    getdata() {
        return this.http.get(`${this.url}getitem`);
    }
    delete(ele, i) {
        const newPost = JSON.parse(localStorage.getItem('items'));
        const setPost = newPost.splice(i, 1);
        this.post = newPost;
        localStorage.setItem('items', JSON.stringify(this.post));
    }
    addItem(data) {
        data.id = this.post.length++;
        if (data !== null) {
            this.post.push(data);
            localStorage.setItem('items', JSON.stringify(this.post));
            localStorage.setItem('elementIndex', data.id);
        }
    }
    clearStorage() {
        localStorage.clear();
    }
}
SetItemService.ɵfac = function SetItemService_Factory(t) { return new (t || SetItemService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"])); };
SetItemService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SetItemService, factory: SetItemService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SetItemService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "deXX":
/*!******************************************!*\
  !*** ./src/app/guard/authorize.guard.ts ***!
  \******************************************/
/*! exports provided: AuthorizeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorizeGuard", function() { return AuthorizeGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_set_navbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/set-navbar.service */ "5c0r");







class AuthorizeGuard {
    constructor(service, route) {
        this.service = service;
        this.route = route;
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        route.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]))
            .subscribe((event) => {
            localStorage.setItem('url', event.url);
        });
    }
    canActivate() {
        if (this.service.loggedIn()) {
            return true;
        }
        else {
            this.route.navigate(['/auth']);
        }
    }
}
AuthorizeGuard.ɵfac = function AuthorizeGuard_Factory(t) { return new (t || AuthorizeGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_set_navbar_service__WEBPACK_IMPORTED_MODULE_4__["SetNavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AuthorizeGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthorizeGuard, factory: AuthorizeGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthorizeGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _services_set_navbar_service__WEBPACK_IMPORTED_MODULE_4__["SetNavbarService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "jQpT":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class FooterComponent {
    constructor() {
        this.date = new Date().getFullYear();
    }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 72, vars: 1, consts: [["id", "foot", 1, "ftco-footer", "bg-light", "ftco-section"], [1, "container"], [1, "row", "mb-5"], [1, "col-md"], [1, "ftco-footer-widget", "mb-4"], [1, "ftco-heading-2"], ["id", "gap1", 1, "ftco-footer-social", "list-unstyled", "float-md-left", "float-lft", "mt-5"], ["id", "gap", "href", "javascript:void('0')"], ["id", "gap1", 1, "fa", "fa-facebook-square"], ["href", "javascript:void('0')", "id", "gap"], ["id", "gap1", "aria-hidden", "true", 1, "fa", "fa-instagram"], ["id", "gap1", "aria-hidden", "true", 1, "fa", "fa-twitter-square"], [1, "ftco-footer-widget", "mb-4", "ml-md-5"], [1, "list-unstyled"], ["href", "javascript:void('0')", "routerLink", "/shop", 1, "py-2", "d-block"], ["href", "javascript:void('0')", "routerLink", "/about", 1, "py-2", "d-block"], ["href", "javascript:void('0')", "routerLink", "/contact", 1, "py-2", "d-block"], [1, "col-md-4"], [1, "d-flex"], [1, "list-unstyled", "mr-l-5", "pr-l-3", "mr-4"], ["href", "javascript:void('0')", 1, "py-2", "d-block"], ["href", "javascript:void('0')", "roterLink", "/policy", 1, "py-2", "d-block"], [1, "block-23", "mb-3"], [1, "fa", "fa-address-card"], [1, "text"], ["href", "#"], ["aria-hidden", "true", 1, "fa", "fa-mobile"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], [1, "row"], [1, "col-md-12", "text-center"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Modern Closet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Shop");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Help");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Terms & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "FAQs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Have a Questions?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " 221 Baker Street,Bombay,India ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " +2 392 3929 210");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "span", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " info@yourdomain.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Copyright \u00A9", ctx.date, " All rights reserved | ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".ftco-heading-2[_ngcontent-%COMP%] {\n    font-size: 17px;\n    font-weight: lighter;\n    font-family: monospace;\n}\na[_ngcontent-%COMP%] {\n    color: black;\n}\n#gap[_ngcontent-%COMP%] {\n    padding-left: 10px;\n}\n#gap1[_ngcontent-%COMP%] {\n    font-size: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7R0FFRztBQUNIO0lBQ0ksZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAjZm9vdHtcbiAgICBwYWRkaW5nOjRlbSAwO1xufSAqL1xuLmZ0Y28taGVhZGluZy0yIHtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cbmEge1xuICAgIGNvbG9yOiBibGFjaztcbn1cbiNnYXAge1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbn1cbiNnYXAxIHtcbiAgICBmb250LXNpemU6IDMwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "mB7w":
/*!************************************************************************!*\
  !*** ./src/app/component/header-dropdown/header-dropdown.component.ts ***!
  \************************************************************************/
/*! exports provided: HeaderDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderDropdownComponent", function() { return HeaderDropdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




function HeaderDropdownComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderDropdownComponent_div_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const top_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onClick(top_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const top_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](top_r3);
} }
function HeaderDropdownComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderDropdownComponent_div_10_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const bottom_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onClick(bottom_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bottom_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](bottom_r6);
} }
function HeaderDropdownComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderDropdownComponent_div_16_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const foot_r9 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onClick(foot_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const foot_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](foot_r9);
} }
class HeaderDropdownComponent {
    constructor(router) {
        this.router = router;
        this.topWear = [
            'Casual Shirts',
            'Formal Shirts',
            'T-Shirt',
            'Sweaters',
            'Jackets',
            'Suits',
        ];
        this.bottomWear = [
            'Jeans',
            'Casual Trousers',
            'Formal Trousers',
            'Shorts',
            'Track Pants & Joggers',
        ];
        this.footWear = ['Casual Shoes', 'Sports Shoes', 'Formal Shoes', 'Sneakers'];
    }
    ngOnInit() { }
    onClick(option) {
        if (option) {
            this.router.navigate(['/shop'], {
                queryParams: { category: option },
            });
        }
    }
}
HeaderDropdownComponent.ɵfac = function HeaderDropdownComponent_Factory(t) { return new (t || HeaderDropdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HeaderDropdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderDropdownComponent, selectors: [["app-header-dropdown"]], decls: 17, vars: 3, consts: [[1, "row"], [1, "col-md-3"], ["href", "javascript:void('0')", 1, "content-heading", 3, "click"], ["class", "sub-heading", 4, "ngFor", "ngForOf"], [1, "menu-spacer"], [1, "sub-heading"], ["href", "javascript:void('0')", 1, "sub-head", 3, "click"]], template: function HeaderDropdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderDropdownComponent_Template_a_click_3_listener() { return ctx.onClick("Topwear"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Topwear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderDropdownComponent_div_5_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderDropdownComponent_Template_a_click_8_listener() { return ctx.onClick("Bottomwear"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Bottomwear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HeaderDropdownComponent_div_10_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderDropdownComponent_Template_a_click_14_listener() { return ctx.onClick("footwear"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Footwear");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HeaderDropdownComponent_div_16_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.topWear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bottomWear);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.footWear);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".content-heading[_ngcontent-%COMP%] {\n    color: #ee5f73;\n    font-size: 14px;\n}\n.sub-head[_ngcontent-%COMP%] {\n    \n    font-size: 13px;\n    line-height: 23px !important;\n    font-weight: 400;\n    color: #282c3f;\n}\n.menu-spacer[_ngcontent-%COMP%] {\n    flex: 0.3 0.3 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hlYWRlci1kcm9wZG93bi9oZWFkZXItZHJvcGRvd24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2hlYWRlci1kcm9wZG93bi9oZWFkZXItZHJvcGRvd24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50LWhlYWRpbmcge1xuICAgIGNvbG9yOiAjZWU1ZjczO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5zdWItaGVhZCB7XG4gICAgLyogZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7ICovXG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGxpbmUtaGVpZ2h0OiAyM3B4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogIzI4MmMzZjtcbn1cbi5tZW51LXNwYWNlciB7XG4gICAgZmxleDogMC4zIDAuMyBhdXRvO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderDropdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-dropdown',
                templateUrl: './header-dropdown.component.html',
                styleUrls: ['./header-dropdown.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "onSw":
/*!************************************!*\
  !*** ./src/app/toaster.service.ts ***!
  \************************************/
/*! exports provided: ToasterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToasterService", function() { return ToasterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");



class ToasterService {
    constructor(snackBar) {
        this.snackBar = snackBar;
    }
    showToaster(message, action = '') {
        this.snackBar.open(message, action, {
            duration: 2000,
            horizontalPosition: 'right',
            verticalPosition: 'top',
        });
    }
}
ToasterService.ɵfac = function ToasterService_Factory(t) { return new (t || ToasterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
ToasterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ToasterService, factory: ToasterService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToasterService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "pkGf":
/*!***********************************************************!*\
  !*** ./src/app/shared/signupform/signupform.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupformComponent", function() { return SignupformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function SignupformComponent_span_11_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *This Name Is Invalid!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupformComponent_span_11_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *This Field Is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupformComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupformComponent_span_11_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SignupformComponent_span_11_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.signupform.get("userName").errors["nameisforbiddentrue"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.signupform.get("userName").errors["required"]);
} }
function SignupformComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*This Field is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupformComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gender_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", gender_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", gender_r11, " ");
} }
function SignupformComponent_span_25_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*This Field Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupformComponent_span_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupformComponent_span_25_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.signupform.get("gender").errors["required"]);
} }
function SignupformComponent_span_32_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *This Field Is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupformComponent_span_32_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "*Email Is Not Valid! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupformComponent_span_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupformComponent_span_32_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SignupformComponent_span_32_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.signupform.get("email").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.signupform.get("email").errors["email"]);
} }
function SignupformComponent_span_38_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *This Field Is Required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupformComponent_span_38_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Number Is Not Valid! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupformComponent_span_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupformComponent_span_38_span_1_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SignupformComponent_span_38_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.signupform.get("mobileNumber").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.signupform.get("mobileNumber").errors["maxlength"]);
} }
function SignupformComponent_span_44_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *This Field Is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupformComponent_span_44_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Must Contain 8 character");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupformComponent_span_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupformComponent_span_44_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SignupformComponent_span_44_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.signupform.get("password").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.signupform.get("password").errors["minlength"]);
} }
function SignupformComponent_span_49_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *This Field Is Required!");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupformComponent_span_49_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Password Must Be same");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupformComponent_span_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupformComponent_span_49_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, SignupformComponent_span_49_span_2_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.signupform.get("confirmPassword").errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.signupform.get("confirmPassword").errors["passwordvalidty"]);
} }
function SignupformComponent_span_65_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " *Please accept terms & conditions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function SignupformComponent_span_65_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, SignupformComponent_span_65_span_1_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.signupform.get("privacy").errors["required"]);
} }
class SignupformComponent {
    constructor(router, register) {
        this.router = router;
        this.register = register;
        this.msg = 'Create An Account';
        this.genders = ['Male', 'Female', 'Others'];
        this.forbiddennames = ['suraj', 'vikul', 'vishal', 'shivani'];
        this.pattern1 = '^((\\+91-?)|0)?[0-9]{10}$';
        this.show = false;
    }
    ngOnInit() {
        this.signupform = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                this.foorbiddenname.bind(this),
            ]),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
            ]),
            mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10),
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.pattern1),
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                this.passwordcheck,
            ]),
            privacy: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue),
        });
    }
    foorbiddenname(control) {
        if (this.forbiddennames.indexOf(control.value) !== -1) {
            return { nameisforbiddentrue: true };
        }
        return null;
    }
    validateAllFormFields(formGroup) {
        Object.keys(formGroup.controls).forEach((field) => {
            const control = formGroup.get(field);
            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]) {
                this.validateAllFormFields(control);
            }
        });
    }
    passwordcheck(control) {
        if (control.value != null) {
            const conpass = control.value;
            const pass = control.root.get('passwordc');
            if (pass) {
                const password = pass.value;
                if (conpass !== '' && password !== '') {
                    if (conpass !== password) {
                        return {
                            passwordvalidty: true,
                        };
                        return null;
                    }
                }
            }
        }
    }
    onsubmit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.signupform.valid) {
                console.log(this.signupform.value);
                try {
                    const res = yield this.register.request('verify', this.signupform.value);
                    this.msg = res.msg;
                }
                catch (error) {
                    this.msg = error.statusText;
                }
            }
            else {
                this.validateAllFormFields(this.signupform);
            }
        });
    }
}
SignupformComponent.ɵfac = function SignupformComponent_Factory(t) { return new (t || SignupformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); };
SignupformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SignupformComponent, selectors: [["app-signupform"]], decls: 77, vars: 11, consts: [[1, "signup-container"], [3, "formGroup"], [2, "font-weight", "lighter"], [1, "row"], [1, "col-md-6"], [1, "form-group"], ["for", "fname"], ["type", "text", "placeholder", "Enter User Name", "formControlName", "userName", 1, "form-control"], ["class", "help-block", 4, "ngIf"], ["for", "lname"], ["type", "text", "formControlName", "fullName", "placeholder", "Enter Full Name", 1, "form-control"], [1, "col-md-8"], ["for", "gender"], ["class", "radio", 4, "ngFor", "ngForOf"], ["for", "email"], ["type", "email", "formControlName", "email", "placeholder", "Enter your Email", 1, "form-control"], ["for", "number"], ["type", "tel", "formControlName", "mobileNumber", "placeholder", "Enter Mobile Number", 1, "form-control"], ["for", "password"], ["type", "password", "formControlName", "password", "placeholder", "Enter Password", 1, "form-control"], ["for", "confirmpassword"], ["type", "password", "formControlName", "confirmPassword", "placeholder", "Renter Password", 1, "form-control"], [1, "col-sm-12"], [1, "form-check"], ["type", "checkbox", "formControlName", "privacy", 1, "form-check-input"], ["href", ""], [1, "col-md-12"], ["id", "butto", "type", "submit", 1, "btn", "btn-info", "btn-block", 3, "click"], ["id", "raw", 1, "row"], ["id", "back", "href", "javascript:void(0)", "routerLink", "/login"], [1, "help-block"], [1, "radio"], ["type", "radio", "formControlName", "gender", 3, "value"], ["class", "helip-block", 4, "ngIf"], [1, "helip-block"]], template: function SignupformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, SignupformComponent_span_11_Template, 3, 2, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Full Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, SignupformComponent_span_17_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Gender:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, SignupformComponent_div_23_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, SignupformComponent_span_25_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](32, SignupformComponent_span_32_Template, 3, 2, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](38, SignupformComponent_span_38_Template, 3, 2, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, SignupformComponent_span_44_Template, 3, 2, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, SignupformComponent_span_49_Template, 3, 2, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](55, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, " I agree to the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Terms Of Use");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, " , ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Privacy Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, " & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](64, "Refund Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, SignupformComponent_span_65_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SignupformComponent_Template_button_click_69_listener() { return ctx.onsubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, " Create My Account ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, " Already have an account? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Click Here.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.signupform);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.msg);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.signupform.get("userName").valid && ctx.signupform.get("userName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.signupform.get("fullName").valid && ctx.signupform.get("fullName").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.genders);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.signupform.get("gender").valid && ctx.signupform.get("gender").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.signupform.get("email").valid && ctx.signupform.get("email").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.signupform.get("mobileNumber").valid && ctx.signupform.get("mobileNumber").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.signupform.get("password").valid && ctx.signupform.get("password").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.signupform.get("confirmPassword").valid && ctx.signupform.get("confirmPassword").touched);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.signupform.get("privacy").valid && ctx.signupform.get("privacy").touched);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"]], styles: ["#b[_ngcontent-%COMP%] {\n    margin-left: 20px;\n}\n#butto[_ngcontent-%COMP%] {\n    border-radius: 50px;\n}\n#social0[_ngcontent-%COMP%] {\n    float: right;\n    padding-right: 15px;\n}\n#rad[_ngcontent-%COMP%] {\n    margin-left: 5px;\n    padding-left: 2px;\n}\n#raw[_ngcontent-%COMP%] {\n    margin-left: 80px;\n    margin-top: 10px;\n}\n#back[_ngcontent-%COMP%]:hover {\n    color: blue;\n}\nh4[_ngcontent-%COMP%] {\n    font-weight: lighter;\n    font-size: 30px;\n}\n.alert[_ngcontent-%COMP%] {\n    background-color: rgb(233, 92, 92);\n    color: black;\n}\ninput[_ngcontent-%COMP%] {\n    border-radius: 10px;\n}\n*[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n}\n.help-block[_ngcontent-%COMP%] {\n    color: red;\n}\nform[_ngcontent-%COMP%] {\n    width: 450px;\n    margin-left: 25px;\n    \n    \n    margin-bottom: 20px;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3NpZ251cGZvcm0vc2lnbnVwZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtDQUFrQztJQUNsQyxzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtBQUNoQyIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9zaWdudXBmb3JtL3NpZ251cGZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNiIHtcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcbn1cbiNidXR0byB7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cblxuI3NvY2lhbDAge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xufVxuXG4jcmFkIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMnB4O1xufVxuXG4jcmF3IHtcbiAgICBtYXJnaW4tbGVmdDogODBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuI2JhY2s6aG92ZXIge1xuICAgIGNvbG9yOiBibHVlO1xufVxuaDQge1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbn1cbi5hbGVydCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMywgOTIsIDkyKTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbmlucHV0IHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuKiB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5oZWxwLWJsb2NrIHtcbiAgICBjb2xvcjogcmVkO1xufVxuZm9ybSB7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6d2hpdGVzbW9rZTsgICovXG4gICAgLyogcGFkZGluZy10b3A6NTBweDsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIC8qIGJvcmRlcjoxcHggc29saWQgYmxhY2s7ICovXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SignupformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-signupform',
                templateUrl: './signupform.component.html',
                styleUrls: ['./signupform.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }]; }, null); })();


/***/ }),

/***/ "u7bB":
/*!******************************************************************!*\
  !*** ./src/app/component/profile-menu/profile-menu.component.ts ***!
  \******************************************************************/
/*! exports provided: ProfileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileMenuComponent", function() { return ProfileMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_set_navbar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/set-navbar.service */ "5c0r");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function ProfileMenuComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "To access account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "LOGIN/SIGNUP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileMenuComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Hello!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProfileMenuComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProfileMenuComponent_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProfileMenuComponent {
    constructor(setnav, router) {
        this.setnav = setnav;
        this.router = router;
        this.showloginDetails = true;
    }
    ngOnInit() { }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('url');
        this.router.navigateByUrl('/home');
    }
}
ProfileMenuComponent.ɵfac = function ProfileMenuComponent_Factory(t) { return new (t || ProfileMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_set_navbar_service__WEBPACK_IMPORTED_MODULE_1__["SetNavbarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ProfileMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileMenuComponent, selectors: [["app-profile-menu"]], decls: 7, vars: 3, consts: [[1, "profile-menu"], ["class", "authcontainer", 4, "ngIf"], ["class", "loggedcontianer", 4, "ngIf"], ["class", "dropdown-item", "href", "javascript:void('0')", 3, "click", 4, "ngIf"], ["href", "javascript:void('0')", 1, "dropdown-item"], [1, "authcontainer"], [1, "info"], [1, "login-button"], ["routerLink", "/auth", 1, "btn"], [1, "loggedcontianer"], [1, "info2"], ["href", "javascript:void('0')", 1, "dropdown-item", 3, "click"]], template: function ProfileMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProfileMenuComponent_div_1_Template, 9, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProfileMenuComponent_div_2_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProfileMenuComponent_a_4_Template, 2, 0, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.setnav.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.setnav.loggedIn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.setnav.loggedIn());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".dropdown-item[_ngcontent-%COMP%] {\n    font-family: cursive;\n}\n.info[_ngcontent-%COMP%] {\n    font-weight: lighter;\n    font-size: 12px;\n    height: 14px;\n    margin-left: 15px;\n}\n.info2[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-left: 15px;\n    font-family: cursive;\n    font-weight: lighter;\n}\nh6[_ngcontent-%COMP%] {\n    margin-left: 15px;\n    font-weight: 350;\n}\n.btn[_ngcontent-%COMP%] {\n    color: #ff3f6c;\n    border: 1px solid salmon;\n}\n.login-button[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    margin-left: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3Byb2ZpbGUtbWVudS9wcm9maWxlLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLGNBQWM7SUFDZCx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvcHJvZmlsZS1tZW51L3Byb2ZpbGUtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRyb3Bkb3duLWl0ZW0ge1xuICAgIGZvbnQtZmFtaWx5OiBjdXJzaXZlO1xufVxuLmluZm8ge1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBoZWlnaHQ6IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG59XG4uaW5mbzIge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cbmg2IHtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICBmb250LXdlaWdodDogMzUwO1xufVxuXG4uYnRuIHtcbiAgICBjb2xvcjogI2ZmM2Y2YztcbiAgICBib3JkZXI6IDFweCBzb2xpZCBzYWxtb247XG59XG4ubG9naW4tYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile-menu',
                templateUrl: './profile-menu.component.html',
                styleUrls: ['./profile-menu.component.css'],
            }]
    }], function () { return [{ type: src_app_services_set_navbar_service__WEBPACK_IMPORTED_MODULE_1__["SetNavbarService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "vGwx":
/*!***************************************!*\
  !*** ./src/app/core/app.constants.ts ***!
  \***************************************/
/*! exports provided: AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
class AppConstants {
}
AppConstants.API_ENPOINT = 'http://localhost:3000';


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-components-admin-admin-module */ "src-app-components-admin-admin-module").then(__webpack_require__.bind(null, /*! src/app/components/admin/admin.module */ "5OiB")).then((m) => m.AdminModule),
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | src-app-components-authentication-authentication-module */ "src-app-components-authentication-authentication-module").then(__webpack_require__.bind(null, /*! src/app/components/authentication/authentication.module */ "NrSJ")).then((m) => m.AuthenticationModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "xxYb":
/*!***********************************************************!*\
  !*** ./src/app/components/content/shop/shop.component.ts ***!
  \***********************************************************/
/*! exports provided: ShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopComponent", function() { return ShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "LvDl");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_services_set_item_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/set-item.service */ "bAqz");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_component_filters_filters_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/component/filters/filters.component */ "TqIo");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pagination */ "oOf3");











function ShopComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("src", "http://localhost:3000/static/", item_r1.file, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r1.productName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](13, 3, item_r1.Price, "INR"));
} }
class ShopComponent {
    constructor(route, router, setitem, apiService) {
        this.route = route;
        this.router = router;
        this.setitem = setitem;
        this.apiService = apiService;
        this.page = 1;
        this.post = new Array();
        this.loadData();
    }
    pageChanged(event) {
        this.config.currentPage = event;
    }
    ngOnInit() { }
    sorting(event) {
        const option = event.target.value;
        if (option === 'Low to High') {
            this.post = this.post.sort((a, b) => a.Price - b.Price);
        }
        else if (option === 'High to Low') {
            this.post = this.post.sort((a, b) => a.Price - b.Price);
            this.post.reverse();
        }
        else {
            this.post.reverse();
        }
        this.config = {
            itemsPerPage: 12,
            currentPage: 1,
            totalItems: this.post.length,
        };
    }
    loadData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.router.events.subscribe((e) => {
                if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                    this.CategoryMode = this.route.snapshot.queryParams.category
                        ? true
                        : false;
                    const request = this.route.snapshot.queryParams.category;
                    console.log(request);
                    if (this.CategoryMode) {
                        this.apiService.request('getItem').then((res) => {
                            console.log(res);
                            this.post = lodash__WEBPACK_IMPORTED_MODULE_3__["filter"](res, (o) => {
                                if (o.subCategory.toLowerCase() ===
                                    request.toLowerCase() ||
                                    o.category.toLowerCase() ===
                                        request.toLowerCase() ||
                                    o.size.toLowerCase() ===
                                        request.toLowerCase() ||
                                    o.gender === request) {
                                    console.log(o);
                                    return o;
                                }
                            });
                        });
                        this.config = {
                            itemsPerPage: 12,
                            currentPage: 1,
                            totalItems: this.post.length,
                        };
                    }
                    else {
                        this.setitem.getdata().subscribe((res) => {
                            this.post = res;
                            console.log(res);
                        });
                        this.config = {
                            itemsPerPage: 12,
                            currentPage: 1,
                            totalItems: this.post.length,
                        };
                    }
                }
            });
        });
    }
}
ShopComponent.ɵfac = function ShopComponent_Factory(t) { return new (t || ShopComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_set_item_service__WEBPACK_IMPORTED_MODULE_4__["SetItemService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"])); };
ShopComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ShopComponent, selectors: [["app-shop"]], inputs: { parentData: "parentData" }, decls: 26, vars: 4, consts: [[2, "padding", "50px 0"], [1, "container-fluid"], [1, "row"], [1, "col-md-3"], [1, "col-md-9", 2, "border", "1px solid #efefef"], [1, "sort-by-top-div"], [1, "float-right"], [1, "sort-by-btn", 3, "change"], ["hidden", "", "value", ""], ["value", "New Arrival"], ["value", "Low to High"], ["href", "javascript:void('0')", 2, "color", "black"], ["value", "High to Low"], ["class", "col-sm col-md-6 col-lg-3 ftco-animate", "style", "border: 1px solid #f7eee4; margin-left: 5px", 4, "ngFor", "ngForOf"], [1, "container-fluid", 2, "text-align", "center"], ["directionLinks", "true", 3, "pageChange"], [1, "col-sm", "col-md-6", "col-lg-3", "ftco-animate", 2, "border", "1px solid #f7eee4", "margin-left", "5px"], [1, "product"], ["href", "javascript:void('0')", 1, "img-prod"], ["alt", "Colorlib Template", 1, "img-fluid", 3, "src"], [1, "text", "py-3", "px-3"], ["href", "javascript:void('0')"], [1, "d-flex"], [1, "pricing"], [1, "price"], [1, "mr-2", "price-dc"]], template: function ShopComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-filters");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function ShopComponent_Template_select_change_8_listener($event) { return ctx.sorting($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Sort by");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "New Arrival");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Low to High");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " High to Low");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, ShopComponent_div_21_Template, 14, 6, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "paginate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "pagination-controls", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("pageChange", function ShopComponent_Template_pagination_controls_pageChange_25_listener($event) { return ctx.pageChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 1, ctx.post, ctx.config));
    } }, directives: [src_app_component_filters_filters_component__WEBPACK_IMPORTED_MODULE_6__["FiltersComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginationControlsComponent"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_8__["PaginatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"]], styles: [".border-on-products[_ngcontent-%COMP%] {\n    border: 1px solid #efefef;\n}\n.sort-by-top-div[_ngcontent-%COMP%] {\n    display: flow-root;\n    padding: 10px 0 0;\n}\n.sort-by-btn[_ngcontent-%COMP%] {\n    padding: 4px 14px;\n    font-size: 14px;\n    color: #282c3f;\n    cursor: pointer;\n    position: relative;\n    width: 140px;\n    box-sizing: border-box;\n    border-radius: 2px;\n    background-color: #fff;\n    border: 1px solid #d4d5d9;\n    font-family: 'lato', sans-serif;\n}\n.img-fluid[_ngcontent-%COMP%] {\n    max-width: 100%;\n    height: auto;\n}\n.ftco-animate[_ngcontent-%COMP%]:hover {\n    transform: scale(0.9);\n}\n.product[_ngcontent-%COMP%] {\n    position: relative;\n    flex-grow: 1;\n}\na[_ngcontent-%COMP%] {\n    color: black;\n}\n@media only screen and (min-width: 768px) {\n    .container[_ngcontent-%COMP%] {\n        max-width: 720px;\n    }\n}\n@media only screen and (min-width: 576px) {\n    .container[_ngcontent-%COMP%] {\n        max-width: 540px;\n    }\n}\n@media only screen and (min-width: 768px) {\n    .container[_ngcontent-%COMP%] {\n        max-width: 720px;\n    }\n}\n@media only screen and (min-width: 576px) {\n    .container[_ngcontent-%COMP%] {\n        max-width: 540px;\n    }\n}\n@media only screen and (max-width: 992px) {\n    .ftco-animate[_ngcontent-%COMP%] {\n        max-width: 30%;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50L3Nob3Avc2hvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUNIO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsK0JBQStCO0FBQ25DO0FBRUE7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQvc2hvcC9zaG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuY29udGFpbmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbn0gKi9cbi5ib3JkZXItb24tcHJvZHVjdHMge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XG59XG4uc29ydC1ieS10b3AtZGl2IHtcbiAgICBkaXNwbGF5OiBmbG93LXJvb3Q7XG4gICAgcGFkZGluZzogMTBweCAwIDA7XG59XG4uc29ydC1ieS1idG4ge1xuICAgIHBhZGRpbmc6IDRweCAxNHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzI4MmMzZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxNDBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ1ZDk7XG4gICAgZm9udC1mYW1pbHk6ICdsYXRvJywgc2Fucy1zZXJpZjtcbn1cblxuLmltZy1mbHVpZCB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbn1cbi5mdGNvLWFuaW1hdGU6aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbn1cbi5wcm9kdWN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleC1ncm93OiAxO1xufVxuXG5hIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA3MjBweDtcbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU3NnB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogNTQwcHg7XG4gICAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5jb250YWluZXIge1xuICAgICAgICBtYXgtd2lkdGg6IDcyMHB4O1xuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTc2cHgpIHtcbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA1NDBweDtcbiAgICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcbiAgICAuZnRjby1hbmltYXRlIHtcbiAgICAgICAgbWF4LXdpZHRoOiAzMCU7XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ShopComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-shop',
                templateUrl: './shop.component.html',
                styleUrls: ['./shop.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_set_item_service__WEBPACK_IMPORTED_MODULE_4__["SetItemService"] }, { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }]; }, { parentData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
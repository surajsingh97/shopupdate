(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["src-app-components-admin-admin-module"],{

/***/ "5OiB":
/*!**************************************************!*\
  !*** ./src/app/components/admin/admin.module.ts ***!
  \**************************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datatable/datatable.component */ "Go+x");
/* harmony import */ var _uplodpost_uplodpost_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uplodpost/uplodpost.component */ "DUBV");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-routing.module */ "Zpkz");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "PCNd");







class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], _uplodpost_uplodpost_component__WEBPACK_IMPORTED_MODULE_3__["UplodpostComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_datatable_datatable_component__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"], _uplodpost_uplodpost_component__WEBPACK_IMPORTED_MODULE_3__["UplodpostComponent"]],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_4__["AdminRoutingModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "DUBV":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin/uplodpost/uplodpost.component.ts ***!
  \*******************************************************************/
/*! exports provided: UplodpostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UplodpostComponent", function() { return UplodpostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_additem_additem_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/additem/additem.component */ "M/G4");



class UplodpostComponent {
    constructor() { }
    ngOnInit() { }
}
UplodpostComponent.ɵfac = function UplodpostComponent_Factory(t) { return new (t || UplodpostComponent)(); };
UplodpostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UplodpostComponent, selectors: [["app-uplodpost"]], decls: 2, vars: 0, consts: [[2, "margin-top", "50px"]], template: function UplodpostComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-additem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_additem_additem_component__WEBPACK_IMPORTED_MODULE_1__["AdditemComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWRtaW4vdXBsb2Rwb3N0L3VwbG9kcG9zdC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UplodpostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-uplodpost',
                templateUrl: './uplodpost.component.html',
                styleUrls: ['./uplodpost.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Go+x":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin/datatable/datatable.component.ts ***!
  \*******************************************************************/
/*! exports provided: DatatableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatatableComponent", function() { return DatatableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_table_table_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/table/table.component */ "88Q5");



class DatatableComponent {
    constructor() { }
    ngOnInit() { }
}
DatatableComponent.ɵfac = function DatatableComponent_Factory(t) { return new (t || DatatableComponent)(); };
DatatableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatatableComponent, selectors: [["app-datatable"]], decls: 2, vars: 0, consts: [[1, "container-fluid"]], template: function DatatableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-table");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_table_table_component__WEBPACK_IMPORTED_MODULE_1__["TableComponent"]], styles: [".container-fluid[_ngcontent-%COMP%] {\n    margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi9kYXRhdGFibGUvZGF0YXRhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FkbWluL2RhdGF0YWJsZS9kYXRhdGFibGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatatableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-datatable',
                templateUrl: './datatable.component.html',
                styleUrls: ['./datatable.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Zpkz":
/*!**********************************************************!*\
  !*** ./src/app/components/admin/admin-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datatable/datatable.component */ "Go+x");
/* harmony import */ var _uplodpost_uplodpost_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uplodpost/uplodpost.component */ "DUBV");
/* harmony import */ var src_app_guard_authorize_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/guard/authorize.guard */ "deXX");







const routes = [
    {
        path: '',
        canActivate: [src_app_guard_authorize_guard__WEBPACK_IMPORTED_MODULE_4__["AuthorizeGuard"]],
        children: [
            { path: 'admin', component: _datatable_datatable_component__WEBPACK_IMPORTED_MODULE_2__["DatatableComponent"] },
            { path: 'admin/upload', component: _uplodpost_uplodpost_component__WEBPACK_IMPORTED_MODULE_3__["UplodpostComponent"] },
            { path: 'admin/edit-item', component: _uplodpost_uplodpost_component__WEBPACK_IMPORTED_MODULE_3__["UplodpostComponent"] },
        ],
    },
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=src-app-components-admin-admin-module.js.map
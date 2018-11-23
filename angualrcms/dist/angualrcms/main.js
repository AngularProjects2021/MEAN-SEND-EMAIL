(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-admin-navbar *ngIf=\"!front\"></app-admin-navbar>\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\" [class.space]=\"!front\">\n          <router-outlet></router-outlet>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    Object.defineProperty(AppComponent.prototype, "front", {
        get: function () {
            if (localStorage.getItem("user") === "\"admin\"") {
                return false;
            }
            return true;
        },
        enumerable: true,
        configurable: true
    });
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/page.service */ "./src/app/services/page.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_pages_pages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/pages/pages.component */ "./src/app/components/pages/pages.component.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/logout/logout.component */ "./src/app/components/logout/logout.component.ts");
/* harmony import */ var _components_admin_pages_admin_pages_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/admin-pages/admin-pages.component */ "./src/app/components/admin-pages/admin-pages.component.ts");
/* harmony import */ var _components_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/admin-navbar/admin-navbar.component */ "./src/app/components/admin-navbar/admin-navbar.component.ts");
/* harmony import */ var _components_admin_add_page_admin_add_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/admin-add-page/admin-add-page.component */ "./src/app/components/admin-add-page/admin-add-page.component.ts");
/* harmony import */ var _components_admin_edit_page_admin_edit_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/admin-edit-page/admin-edit-page.component */ "./src/app/components/admin-edit-page/admin-edit-page.component.ts");
/* harmony import */ var _components_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/admin-sidebar/admin-sidebar.component */ "./src/app/components/admin-sidebar/admin-sidebar.component.ts");
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/sidebar.service */ "./src/app/services/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var appRoutes = [
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
    { path: 'logout', component: _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_13__["LogoutComponent"] },
    { path: 'admin/pages', component: _components_admin_pages_admin_pages_component__WEBPACK_IMPORTED_MODULE_14__["AdminPagesComponent"] },
    { path: 'admin/add-page', component: _components_admin_add_page_admin_add_page_component__WEBPACK_IMPORTED_MODULE_16__["AdminAddPageComponent"] },
    { path: 'admin/edit-page/:id', component: _components_admin_edit_page_admin_edit_page_component__WEBPACK_IMPORTED_MODULE_17__["AdminEditPageComponent"] },
    { path: 'admin/sidebar', component: _components_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["AdminSidebarComponent"] },
    { path: ':page', component: _components_pages_pages_component__WEBPACK_IMPORTED_MODULE_9__["PagesComponent"] },
    { path: '', component: _components_pages_pages_component__WEBPACK_IMPORTED_MODULE_9__["PagesComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _components_pages_pages_component__WEBPACK_IMPORTED_MODULE_9__["PagesComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _components_logout_logout_component__WEBPACK_IMPORTED_MODULE_13__["LogoutComponent"],
                _components_admin_pages_admin_pages_component__WEBPACK_IMPORTED_MODULE_14__["AdminPagesComponent"],
                _components_admin_navbar_admin_navbar_component__WEBPACK_IMPORTED_MODULE_15__["AdminNavbarComponent"],
                _components_admin_add_page_admin_add_page_component__WEBPACK_IMPORTED_MODULE_16__["AdminAddPageComponent"],
                _components_admin_edit_page_admin_edit_page_component__WEBPACK_IMPORTED_MODULE_17__["AdminEditPageComponent"],
                _components_admin_sidebar_admin_sidebar_component__WEBPACK_IMPORTED_MODULE_18__["AdminSidebarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [
                _services_page_service__WEBPACK_IMPORTED_MODULE_6__["PageService"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_10__["UserService"],
                _services_sidebar_service__WEBPACK_IMPORTED_MODULE_19__["SidebarService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/admin-add-page/admin-add-page.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/admin-add-page/admin-add-page.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin-add-page/admin-add-page.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin-add-page/admin-add-page.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success\" *ngIf=\"successMsg\">\n  <p>Page added.</p>\n</div>\n<div class=\"alert alert-danger\" *ngIf=\"errorMsg\">\n  <p>Page title exists, choose another.</p>\n</div>\n\n<h1 class=\"page-title\">Add {{title}} a page-title</h1>\n<a class=\"btn btn-primary\" routerLink=\"/admin/pages\">Back to all pages</a>\n<br><br>\n\n<form novalidate #f=\"ngForm\" (ngSubmit)=\"addPage(f)\">\n  <div class=\"form-group\">\n    <label for=\"\">Title: </label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Title\" name=\"title\" [(ngModel)]=\"title\" #pageTitle=\"ngModel\"\n      minlength=\"3\" required />\n  </div>\n  <div class=\"alert alert-danger\" *ngIf=\"pageTitle.errors?.required && pageTitle.touched\">\n    Title is required.\n  </div>\n  <div class=\"alert alert-danger\" *ngIf=\"pageTitle.errors?.minlength && pageTitle.touched\">\n    Minimum lenth is 3.\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"\">Content: </label>\n    <textarea class=\"form-control\" name=\"content\" cols=\"30\" rows=\"10\" placeholder=\"Content\" [(ngModel)]=\"content\"></textarea>\n  </div>\n\n  <div class=\"form-group\">\n      <label for=\"\">Has Sidebar:\n       <input type=\"checkbox\" name=\"hasSidebar\"  [(ngModel)]=\"hasSidebar\" >\n      </label>\n  </div>\n\n  <div class=\"form-group\">\n    <button class=\"btn btn-default\" [disabled]=\"!f.valid\">Add page</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/admin-add-page/admin-add-page.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin-add-page/admin-add-page.component.ts ***!
  \***********************************************************************/
/*! exports provided: AdminAddPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminAddPageComponent", function() { return AdminAddPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/page.service */ "./src/app/services/page.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminAddPageComponent = /** @class */ (function () {
    function AdminAddPageComponent(router, pageService) {
        this.router = router;
        this.pageService = pageService;
        this.successMsg = false;
        this.errorMsg = false;
    }
    AdminAddPageComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("user") !== "\"admin\"") {
            this.router.navigateByUrl('');
        }
        else {
            CKEDITOR.replace('content');
        }
    };
    AdminAddPageComponent.prototype.addPage = function (_a) {
        var _this = this;
        var form = _a.form, value = _a.value, valid = _a.valid;
        form.reset();
        if (valid) {
            value.content = CKEDITOR.instances.content.getData();
            this.pageService.postAddPage(value).subscribe(function (res) {
                if (res === 'pageExists') {
                    _this.errorMsg = true;
                    setTimeout(function () {
                        this.errorMsg = false;
                    }.bind(_this), 2000);
                }
                else {
                    _this.successMsg = true;
                    setTimeout(function () {
                        this.successMsg = false;
                    }.bind(_this), 2000);
                    CKEDITOR.instances.content.setData();
                    _this.pageService.getPages().subscribe(function (pages) {
                        _this.pageService.pagesBS.next(pages);
                    });
                }
            });
        }
        else {
            console.log('form is not valid');
        }
    };
    AdminAddPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-add-page',
            template: __webpack_require__(/*! ./admin-add-page.component.html */ "./src/app/components/admin-add-page/admin-add-page.component.html"),
            styles: [__webpack_require__(/*! ./admin-add-page.component.css */ "./src/app/components/admin-add-page/admin-add-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_page_service__WEBPACK_IMPORTED_MODULE_1__["PageService"]])
    ], AdminAddPageComponent);
    return AdminAddPageComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-edit-page/admin-edit-page.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/admin-edit-page/admin-edit-page.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin-edit-page/admin-edit-page.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin-edit-page/admin-edit-page.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success\" *ngIf=\"successMsg\">\n  <p>Page added.</p>\n</div>\n<div class=\"alert alert-danger\" *ngIf=\"errorMsg\">\n  <p>Page title exists,choose another.</p>\n</div>\n<div class=\"alert alert-danger\" *ngIf=\"errorMsg2\">\n  <p>Problem editing page,try later.</p>\n</div>\n\n\n<h1 class=\"page-title\">Edit {{page?.title}} page</h1>\n<a class=\"btn btn-primary\" routerLink=\"/admin/pages\">Back to all pages</a>\n<br><br>\n\n<form novalidate #f=\"ngForm\" (ngSubmit)=\"editPage(f)\">\n  <div class=\"form-group\">\n    <label for=\"\">Title: </label>\n    <input type=\"text\" class=\"form-control\" placeholder=\"Title\" name=\"title\" [(ngModel)]=\"title\" #pageTitle=\"ngModel\"\n      minlength=\"3\" required />\n  </div>\n  <div class=\"alert alert-danger\" *ngIf=\"pageTitle.errors?.required && pageTitle.touched\">\n    Title is required.\n  </div>\n  <div class=\"alert alert-danger\" *ngIf=\"pageTitle.errors?.minlength && pageTitle.touched\">\n    Minimum lenth is 3.\n  </div>\n\n  <div class=\"form-group\">\n    <label for=\"\">Content: </label>\n    <textarea class=\"form-control\" name=\"content\" cols=\"30\" rows=\"10\" placeholder=\"content\" [(ngModel)]=\"content\"></textarea>\n  </div>\n  <div class=\"form-group\">\n      <label for=\"\">Has Sidebar:\n       <input type=\"checkbox\" name=\"hasSidebar\" [checked]=\"sidebar\" [(ngModel)]=\"hasSidebar\" >\n      </label>\n  </div>\n  <input type=\"hidden\" name=\"id\" [(ngModel)]=\"id\">\n\n\n  <div class=\"form-group\">\n    <button class=\"btn btn-default\" [disabled]=\"!f.valid\">Edit page</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./src/app/components/admin-edit-page/admin-edit-page.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin-edit-page/admin-edit-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminEditPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminEditPageComponent", function() { return AdminEditPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/page.service */ "./src/app/services/page.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminEditPageComponent = /** @class */ (function () {
    function AdminEditPageComponent(router, route, pageService) {
        this.router = router;
        this.route = route;
        this.pageService = pageService;
        this.successMsg = false;
        this.errorMsg = false;
        this.errorMsg2 = false;
        this.sidebar = false;
    }
    AdminEditPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem("user") !== "\"admin\"") {
            this.router.navigateByUrl('');
        }
        else {
            CKEDITOR.replace('content');
        }
        this.route.params.subscribe(function (params) {
            _this.param = params['id'];
            _this.pageService.getEditPage(_this.param).subscribe(function (page) {
                _this.page = page;
                _this.title = page["title"];
                _this.content = page["content"];
                _this.id = page["_id"];
                if (page["sidebar"] === "yes") {
                    _this.sidebar = true;
                }
            });
        });
    };
    AdminEditPageComponent.prototype.editPage = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            value.content = CKEDITOR.instances.content.getData();
            this.pageService.postEditPage(value).subscribe(function (res) {
                if (res === 'pageExists') {
                    _this.errorMsg = true;
                    setTimeout(function () {
                        this.errorMsg = false;
                    }.bind(_this), 2000);
                }
                else if (res == 'problem') {
                    _this.errorMsg2 = true;
                    setTimeout(function () {
                        this.successMsg2 = false;
                    }.bind(_this), 2000);
                }
                else {
                    _this.successMsg = true;
                    setTimeout(function () {
                        this.successMsg = false;
                    }.bind(_this), 2000);
                    _this.pageService.getPages().subscribe(function (pages) {
                        _this.pageService.pagesBS.next(pages);
                    });
                }
            });
        }
        else {
            console.log('form is not valid');
        }
    };
    AdminEditPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-edit-page',
            template: __webpack_require__(/*! ./admin-edit-page.component.html */ "./src/app/components/admin-edit-page/admin-edit-page.component.html"),
            styles: [__webpack_require__(/*! ./admin-edit-page.component.css */ "./src/app/components/admin-edit-page/admin-edit-page.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"]])
    ], AdminEditPageComponent);
    return AdminEditPageComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-navbar/admin-navbar.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/admin-navbar/admin-navbar.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin-navbar/admin-navbar.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin-navbar/admin-navbar.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse admin\">\n   <div id=\"navbar\" class=\"collapse navbar-collapse\">\n          <ul class=\"nav navbar-nav\">\n              <li><a routerLink=\"/admin/pages\">Pages</a> </li>\n              <li><a routerLink=\"/admin/sidebar\">Navbar</a> </li>\n\n              <!-- <li><a routerLink=\"/login\">Login</a> </li> -->\n          </ul>\n        </div>\n    </nav>\n"

/***/ }),

/***/ "./src/app/components/admin-navbar/admin-navbar.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin-navbar/admin-navbar.component.ts ***!
  \*******************************************************************/
/*! exports provided: AdminNavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminNavbarComponent", function() { return AdminNavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminNavbarComponent = /** @class */ (function () {
    function AdminNavbarComponent() {
    }
    AdminNavbarComponent.prototype.ngOnInit = function () {
    };
    AdminNavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-navbar',
            template: __webpack_require__(/*! ./admin-navbar.component.html */ "./src/app/components/admin-navbar/admin-navbar.component.html"),
            styles: [__webpack_require__(/*! ./admin-navbar.component.css */ "./src/app/components/admin-navbar/admin-navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminNavbarComponent);
    return AdminNavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-pages/admin-pages.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/admin-pages/admin-pages.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin-pages/admin-pages.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/admin-pages/admin-pages.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"alert alert-success\" *ngIf=\"successMsg\">\n    <p>Page deleted.</p>\n  </div>\n  <div class=\"alert alert-danger\" *ngIf=\"errorMsg\">\n    <p>Error deleting the page.</p>\n  </div>\n\n  <h1 class=\"page-title\">Pages</h1>\n  <a class=\"btn btn-primary\" routerLink=\"/admin/add-page\">Add a page</a>\n  <br><br>\n\n  <table class=\"table\">\n    <tr>\n      <th>Title</th>\n      <th>Edit</th>\n      <th>Delete</th>\n    </tr>\n\n    <tr *ngFor=\"let page of pages.value\">\n      <td>\n        {{ page.title }}\n       </td>\n      <td>\n        <a routerLink=\"/admin/edit-page/{{ page._id }}\">Edit</a>\n      </td>\n      <td *ngIf=\"page.slug !== 'home'\" >\n          <a (click)=\"deletePage(page._id)\" routerLink=\"/admin/pages\">Delete</a>\n      </td>\n    </tr>\n  </table>\n"

/***/ }),

/***/ "./src/app/components/admin-pages/admin-pages.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/admin-pages/admin-pages.component.ts ***!
  \*****************************************************************/
/*! exports provided: AdminPagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPagesComponent", function() { return AdminPagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/page.service */ "./src/app/services/page.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminPagesComponent = /** @class */ (function () {
    function AdminPagesComponent(router, pageService) {
        this.router = router;
        this.pageService = pageService;
        this.successMsg = false;
        this.errorMsg = false;
    }
    AdminPagesComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("user") !== "\"admin\"") {
            this.router.navigateByUrl('');
        }
        this.pages = this.pageService.pagesBS;
    };
    AdminPagesComponent.prototype.deletePage = function (id) {
        var _this = this;
        if (confirm('Confirm deletion')) {
            this.pageService.deletePage(id).subscribe(function (res) {
                if (res == 'error') {
                    _this.errorMsg = true;
                    setTimeout(function () {
                        this.errorMsg = false;
                    }.bind(_this), 2000);
                }
                else {
                    _this.successMsg = true;
                    setTimeout(function () {
                        this.successMsg = false;
                    }.bind(_this), 2000);
                    _this.pageService.getPages().subscribe(function (pages) {
                        _this.pageService.pagesBS.next(pages);
                    });
                }
            });
        }
    };
    AdminPagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-pages',
            template: __webpack_require__(/*! ./admin-pages.component.html */ "./src/app/components/admin-pages/admin-pages.component.html"),
            styles: [__webpack_require__(/*! ./admin-pages.component.css */ "./src/app/components/admin-pages/admin-pages.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_page_service__WEBPACK_IMPORTED_MODULE_1__["PageService"]])
    ], AdminPagesComponent);
    return AdminPagesComponent;
}());



/***/ }),

/***/ "./src/app/components/admin-sidebar/admin-sidebar.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/admin-sidebar/admin-sidebar.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/admin-sidebar/admin-sidebar.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin-sidebar/admin-sidebar.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"alert alert-success\" *ngIf=\"successMsg\">\n    <p>Page edited.</p>\n  </div>\n\n\n  <h1 class=\"page-title\">Edit Sidebar</h1>\n  <a class=\"btn btn-primary\" routerLink=\"/admin/pages\">Back to all pages</a>\n  <br><br>\n\n  <form  novalidate #f=\"ngForm\" (ngSubmit)=\"editSidebar(f)\">\n\n\n\n          <div class=\"form-group\">\n              <label for=\"\">Content: </label>\n              <textarea class=\"form-control\" name=\"content\" cols=\"30\" rows=\"10\" placeholder=\"content\"\n              [(ngModel)]= \"content\"></textarea>\n\n            </div>\n\n                <div class=\"form-group\">\n                   <button class=\"btn btn-default\" [disabled]=\"!f.valid\">Edit page</button>\n                </div>\n  </form>\n"

/***/ }),

/***/ "./src/app/components/admin-sidebar/admin-sidebar.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/admin-sidebar/admin-sidebar.component.ts ***!
  \*********************************************************************/
/*! exports provided: AdminSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSidebarComponent", function() { return AdminSidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/sidebar.service */ "./src/app/services/sidebar.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AdminSidebarComponent = /** @class */ (function () {
    function AdminSidebarComponent(sidebarService, router) {
        this.sidebarService = sidebarService;
        this.router = router;
        //content: string;
        this.successMsg = false;
    }
    AdminSidebarComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("user") !== "\"admin\"") {
            this.router.navigateByUrl('');
        }
        else {
            CKEDITOR.replace('content');
        }
        this.sidebarService.getSidebar().subscribe(function (res) {
            // this.content = res.content;
            console.log(res);
            console.log(res.content);
        });
    };
    AdminSidebarComponent.prototype.editSidebar = function (_a) {
        var _this = this;
        var value = _a.value;
        value.content = CKEDITOR.instances.content.getData();
        this.sidebarService.postSidebar(value).subscribe(function (res) {
            _this.successMsg = true;
            setTimeout(function () {
                this.successMsg = false;
            }.bind(_this), 2000);
        });
    };
    AdminSidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-sidebar',
            template: __webpack_require__(/*! ./admin-sidebar.component.html */ "./src/app/components/admin-sidebar/admin-sidebar.component.html"),
            styles: [__webpack_require__(/*! ./admin-sidebar.component.css */ "./src/app/components/admin-sidebar/admin-sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_sidebar_service__WEBPACK_IMPORTED_MODULE_1__["SidebarService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AdminSidebarComponent);
    return AdminSidebarComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">Login</h1>\n<div class=\"alert alert-danger\" *ngIf=\"loginFailed\">\n  <p>Invalid credentials.</p>\n</div>\n\n<div class=\"alert alert-success\" *ngIf=\"userRegistered\">\n  <p>Thank you for registering, you can now login.</p>\n</div>\n<form  novalidate #f=\"ngForm\" (ngSubmit)=\"login(f)\">\n    <div class=\"form-group\">\n        <label for=\"\">Username</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" name=\"username\"\n        [(ngModel)]=\"username\"\n        #userName=\"ngModel\"\n        minlength=\"2\"\n        required\n        />\n      </div>\n\n        <div class=\"alert alert-danger\" *ngIf=\"userName.errors?.required && userName.touched\">\n          Username is required.\n        </div>\n        <div class=\"alert alert-danger\" *ngIf=\"userName.errors?.minlength && userName.touched\">\n            Minimum lenth is 2.\n         </div>\n\n\n          <div class=\"form-group\">\n              <label for=\"\">Password</label>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\"\n              [(ngModel)]=\"password\"\n              #userPassword=\"ngModel\"\n              minlength=\"4\"\n              required\n              />\n            </div>\n            <div class=\"alert alert-danger\" *ngIf=\"userPassword.errors?.required && userPassword.touched\">\n                Password is required.\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"userPassword.errors?.minlength && userPassword.touched\">\n                  Minimum lenth is 4.\n                </div>\n\n\n                <div class=\"form-group\">\n                   <button class=\"btn btn-default\" [disabled]=\"!f.valid\">Login</button>\n                </div>\n  </form>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.loginFailed = false;
        this.userRegistered = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("user")) {
            this.router.navigateByUrl('');
        }
        if (localStorage.getItem("userRegistered")) {
            this.userRegistered = true;
            localStorage.removeItem("userRegistered");
        }
    };
    LoginComponent.prototype.login = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            this.userService.login(value).subscribe(function (res) {
                if (res === 'invalidLogin') {
                    _this.loginFailed = true;
                    setTimeout(function () {
                        this.loginFailed = false;
                    }.bind(_this), 2000);
                }
                else {
                    localStorage.setItem("user", JSON.stringify(res));
                    if (localStorage.getItem("user") === "\"admin\"") {
                        _this.router.navigateByUrl('admin/pages');
                    }
                    else {
                        _this.router.navigateByUrl('');
                    }
                }
            });
        }
        else {
            console.log('form is not valid');
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/logout/logout.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/logout/logout.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/logout/logout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/logout/logout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/logout/logout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/logout/logout.component.ts ***!
  \*******************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogoutComponent = /** @class */ (function () {
    function LogoutComponent(router) {
        this.router = router;
    }
    LogoutComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("user")) {
            localStorage.removeItem("user");
            this.router.navigateByUrl('');
        }
        else {
            this.router.navigateByUrl('login');
        }
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/components/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/components/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\n<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" routerLink=\"/\">CMS</a>\n    </div>\n    <div id=\"navbar\" class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n          <ng-container *ngFor=\"let page of pages?.value\">\n              <li *ngIf=\"page.slug!=='home'\">\n                <a routerLink=\"/{{page.slug}}\">{{page.title}}</a>\n              </li>\n          </ng-container>\n      </ul>\n      <ul *ngIf=\"!userLoggedIn\" class=\"nav navbar-nav navbar-right\">\n      <li><a routerLink=\"/register\">Register</a> </li>\n      <li><a routerLink=\"/login\">Login</a> </li>\n    </ul>\n    <ul *ngIf=\"userLoggedIn\" class=\"nav navbar-nav navbar-right\">\n      <li><a routerLink=\"/logout\">Hi {{ user }}, logout</a> </li>\n\n    </ul>\n    </div><!--/.nav-collapse -->\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/page.service */ "./src/app/services/page.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(pageServic) {
        this.pageServic = pageServic;
    }
    Object.defineProperty(NavbarComponent.prototype, "userLoggedIn", {
        get: function () {
            if (localStorage.getItem("user")) {
                this.user = localStorage.getItem("user").replace(/\"/g, "");
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageServic.getPages().subscribe(function (pages) {
            _this.pageServic.pagesBS.next(pages);
            _this.pages = _this.pageServic.pagesBS;
        });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_page_service__WEBPACK_IMPORTED_MODULE_1__["PageService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/pages/pages.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/pages/pages.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.main {\n  color: orange;\n}\n\n"

/***/ }),

/***/ "./src/app/components/pages/pages.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/pages/pages.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"hasSidebar\">\n    <div class=\"col-xs-8 \">\n      <div [innerHTML]=\"pageBody?.content\"></div>\n    </div>\n      <div class=\"col-xs-4 col-sm-push-2\">Sidebar\n          <div [innerHTML]=\"sidebar\"></div>\n\n        </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"!hasSidebar\">\n      <div class=\"col-xs-12\" >\n        <div [innerHTML]=\"pageBody?.content\"></div>\n      </div>\n    </div>\n\n   <!-- Page Header -->\n\n   <section class=\"latest py-5\" id=\"latest\">\n    <div class=\"container\">\n        <div class=\"row pb-5 text-center\">\n            <div class=\"col-md-12\">\n               <h2>Latest Properties</h2>\n               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n               <h2>20 Years of Experience in Enterprise Services.</h2>\n               <p class=\"py-3\">Bimply dummy text the printing and typesety Ipsum deartyhas been the industry’s standard ever since thewhengalley.</p>\n               <button type=\"button\" class=\"btn btn-outline-danger mb-3\">Find Out More About us</button>\n\n            </div>\n            <div class=\"col-md-4 latest-box\">\n              <a href=\"#\">\n                  <img class=\"no-mp\" src=\"https://radiustheme.com/demo/wordpress/finance/wp-content/uploads/2017/08/case-studies-2-min-490x340.jpg \">\n                 <div class=\"\">\n                   <div class=\"bg-red card-body\">\n                       <h5>Financial Services</h5>\n                   </div>\n                </div>\n               </a>\n\n\n            </div>\n            <div class=\"col-md-4 latest-box\">\n                <a href=\"#\">\n                    <img  class=\"no-mp\" src=\"https://radiustheme.com/demo/wordpress/finance/wp-content/uploads/2017/08/case-studies-2-min-1-490x340.jpg \">\n               <div class=\"\">\n                   <div class=\"bg-red card-body\">\n                       <h5>Marketing Strategy</h5>\n                   </div>\n                </div>\n                 </a>\n\n\n            </div>\n        </div>\n    </div>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n    <br>\n</section>\n<div class=\"col-xs-12 col-sm-push-1\">\n <!-- Footer -->\n<footer class=\"page-footer font-small blue-grey lighten-5\">\n\n    <div style=\"background-color: #21d192;\">\n      <div class=\"container\">\n\n        <!-- Grid row-->\n        <div class=\"row py-4 d-flex align-items-center\">\n\n          <!-- Grid column -->\n          <div class=\"col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0\">\n            <h6 class=\"mb-0\">Get connected with us on social networks!</h6>\n          </div>\n          <!-- Grid column -->\n\n          <!-- Grid column -->\n          <div class=\"col-md-6 col-lg-7 text-center text-md-right\">\n\n            <!-- Facebook -->\n            <a class=\"fb-ic\">\n              <i class=\"fa fa-facebook white-text mr-4\"> </i>\n            </a>\n            <!-- Twitter -->\n            <a class=\"tw-ic\">\n              <i class=\"fa fa-twitter white-text mr-4\"> </i>\n            </a>\n            <!-- Google +-->\n            <a class=\"gplus-ic\">\n              <i class=\"fa fa-google-plus white-text mr-4\"> </i>\n            </a>\n            <!--Linkedin -->\n            <a class=\"li-ic\">\n              <i class=\"fa fa-linkedin white-text mr-4\"> </i>\n            </a>\n            <!--Instagram-->\n            <a class=\"ins-ic\">\n              <i class=\"fa fa-instagram white-text\"> </i>\n            </a>\n\n          </div>\n          <!-- Grid column -->\n\n        </div>\n        <!-- Grid row-->\n\n      </div>\n    </div>\n\n    <!-- Footer Links -->\n    <br>\n    <br/>\n\n\n    <div class=\"container text-center text-md-left mt-5\">\n\n      <!-- Grid row -->\n      <div class=\"row mt-3 dark-grey-text\">\n\n        <!-- Grid column -->\n        <div class=\"col-md-3 col-lg-4 col-xl-3 mb-4\">\n\n          <!-- Content -->\n          <h6 class=\"text-uppercase font-weight-bold\">Company name</h6>\n          <hr class=\"teal accent-3 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\n          <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur\n            adipisicing elit.</p>\n\n        </div>\n        <!-- Grid column -->\n\n        <!-- Grid column -->\n        <div class=\"col-md-2 col-lg-2 col-xl-2 mx-auto mb-4\">\n\n          <!-- Links -->\n          <h6 class=\"text-uppercase font-weight-bold\">Products</h6>\n          <hr class=\"teal accent-3 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\n          <p>\n            <a class=\"dark-grey-text\" href=\"#!\">MDBootstrap</a>\n          </p>\n          <p>\n            <a class=\"dark-grey-text\" href=\"#!\">MDWordPress</a>\n          </p>\n          <p>\n            <a class=\"dark-grey-text\" href=\"#!\">BrandFlow</a>\n          </p>\n          <p>\n            <a class=\"dark-grey-text\" href=\"#!\">Bootstrap Angular</a>\n          </p>\n\n        </div>\n        <!-- Grid column -->\n\n        <!-- Grid column -->\n        <div class=\"col-md-3 col-lg-2 col-xl-2 mx-auto mb-4\">\n\n          <!-- Links -->\n          <h6 class=\"text-uppercase font-weight-bold\">Useful links</h6>\n          <hr class=\"teal accent-3 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\n          <p>\n            <a class=\"dark-grey-text\" href=\"#!\">Your Account</a>\n          </p>\n          <p>\n            <a class=\"dark-grey-text\" href=\"#!\">Become an Affiliate</a>\n          </p>\n          <p>\n            <a class=\"dark-grey-text\" href=\"#!\">Shipping Rates</a>\n          </p>\n          <p>\n            <a class=\"dark-grey-text\" href=\"#!\">Help</a>\n          </p>\n\n        </div>\n        <!-- Grid column -->\n\n        <!-- Grid column -->\n        <div class=\"col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4\">\n\n          <!-- Links -->\n          <h6 class=\"text-uppercase font-weight-bold\">Contact</h6>\n          <hr class=\"teal accent-3 mb-4 mt-0 d-inline-block mx-auto\" style=\"width: 60px;\">\n          <p>\n            <i class=\"fa fa-home mr-3\"></i> New York, NY 10012, US</p>\n          <p>\n            <i class=\"fa fa-envelope mr-3\"></i> info@example.com</p>\n          <p>\n            <i class=\"fa fa-phone mr-3\"></i> + 01 234 567 88</p>\n          <p>\n            <i class=\"fa fa-print mr-3\"></i> + 01 234 567 89</p>\n\n        </div>\n        <!-- Grid column -->\n\n      </div>\n      <!-- Grid row -->\n\n    </div>\n    <!-- Footer Links -->\n\n    <!-- Copyright -->\n    <div class=\"footer-copyright text-center text-black-50 py-3\">© 2018 Copyright:\n      <a class=\"dark-grey-text\" href=\"http://www.caritorsolutions.com/\"> caritorsolutions.com</a>\n    </div>\n    <!-- Copyright -->\n\n  </footer>\n  <!-- Footer -->\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/pages/pages.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/pages/pages.component.ts ***!
  \*****************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_page_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/page.service */ "./src/app/services/page.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sidebar.service */ "./src/app/services/sidebar.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PagesComponent = /** @class */ (function () {
    function PagesComponent(route, router, sidebarService, pageService, title) {
        this.route = route;
        this.router = router;
        this.sidebarService = sidebarService;
        this.pageService = pageService;
        this.title = title;
    }
    PagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageService.getPages().subscribe(function (pages) {
            _this.pages = pages;
        });
        this.route.params.subscribe(function (params) {
            _this.param = params['page'];
            if (_this.param === undefined) {
                _this.param = 'home';
                _this.title.setTitle('CMS');
            }
            else {
                _this.title.setTitle(_this.param.replace(/-/g, ' ').toLowerCase());
            }
            _this.pageService.getPage(_this.param).subscribe(function (pageBody) {
                if (pageBody == null) {
                    _this.router.navigateByUrl('');
                }
                _this.pageBody = pageBody;
                if (pageBody['sidebar'] === "yes") {
                    _this.hasSidebar = true;
                    _this.sidebarService.getSidebar().subscribe(function (sidebar) {
                        _this.sidebar = sidebar['sidebar'];
                    });
                }
                else {
                    _this.hasSidebar = false;
                }
            });
        });
    };
    PagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pages',
            template: __webpack_require__(/*! ./pages.component.html */ "./src/app/components/pages/pages.component.html"),
            styles: [__webpack_require__(/*! ./pages.component.css */ "./src/app/components/pages/pages.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services_sidebar_service__WEBPACK_IMPORTED_MODULE_4__["SidebarService"],
            _services_page_service__WEBPACK_IMPORTED_MODULE_2__["PageService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], PagesComponent);
    return PagesComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"page-title\">Register</h1>\n<div class=\"alert alert-danger\" *ngIf=\"userExists\">\n  <p>That username already exists, choose another!</p>\n</div>\n\n<form  novalidate #f=\"ngForm\" (ngSubmit)=\"register(f)\">\n    <div class=\"form-group\">\n        <label for=\"\">Username</label>\n        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" name=\"username\"\n        [(ngModel)]=\"username\"\n        #userName=\"ngModel\"\n        minlength=\"2\"\n        required\n        />\n      </div>\n\n        <div class=\"alert alert-danger\" *ngIf=\"userName.errors?.required && userName.touched\">\n          Username is required.\n        </div>\n        <div class=\"alert alert-danger\" *ngIf=\"userName.errors?.minlength && userName.touched\">\n            Minimum lenth is 2.\n         </div>\n\n\n          <div class=\"form-group\">\n              <label for=\"\">Password</label>\n              <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\"\n              [(ngModel)]=\"password\"\n              #userPassword=\"ngModel\"\n              minlength=\"4\"\n              required\n              />\n            </div>\n            <div class=\"alert alert-danger\" *ngIf=\"userPassword.errors?.required && userPassword.touched\">\n                Password is required.\n              </div>\n              <div class=\"alert alert-danger\" *ngIf=\"userPassword.errors?.minlength && userPassword.touched\">\n                  Minimum lenth is 4.\n                </div>\n\n\n                <div class=\"form-group\">\n                   <button class=\"btn btn-default\" [disabled]=\"!f.valid\">Register</button>\n                   <!-- <button class=\"btn btn-default\" >Register</button> -->\n                </div>\n  </form>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.userExists = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("user")) {
            this.router.navigateByUrl('');
        }
    };
    RegisterComponent.prototype.register = function (_a) {
        var _this = this;
        var value = _a.value, valid = _a.valid;
        if (valid) {
            this.userService.register(value).subscribe(function (res) {
                if (res === 'userExists') {
                    _this.userExists = true;
                    setTimeout(function () {
                        this.userExists = false;
                    }.bind(_this), 2000);
                }
                else {
                    localStorage.setItem("userRegistered", "true");
                    _this.router.navigateByUrl('login');
                }
            });
        }
        else {
            console.log('form is not valid');
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/page.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/page.service.ts ***!
  \******************************************/
/*! exports provided: PageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageService", function() { return PageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http } from '@angular/http';


// import 'rxjs/add/operator/map';
var PageService = /** @class */ (function () {
    function PageService(
    // private http: Http,
    http) {
        this.http = http;
        // public pagesBS = new BehaviorSubject<string>(null);
        this.pagesBS = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    PageService.prototype.getPages = function () {
        // return this.http.get('http://localhost:8080/pages')
        //     .map(res => res.json());
        return this.http.get('http://localhost:8080/pages');
    };
    PageService.prototype.getPage = function (slug) {
        // return this.http.get('http://localhost:8080/pages/' + slug)
        //   .map(res => res.json());
        return this.http.get('http://localhost:8080/pages/' + slug);
    };
    PageService.prototype.postAddPage = function (value) {
        // return this.http.post('http://localhost:8080/pages/add-page', value)
        //   .map(res => res.json());
        return this.http.post('http://localhost:8080/pages/add-page', value);
    };
    PageService.prototype.getEditPage = function (id) {
        // return this.http.get('http://localhost:8080/pages/edit-page/' + id)
        //     .map(res => res.json());
        return this.http.get('http://localhost:8080/pages/edit-page/' + id);
    };
    PageService.prototype.postEditPage = function (value) {
        // return this.http.post('http://localhost:8080/pages/edit-page/' + value.id, value)
        //   .map(res => res.json());
        return this.http.post('http://localhost:8080/pages/edit-page/' + value.id, value);
    };
    PageService.prototype.deletePage = function (id) {
        // return this.http.get('http://localhost:8080/pages/delete-page/' + id)
        //     .map(res => res.json());
        return this.http.get('http://localhost:8080/pages/delete-page/' + id);
    };
    PageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PageService);
    return PageService;
}());



/***/ }),

/***/ "./src/app/services/sidebar.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/sidebar.service.ts ***!
  \*********************************************/
/*! exports provided: SidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarService", function() { return SidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { Http } from '@angular/http';

var SidebarService = /** @class */ (function () {
    function SidebarService(
    // private http: Http
    http) {
        this.http = http;
    }
    SidebarService.prototype.getSidebar = function () {
        // return this.http.get('http://localhost:8080/sidebar/edit-sidebar')
        //   .map(res => res.json());
        return this.http.get('http://localhost:8080/sidebar/edit-sidebar');
    };
    SidebarService.prototype.postSidebar = function (value) {
        // return this.http.post('http://localhost:8080/sidebar/edit-sidebar/', value)
        //   .map(res => res.json());
        return this.http.post('http://localhost:8080/sidebar/edit-sidebar/', value);
    };
    SidebarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SidebarService);
    return SidebarService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import { Http } from '@angular/http';

// import 'rxjs/add/operator/map';

var UserService = /** @class */ (function () {
    function UserService(
    // private http: Http,
    http) {
        this.http = http;
    }
    UserService.prototype.register = function (user) {
        // return this.http.post('http://localhost:8080/users/register', user)
        //     .map(res => res.json());
        return this.http.post('http://localhost:8080/users/register', user);
        // .map(res => res.json());
    };
    UserService.prototype.login = function (user) {
        // return this.http.post('http://localhost:8080/users/login', user)
        //     .map(res => res.json());
        return this.http.post('http://localhost:8080/users/login', user);
        // .map(res => res.json());
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/lampp/htdocs/caritorcms/angualrcms/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/all/all.component.css":
/***/ (function(module, exports) {

module.exports = "  .table {\r\n    table-layout: fixed;\r\n  }\r\n\r\n  .table td, .table th {\r\n    overflow: hidden;\r\n  }"

/***/ }),

/***/ "./src/app/all/all.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th width=\"4%\">#</th>\r\n        <th width=\"15%\">Date</th>\r\n        <th width=\"22%\">From</th>\r\n        <th width=\"25%\">To</th>\r\n        <th width=\"27%\">Subject</th>\r\n        <th width=\"8%\">Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let email of emails; let i = index\">\r\n        <th scope=\"row\">{{ i + 1 }}</th>\r\n        <td>{{ email.date }}</td>\r\n        <td>{{ email.from }}</td>\r\n        <td>{{ email.to }}</td>\r\n        <td>{{ email.subject }}</td>\r\n        <td>\r\n          <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/emaildetail', email.messageId]\">Afficher</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<div>\r\n  <span>Total elements: {{totalElements}}</span>\r\n  <span>Total pages: {{totalPages}}</span>\r\n  <span>Size: {{size}}</span>\r\n</div>\r\n\r\n<!-- pager -->\r\n<nav>\r\n  <ul class=\"pagination justify-content-end\" *ngIf=\"pagesToShow && pagesToShow.length\">\r\n    <li class=\"page-item\" [ngClass]=\"{disabled:pages.pageNumber === 0}\">\r\n      <a class=\"page-link\" (click)=\"gopage(1)\">First</a>\r\n    </li>\r\n    <li class=\"page-item\" [ngClass]=\"{disabled:pages.pageNumber === 0}\">\r\n      <a class=\"page-link\" (click)=\"gopage(pages.pageNumber)\">Previous</a>\r\n    </li>\r\n    <li class=\"page-item\" *ngFor=\"let page of pagesToShow\" [ngClass]=\"{active:pages.pageNumber + 1 === page}\">\r\n      <a class=\"page-link\" (click)=\"gopage(page)\">{{page}}</a>\r\n    </li>\r\n    <li class=\"page-item\" [ngClass]=\"{disabled:pages.pageNumber + 1 === totalPages}\">\r\n      <a class=\"page-link\" (click)=\"gopage(pages.pageNumber + 2)\">Next</a>\r\n    </li>\r\n    <li class=\"page-item\" [ngClass]=\"{disabled:pages.pageNumber + 1 === totalPages}\">\r\n      <a class=\"page-link\" (click)=\"gopage(totalPages)\">Last</a>\r\n    </li>\r\n  </ul>\r\n</nav>"

/***/ }),

/***/ "./src/app/all/all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AllComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_service__ = __webpack_require__("./src/app/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_pageable_class__ = __webpack_require__("./src/app/app.pageable.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paginer_service__ = __webpack_require__("./src/app/paginer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllComponent = /** @class */ (function () {
    function AllComponent(service, servicePage) {
        this.service = service;
        this.servicePage = servicePage;
        this.totalPages = 0;
        this.totalElements = 0;
        this.size = 0;
        this.pages = new __WEBPACK_IMPORTED_MODULE_2__app_pageable_class__["a" /* Pageable */]();
    }
    AllComponent.prototype.ngOnInit = function () {
        this.refresh();
    };
    AllComponent.prototype.gopage = function (page) {
        if (page < 1 || page > this.totalPages) {
            return;
        }
        this.pages.pageNumber = page - 1;
        this.pages.offset = this.pages.pageNumber * this.pages.pageSize;
        this.refresh();
    };
    AllComponent.prototype.refresh = function () {
        var _this = this;
        this.service.getAllEmailsPage(this.pages)
            .subscribe(function (data) {
            _this.emails = data.content;
            _this.pages = data.pageable;
            _this.totalPages = data.totalPages;
            _this.totalElements = data.totalElements;
            _this.size = data.size;
            _this.pagesToShow = _this.servicePage.getPager(_this.totalElements, _this.totalPages, (_this.pages.pageNumber + 1), _this.pages.pageSize);
        });
    };
    AllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-all',
            providers: [__WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_3__paginer_service__["a" /* PaginerService */]],
            template: __webpack_require__("./src/app/all/all.component.html"),
            styles: [__webpack_require__("./src/app/all/all.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_3__paginer_service__["a" /* PaginerService */]])
    ], AllComponent);
    return AllComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__all_all_component__ = __webpack_require__("./src/app/all/all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__emaildetail_emaildetail_component__ = __webpack_require__("./src/app/emaildetail/emaildetail.component.ts");




var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'search',
        component: __WEBPACK_IMPORTED_MODULE_1__search_search_component__["a" /* SearchComponent */]
    },
    {
        path: 'emaildetail/:id',
        component: __WEBPACK_IMPORTED_MODULE_3__emaildetail_emaildetail_component__["a" /* EmaildetailComponent */]
    },
    {
        path: 'all',
        component: __WEBPACK_IMPORTED_MODULE_2__all_all_component__["a" /* AllComponent */]
    }
];


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__("./src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search_component__ = __webpack_require__("./src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__emaildetail_emaildetail_component__ = __webpack_require__("./src/app/emaildetail/emaildetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__all_all_component__ = __webpack_require__("./src/app/all/all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__highlight_pipe__ = __webpack_require__("./src/app/highlight.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_10__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_11__emaildetail_emaildetail_component__["a" /* EmaildetailComponent */],
                __WEBPACK_IMPORTED_MODULE_12__all_all_component__["a" /* AllComponent */],
                __WEBPACK_IMPORTED_MODULE_14__highlight_pipe__["a" /* HighlightPipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* routes */]),
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_forms__["c" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_11__emaildetail_emaildetail_component__["a" /* EmaildetailComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.pageable.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pageable; });
var Pageable = /** @class */ (function () {
    function Pageable(offset, pageNumber, pageSize) {
        if (offset === void 0) { offset = 0; }
        if (pageNumber === void 0) { pageNumber = 0; }
        if (pageSize === void 0) { pageSize = 20; }
        this.init(offset, pageNumber, pageSize);
    }
    Pageable.prototype.init = function (offset, pageNumber, pageSize) {
        if (offset === void 0) { offset = 0; }
        if (pageNumber === void 0) { pageNumber = 0; }
        if (pageSize === void 0) { pageSize = 20; }
        this.offset = offset;
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
    };
    return Pageable;
}());



/***/ }),

/***/ "./src/app/email.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmailService = /** @class */ (function () {
    function EmailService(http) {
        this.http = http;
        this.urlApi = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiUrl;
    }
    EmailService.prototype.getAllEmails = function () {
        return this.http.get(this.urlApi + '/all');
    };
    EmailService.prototype.getAllEmailsPage = function (page) {
        return this.http.get(this.urlApi + '/all?page=' + page.pageNumber + '&size=' + page.pageSize);
    };
    EmailService.prototype.getEmails = function (term) {
        return this.http.get(this.urlApi + '/search?term=' + term);
    };
    EmailService.prototype.getEmailsPage = function (page, term) {
        return this.http.get(this.urlApi + '/search?term=' + term + '&page=' + page.pageNumber + '&size=' + page.pageSize);
    };
    EmailService.prototype.getEmailById = function (idEmail) {
        return this.http.get(this.urlApi + '/email/' + idEmail);
    };
    EmailService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EmailService);
    return EmailService;
}());



/***/ }),

/***/ "./src/app/emaildetail/emaildetail.component.css":
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .search-highlight{\r\n  background-color: #F2E366;\r\n}"

/***/ }),

/***/ "./src/app/emaildetail/emaildetail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"reglist\">\r\n    <div class=\"container\" *ngIf=\"dataLoaded\">\r\n        <h2>Message n° <div [innerHTML]=\"email.messageId | highlight : term\"></div> </h2>\r\n        <div class=\"card\">\r\n            <div class=\"card-header\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-6 col-sm-12\">\r\n                        <b>Mailbox : </b> <div [innerHTML]=\"email.mailbox | highlight : term\"></div>\r\n                        <b>User : </b> <div [innerHTML]=\"email.user | highlight : term\"></div>\r\n                        <b>Date : </b> <div [innerHTML]=\"email.date | highlight : term\"></div>\r\n                        <b>From : </b> <div [innerHTML]=\"email.from | highlight : term\"></div>\r\n                        <b>To : </b> <div [innerHTML]=\"email.to | highlight : term\"></div>\r\n                        <b>Cc : </b> <div [innerHTML]=\"email.cc | highlight : term\"></div>\r\n                        <b>Bcc : </b> <div [innerHTML]=\"email.bcc | highlight : term\"></div>\r\n                        <b>Subject : </b> <div [innerHTML]=\"email.subject | highlight : term\"></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body\"><div [innerHTML]=\"email.content | highlight : term\"></div></div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/emaildetail/emaildetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmaildetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_service__ = __webpack_require__("./src/app/email.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmaildetailComponent = /** @class */ (function () {
    function EmaildetailComponent(route, service) {
        this.route = route;
        this.service = service;
        this.term = '';
        this.dataLoaded = false;
    }
    EmaildetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params.id;
        this.route.queryParams.subscribe(function (params) {
            _this.term = params['term'] || '';
        });
        this.service.getEmailById(id)
            .subscribe(function (data) {
            _this.email = data;
            _this.dataLoaded = true;
        });
    };
    EmaildetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-emaildetail',
            providers: [__WEBPACK_IMPORTED_MODULE_2__email_service__["a" /* EmailService */]],
            template: __webpack_require__("./src/app/emaildetail/emaildetail.component.html"),
            styles: [__webpack_require__("./src/app/emaildetail/emaildetail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__email_service__["a" /* EmailService */]])
    ], EmaildetailComponent);
    return EmaildetailComponent;
}());



/***/ }),

/***/ "./src/app/highlight.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HighlightPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HighlightPipe = /** @class */ (function () {
    function HighlightPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    HighlightPipe.prototype.transform = function (text, search) {
        if (search && text) {
            var pattern = search.toString().replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
            pattern = pattern.split(' ').filter(function (t) {
                return t.length > 0;
            }).join('|');
            var regex = new RegExp(pattern, 'gi');
            return this.sanitizer.bypassSecurityTrustHtml(text.toString().replace(regex, function (match) { return "<span class=\"search-highlight\">" + match + "</span>"; }));
        }
        else {
            return text;
        }
    };
    HighlightPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'highlight'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HighlightPipe);
    return HighlightPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=”container” align=\"center\">\r\n  <div>\r\n    <h1>Easy Search</h1>\r\n    <br>\r\n    <div>\r\n      <div>\r\n        <iframe src=\"//www.slideshare.net/slideshow/embed_code/key/zxyKjROBhAf3Pd\" width=\"595\" height=\"485\" frameborder=\"0\" marginwidth=\"0\"\r\n          marginheight=\"0\" scrolling=\"no\" style=\"border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;\"\r\n          allowfullscreen>\r\n        </iframe>\r\n        <div style=\"margin-bottom:5px\">\r\n          <strong>\r\n            <a href=\"//www.slideshare.net/KevinJoaquim1/easy-search-92026452\" title=\"Easy search\" target=\"_blank\">Easy search</a>\r\n          </strong> \r\n          <strong>\r\n            <a href=\"https://www.slideshare.net/KevinJoaquim1\" target=\"_blank\">Realised by Kevin, Lila, Zineb and Saman</a>\r\n          </strong>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"\">Home\r\n          <span class=\"sr-only\">(current)</span>\r\n        </a>\r\n      </li>\r\n      <li>\r\n        <a class=\"nav-link\" routerLink=\"all\">All</a>\r\n      </li>\r\n    </ul>\r\n    <div class=\"row\">\r\n      <div class=\"input-group\">\r\n        <input type=\"text\" placeholder=\"Search\" class=\"form-control mr-sm-2\" [(ngModel)]=\"search\" #ctrl=\"ngModel\" required>\r\n        <span class=\"input-group-btn\">\r\n          <button *ngIf=\"ctrl.valid\" class=\"btn btn-outline-success my-2 my-sm-0\" type=\"button\" [routerLink]=\"['/search']\" [queryParams]=\"{ term: ctrl.value }\" queryParamsHandling=\"merge\">Search</button>\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/paginer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore__ = __webpack_require__("./node_modules/underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_underscore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginerService = /** @class */ (function () {
    function PaginerService() {
    }
    PaginerService.prototype.getPager = function (totalItems, totalPages, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 20; }
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        return __WEBPACK_IMPORTED_MODULE_1_underscore__["range"](startPage, endPage + 1);
    };
    PaginerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PaginerService);
    return PaginerService;
}());



/***/ }),

/***/ "./src/app/search/search.component.css":
/***/ (function(module, exports) {

module.exports = "  .table {\r\n    table-layout: fixed;\r\n  }\r\n\r\n  .table td, .table th {\r\n    overflow: hidden;\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\r\n  <table class=\"table table-striped\">\r\n    <thead>\r\n      <tr>\r\n        <th width=\"3%\">#</th>\r\n        <th width=\"12%\">Date</th>\r\n        <th width=\"20%\">From</th>\r\n        <th width=\"23%\">To</th>\r\n        <th width=\"25%\">Subject</th>\r\n        <th width=\"5%\">Score</th>\r\n        <th width=\"5%\">Occurs</th>\r\n        <th width=\"7%\">Actions</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let search of searchresults; let i = index\">\r\n        <th scope=\"row\">{{ i + 1 }}</th>\r\n        <td>{{ search.email.date }}</td>\r\n        <td>{{ search.email.from }}</td>\r\n        <td>{{ search.email.to }}</td>\r\n        <td>{{ search.email.subject }}</td>\r\n        <td>{{ search.score }}</td>\r\n        <td>{{ search.occurencesNumber }}</td>\r\n        <td>\r\n          <button type=\"button\" class=\"btn btn-primary\" [routerLink]=\"['/emaildetail', search.email.messageId]\" [queryParams]=\"{ term: searchTerm }\">Afficher</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n\r\n<div>\r\n  <span>Total elements: {{totalElements}}</span>\r\n  <span>Total pages: {{totalPages}}</span>\r\n  <span>Size: {{size}}</span>\r\n</div>\r\n\r\n<!-- pager -->\r\n<nav>\r\n  <ul class=\"pagination justify-content-end\" *ngIf=\"pagesToShow && pagesToShow.length\">\r\n    <li class=\"page-item\" [ngClass]=\"{disabled:pages.pageNumber === 0}\">\r\n      <a class=\"page-link\" (click)=\"gopage(1)\">First</a>\r\n    </li>\r\n    <li class=\"page-item\" [ngClass]=\"{disabled:pages.pageNumber === 0}\">\r\n      <a class=\"page-link\" (click)=\"gopage(pages.pageNumber)\">Previous</a>\r\n    </li>\r\n    <li class=\"page-item\" *ngFor=\"let page of pagesToShow\" [ngClass]=\"{active:pages.pageNumber + 1 === page}\">\r\n      <a class=\"page-link\" (click)=\"gopage(page)\">{{page}}</a>\r\n    </li>\r\n    <li class=\"page-item\" [ngClass]=\"{disabled:pages.pageNumber + 1 === totalPages}\">\r\n      <a class=\"page-link\" (click)=\"gopage(pages.pageNumber + 2)\">Next</a>\r\n    </li>\r\n    <li class=\"page-item\" [ngClass]=\"{disabled:pages.pageNumber + 1 === totalPages}\">\r\n      <a class=\"page-link\" (click)=\"gopage(totalPages)\">Last</a>\r\n    </li>\r\n  </ul>\r\n</nav>"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__email_service__ = __webpack_require__("./src/app/email.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_pageable_class__ = __webpack_require__("./src/app/app.pageable.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__paginer_service__ = __webpack_require__("./src/app/paginer.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = /** @class */ (function () {
    function SearchComponent(service, route, servicePage) {
        this.service = service;
        this.route = route;
        this.servicePage = servicePage;
        this.searchresults = [];
        this.totalPages = 0;
        this.totalElements = 0;
        this.size = 0;
        this.searchTerm = '';
        this.possibleSize = [10, 20, 50, 100, 200];
        this.pages = new __WEBPACK_IMPORTED_MODULE_3__app_pageable_class__["a" /* Pageable */]();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams
            .subscribe(function (params) {
            _this.searchTerm = params.term;
            _this.pages.init;
            _this.refresh();
        });
    };
    SearchComponent.prototype.gopage = function (page) {
        if (page < 1 || page > this.totalPages) {
            return;
        }
        this.pages.pageNumber = page - 1;
        this.pages.offset = this.pages.pageNumber * this.pages.pageSize;
        this.refresh();
    };
    SearchComponent.prototype.refresh = function () {
        var _this = this;
        this.service.getEmailsPage(this.pages, this.searchTerm)
            .subscribe(function (data) {
            _this.searchresults = data.content;
            _this.pages = data.pageable;
            _this.totalPages = data.totalPages;
            _this.totalElements = data.totalElements;
            _this.size = data.size;
            _this.pagesToShow = _this.servicePage.getPager(_this.totalElements, _this.totalPages, (_this.pages.pageNumber + 1), _this.pages.pageSize);
        });
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            providers: [__WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_4__paginer_service__["a" /* PaginerService */]],
            template: __webpack_require__("./src/app/search/search.component.html"),
            styles: [__webpack_require__("./src/app/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__email_service__["a" /* EmailService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__paginer_service__["a" /* PaginerService */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    apiUrl: "http://localhost:8080/api"
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
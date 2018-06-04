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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark fixed-top\">\n  <div class=\"container\">\n    <a class=\"navbar-brand\" [routerLink]=\"['/home']\" href=\"javascript():void\">GOT</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item active\">\n          <a class=\"nav-link\" [routerLink]=\"['/home']\" href=\"javascript():void\">Home\n            <span class=\"sr-only\">(current)</span>\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<!-- End Header Area -->\n\n<router-outlet></router-outlet>"

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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe__ = __webpack_require__("./node_modules/ng2-order-pipe/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_search_filter__ = __webpack_require__("./node_modules/ng2-search-filter/ng2-search-filter.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__got_service__ = __webpack_require__("./src/app/got.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__single_view_single_view_component__ = __webpack_require__("./src/app/single-view/single-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




 //importing the module
 //importing the module



//router module used for setting up the application level route




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_12__single_view_single_view_component__["a" /* SingleViewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_order_pipe__["Ng2OrderModule"],
                __WEBPACK_IMPORTED_MODULE_5_ng2_search_filter__["a" /* Ng2SearchPipeModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */] },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    // {path:'create',component:PostBlogComponent},
                    { path: 'singleView/:id', component: __WEBPACK_IMPORTED_MODULE_12__single_view_single_view_component__["a" /* SingleViewComponent */] },
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__got_service__["a" /* GotService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/got.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GotService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GotService = /** @class */ (function () {
    function GotService(_http) {
        this._http = _http;
        this.Url = 'https://www.anapioficeandfire.com/api/';
        this.charUrl = 'https://www.anapioficeandfire.com/api/characters/';
        this.bookUrl = 'https://www.anapioficeandfire.com/api/books/';
        this.houseUrl = 'https://www.anapioficeandfire.com/api/houses/';
        console.log("GotService is called");
    }
    GotService.prototype.handleError = function (err) {
        console.log("Handle error Http calls");
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    GotService.prototype.getChar = function () {
        var myResponse = this._http.get(this.charUrl);
        return myResponse;
    };
    GotService.prototype.getBooks = function () {
        var myResponse = this._http.get(this.bookUrl);
        return myResponse;
    };
    GotService.prototype.getHouses = function () {
        var myResponse = this._http.get(this.houseUrl);
        return myResponse;
    };
    GotService.prototype.singleView = function (_url) {
        var myResponse = this._http.get(this.Url + _url);
        return myResponse;
    };
    GotService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], GotService);
    return GotService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row justify-content-center align-items-center d-flex\">\n    <div class=\"col-lg-11\">\n      <div style=\"margin-top:80px\" class=\"input-group stylish-input-group\">\n        <input type=\"text\" class=\"form-control rounded-0 py-2\" placeholder=\"Search by Name, Alias, House, Book...\" [(ngModel)]=\"filter\"\n          onfocus=\"this.placeholder = ''\" onblur=\"this.placeholder = 'Search by Name, Alias, House, Book...'\" required=\"\">\n      </div>\n      <br/>\n      <div class=\"justify-content-center text-center d-flex\">\n\n        <a class=\"btn btn-outline-primary\" (click)=\"sort('name')\">Sort By : Name\n          <span *ngIf=\"key =='name'\"></span>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n<br/>\n\n<!-- <div class=\"container-fluid\" style=\"text-align:center\">\n  <div class=\"row\" style=\"text-align:center\">\n    <div class=\"col-md-12\" style=\"font-size:22px\">Game of Thrones </div>\n    <br>\n    <br>\n  </div>\n  <div class=\"row\">\n    <div *ngFor=\"let everything of all | orderBy: key : reverse | filter:filter\">\n\n      <div *ngIf=\"everything.gender\" class=\"col-xs-11 col-md-6 col-lg-4\">\n\n        <div *ngIf=\"everything.gender\" class=\"card box\">\n          <div>Name : {{everything.name || \"not available\" }}</div>\n          <div>\n\n          </div>\n          <div>Gender : {{everything.gender}}\n            <br/> Alias : {{everything.aliases[0]}}\n            <br/>\n            <br/>\n            <a [routerLink]=\"['/character',everything.url.split('/').pop()]\" class=\"genric-btn success\">Read</a>\n\n          </div>\n\n        </div>\n\n        <br/>\n      </div>\n\n      <div *ngIf=\"everything.isbn\" class=\"col-xs-11 col-lg-4 text-center\">\n\n        <div class=\"panel panel-default box1\">\n          <div class=\"panel-heading\">Name : {{everything.name || \"not available\" }}</div>\n          <div class=\"panel-body\">\n\n          </div>\n          <div class=\"panel-footer\">ISBN : {{everything.isbn}}\n            <br/> Pages : {{everything.numberOfPages}}\n            <br/>\n            <br/>\n            <a [routerLink]=\"['/books',everything.url.split('/').pop()]\" class=\"genric-btn primary\">Read</a>\n\n          </div>\n\n        </div>\n\n        <br/>\n      </div>\n\n      <div *ngIf=\"everything.region\" class=\"col-xs-11 col-lg-4 text-center\">\n\n        <div class=\"panel panel-default box2\">\n          <div class=\"panel-heading\">Name : {{everything.name || \"not available\" }}</div>\n          <div class=\"panel-body\">\n\n          </div>\n          <div class=\"panel-footer\">Region : {{everything.region}}\n            <br/> Seats : {{everything.seats[0]}}\n            <br/>\n            <br/>\n            <a [routerLink]=\"['/books',everything.url.split('/').pop()]\" class=\"genric-btn info\">Read</a>\n\n          </div>\n\n        </div>\n\n        <br/>\n      </div>\n\n\n    </div>\n\n  </div>\n\n\n</div> -->\n\n<div class=\"container\">\n\n  <!-- Page Heading -->\n  <h1 class=\"my-4 text-center\">Game of Thrones\n  </h1>\n  <div class=\"text-center\">\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n  </div>\n  <br/>\n\n  <div class=\"row\">\n    <div *ngFor=\"let everything of all | orderBy: key : reverse | filter:filter | paginate: { itemsPerPage: 8, currentPage: p }\"\n      class=\"col-lg-3 col-md-4 col-sm-6 portfolio-item\">\n      <div *ngIf=\"everything.gender\" class=\"card h-100\">\n        <!-- <a href=\"#\"><img class=\"card-img-top\" src=\"http://placehold.it/700x400\" alt=\"\"></a> -->\n        <div class=\"text-center card-header\">\n          <h4>{{everything.name ||\"A Secret Character\"}}</h4>\n        </div>\n        <div class=\"card-body\">\n\n          <p class=\"card-text\">Gender : {{everything.gender}}\n            <br/> Alias : {{everything.aliases[0]}}</p>\n        </div>\n        <div class=\"text-center card-footer\">\n          <a href=\"javascript():void\" [routerLink]=\"['/singleView',everything.url.split('api/').pop()]\" class=\"btn btn-outline-primary\">Find Out More!</a>\n        </div>\n      </div>\n      <div *ngIf=\"everything.isbn\" class=\"card h-100\">\n        <!-- <a href=\"#\"><img class=\"card-img-top\" src=\"http://placehold.it/700x400\" alt=\"\"></a> -->\n        <div class=\"text-center card-header\">\n          <h4>{{everything.name ||\"Unnamed\"}}</h4>\n        </div>\n        <div class=\"card-body\">\n          <p class=\"card-text\">ISBN : {{everything.isbn}}</p>\n        </div>\n        <div class=\"text-center card-footer\">\n          <a href=\"javascript():void\" [routerLink]=\"['/singleView',everything.url.split('api/').pop()]\" class=\"btn btn-outline-secondary\">Find Out More!</a>\n        </div>\n      </div>\n      <div *ngIf=\"everything.region\" class=\"card h-100\">\n        <!-- <a href=\"#\"><img class=\"card-img-top\" src=\"http://placehold.it/700x400\" alt=\"\"></a> -->\n        <div class=\"text-center card-header\">\n          <h4>{{everything.name ||\"Unnamed\"}}</h4>\n        </div>\n        <div class=\"card-body\">\n          <p class=\"card-text\">Region : {{everything.region}}\n            <br/> Seats : {{everything.seats[0]}}</p>\n        </div>\n        <div class=\"text-center card-footer\">\n          <a href=\"javascript():void\" [routerLink]=\"['/singleView',everything.url.split('api/').pop()]\" class=\"btn btn-outline-dark\">Find Out More!</a>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- /.row -->\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__got_service__ = __webpack_require__("./src/app/got.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_mergeMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/mergeMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
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
    function HomeComponent(gotService, _route, router) {
        this.gotService = gotService;
        this._route = _route;
        this.router = router;
        this.all = [];
        this.characters = [];
        this.books = [];
        this.houses = [];
        this.p = 1;
        // for sorting
        this.key = 'name'; //set default
        this.reverse = false;
    }
    HomeComponent.prototype.sort = function (key) {
        this.key = key;
        this.reverse = !this.reverse;
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        // used mergeMAp for doing async operation
        this.gotService.getChar()
            .mergeMap(function (data) {
            _this.characters = data;
            console.log("Characters");
            return _this.gotService.getBooks();
        })
            .mergeMap(function (data) {
            _this.books = data;
            console.log("Books");
            return _this.gotService.getHouses();
        })
            .subscribe(function (data) {
            _this.houses = data;
            console.log("Houses");
            //ES6 array spread used
            _this.all = _this.characters.concat(_this.books, _this.houses);
            console.log("all", _this.all);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__got_service__["a" /* GotService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__got_service__["a" /* GotService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/single-view/single-view.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/single-view/single-view.component.html":
/***/ (function(module, exports) {

module.exports = "<br/>\n<br/>\n<br/>\n<br/>\n<div *ngIf=\"data.gender\" class=\"col-xs-12 text-center\">\n  <div style=\"color: dimgrey;\">\n    <h2>\n      {{ data.name || \"A Secret Character\" }}\n    </h2>\n    <hr>\n    <h4 *ngFor=\"let alias of data.aliases\">Known as : \"{{ alias || \"Data Unavailable\" }}\"</h4>\n    <h4>Gender : {{ data.gender || \"Data Unavailable\" }}</h4>\n    <h4> Born : {{ data.born || \"Data Unavailable\" }}</h4>\n    <h4>Culture : {{ data.culture || \"Data Unavailable\" }}</h4>\n    <h4>\n      Father :\n    </h4>\n      <h6>\n        <a target=\"_blank\" [routerLink]=\"['/singleView',data.father.split('api/').pop()]\" style=\"color: #81d0e7;\">{{ data.father || \"Data Unavailable\" }}</a>\n      </h6>\n    \n    <h4>\n      Mother :\n    </h4>\n      <h6>\n        <a target=\"_blank\" [routerLink]=\"['/singleView',data.mother.split('api/').pop()]\" style=\"color: #81d0e7;\">{{ data.mother || \"Data Unavailable\" }}</a>\n      </h6>\n    \n    <h4>\n      Spouse :\n    </h4>\n      <h6>\n        <a target=\"_blank\" [routerLink]=\"['/singleView',data.spouse.split('api/').pop()]\" style=\"color: #81d0e7;\">{{ data.spouse || \"Data Unavailable\"}}</a>\n      </h6>\n    \n    <h4>Played by : \"{{ data.playedBy[0] || \"Data Unavailable\"}}\"</h4>\n    <h4>Title : \"{{ data.titles[0] || \"Data Unavailable\"}}\"</h4>\n    <h4>Appeared in : \"{{ data.seasons || \"Data Unavailable\" }}\"</h4>\n  </div>\n</div>\n<div *ngIf=\"data.region\" class=\"col-xs-12 text-center\">\n  <div style=\"color: dimgrey;\">\n    <h4 style=\"margin: 10px 5px;\" ng-if='data.name != \"\"'>\n      <b> {{ data.name }} </b>\n      <hr>\n    </h4>\n    <h4>Region : {{ data.region || \"Data Unavailable\" }}</h4>\n    <h4>Seats : {{ data.seats[0] || \"Data Unavailable\" }}</h4>\n    <h4>Titles : {{ data.titles || \"Data Unavailable\" }}</h4>\n    <h4>Founded : {{ data.founded || \"Data Unavailable\" }}</h4>\n    <h4> Words: {{ data.words || \"Data Unavailable\" }}</h4>\n    <h4>\n      Heir :\n    </h4>\n    <a target=\"_blank\" [routerLink]=\"['/singleView',data.heir.split('api/').pop()]\">{{ data.heir || \"Data Unavailable\" }}</a>\n\n    <h4>\n      Current Lord :\n      <h6>\n        <a target=\"_blank\" [routerLink]=\"['/singleView',data.currentLord.split('api/').pop()]\">{{ data.currentLord || \"Data Unavailable\" }}</a>\n      </h6>\n    </h4>\n    <h4>\n      Overlord :\n      <h6>\n        <a target=\"_blank\" [routerLink]=\"['/singleView',data.overlord.split('api/').pop()]\">{{ data.overlord || \"Data Unavailable\" }}</a>\n      </h6>\n    </h4>\n    <p>Coat Of Arms : \"{{ data.coatOfArms || \"Data Unavailable\" }}\"</p>\n  </div>\n</div>\n<div *ngIf=\"data.isbn\" class=\"col-xs-12 text-center\">\n  <div style=\"color: dimgrey;\">\n    <h4 style=\"margin: 10px 5px;\" ng-if='data.name != \"\"'>\n      <b> {{ data.name }} </b>\n      <hr>\n    </h4>\n    <h4>Country : {{ data.country || \"Data Unavailable\" }}</h4>\n    <h4>ISBN : {{ data.isbn || \"Data Unavailable\" }}</h4>\n    <h4>Media Type : {{ data.mediaType || \"Data Unavailable\" }}</h4>\n    <h4>No. of Pages : {{ data.numberOfPages || \"Data Unavailable\" }}</h4>\n    <h4> Publisher: {{ data.publisher || \"Data Unavailable\" }}</h4>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/single-view/single-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__got_service__ = __webpack_require__("./src/app/got.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SingleViewComponent = /** @class */ (function () {
    function SingleViewComponent(_httpService, _route, router) {
        this._httpService = _httpService;
        this._route = _route;
        this.router = router;
        this.data = {};
    }
    SingleViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this._route.snapshot.paramMap.get('id');
        console.log("ididid", id);
        this._httpService.singleView(id).subscribe(function (data) {
            console.log("singleVieww", data);
            _this.data = data;
        });
    };
    SingleViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-single-view',
            template: __webpack_require__("./src/app/single-view/single-view.component.html"),
            styles: [__webpack_require__("./src/app/single-view/single-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__got_service__["a" /* GotService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SingleViewComponent);
    return SingleViewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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
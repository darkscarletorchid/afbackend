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

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        //   let isAuth  = this.authService.isAuth;
        //   if (isAuth) {
        //     this.router.navigate(['/register']);
        //   } else {
        //     this.router.navigate(['/quest']);
        //   }  
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_camera_ar_camera_ar_component__ = __webpack_require__("./src/app/components/camera-ar/camera-ar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_leaderboard_leaderboard_component__ = __webpack_require__("./src/app/components/leaderboard/leaderboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_canActivateAuthGuard_service__ = __webpack_require__("./src/app/services/canActivateAuthGuard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_progress_service__ = __webpack_require__("./src/app/services/progress.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_leaderboard_service__ = __webpack_require__("./src/app/services/leaderboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







//import { ModalModule } from 'ngx-bootstrap';
//import * as $ from 'jquery';
// Material Design Components


// Custom Components





// Services





var appRoutes = [
    { path: '', redirectTo: '/register', pathMatch: 'full' },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'quest', component: __WEBPACK_IMPORTED_MODULE_10__components_camera_ar_camera_ar_component__["a" /* CameraArComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_canActivateAuthGuard_service__["a" /* CanActivateAuthGuard */]] },
    { path: 'leaderboard', component: __WEBPACK_IMPORTED_MODULE_11__components_leaderboard_leaderboard_component__["a" /* LeaderboardComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_camera_ar_camera_ar_component__["a" /* CameraArComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_leaderboard_leaderboard_component__["a" /* LeaderboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_register_register_component__["a" /* RegisterComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["C" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["A" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["B" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["D" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["E" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["F" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["G" /* MatTooltipModule */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
                // material design modules
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["C" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["i" /* MatDividerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["A" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["B" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["D" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["E" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["F" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_material__["G" /* MatTooltipModule */]
                //bootstrap
                //ModalModule
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_15__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_16__services_progress_service__["a" /* ProgressService */],
                __WEBPACK_IMPORTED_MODULE_17__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_18__services_leaderboard_service__["a" /* LeaderboardService */],
                __WEBPACK_IMPORTED_MODULE_14__services_canActivateAuthGuard_service__["a" /* CanActivateAuthGuard */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NO_ERRORS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/camera-ar/camera-ar.component.css":
/***/ (function(module, exports) {

module.exports = ".result-circle {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    z-index: 10;\r\n}\r\n\r\n.spinner {\r\n    /*margin: 50% auto 0;*/\r\n    width: 70px;\r\n    text-align: center;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: calc(50% - 35px);\r\n}\r\n\r\n.spinner > div {\r\n        width: 18px;\r\n        height: 18px;\r\n        background-color: #FFF;\r\n        border-radius: 100%;\r\n        display: inline-block;\r\n        -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\r\n        animation: sk-bouncedelay 1.4s infinite ease-in-out both;\r\n    }\r\n\r\n.spinner .bounce1 {\r\n        -webkit-animation-delay: -0.32s;\r\n        animation-delay: -0.32s;\r\n    }\r\n\r\n.spinner .bounce2 {\r\n        -webkit-animation-delay: -0.16s;\r\n        animation-delay: -0.16s;\r\n    }\r\n\r\n@-webkit-keyframes sk-bouncedelay {\r\n    0%, 80%, 100% {\r\n        -webkit-transform: scale(0)\r\n    }\r\n\r\n    40% {\r\n        -webkit-transform: scale(1.0)\r\n    }\r\n}\r\n\r\n@keyframes sk-bouncedelay {\r\n    0%, 80%, 100% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n\r\n    40% {\r\n        -webkit-transform: scale(1.0);\r\n        transform: scale(1.0);\r\n    }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/camera-ar/camera-ar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\r\n    <div class=\"bounce1\"></div>\r\n    <div class=\"bounce2\"></div>\r\n    <div class=\"bounce3\"></div>\r\n</div>\r\n<svg width=\"500\" height=\"100\" class=\"result-circle\">\r\n    <g>\r\n        <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"white\" stroke-width=\"4\" fill=\"#9C27B0\" />\r\n        <text x=\"21\" y=\"60\" font-family=\"Verdana\" font-size=\"20\" fill=\"white\">{{this.actualCount}}</text>\r\n        <text x=\"46\" y=\"60\" font-family=\"Verdana\" font-size=\"20\" fill=\"white\">/11</text>\r\n        <text x=\"95\" y=\"57\" font-family=\"Verdana\" font-size=\"20\" fill=\"#9C27B0\">models found</text>\r\n        <line x1=\"90\" y1=\"60\" x2=\"230\" y2=\"60\" style=\"stroke:white;stroke-width:1\" />\r\n    </g>\r\n</svg>\r\n<a-scene class=\"scene-index\" embedded vr-mode-ui=\"enabled: false\" arjs=\"debugUIEnabled: false; sourceType: webcam; trackingMethod: best; detectionMode: mono_and_matrix; matrixCodeType: 3x3;\">\r\n    <a-assets>\r\n        <a-asset-item id=\"m-obj\" src=\"assets/models/Glasses2.obj\"></a-asset-item>\r\n        <a-asset-item id=\"m-mtl\" src=\"assets/models/Glasses2.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"a1-obj\" src=\"assets/models/GoldStar.obj\"></a-asset-item>\r\n        <a-asset-item id=\"a1-mtl\" src=\"assets/models/GoldStar.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"t-obj\" src=\"assets/models/Car2.obj\"></a-asset-item>\r\n        <a-asset-item id=\"t-mtl\" src=\"assets/models/Car2.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"e1-obj\" src=\"assets/models/Frisbee.obj\"></a-asset-item>\r\n        <a-asset-item id=\"e1-mtl\" src=\"assets/models/Frisbee.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"r-obj\" src=\"assets/models/Cat.obj\"></a-asset-item> <!--probably replace with lighter-->\r\n        <a-asset-item id=\"r-mtl\" src=\"assets/models/Cat.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"i1-obj\" src=\"assets/models/Cardboard.obj\"></a-asset-item>\r\n        <a-asset-item id=\"i1-mtl\" src=\"assets/models/Cardboard.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"a2-obj\" src=\"assets/models/King.obj\"></a-asset-item>\r\n        <a-asset-item id=\"a2-mtl\" src=\"assets/models/King.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"l-obj\" src=\"assets/models/SoapHolder.obj\"></a-asset-item>\r\n        <a-asset-item id=\"l-mtl\" src=\"assets/models/SoapHolder.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"i2-obj\" src=\"assets/models/PencilHolder.obj\"></a-asset-item>\r\n        <a-asset-item id=\"i2-mtl\" src=\"assets/models/PencilHolder.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"s-obj\" src=\"assets/models/Ring2.obj\"></a-asset-item>\r\n        <a-asset-item id=\"s-mtl\" src=\"assets/models/Ring2.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"e2-obj\" src=\"assets/models/Fork.obj\"></a-asset-item>\r\n        <a-asset-item id=\"e2-mtl\" src=\"assets/models/Fork.obj\"></a-asset-item>\r\n    </a-assets>\r\n\r\n    <!--TODO add animations for all models-->\r\n    <a-marker preset=\"custom\" url=\"assets/markers/patterns/M.patt\" id=\"letter-m\" title=\"glasses\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"1 1 1\"\r\n                  rotation=\"0 0 0\"\r\n                  obj-model=\"obj: #m-obj; mtl: #m-mtl\">\r\n            <a-animation attribute=\"rotation\" direction=\"alternate\" from=\"75 -90 90\" to=\"105 -90 90\" dur=\"2500\" easing=\"ease-sine\" repeat=\"indefinite\"></a-animation>\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker preset=\"custom\" url=\"assets/markers/patterns/A1.patt\" id=\"letter-a1\" title=\"a golden star\" registerevents>\r\n        <a-entity id=\"model\"\r\n                  position=\"0 0 0\"\r\n                  scale=\"1 1 1\"\r\n                  rotation=\"0 0 0\"\r\n                  obj-model=\"obj: #a1-obj; mtl: #a1-mtl\">\r\n            <a-animation attribute=\"scale\" from=\"1 1 1\" to=\"1.5 1.5 1.5\" direction=\"alternate\" dur=\"1000\" easing=\"linear\" repeat=\"indefinite\"></a-animation>\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker preset=\"custom\" url=\"assets/markers/patterns/T.patt\" id=\"letter-t\" title=\"a car\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"0.8 0.8 0.8\"\r\n                  rotation=\"0 90 -90\"\r\n                  obj-model=\"obj: #t-obj; mtl: #t-mtl\">\r\n            <a-animation attribute=\"position\" from=\"2 0 0\" to=\"-2 0 0\" dur=\"5000\" direction=\"alternate\" easing=\"linear\" repeat=\"indefinite\"></a-animation>\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker preset=\"custom\" url=\"assets/markers/patterns/E1.patt\" id=\"letter-e1\" title=\"a frisbee\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"1 1 1\"\r\n                  rotation=\"0 0 0\"\r\n                  obj-model=\"obj: #e1-obj; mtl: #e1-mtl\">\r\n            <a-animation attribute=\"rotation\" from=\"0 0 0\" to=\"0 360 0\" dur=\"5000\" direction=\"\" easing=\"linear\" repeat=\"indefinite\"></a-animation>\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker preset=\"custom\" url=\"assets/markers/patterns/R.patt\" id=\"letter-r\" title=\"a toy cat\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"0.8 0.8 0.8\"\r\n                  rotation=\"90 0 0\"\r\n                  obj-model=\"obj: #r-obj; mtl: #r-mtl\">\r\n            <a-animation attribute=\"position\" from=\"2 0 0\" to=\"-2 0 0\" dur=\"5000\" direction=\"alternate\" easing=\"linear\" repeat=\"indefinite\"></a-animation>\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker preset=\"custom\" url=\"assets/markers/patterns/I1.patt\" id=\"letter-i1\" title=\"a cardboard headset\" registerevents>\r\n        <a-entity position=\"0 0 -1\"\r\n                  scale=\"1 1 1\"\r\n                  rotation=\"0 0 0\"\r\n                  obj-model=\"obj: #i1-obj; mtl: #i1-mtl\">\r\n            <!--<a-animation attribute=\"rotation\" from=\"0 0 0\" to=\"0 0 0\" dur=\"5000\" easing=\"linear\" repeat=\"indefinite\"></a-animation>-->\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker preset=\"custom\" url=\"assets/markers/patterns/A2.patt\" id=\"letter-a2\" title=\"a chess king\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"0.9 0.9 0.9\"\r\n                  rotation=\"-90 0 0\"\r\n                  obj-model=\"obj: #a2-obj; mtl: #a2-mtl\">\r\n            <a-animation attribute=\"position\" from=\"-3 0 0\" to=\"3 0 0\" dur=\"5000\" direction=\"alternate\" easing=\"linear\" repeat=\"indefinite\"></a-animation>\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker preset=\"custom\" url=\"assets/markers/patterns/L.patt\" id=\"letter-l\" title=\"a soap holder\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"1 1 1\"\r\n                  rotation=\"0 0 10\"\r\n                  obj-model=\"obj: #l-obj; mtl: #l-mtl\">\r\n            <a-animation attribute=\"scale\" from=\"1 1 1\" to=\"1.2 1.2 1.2\" direction=\"alternate\" dur=\"1000\" easing=\"linear\" repeat=\"indefinite\"></a-animation>\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker preset=\"custom\" url=\"assets/markers/patterns/I2.patt\" id=\"letter-i2\" title=\"a pencil holder\" registerevents>\r\n        <a-entity position=\"0 -4 3\"\r\n                  scale=\"1 1 1\"\r\n                  rotation=\"-90 0 0\"\r\n                  obj-model=\"obj: #i2-obj; mtl: #i2-mtl\">\r\n        </a-entity>\r\n        <a-animation attribute=\"position\" from=\"-2 0 0\" to=\"2 0 0\" dur=\"5000\" direction=\"alternate\" easing=\"linear\" repeat=\"indefinite\"></a-animation>\r\n    </a-marker>\r\n    <a-marker preset=\"custom\" url=\"assets/markers/patterns/S.patt\" id=\"letter-s\" title=\"a ring\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"1 1 1\"\r\n                  rotation=\"45 0 0\"\r\n                  obj-model=\"obj: #s-obj; mtl: #s-mtl\">\r\n            <a-animation attribute=\"scale\" from=\"1 1 1\" to=\"1.5 1.5 1.5\" direction=\"alternate\" dur=\"1000\" easing=\"linear\" repeat=\"indefinite\"></a-animation>\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker preset=\"custom\" url=\"assets/markers/patterns/E2.patt\" id=\"letter-e2\" title=\"a fork\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                scale=\"2.5 2.5 2.5\"\r\n                rotation=\"0 180 0\"\r\n                obj-model=\"obj: #e2-obj; mtl: #e2-mtl\">\r\n            <a-animation attribute=\"rotation\" from=\"25 180 0\" to=\"-25 180 0\" direction=\"alternate\" dur=\"2500\" easing=\"linear\" repeat=\"indefinite\"></a-animation>\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-entity camera position=\"0 0 15\"></a-entity>\r\n</a-scene>\r\n"

/***/ }),

/***/ "./src/app/components/camera-ar/camera-ar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CameraArComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__("./src/app/models/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_progress_service__ = __webpack_require__("./src/app/services/progress.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CameraArComponent = /** @class */ (function () {
    function CameraArComponent(progressService, userService, snackBar) {
        this.progressService = progressService;
        this.userService = userService;
        this.snackBar = snackBar;
        this.actualCount = '00';
        this.userItem = new __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* UserItem */]();
        this.loading = false;
    }
    CameraArComponent.prototype.ngOnInit = function () {
        this.user = this.userService.getCurrentUser();
        this.getProgressByUser(this.user.id);
    };
    CameraArComponent.prototype.onMarkerFound = function (target) {
        var _this = this;
        this.userItem.marker = target.id;
        this.title = target.title;
        this.userItem.token = this.userService.getCurrentUserToken();
        this.progressService.addToProgress(this.userItem)
            .subscribe(function (result) { return _this.progressService.getProgressByUser(_this.user.id)
            .subscribe(function (data) {
            _this.itemsFound = data.markers;
            var prevCount = _this.actualCount;
            _this.actualCount = data.markers.length.toString();
            if (data.markers.length < 10) {
                _this.actualCount = '0' + _this.actualCount;
            }
            _this.progress = data.progress;
            if (_this.actualCount !== prevCount) {
                var output = 'You found ' + _this.title + '!';
                _this.snackBar.open(output, '', { duration: 3000, panelClass: 'custom-snackbar' });
            }
        }); });
    };
    CameraArComponent.prototype.getProgressByUser = function (id) {
        var _this = this;
        this.progressService.getProgressByUser(id)
            .subscribe(function (data) {
            _this.itemsFound = data.markers;
            _this.actualCount = data.markers.length.toString();
            if (data.markers.length < 10) {
                _this.actualCount = '0' + _this.actualCount;
            }
        }, function () { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* HostListener */])('markerFound', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CameraArComponent.prototype, "onMarkerFound", null);
    CameraArComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-camera-ar',
            template: __webpack_require__("./src/app/components/camera-ar/camera-ar.component.html"),
            styles: [__webpack_require__("./src/app/components/camera-ar/camera-ar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_progress_service__["a" /* ProgressService */], __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__angular_material__["z" /* MatSnackBar */]])
    ], CameraArComponent);
    return CameraArComponent;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/***/ (function(module, exports) {

module.exports = ".float-left {\r\n\r\n}\r\n\r\n.float-right {\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n    <span class=\"float-left\">Materialise 3D-printing AR Quest</span>\r\n</mat-toolbar>\r\n"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/leaderboard/leaderboard.component.css":
/***/ (function(module, exports) {

module.exports = "/* .example-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 300px;\r\n}\r\n\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 500px;\r\n}\r\n\r\n.mat-header-cell.mat-sort-header-sorted {\r\n  color: black;\r\n} */\r\n.example-container {\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: column;\r\n          flex-direction: column;\r\n  height: 100%;\r\n  max-width: 100%;\r\n  margin: 2% 5%;\r\n}\r\n.mat-table {\r\n  overflow: auto;\r\n  max-height: 100%;\r\n}\r\n.txt-cenetr {\r\n  text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/components/leaderboard/leaderboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n\r\n<div class=\"example-container\">\r\n  <h1 class=\"txt-cenetr\">Leaderboard</h1>\r\n  <h3>Last updated: {{lastUpdated | date:'short'}}</h3>\r\n\r\n  <mat-table #table [dataSource]=\"leaders\" class=\"mat-elevation-z8\">\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"no\">\r\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.no}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"userName\">\r\n      <mat-header-cell *matHeaderCellDef> User </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.userName}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Found Items Column -->\r\n    <ng-container matColumnDef=\"itemsFound\">\r\n      <mat-header-cell *matHeaderCellDef> Items found </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.itemsFound}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Found Items Column -->\r\n    <ng-container matColumnDef=\"progress\">\r\n      <mat-header-cell *matHeaderCellDef> Progress </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\"> {{element.progress}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n  </mat-table>\r\n</div>"

/***/ }),

/***/ "./src/app/components/leaderboard/leaderboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/TimerObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_leaderboard_service__ = __webpack_require__("./src/app/services/leaderboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent(leaderboardService) {
        this.leaderboardService = leaderboardService;
        this.leaders = [];
        this.interval = 60000 * 5; //5 min
        this.displayedColumns = ['no', 'userName', 'itemsFound', 'progress'];
    }
    LeaderboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.lastUpdated = new Date();
        __WEBPACK_IMPORTED_MODULE_1_rxjs_observable_TimerObservable__["a" /* TimerObservable */].create(0, this.interval).subscribe(function () {
            _this.leaderboardService.getTopUser().subscribe(function (data) {
                _this.leaders = data;
            }, function () {
                console.log("error occured");
            });
            _this.lastUpdated = new Date(Date.now());
        });
    };
    LeaderboardComponent.prototype.getLeaderboard = function () {
        return new Array();
    };
    LeaderboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-leaderboard',
            template: __webpack_require__("./src/app/components/leaderboard/leaderboard.component.html"),
            styles: [__webpack_require__("./src/app/components/leaderboard/leaderboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_leaderboard_service__["a" /* LeaderboardService */]])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ".register-form {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    text-align: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n    .register-form > * {\r\n        margin: 2% 10% 0% 10%;\r\n    }\r\n\r\n    .form-container {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    height: 80vh;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<section class=\"form-container\">\r\n    <form class=\"register-form\" (ngSubmit)=\"onSubmit()\" #registerForm=\"ngForm\">\r\n        <h1>Quest Registration</h1>\r\n\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"First name\" type=\"text\" required [(ngModel)]=\"model.firstName\" name=\"firstName\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"Last Name\" type=\"text\" required [(ngModel)]=\"model.lastName\" name=\"lastName\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field>\r\n            <input matInput placeholder=\"E-mail\" type=\"text\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" [(ngModel)]=\"model.email\"\r\n                   name=\"email\">\r\n        </mat-form-field>\r\n\r\n        <button type=\"submit\" mat-button [disabled]=\"!registerForm.form.valid || loading\">Start quest 🚀</button>\r\n    </form>\r\n</section>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_user__ = __webpack_require__("./src/app/models/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    //snackBar: MatSnackBar = {};
    function RegisterComponent(userService, router, snackBar) {
        this.userService = userService;
        this.router = router;
        this.snackBar = snackBar;
        this.model = new __WEBPACK_IMPORTED_MODULE_4__models_user__["a" /* User */]();
        this.loading = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        this.register();
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        this.loading = true;
        this.userService.create(this.model).subscribe(function (data) {
            _this.snackBar.open("Registration completed! The quest will begin soon!", "", { duration: 3000, panelClass: "custom-snackbar" });
            _this.router.navigate(["/quest"]);
        }, function (error) {
            _this.snackBar.open(error.error, "OK", { panelClass: "custom-snackbar" });
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["z" /* MatSnackBar */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/models/item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ItemProgress */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserItem; });
var ItemProgress = /** @class */ (function () {
    function ItemProgress() {
    }
    return ItemProgress;
}());

var UserItem = /** @class */ (function () {
    function UserItem() {
    }
    return UserItem;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
/* unused harmony export UserDto */
var User = /** @class */ (function () {
    function User(init) {
        this.id = 0;
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        Object.assign(this, init);
    }
    return User;
}());

var UserDto = /** @class */ (function () {
    function UserDto() {
    }
    return UserDto;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.logout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
    };
    AuthService.prototype.isAuth = function () {
        var token = localStorage.getItem('token');
        if (token) {
            return true;
        }
        return false;
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */])()
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/canActivateAuthGuard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateAuthGuard = /** @class */ (function () {
    function CanActivateAuthGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    CanActivateAuthGuard.prototype.canActivate = function () {
        if (!this.authService.isAuth()) {
            this.router.navigate(['register']);
            return false;
        }
        return true;
    };
    CanActivateAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
    ], CanActivateAuthGuard);
    return CanActivateAuthGuard;
}());



/***/ }),

/***/ "./src/app/services/leaderboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LeaderboardService; });
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



var LeaderboardService = /** @class */ (function () {
    function LeaderboardService(http) {
        this.http = http;
        this.apiPath = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].apiEndpoint + "/user";
    }
    LeaderboardService.prototype.getTopUser = function () {
        return this.http.get(this.apiPath).map(function (data) {
            var leaders = data.map(function (user, i) {
                return {
                    no: i + 1,
                    userName: user.userName,
                    progress: user.progress.slice(0, user.progress.lastIndexOf('.')),
                    itemsFound: user.markers.length
                };
            });
            return leaders;
        });
    };
    ;
    LeaderboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LeaderboardService);
    return LeaderboardService;
}());



/***/ }),

/***/ "./src/app/services/progress.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
        'Content-Type': 'application/json',
    })
};
var ProgressService = /** @class */ (function () {
    function ProgressService(httpClient) {
        this.httpClient = httpClient;
    }
    ProgressService.prototype.getProgressByUser = function (id) {
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiEndpoint + "/user/" + id).map(function (data) {
            return data;
        });
    };
    ProgressService.prototype.addToProgress = function (userItem) {
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiEndpoint + "/markers", userItem, httpOptions);
    };
    ProgressService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ProgressService);
    return ProgressService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.apiPath = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiEndpoint + "/user";
    }
    UserService.prototype.getCurrentUserToken = function () {
        return localStorage.getItem('token');
    };
    UserService.prototype.getCurrentUser = function () {
        return JSON.parse(localStorage.getItem('currentUser'));
    };
    UserService.prototype.create = function (user) {
        var userData = { firstname: user.firstName, lastName: user.lastName, email: user.email };
        return this.http.post(this.apiPath, userData)
            .map(function (data) {
            if (data && data.token) {
                localStorage.setItem('token', data.token);
                user.id = data.id;
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return data;
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    apiEndpoint: "api"
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]).catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
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

module.exports = "<router-outlet></router-outlet>\n"

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

module.exports = ".result-circle {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 10;\n}\n\n.spinner {\n    /*margin: 50% auto 0;*/\n    width: 200px;\n    text-align: center;\n    position: fixed;\n    top: 50%;\n    left: calc(50% - 100px);\n}\n\n.spinner > div {\n        width: 18px;\n        height: 18px;\n        background-color: #FFF;\n        border-radius: 100%;\n        display: inline-block;\n        -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n        animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n    }\n\n.spinner .bounce1 {\n        -webkit-animation-delay: -0.32s;\n        animation-delay: -0.32s;\n    }\n\n.spinner .bounce2 {\n        -webkit-animation-delay: -0.16s;\n        animation-delay: -0.16s;\n    }\n\n@-webkit-keyframes sk-bouncedelay {\n    0%, 80%, 100% {\n        -webkit-transform: scale(0)\n    }\n\n    40% {\n        -webkit-transform: scale(1.0)\n    }\n}\n\n@keyframes sk-bouncedelay {\n    0%, 80%, 100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n\n    40% {\n        -webkit-transform: scale(1.0);\n        transform: scale(1.0);\n    }\n}\n"

/***/ }),

/***/ "./src/app/components/camera-ar/camera-ar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\r\n    <p>Please wait while models are loading</p>\r\n    <div class=\"bounce1\"></div>\r\n    <div class=\"bounce2\"></div>\r\n    <div class=\"bounce3\"></div>\r\n</div>\r\n<svg width=\"500\" height=\"100\" class=\"result-circle\">\r\n    <g>\r\n        <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"white\" stroke-width=\"4\" fill=\"#9C27B0\" />\r\n        <text x=\"21\" y=\"60\" font-family=\"Verdana\" font-size=\"20\" fill=\"white\">{{this.actualCount}}</text>\r\n        <text x=\"46\" y=\"60\" font-family=\"Verdana\" font-size=\"20\" fill=\"white\">/11</text>\r\n        <text x=\"95\" y=\"57\" font-family=\"Verdana\" font-size=\"20\" fill=\"#9C27B0\">models found</text>\r\n        <line x1=\"90\" y1=\"60\" x2=\"230\" y2=\"60\" style=\"stroke:white;stroke-width:1\" />\r\n    </g>\r\n</svg>\r\n<a-scene shadow=\"type: pcfsoft\" class=\"scene-index\" embedded vr-mode-ui=\"enabled: false\" arjs=\"debugUIEnabled: false; sourceType: webcam; trackingMethod: best; detectionMode: mono_and_matrix; matrixCodeType: 3x3;\">\r\n    <a-assets>\r\n        <!--<a-asset-item id=\"deer-glb\" src=\"/assets/models/Deer.glb\"></a-asset-item>-->\r\n    </a-assets>\r\n\r\n    <!--animals-->\r\n    <a-marker type='barcode' value='1' id=\"deer\" title=\"a deer\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"1 1 1\"\r\n                  rotation=\"0 -90 90\"\r\n                  gltf-model=\"url(/assets/models/Deer.glb)\">\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker type='barcode' value='3' id=\"fox\" title=\"a fox\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"0.5 0.5 0.5\"\r\n                  rotation=\"0 -90 90\"\r\n                  gltf-model=\"url(/assets/models/Fox.glb)\">\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker type='barcode' value='4' id=\"shark\" title=\"a shark\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"0.5 0.5 0.5\"\r\n                  rotation=\"0 0 0\"\r\n                  gltf-model=\"url(/assets/models/Shark.glb)\">\r\n        </a-entity>\r\n    </a-marker>\r\n    <!--robots-->\r\n    <!--<a-marker type='barcode' value='43' id=\"robot1\" title=\"a robot\" registerevents>\r\n        <a-entity position=\"0 0 1\"\r\n                  scale=\"0.1 0.1 0.1\"\r\n                  rotation=\"0 0 0\"\r\n                  gltf-model=\"url(/assets/models/IronMan.glb)\">\r\n        </a-entity>\r\n    </a-marker>-->\r\n    <!--<a-marker type='barcode' value='19' id=\"robot2\" title=\"a robot\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"1 1 1\"\r\n                  rotation=\"-90 0 0\"\r\n                  gltf-model=\"url(/assets/models/Robot2.glb)\">\r\n        </a-entity>\r\n    </a-marker>-->\r\n    <!--<a-marker type='barcode' value='28' id=\"robot3\" title=\"a robot\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"3 3 3\"\r\n                  rotation=\"0 0 10\"\r\n                  obj-model=\"obj: #robot3-obj; mtl: #robot3-mtl\">\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker type='barcode' value='38' id=\"robot4\" title=\"a robot\" registerevents>\r\n        <a-entity position=\"0 -4 3\"\r\n                  scale=\"2 2 2\"\r\n                  rotation=\"-90 0 0\"\r\n                  obj-model=\"obj: #robot4-obj; mtl: #robot4-mtl\">\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker type='barcode' value='39' id=\"robot5\" title=\"a robot\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"3 3 3\"\r\n                  rotation=\"45 0 0\"\r\n                  obj-model=\"obj: #robot5-obj; mtl: #robot5-mtl\">\r\n        </a-entity>\r\n    </a-marker>-->\r\n    <!--characters-->\r\n    <a-marker type='barcode' value='46' id=\"pikachu\" title=\"Pikachu\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"1 1 1\"\r\n                  rotation=\"-90 0 0\"\r\n                  gltf-model=\"url(/assets/models/Pikachu.glb)\">\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker type='barcode' value='54' id=\"bb8\" title=\"bb8\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"2 2 2\"   \r\n                  rotation=\"0 -90 90\"\r\n                  gltf-model=\"url(/assets/models/BB8.glb)\">\r\n        </a-entity>\r\n    </a-marker>\r\n\r\n    <a-marker type='barcode' value='35' id=\"lego\" title=\"Lego Man\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"1 1 1\"\r\n                  rotation=\"-90 -90 90\"\r\n                  gltf-model=\"url(/assets/models/Lego.glb)\">\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-entity camera position=\"0 0 15\"></a-entity>\r\n</a-scene>\r\n"

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
                if (_this.actualCount === '11') {
                    setTimeout(function () {
                        _this.snackBar.open("You found all models! Well done!", '', { duration: 3000, panelClass: 'custom-snackbar' });
                    }, 3000);
                }
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

module.exports = ".float-left {\n\n}\n\n.float-right {\n\n}\n"

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <span class=\"float-left\">Materialise 3D-printing AR Quest</span>\n</mat-toolbar>\n"

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

module.exports = "/* .example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n\n.mat-header-cell.mat-sort-header-sorted {\n  color: black;\n} */\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  max-width: 100%;\n  margin: 2% 5%;\n}\n.mat-table {\n  overflow: auto;\n  max-height: 100%;\n}\n.txt-cenetr {\n  text-align: center;\n}"

/***/ }),

/***/ "./src/app/components/leaderboard/leaderboard.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<div class=\"example-container\">\n  <h1 class=\"txt-cenetr\">Leaderboard</h1>\n  <h3>Last updated: {{lastUpdated | date:'short'}}</h3>\n\n  <mat-table #table [dataSource]=\"leaders\" class=\"mat-elevation-z8\">\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"no\">\n      <mat-header-cell *matHeaderCellDef> No. </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.no}} </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"userName\">\n      <mat-header-cell *matHeaderCellDef> User </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.userName}} </mat-cell>\n    </ng-container>\n\n    <!-- Found Items Column -->\n    <ng-container matColumnDef=\"itemsFound\">\n      <mat-header-cell *matHeaderCellDef> Items found </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.itemsFound}} </mat-cell>\n    </ng-container>\n\n    <!-- Found Items Column -->\n    <ng-container matColumnDef=\"progress\">\n      <mat-header-cell *matHeaderCellDef> Progress </mat-header-cell>\n      <mat-cell *matCellDef=\"let element\"> {{element.progress}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n  </mat-table>\n</div>"

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

module.exports = ".register-form {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    text-align: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n    .register-form > * {\n        margin: 2% 10% 0% 10%;\n    }\n\n    .form-container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    height: 80vh;\n}\n"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<section class=\"form-container\">\n    <form class=\"register-form\" (ngSubmit)=\"onSubmit()\" #registerForm=\"ngForm\">\n        <h1>Quest Registration</h1>\n\n        <mat-form-field>\n            <input matInput placeholder=\"First name\" type=\"text\" required [(ngModel)]=\"model.firstName\" name=\"firstName\">\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"Last Name\" type=\"text\" required [(ngModel)]=\"model.lastName\" name=\"lastName\">\n        </mat-form-field>\n\n        <mat-form-field>\n            <input matInput placeholder=\"E-mail\" type=\"text\" required pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" [(ngModel)]=\"model.email\"\n                   name=\"email\">\n        </mat-form-field>\n\n        <button type=\"submit\" mat-button [disabled]=\"!registerForm.form.valid || loading\">Start quest 🚀</button>\n    </form>\n</section>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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
    AuthService.prototype.getAuthorizationHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
            'Content-Type': 'application/json',
        });
        var authHeaders = headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
        var httpOptions = {
            headers: authHeaders
        };
        return httpOptions;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
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




var LeaderboardService = /** @class */ (function () {
    function LeaderboardService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.apiPath = __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].apiEndpoint + "/user";
    }
    LeaderboardService.prototype.getTopUser = function () {
        var _this = this;
        var httpOptions = this.authService.getAuthorizationHeaders();
        return this.http.get(this.apiPath, httpOptions).map(function (data) {
            var leaders = data.map(function (user, i) {
                return {
                    no: i + 1,
                    userName: user.userName,
                    progress: _this.formatProgress(user.progress),
                    itemsFound: user.markers.length
                };
            });
            return leaders;
        });
    };
    ;
    LeaderboardService.prototype.formatProgress = function (progress) {
        var index = progress.lastIndexOf('.');
        if (index === -1)
            return progress;
        return progress.slice(0, index);
    };
    LeaderboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProgressService = /** @class */ (function () {
    function ProgressService(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
    }
    ProgressService.prototype.getProgressByUser = function (id) {
        var httpOptions = this.authService.getAuthorizationHeaders();
        return this.httpClient.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/user/" + id, httpOptions).map(function (data) {
            return data;
        });
    };
    ProgressService.prototype.addToProgress = function (userItem) {
        var httpOptions = this.authService.getAuthorizationHeaders();
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].apiEndpoint + "/markers", userItem, httpOptions);
    };
    ProgressService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
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
    function UserService(http, authService) {
        this.http = http;
        this.authService = authService;
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
        var httpOptions = this.authService.getAuthorizationHeaders();
        return this.http.post(this.apiPath, userData, httpOptions)
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__auth_service__["a" /* AuthService */]])
    ], UserService);
    return UserService;
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
//# sourceMappingURL=main.bundle.js.map
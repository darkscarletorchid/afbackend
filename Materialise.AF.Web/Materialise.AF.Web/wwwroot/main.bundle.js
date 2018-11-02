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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
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
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [auth_service_1.AuthService, router_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var table_1 = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var animations_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
//import { ModalModule } from 'ngx-bootstrap';
//import * as $ from 'jquery';
// Material Design Components
__webpack_require__("./node_modules/hammerjs/hammer.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
// Custom Components
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var camera_ar_component_1 = __webpack_require__("./src/app/components/camera-ar/camera-ar.component.ts");
var leaderboard_component_1 = __webpack_require__("./src/app/components/leaderboard/leaderboard.component.ts");
var header_component_1 = __webpack_require__("./src/app/components/header/header.component.ts");
var register_component_1 = __webpack_require__("./src/app/components/register/register.component.ts");
// Services
var canActivateAuthGuard_service_1 = __webpack_require__("./src/app/services/canActivateAuthGuard.service.ts");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var progress_service_1 = __webpack_require__("./src/app/services/progress.service.ts");
var user_service_1 = __webpack_require__("./src/app/services/user.service.ts");
var leaderboard_service_1 = __webpack_require__("./src/app/services/leaderboard.service.ts");
var appRoutes = [
    { path: '', redirectTo: '/register', pathMatch: 'full' },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'quest', component: camera_ar_component_1.CameraArComponent, canActivate: [canActivateAuthGuard_service_1.CanActivateAuthGuard] },
    { path: 'leaderboard', component: leaderboard_component_1.LeaderboardComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                camera_ar_component_1.CameraArComponent,
                leaderboard_component_1.LeaderboardComponent,
                header_component_1.HeaderComponent,
                register_component_1.RegisterComponent
            ],
            exports: [
                table_1.CdkTableModule,
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatStepperModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatDividerModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                http_1.HttpClientModule,
                router_1.RouterModule.forRoot(appRoutes),
                // material design modules
                material_1.MatNativeDateModule,
                material_1.MatAutocompleteModule,
                material_1.MatButtonModule,
                material_1.MatButtonToggleModule,
                material_1.MatCardModule,
                material_1.MatCheckboxModule,
                material_1.MatChipsModule,
                material_1.MatStepperModule,
                material_1.MatDatepickerModule,
                material_1.MatDialogModule,
                material_1.MatDividerModule,
                material_1.MatExpansionModule,
                material_1.MatGridListModule,
                material_1.MatIconModule,
                material_1.MatInputModule,
                material_1.MatListModule,
                material_1.MatMenuModule,
                material_1.MatNativeDateModule,
                material_1.MatPaginatorModule,
                material_1.MatProgressBarModule,
                material_1.MatProgressSpinnerModule,
                material_1.MatRadioModule,
                material_1.MatRippleModule,
                material_1.MatSelectModule,
                material_1.MatSidenavModule,
                material_1.MatSliderModule,
                material_1.MatSlideToggleModule,
                material_1.MatSnackBarModule,
                material_1.MatSortModule,
                material_1.MatTableModule,
                material_1.MatTabsModule,
                material_1.MatToolbarModule,
                material_1.MatTooltipModule
                //bootstrap
                //ModalModule
            ],
            providers: [
                auth_service_1.AuthService,
                progress_service_1.ProgressService,
                user_service_1.UserService,
                leaderboard_service_1.LeaderboardService,
                canActivateAuthGuard_service_1.CanActivateAuthGuard
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA, core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/components/camera-ar/camera-ar.component.css":
/***/ (function(module, exports) {

module.exports = ".result-circle {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 10;\n}\n\n.spinner {\n    /*margin: 50% auto 0;*/\n    width: 200px;\n    text-align: center;\n    position: fixed;\n    top: 50%;\n    left: calc(50% - 100px);\n}\n\n.spinner > div {\n        width: 18px;\n        height: 18px;\n        background-color: #FFF;\n        border-radius: 100%;\n        display: inline-block;\n        -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n        animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n    }\n\n.spinner .bounce1 {\n        -webkit-animation-delay: -0.32s;\n        animation-delay: -0.32s;\n    }\n\n.spinner .bounce2 {\n        -webkit-animation-delay: -0.16s;\n        animation-delay: -0.16s;\n    }\n\n@-webkit-keyframes sk-bouncedelay {\n    0%, 80%, 100% {\n        -webkit-transform: scale(0)\n    }\n\n    40% {\n        -webkit-transform: scale(1.0)\n    }\n}\n\n@keyframes sk-bouncedelay {\n    0%, 80%, 100% {\n        -webkit-transform: scale(0);\n        transform: scale(0);\n    }\n\n    40% {\n        -webkit-transform: scale(1.0);\n        transform: scale(1.0);\n    }\n}\n"

/***/ }),

/***/ "./src/app/components/camera-ar/camera-ar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner\">\r\n    <p>Please wait while models are loading</p>\r\n    <div class=\"bounce1\"></div>\r\n    <div class=\"bounce2\"></div>\r\n    <div class=\"bounce3\"></div>\r\n</div>\r\n<svg width=\"500\" height=\"100\" class=\"result-circle\">\r\n    <g>\r\n        <circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"white\" stroke-width=\"4\" fill=\"#9C27B0\" />\r\n        <text x=\"21\" y=\"60\" font-family=\"Verdana\" font-size=\"20\" fill=\"white\">{{this.actualCount}}</text>\r\n        <text x=\"46\" y=\"60\" font-family=\"Verdana\" font-size=\"20\" fill=\"white\">/11</text>\r\n        <text x=\"95\" y=\"57\" font-family=\"Verdana\" font-size=\"20\" fill=\"#9C27B0\">models found</text>\r\n        <line x1=\"90\" y1=\"60\" x2=\"230\" y2=\"60\" style=\"stroke:white;stroke-width:1\" />\r\n    </g>\r\n</svg>\r\n<a-scene  shadow=\"type: pcfsoft\" class=\"scene-index\" embedded vr-mode-ui=\"enabled: false\" arjs=\"debugUIEnabled: false; sourceType: webcam; trackingMethod: best; detectionMode: mono_and_matrix; matrixCodeType: 3x3;\" >\r\n    <a-assets>\r\n        <!--animals-->\r\n        <a-asset-item id=\"penguin-obj\" src=\"assets/models/Penguin.obj\"></a-asset-item>\r\n        <a-asset-item id=\"penguin-mtl\" src=\"assets/models/Penguin.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"crab-obj\" src=\"assets/models/Crab.obj\"></a-asset-item>\r\n        <a-asset-item id=\"crab-mtl\" src=\"assets/models/Crab.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"fox-obj\" src=\"assets/models/Fox.obj\"></a-asset-item>\r\n        <a-asset-item id=\"fox-mtl\" src=\"assets/models/Fox.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"lizard-obj\" src=\"assets/models/Lizard.obj\"></a-asset-item>\r\n        <a-asset-item id=\"lizard-mtl\" src=\"assets/models/Lizard.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"pug-obj\" src=\"assets/models/Pug.obj\"></a-asset-item>\r\n        <a-asset-item id=\"pug-mtl\" src=\"assets/models/Pug.mtl\"></a-asset-item>\r\n\r\n        <!--robots-->\r\n        <a-asset-item id=\"robot1-obj\" src=\"assets/models/Robot1.obj\"></a-asset-item>\r\n        <a-asset-item id=\"robot1-mtl\" src=\"assets/models/Robot1.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"robot2-obj\" src=\"assets/models/Robot2.obj\"></a-asset-item>\r\n        <a-asset-item id=\"robot2-mtl\" src=\"assets/models/Robot2.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"robot3-obj\" src=\"assets/models/Robot3.obj\"></a-asset-item>\r\n        <a-asset-item id=\"robot3-mtl\" src=\"assets/models/Robot3.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"robot4-obj\" src=\"assets/models/Robot4.obj\"></a-asset-item>\r\n        <a-asset-item id=\"robot4-mtl\" src=\"assets/models/Robot4.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"robot5-obj\" src=\"assets/models/Robot5.obj\"></a-asset-item>\r\n        <a-asset-item id=\"robot5-mtl\" src=\"assets/models/Robot5.mtl\"></a-asset-item>\r\n\r\n        <!--characters-->\r\n        <a-asset-item id=\"night-king-obj\" src=\"assets/models/NightKing.obj\"></a-asset-item>\r\n        <a-asset-item id=\"night-king-mtl\" src=\"assets/models/NightKing.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"r2d2-obj\" src=\"assets/models/R2D2.obj\"></a-asset-item>\r\n        <a-asset-item id=\"r2d2-mtl\" src=\"assets/models/R2D2.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"rick-morty-obj\" src=\"assets/models/RickAndMorty.obj\"></a-asset-item>\r\n        <a-asset-item id=\"rick-morty-mtl\" src=\"assets/models/RickAndMorty.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"robocop-obj\" src=\"assets/models/Robocop.obj\"></a-asset-item>\r\n        <a-asset-item id=\"robocop-mtl\" src=\"assets/models/Robocop.mtl\"></a-asset-item>\r\n        <a-asset-item id=\"sponge-bob-obj\" src=\"assets/models/SpongeBob.obj\"></a-asset-item>\r\n        <a-asset-item id=\"sponge-bob-mtl\" src=\"assets/models/SpongeBob.mtl\"></a-asset-item>\r\n    </a-assets>\r\n\r\n    <!--animals-->\r\n    <a-marker type='barcode' value='1' id=\"penguin\" title=\"a penguin\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"8 8 8\"\r\n                  rotation=\"0 0 0\"\r\n                  obj-model=\"obj: #penguin-obj; mtl: #penguin-mtl\">\r\n            <!--<a-animation attribute=\"rotation\" direction=\"alternate\" from=\"75 -90 90\" to=\"105 -90 90\" dur=\"2500\" easing=\"ease-sine\" repeat=\"indefinite\"></a-animation>-->\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker type='barcode' value='3' id=\"crab\" title=\"a crab\" registerevents>\r\n        <a-entity id=\"model\"\r\n                  position=\"0 0 0\"\r\n                  scale=\"4 4 4\"\r\n                  rotation=\"0 0 0\"\r\n                  obj-model=\"obj: #crab-obj; mtl: #crab-mtl\">\r\n            <!--<a-animation attribute=\"scale\" from=\"1 1 1\" to=\"1.5 1.5 1.5\" direction=\"alternate\" dur=\"1000\" easing=\"linear\" repeat=\"indefinite\"></a-animation>-->\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker type='barcode' value='4' id=\"fox\" title=\"a fox\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"4 4 4\"\r\n                  rotation=\"0 0 0\"\r\n                  obj-model=\"obj: #fox-obj; mtl: #fox-mtl\">\r\n            <!--<a-animation attribute=\"position\" from=\"2 0 0\" to=\"-2 0 0\" dur=\"5000\" direction=\"alternate\" easing=\"linear\" repeat=\"indefinite\"></a-animation>-->\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker type='barcode' value='7' id=\"lizard\" title=\"a lizard\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"3 3 3\"\r\n                  rotation=\"0 180 0\"\r\n                  obj-model=\"obj: #lizard-obj; mtl: #lizard-mtl\">\r\n            <!--<a-animation attribute=\"rotation\" from=\"0 0 0\" to=\"0 360 0\" dur=\"5000\" direction=\"\" easing=\"linear\" repeat=\"indefinite\"></a-animation>-->\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker type='barcode' value='11' id=\"pug\" title=\"a pug\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"4 4 4\"\r\n                  rotation=\"90 0 0\"\r\n                  obj-model=\"obj: #pug-obj; mtl: #pug-mtl\">\r\n            <!--<a-animation attribute=\"position\" from=\"2 0 0\" to=\"-2 0 0\" dur=\"5000\" direction=\"alternate\" easing=\"linear\" repeat=\"indefinite\"></a-animation>-->\r\n        </a-entity>\r\n    </a-marker>\r\n    <!--robots-->\r\n    <a-marker type='barcode' value='43' id=\"robot1\" title=\"a robot\" registerevents>\r\n        <a-entity position=\"0 0 -1\"\r\n                  scale=\"2 2 2\"\r\n                  rotation=\"0 0 0\"\r\n                  obj-model=\"obj: #robot1-obj; mtl: #robot1-mtl\">\r\n            <!--<a-animation attribute=\"rotation\" from=\"0 0 0\" to=\"0 0 0\" dur=\"5000\" easing=\"linear\" repeat=\"indefinite\"></a-animation>-->\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker type='barcode' value='19' id=\"robot2\" title=\"a robot\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"2 2 2\"\r\n                  rotation=\"-90 0 0\"\r\n                  obj-model=\"obj: #robot2-obj; mtl: #robot2-mtl\">\r\n            <!--<a-animation attribute=\"position\" from=\"-3 0 0\" to=\"3 0 0\" dur=\"5000\" direction=\"alternate\" easing=\"linear\" repeat=\"indefinite\"></a-animation>-->\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker type='barcode' value='28' id=\"robot3\" title=\"a robot\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"3 3 3\"\r\n                  rotation=\"0 0 10\"\r\n                  obj-model=\"obj: #robot3-obj; mtl: #robot3-mtl\">\r\n            <!--<a-animation attribute=\"scale\" from=\"1 1 1\" to=\"1.2 1.2 1.2\" direction=\"alternate\" dur=\"1000\" easing=\"linear\" repeat=\"indefinite\"></a-animation>-->\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker type='barcode' value='38' id=\"robot4\" title=\"a robot\" registerevents>\r\n        <a-entity position=\"0 -4 3\"\r\n                  scale=\"2 2 2\"\r\n                  rotation=\"-90 0 0\"\r\n                  obj-model=\"obj: #robot4-obj; mtl: #robot4-mtl\">\r\n        </a-entity>\r\n        <!--<a-animation attribute=\"position\" from=\"-2 0 0\" to=\"2 0 0\" dur=\"5000\" direction=\"alternate\" easing=\"linear\" repeat=\"indefinite\"></a-animation>-->\r\n    </a-marker>\r\n    <a-marker type='barcode' value='39' id=\"robot5\" title=\"a robot\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"3 3 3\"\r\n                  rotation=\"45 0 0\"\r\n                  obj-model=\"obj: #robot5-obj; mtl: #robot5-mtl\">\r\n            <!--<a-animation attribute=\"scale\" from=\"1 1 1\" to=\"1.5 1.5 1.5\" direction=\"alternate\" dur=\"1000\" easing=\"linear\" repeat=\"indefinite\"></a-animation>-->\r\n        </a-entity>\r\n    </a-marker>\r\n    <!--characters-->\r\n    <a-marker type='barcode' value='46' id=\"night-king\" title=\"Night King\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"2 2 2\"\r\n                  rotation=\"0 180 0\"\r\n                  obj-model=\"obj: #night-king-obj; mtl: #night-king-mtl\">\r\n            <!--<a-animation attribute=\"rotation\" from=\"25 180 0\" to=\"-25 180 0\" direction=\"alternate\" dur=\"2500\" easing=\"linear\" repeat=\"indefinite\"></a-animation>-->\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker type='barcode' value='54' id=\"r2d2\" title=\"R2D2\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"4 4 4\"\r\n                  rotation=\"0 180 0\"\r\n                  obj-model=\"obj: #r2d2-obj; mtl: #r2d2-mtl\">\r\n            <!--<a-animation attribute=\"rotation\" from=\"25 180 0\" to=\"-25 180 0\" direction=\"alternate\" dur=\"2500\" easing=\"linear\" repeat=\"indefinite\"></a-animation>-->\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker type='barcode' value='22' id=\"rick-morty\" title=\"Rick and Morty\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"2 2 2\"\r\n                  rotation=\"0 180 0\"\r\n                  obj-model=\"obj: #rick-morty-obj; mtl: #rick-morty-mtl\">\r\n            <!--<a-animation attribute=\"rotation\" from=\"25 180 0\" to=\"-25 180 0\" direction=\"alternate\" dur=\"2500\" easing=\"linear\" repeat=\"indefinite\"></a-animation>-->\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker type='barcode' value='35'id=\"robocop\" title=\"Robocop\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"2.5 2.5 2.5\"\r\n                  rotation=\"0 180 0\"\r\n                  obj-model=\"obj: #robocop-obj; mtl: #robocop-mtl\">\r\n            <!--<a-animation attribute=\"rotation\" from=\"25 180 0\" to=\"-25 180 0\" direction=\"alternate\" dur=\"2500\" easing=\"linear\" repeat=\"indefinite\"></a-animation>-->\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-marker type='barcode' value='20' id=\"sponge-bob\" title=\"Sponge Bob\" registerevents>\r\n        <a-entity position=\"0 0 0\"\r\n                  scale=\"3 3 3\"\r\n                  rotation=\"0 180 0\"\r\n                  obj-model=\"obj: #sponge-bob-obj; mtl: #sponge-bob-mtl\">\r\n            <!--<a-animation attribute=\"rotation\" from=\"25 180 0\" to=\"-25 180 0\" direction=\"alternate\" dur=\"2500\" easing=\"linear\" repeat=\"indefinite\"></a-animation>-->\r\n        </a-entity>\r\n    </a-marker>\r\n    <a-entity camera position=\"0 0 15\"></a-entity>\r\n</a-scene>\r\n"

/***/ }),

/***/ "./src/app/components/camera-ar/camera-ar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var item_1 = __webpack_require__("./src/app/models/item.ts");
var progress_service_1 = __webpack_require__("./src/app/services/progress.service.ts");
var user_service_1 = __webpack_require__("./src/app/services/user.service.ts");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var CameraArComponent = /** @class */ (function () {
    function CameraArComponent(progressService, userService, snackBar) {
        this.progressService = progressService;
        this.userService = userService;
        this.snackBar = snackBar;
        this.actualCount = '00';
        this.userItem = new item_1.UserItem();
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
        core_1.HostListener('markerFound', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], CameraArComponent.prototype, "onMarkerFound", null);
    CameraArComponent = __decorate([
        core_1.Component({
            selector: 'app-camera-ar',
            template: __webpack_require__("./src/app/components/camera-ar/camera-ar.component.html"),
            styles: [__webpack_require__("./src/app/components/camera-ar/camera-ar.component.css")]
        }),
        __metadata("design:paramtypes", [progress_service_1.ProgressService, user_service_1.UserService, material_1.MatSnackBar])
    ], CameraArComponent);
    return CameraArComponent;
}());
exports.CameraArComponent = CameraArComponent;


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: __webpack_require__("./src/app/components/header/header.component.html"),
            styles: [__webpack_require__("./src/app/components/header/header.component.css")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var TimerObservable_1 = __webpack_require__("./node_modules/rxjs/_esm5/observable/TimerObservable.js");
var leaderboard_service_1 = __webpack_require__("./src/app/services/leaderboard.service.ts");
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
        TimerObservable_1.TimerObservable.create(0, this.interval).subscribe(function () {
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
        core_1.Component({
            selector: 'app-leaderboard',
            template: __webpack_require__("./src/app/components/leaderboard/leaderboard.component.html"),
            styles: [__webpack_require__("./src/app/components/leaderboard/leaderboard.component.css")]
        }),
        __metadata("design:paramtypes", [leaderboard_service_1.LeaderboardService])
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());
exports.LeaderboardComponent = LeaderboardComponent;


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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var material_1 = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var user_service_1 = __webpack_require__("./src/app/services/user.service.ts");
var user_1 = __webpack_require__("./src/app/models/user.ts");
var RegisterComponent = /** @class */ (function () {
    //snackBar: MatSnackBar = {};
    function RegisterComponent(userService, router, snackBar) {
        this.userService = userService;
        this.router = router;
        this.snackBar = snackBar;
        this.model = new user_1.User();
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
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router,
            material_1.MatSnackBar])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "./src/app/models/item.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ItemProgress = /** @class */ (function () {
    function ItemProgress() {
    }
    return ItemProgress;
}());
exports.ItemProgress = ItemProgress;
var UserItem = /** @class */ (function () {
    function UserItem() {
    }
    return UserItem;
}());
exports.UserItem = UserItem;


/***/ }),

/***/ "./src/app/models/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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
exports.User = User;
var UserDto = /** @class */ (function () {
    function UserDto() {
    }
    return UserDto;
}());
exports.UserDto = UserDto;


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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
        var headers = new http_1.HttpHeaders({
            'Content-Type': 'application/json',
        });
        var authHeaders = headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
        var httpOptions = {
            headers: authHeaders
        };
        return httpOptions;
    };
    AuthService = __decorate([
        core_1.Injectable()
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;


/***/ }),

/***/ "./src/app/services/canActivateAuthGuard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, auth_service_1.AuthService])
    ], CanActivateAuthGuard);
    return CanActivateAuthGuard;
}());
exports.CanActivateAuthGuard = CanActivateAuthGuard;


/***/ }),

/***/ "./src/app/services/leaderboard.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var LeaderboardService = /** @class */ (function () {
    function LeaderboardService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.apiPath = environment_1.environment.apiEndpoint + "/user";
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, auth_service_1.AuthService])
    ], LeaderboardService);
    return LeaderboardService;
}());
exports.LeaderboardService = LeaderboardService;


/***/ }),

/***/ "./src/app/services/progress.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var ProgressService = /** @class */ (function () {
    function ProgressService(httpClient, authService) {
        this.httpClient = httpClient;
        this.authService = authService;
    }
    ProgressService.prototype.getProgressByUser = function (id) {
        var httpOptions = this.authService.getAuthorizationHeaders();
        return this.httpClient.get(environment_1.environment.apiEndpoint + "/user/" + id, httpOptions).map(function (data) {
            return data;
        });
    };
    ProgressService.prototype.addToProgress = function (userItem) {
        var httpOptions = this.authService.getAuthorizationHeaders();
        return this.httpClient.post(environment_1.environment.apiEndpoint + "/markers", userItem, httpOptions);
    };
    ProgressService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, auth_service_1.AuthService])
    ], ProgressService);
    return ProgressService;
}());
exports.ProgressService = ProgressService;


/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
var auth_service_1 = __webpack_require__("./src/app/services/auth.service.ts");
var UserService = /** @class */ (function () {
    function UserService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.apiPath = environment_1.environment.apiEndpoint + "/user";
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, auth_service_1.AuthService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false,
    apiEndpoint: "api"
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule).catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
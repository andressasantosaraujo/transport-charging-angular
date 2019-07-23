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

/***/ "./src/app/components/app-route.ts":
/*!*****************************************!*\
  !*** ./src/app/components/app-route.ts ***!
  \*****************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ "./src/app/components/app.component.ts");
/* harmony import */ var _login_login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../login/login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _register_register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../register/register/register.component */ "./src/app/register/register/register.component.ts");
/* harmony import */ var _travel_request_travel_request_travel_request_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../travel-request/travel-request/travel-request.component */ "./src/app/travel-request/travel-request/travel-request.component.ts");




var ROUTES = [
    { path: '', component: _app_component__WEBPACK_IMPORTED_MODULE_0__["AppComponent"] },
    { path: 'login', component: _login_login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"] },
    { path: 'register', component: _register_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"] },
    { path: 'travel-request', component: _travel_request_travel_request_travel_request_component__WEBPACK_IMPORTED_MODULE_3__["TravelRequestComponent"] }
];


/***/ }),

/***/ "./src/app/components/app.component.html":
/*!***********************************************!*\
  !*** ./src/app/components/app.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/app.component.scss":
/*!***********************************************!*\
  !*** ./src/app/components/app.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/app.component.ts":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
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
        this.title = 'transport-charging-angular';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/components/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/app.module.ts":
/*!******************************************!*\
  !*** ./src/app/components/app.module.ts ***!
  \******************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/components/app.component.ts");
/* harmony import */ var _transport_charging_transport_charging_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../transport-charging/transport-charging.module */ "./src/app/transport-charging/transport-charging.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-route */ "./src/app/components/app-route.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _register_register_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../register/register.module */ "./src/app/register/register.module.ts");
/* harmony import */ var _travel_request_travel_request_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../travel-request/travel-request.module */ "./src/app/travel-request/travel-request.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _transport_charging_transport_charging_module__WEBPACK_IMPORTED_MODULE_3__["TransportChargingModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_app_route__WEBPACK_IMPORTED_MODULE_5__["ROUTES"]),
                _login_login_module__WEBPACK_IMPORTED_MODULE_6__["LoginModule"],
                _register_register_module__WEBPACK_IMPORTED_MODULE_7__["RegisterModule"],
                _travel_request_travel_request_module__WEBPACK_IMPORTED_MODULE_8__["TravelRequestModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/login/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"login\">\n        <h1>\n            Sing in to T.C.A\n        </h1>\n        <p>\n            Sign in to T.C.A and enjoy the practicality on your travel.\n        </p>\n        <input type=\"email\" placeholder=\"Email\" />\n        <input type=\"password\" placeholder=\"Password\" />\n        <button (click)='signin()'>Sign in</button>\n    </div>\n    <div class=\"register\">\n        <h1>\n            New here?\n        </h1>\n        <p>\n            Create your account to discovery the practicality to pay your travel!\n        </p>\n        <button (click)=\"signup()\">Sign up</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/login/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  height: 100%;\n  background-color: #FDFFF7;\n  font-family: 'Rubik', sans-serif; }\n  .container :focus {\n    outline: none; }\n  .login {\n  width: 50%;\n  flex-grow: 1;\n  order: 0;\n  text-align: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .login h1 {\n    font-size: 50px; }\n  .login p {\n    color: #555a59;\n    font-size: 18px; }\n  .login button {\n    height: 50px;\n    width: 200px;\n    border: none;\n    border-radius: 30px;\n    background-color: #28b498;\n    font-size: 15px;\n    color: #ffffff;\n    font-family: 'Baloo Chettan', cursive;\n    cursor: pointer; }\n  .login button:hover {\n      background-color: #3cc6a5;\n      transition: ease-in-out .3s; }\n  .register {\n  background-image: linear-gradient(253deg, #3ba5b4 0, #38ba8a 100%);\n  justify-content: center;\n  align-items: center;\n  width: 10%;\n  flex-grow: 1;\n  order: 1;\n  text-align: center;\n  display: flex;\n  flex-direction: column; }\n  .register h1 {\n    font-size: 50px;\n    color: #ffffff; }\n  .register p {\n    color: #ffffff;\n    font-size: 19px;\n    margin: 50px;\n    width: 300px;\n    line-height: 43px;\n    font-weight: normal;\n    text-align: center; }\n  .register button {\n    height: 50px;\n    width: 200px;\n    border: none;\n    border-radius: 30px;\n    background-color: #ffffff;\n    font-size: 16px;\n    font-family: 'Rubik', sans-serif;\n    font-weight: normal;\n    cursor: pointer; }\n  .register button:hover {\n      color: #28b498;\n      transition: ease-in-out .3s; }\n  input {\n  height: 48px;\n  width: 420px;\n  margin: 10px;\n  border: none;\n  background-color: #eef5f3;\n  border-radius: 15px;\n  padding-left: 20px;\n  font-family: 'Baloo Chettan', cursive;\n  font-size: 15px; }\n"

/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
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


var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
        this.currentState = 'initial';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.signin = function () {
        this.router.navigateByUrl('travel-request');
    };
    LoginComponent.prototype.signup = function () {
        this.router.navigateByUrl('register');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/register/register.module.ts":
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ }),

/***/ "./src/app/register/register/register.component.html":
/*!***********************************************************!*\
  !*** ./src/app/register/register/register.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"register\">\n        <h1>\n            Create your account into T.C.A\n        </h1>\n        <p>\n            Sign up to T.C.A fill out the form below.\n        </p>\n        <div class=\"form-register\">\n            <input type=\"text\" placeholder=\"Name\" />\n            <input type=\"password\" placeholder=\"Password\" />\n            <input type=\"number\" placeholder=\"Contact\" />\n            <input type=\"email\" placeholder=\"Email\" />\n            <input class=\"big-input-register\" type=\"text\" placeholder=\"Address\" />\n            <input class=\"small-input-register\" type=\"number\" placeholder=\"Nº\" />\n            <input class=\"big-input-register\" type=\"number\" placeholder=\"Credit card\" />\n            <input class=\"small-input-register\" type=\"number\" placeholder=\"CCV\" />            \n            <button>Sign up</button>\n        </div>\n    </div>\n    <div class=\"login\">\n        <h1>\n            One of us?\n        </h1>\n        <p>\n            If you already have an account, click here to sign in.\n        </p>\n        <button (click)=\"signin()\">Sign in</button>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/register/register/register.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/register/register/register.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  height: 100%;\n  background-color: #FDFFF7;\n  font-family: 'Rubik', sans-serif; }\n  .container :focus {\n    outline: none; }\n  .register {\n  width: 50%;\n  flex-grow: 1;\n  order: 0;\n  text-align: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n  align-items: center; }\n  .register h1 {\n    font-size: 50px; }\n  .register p {\n    color: #555a59;\n    font-size: 18px; }\n  .register button {\n    height: 50px;\n    width: 200px;\n    border: none;\n    border-radius: 30px;\n    background-color: #28b498;\n    font-size: 15px;\n    color: #ffffff;\n    font-family: 'Baloo Chettan', cursive;\n    cursor: pointer;\n    margin: 30px 0; }\n  .register button:hover {\n      background-color: #3cc6a5;\n      transition: ease-in-out .3s; }\n  .login {\n  background-image: linear-gradient(253deg, #3ba5b4 0, #38ba8a 100%);\n  justify-content: center;\n  align-items: center;\n  width: 10%;\n  flex-grow: 1;\n  order: 1;\n  text-align: center;\n  display: flex;\n  flex-direction: column; }\n  .login h1 {\n    font-size: 50px;\n    color: #ffffff; }\n  .login p {\n    color: #ffffff;\n    font-size: 19px;\n    margin: 50px;\n    width: 300px;\n    line-height: 43px;\n    font-weight: normal;\n    text-align: center; }\n  .login button {\n    height: 50px;\n    width: 200px;\n    border: none;\n    border-radius: 30px;\n    background-color: #ffffff;\n    font-size: 16px;\n    font-family: 'Rubik', sans-serif;\n    font-weight: normal;\n    cursor: pointer; }\n  .login button:hover {\n      color: #28b498;\n      transition: ease-in-out .3s; }\n  .form-register {\n  width: 727px; }\n  .form-register input {\n    height: 48px;\n    width: 270px;\n    margin: 10px 30px 10px 30px;\n    border: none;\n    background-color: #eef5f3;\n    border-radius: 15px;\n    padding-left: 20px;\n    font-family: 'Baloo Chettan', cursive;\n    font-size: 15px; }\n  .form-register .small-input-register {\n    width: 69px; }\n  .form-register .big-input-register {\n    width: 475px; }\n"

/***/ }),

/***/ "./src/app/register/register/register.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/register/register/register.component.ts ***!
  \*********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
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


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(router) {
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.signin = function () {
        this.router.navigateByUrl('login');
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/register/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/transport-charging/transport-charging.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/transport-charging/transport-charging.module.ts ***!
  \*****************************************************************/
/*! exports provided: TransportChargingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportChargingModule", function() { return TransportChargingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _transport_charging_transport_charging_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transport-charging/transport-charging.component */ "./src/app/transport-charging/transport-charging/transport-charging.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransportChargingModule = /** @class */ (function () {
    function TransportChargingModule() {
    }
    TransportChargingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_transport_charging_transport_charging_component__WEBPACK_IMPORTED_MODULE_2__["TransportChargingComponent"]]
        })
    ], TransportChargingModule);
    return TransportChargingModule;
}());



/***/ }),

/***/ "./src/app/transport-charging/transport-charging/transport-charging.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/transport-charging/transport-charging/transport-charging.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/transport-charging/transport-charging/transport-charging.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/transport-charging/transport-charging/transport-charging.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/transport-charging/transport-charging/transport-charging.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/transport-charging/transport-charging/transport-charging.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TransportChargingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportChargingComponent", function() { return TransportChargingComponent; });
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

var TransportChargingComponent = /** @class */ (function () {
    function TransportChargingComponent() {
    }
    TransportChargingComponent.prototype.ngOnInit = function () {
    };
    TransportChargingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transport-charging',
            template: __webpack_require__(/*! ./transport-charging.component.html */ "./src/app/transport-charging/transport-charging/transport-charging.component.html"),
            styles: [__webpack_require__(/*! ./transport-charging.component.scss */ "./src/app/transport-charging/transport-charging/transport-charging.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TransportChargingComponent);
    return TransportChargingComponent;
}());



/***/ }),

/***/ "./src/app/travel-request/travel-request.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/travel-request/travel-request.module.ts ***!
  \*********************************************************/
/*! exports provided: TravelRequestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelRequestModule", function() { return TravelRequestModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _travel_request_travel_request_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./travel-request/travel-request.component */ "./src/app/travel-request/travel-request/travel-request.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var TravelRequestModule = /** @class */ (function () {
    function TravelRequestModule() {
    }
    TravelRequestModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_4__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyDZTdf-Lg-xWDhjoBtKMBgbhBBXgy6icxs'
                })
            ],
            declarations: [_travel_request_travel_request_component__WEBPACK_IMPORTED_MODULE_2__["TravelRequestComponent"]],
            providers: []
        })
    ], TravelRequestModule);
    return TravelRequestModule;
}());



/***/ }),

/***/ "./src/app/travel-request/travel-request/travel-request.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/travel-request/travel-request/travel-request.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"box-set-location\">\n  <input type=\"text\" placeholder=\"Source\" />\n  <input type=\"text\" placeholder=\"Destination\" />\n  <input type=\"text\" class=\"input-small\" placeholder=\"Time\" />\n  <a (click)=\"search($event)\"><img src=\"../../../assets/icon/search.png\"></a>\n</div>\n<agm-map [latitude]=\"lat\" [zoom]=\"zoom\" [longitude]=\"lng\">\n  <agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\n  </agm-marker>\n</agm-map>"

/***/ }),

/***/ "./src/app/travel-request/travel-request/travel-request.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/travel-request/travel-request/travel-request.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 100%; }\n\n.box-set-location {\n  align-items: center;\n  background-image: linear-gradient(253deg, #3ba5b4 0, #38ba8a 100%);\n  margin: 1%;\n  border-radius: 10px;\n  position: absolute;\n  z-index: 99;\n  display: flex;\n  width: 90%;\n  left: 50px;\n  padding: 10px; }\n\n.box-set-location input {\n    height: 48px;\n    width: 100%;\n    margin: 10px;\n    border: none;\n    background-color: #eef5f3;\n    border-radius: 15px;\n    padding-left: 20px;\n    font-family: 'Baloo Chettan', cursive;\n    font-size: 15px; }\n\n.box-set-location .input-small {\n    width: 50%; }\n\n.box-set-location button {\n    height: 50px;\n    width: 200px;\n    border: none;\n    border-radius: 30px;\n    background-color: #28b498;\n    font-size: 15px;\n    color: #ffffff;\n    font-family: 'Baloo Chettan', cursive;\n    cursor: pointer; }\n\n.box-set-location button:hover {\n      background-color: #3cc6a5;\n      transition: ease-in-out .3s; }\n"

/***/ }),

/***/ "./src/app/travel-request/travel-request/travel-request.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/travel-request/travel-request/travel-request.component.ts ***!
  \***************************************************************************/
/*! exports provided: TravelRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelRequestComponent", function() { return TravelRequestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TravelRequestComponent = /** @class */ (function () {
    function TravelRequestComponent() {
        this.texto = 'Wenceslau Braz - Cuidado com as cargas';
        this.lat = -23.8779431;
        this.lng = -49.8046873;
        this.zoom = 15;
    }
    TravelRequestComponent.prototype.search = function (e) {
    };
    TravelRequestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-travel-request',
            template: __webpack_require__(/*! ./travel-request.component.html */ "./src/app/travel-request/travel-request/travel-request.component.html"),
            styles: [__webpack_require__(/*! ./travel-request.component.scss */ "./src/app/travel-request/travel-request/travel-request.component.scss")]
        })
    ], TravelRequestComponent);
    return TravelRequestComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
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
/* harmony import */ var _app_components_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/components/app.module */ "./src/app/components/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_components_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/andressa.araujo/Personal/Study/TCC/transport-charging-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
"use strict";
(self["webpackChunkc_metrics"] = self["webpackChunkc_metrics"] || []).push([["main"],{

/***/ 809:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _core_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/components/dashboard/dashboard.component */ 3757);
/* harmony import */ var _core_components_history_history_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/components/history/history.component */ 7303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const routes = [
    {
        path: '',
        component: _core_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
    },
    {
        path: 'history',
        component: _core_components_history_history_component__WEBPACK_IMPORTED_MODULE_1__.HistoryComponent
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 721:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! subsink */ 7478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _core_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/services/api.service */ 2531);
/* harmony import */ var ng_connection_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-connection-service */ 4083);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/menu/menu.component */ 9419);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);








function AppComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " No internet connection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(apiService, connectionService) {
        this.apiService = apiService;
        this.connectionService = connectionService;
        this.isConnected = true;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
    }
    ngOnInit() {
        console.log('init app-root');
        this.checkNetworkStatus();
    }
    checkNetworkStatus() {
        this.subs.add(this.connectionService.monitor().subscribe(isConnected => {
            this.apiService.isApplicationOnline = this.isConnected = isConnected;
        }));
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_core_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ng_connection_service__WEBPACK_IMPORTED_MODULE_4__.ConnectionService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 1, consts: [["class", "connection-warning", 4, "ngIf"], [1, "connection-warning"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-toolbar")(1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Currency metrics");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "cmx-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AppComponent_div_5_Template, 2, 0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isConnected);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__.MatToolbar], styles: [".mat-toolbar[_ngcontent-%COMP%] {\n  background: #147efb;\n}\n\nmat-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.connection-warning[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0;\n  height: 35px;\n  background: crimson;\n  width: 100%;\n  font-weight: 500;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  color: white;\n  transition: all 1s ease-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUFDSiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRvb2xiYXIge1xuICAgIGJhY2tncm91bmQ6ICMxNDdlZmI7XG59XG5cbm1hdC10b29sYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmNvbm5lY3Rpb24td2FybmluZyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZDogY3JpbXNvbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2Utb3V0O1xufVxuIl19 */"] });


/***/ }),

/***/ 23:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ 2543);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/service-worker */ 3769);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/shared.module */ 5349);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ 4766);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 809);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 721);
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ 5374);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient], imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_4__.CoreModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule,
        _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__.ServiceWorkerModule.register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production }),
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent], imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_4__.CoreModule,
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__.MatToolbarModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__.ServiceWorkerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 3757:
/*!******************************************************************!*\
  !*** ./src/app/core/components/dashboard/dashboard.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardComponent": () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! luxon */ 9527);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3910);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/api.service */ 2531);
/* harmony import */ var _shared_components_currency_card_currency_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/currency-card/currency-card.component */ 4684);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);







function DashboardComponent_cmx_loader_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "cmx-loader");
} }
function DashboardComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "cmx-currency-card", 2)(2, "cmx-currency-card", 2)(3, "cmx-currency-card", 2)(4, "cmx-currency-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("currencyTitle", "UAH/EUR")("currentCurrency", ctx_r1.currencyData.currentEURUAHCurrency)("prevCurrency", ctx_r1.currencyData.prevEURUAHCurrency)("currencyDate", ctx_r1.currentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("currencyTitle", "EUR/UAH")("currentCurrency", ctx_r1.currencyData.currentEURCurrency)("prevCurrency", ctx_r1.currencyData.prevEURCurrency)("currencyDate", ctx_r1.currentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("currencyTitle", "UAH/USD")("currentCurrency", ctx_r1.currencyData.currentUAHCurrency)("prevCurrency", ctx_r1.currencyData.prevUAHCurrency)("currencyDate", ctx_r1.currentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("currencyTitle", "USD/UAH")("currentCurrency", ctx_r1.currencyData.currentUSDCurrency)("prevCurrency", ctx_r1.currencyData.prevUSDCurrency)("currencyDate", ctx_r1.currentDate);
} }
class DashboardComponent {
    constructor(apiService, cdr) {
        this.apiService = apiService;
        this.cdr = cdr;
        this.isLoadingContent = true;
        this.currencyData = {
            currentUAHCurrency: 0,
            currentUSDCurrency: 0,
            currentEURCurrency: 0,
            currentEURUAHCurrency: 0,
            prevEURCurrency: 0,
            prevEURUAHCurrency: 0,
            prevUAHCurrency: 0,
            prevUSDCurrency: 0
        };
        this.currentDate = luxon__WEBPACK_IMPORTED_MODULE_3__.DateTime.local().toISODate();
        this.prevDate = luxon__WEBPACK_IMPORTED_MODULE_3__.DateTime.local().minus({ days: 1 }).toISODate();
        this.defaultTouch = { x: 0, y: 0, time: 0 };
        this.deltaInterval = 500;
        this.getCurrencyData();
        this.getAddtionalData();
    }
    handleTouch(event) {
        const touch = event.touches[0] || event.changedTouches[0];
        if (event.type === 'touchstart') {
            this.defaultTouch.x = touch.pageX;
            this.defaultTouch.y = touch.pageY;
            this.defaultTouch.time = event.timeStamp;
        }
        else if (event.type === 'touchend') {
            const deltaY = touch.pageY - this.defaultTouch.y;
            const deltaTime = event.timeStamp - this.defaultTouch.time;
            if (deltaTime < this.deltaInterval) {
                if (Math.abs(deltaY) > 60) {
                    if (deltaY > 0) {
                        this.doSwipeDown();
                    }
                }
            }
        }
    }
    getCurrencyData() {
        this.isLoadingContent = true;
        this.apiService
            .getCurrency(`/api/v7/convert?q=USD_UAH,EUR_UAH&compact=ultra&date=${this.prevDate}&endDate=${this.currentDate}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
            .subscribe((currency) => {
            this.currencyData.currentUAHCurrency = currency.USD_UAH[this.currentDate];
            this.currencyData.currentEURCurrency = currency.EUR_UAH[this.currentDate];
            this.currencyData.prevUAHCurrency = currency.USD_UAH[this.prevDate];
            this.currencyData.prevEURCurrency = currency.EUR_UAH[this.prevDate];
            this.isLoadingContent = false;
            this.cdr.markForCheck();
        });
    }
    getAddtionalData() {
        this.isLoadingContent = true;
        this.apiService
            .getCurrency(`/api/v7/convert?q=UAH_USD,UAH_EUR&compact=ultra&date=${this.prevDate}&endDate=${this.currentDate}`)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.take)(1))
            .subscribe((currency) => {
            this.currencyData.currentUSDCurrency = currency.UAH_USD[this.currentDate];
            this.currencyData.currentEURUAHCurrency = currency.UAH_EUR[this.currentDate];
            this.currencyData.prevEURUAHCurrency = currency.UAH_EUR[this.prevDate];
            this.currencyData.prevUSDCurrency = currency.UAH_USD[this.prevDate];
            this.isLoadingContent = false;
            this.cdr.markForCheck();
        });
    }
    doSwipeDown() {
        this.getCurrencyData();
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
DashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["cmx-dashboard"]], hostBindings: function DashboardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("touchstart", function DashboardComponent_touchstart_HostBindingHandler($event) { return ctx.handleTouch($event); })("touchend", function DashboardComponent_touchend_HostBindingHandler($event) { return ctx.handleTouch($event); })("touchcancel", function DashboardComponent_touchcancel_HostBindingHandler($event) { return ctx.handleTouch($event); });
    } }, decls: 3, vars: 2, consts: [[1, "content-wrapper"], [4, "ngIf"], [3, "currencyTitle", "currentCurrency", "prevCurrency", "currencyDate"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, DashboardComponent_cmx_loader_1_Template, 1, 0, "cmx-loader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, DashboardComponent_ng_container_2_Template, 5, 16, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoadingContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (ctx.currencyData == null ? null : ctx.currencyData.currentUAHCurrency) && !ctx.isLoadingContent);
    } }, dependencies: [_shared_components_currency_card_currency_card_component__WEBPACK_IMPORTED_MODULE_1__.CurrencyCardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: [".content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.content-wrapper[_ngcontent-%COMP%]   app-currency-card[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.content-wrapper[_ngcontent-%COMP%]   app-loader[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 45%;\n  top: 45%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGO0FBQUU7RUFDRSxXQUFBO0FBRUo7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFDSiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudC13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYXBwLWN1cnJlbmN5LWNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5cbiAgYXBwLWxvYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDQ1JTtcbiAgICB0b3A6IDQ1JTtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 7303:
/*!**************************************************************!*\
  !*** ./src/app/core/components/history/history.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HistoryComponent": () => (/* binding */ HistoryComponent)
/* harmony export */ });
/* harmony import */ var luxon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! luxon */ 9527);
/* harmony import */ var subsink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! subsink */ 7478);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/api.service */ 2531);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);






function HistoryComponent_cmx_loader_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "cmx-loader");
} }
function HistoryComponent_table_2_th_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoryComponent_table_2_td_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r10.date);
} }
function HistoryComponent_table_2_th_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoryComponent_table_2_td_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r11.currency);
} }
function HistoryComponent_table_2_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function HistoryComponent_table_2_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](element_r12.value);
} }
function HistoryComponent_table_2_tr_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 13);
} }
function HistoryComponent_table_2_tr_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tr", 14);
} }
function HistoryComponent_table_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "caption");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, HistoryComponent_table_2_th_3_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, HistoryComponent_table_2_td_4_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](5, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, HistoryComponent_table_2_th_6_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, HistoryComponent_table_2_td_7_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](8, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, HistoryComponent_table_2_th_9_Template, 2, 0, "th", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, HistoryComponent_table_2_td_10_Template, 2, 1, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, HistoryComponent_table_2_tr_11_Template, 1, 0, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, HistoryComponent_table_2_tr_12_Template, 1, 0, "tr", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dataSource", ctx_r1.dataSource);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matHeaderRowDef", ctx_r1.historyData);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("matRowDefColumns", ctx_r1.historyData);
} }
class HistoryComponent {
    constructor(apiService) {
        this.apiService = apiService;
        this.historyData = ['date', 'currency', 'value'];
        this.isLoadingContent = true;
        this.subs = new subsink__WEBPACK_IMPORTED_MODULE_0__.SubSink();
        this.daysAmount = { days: 8 };
        this.mainCurrencyPair = 'USD_UAH';
        this.onLoadHisotry();
    }
    onLoadHisotry() {
        this.subs.add(this.apiService
            .getCurrency(`/api/v7/convert?q=USD_UAH&compact=ultra&date=${luxon__WEBPACK_IMPORTED_MODULE_3__.DateTime.local()
            .minus(this.daysAmount)
            .toISODate()}&endDate=${luxon__WEBPACK_IMPORTED_MODULE_3__.DateTime.local().toISODate()}`)
            .subscribe((currencyHistory) => {
            this.dataSource = [];
            for (const date in currencyHistory[this.mainCurrencyPair]) {
                this.dataSource.push({
                    date: date,
                    currency: 'USD/UAH',
                    value: currencyHistory[this.mainCurrencyPair][date]
                });
            }
            this.isLoadingContent = false;
        }));
    }
    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
HistoryComponent.ɵfac = function HistoryComponent_Factory(t) { return new (t || HistoryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService)); };
HistoryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HistoryComponent, selectors: [["cmx-history"]], decls: 3, vars: 2, consts: [[1, "content-wrapper"], [4, "ngIf"], ["mat-table", "", 3, "dataSource", 4, "ngIf"], ["mat-table", "", 3, "dataSource"], ["matColumnDef", "date"], ["scope", "col", "mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "currency"], ["matColumnDef", "value"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["scope", "col", "mat-header-cell", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function HistoryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, HistoryComponent_cmx_loader_1_Template, 1, 0, "cmx-loader", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, HistoryComponent_table_2_Template, 13, 3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoadingContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoadingContent);
    } }, dependencies: [_angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatTable, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatColumnDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCellDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRowDef, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatCell, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatHeaderRow, _angular_material_table__WEBPACK_IMPORTED_MODULE_4__.MatRow, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], styles: ["p[_ngcontent-%COMP%] {\n  color: white;\n}\n\n.content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.content-wrapper[_ngcontent-%COMP%]   app-loader[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 45%;\n  top: 45%;\n}\n\ntable[_ngcontent-%COMP%] {\n  margin: 20px;\n  position: relative;\n  min-width: 90%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhpc3RvcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7QUFDSjs7QUFHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFBRiIsImZpbGUiOiJoaXN0b3J5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNvbnRlbnQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgXG4gIGFwcC1sb2FkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiA0NSU7XG4gICAgdG9wOiA0NSU7XG4gIH1cbn1cblxudGFibGUge1xuICBtYXJnaW46IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiA5MCU7XG59XG4iXX0= */"] });


/***/ }),

/***/ 5374:
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CoreModule": () => (/* binding */ CoreModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 4522);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button-toggle */ 9837);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 8562);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ 5288);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/shared.module */ 5349);
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ 3757);
/* harmony import */ var _components_history_history_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/history/history.component */ 7303);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);










class CoreModule {
}
CoreModule.ɵfac = function CoreModule_Factory(t) { return new (t || CoreModule)(); };
CoreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBarModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.DashboardComponent, _components_history_history_component__WEBPACK_IMPORTED_MODULE_2__.HistoryComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButtonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule,
        _angular_material_table__WEBPACK_IMPORTED_MODULE_6__.MatTableModule,
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__.MatSnackBarModule,
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_8__.MatButtonToggleModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule] }); })();


/***/ }),

/***/ 2531:
/*!**********************************************!*\
  !*** ./src/app/core/services/api.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiService": () => (/* binding */ ApiService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 4514);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 7418);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ 930);






class ApiService {
    constructor(http, snackBar) {
        this.http = http;
        this.snackBar = snackBar;
    }
    getCurrency(path, params) {
        return this.http
            .get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.currencyApi}${path}&apiKey=${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.accessKey}`, { params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.share)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            return this.handleError(error);
        }));
    }
    handleError(error) {
        if (this.isApplicationOnline) {
            this.snackBar.open('Http Error', error?.statusText, {
                duration: 4000
            });
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(error);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__.MatSnackBar)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4684:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/currency-card/currency-card.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyCardComponent": () => (/* binding */ CurrencyCardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



class CurrencyCardComponent {
    constructor() {
        this.isTrendGoDown = false;
        this.currentCurrency = 0;
        this.currencyTitle = '';
        this.currencyDate = null;
    }
    set prevCurrency(prevCurrency) {
        this.currencyDayAgo = prevCurrency;
        if (this.currentCurrency && prevCurrency) {
            this.defineCurrencyTrand(prevCurrency);
        }
    }
    defineCurrencyTrand(prevCurrency) {
        this.isTrendGoDown = this.currentCurrency < prevCurrency;
    }
}
CurrencyCardComponent.ɵfac = function CurrencyCardComponent_Factory(t) { return new (t || CurrencyCardComponent)(); };
CurrencyCardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CurrencyCardComponent, selectors: [["cmx-currency-card"]], inputs: { currentCurrency: "currentCurrency", currencyTitle: "currencyTitle", currencyDate: "currencyDate", prevCurrency: "prevCurrency" }, decls: 29, vars: 10, consts: [[1, "currency-block"], [1, "trend-direction"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 490.667 490.667", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 490.667 490.667"], ["d", "M245.333,0C109.839,0,0,109.839,0,245.333s109.839,245.333,245.333,245.333\n\ts245.333-109.839,245.333-245.333C490.514,109.903,380.764,0.153,245.333,0z", 3, "id"], ["d", "M404.523,262.592c-1.649-3.989-5.54-6.591-9.856-6.592H320V96.171\n\tc0-5.891-4.776-10.667-10.667-10.667h-128c-5.891,0-10.667,4.776-10.667,10.667V256H96c-5.891-0.011-10.675,4.757-10.686,10.648\n\tc-0.005,2.84,1.123,5.565,3.134,7.571l149.333,149.504c4.165,4.164,10.917,4.164,15.083,0l149.333-149.504\n\tC405.253,271.171,406.171,266.581,404.523,262.592z", 2, "fill", "#fafafa"]], template: function CurrencyCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card")(1, "mat-card-header")(2, "mat-card-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0)(8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 3)(13, "path", 4)(14, "g")(15, "g")(16, "g")(17, "g")(18, "g")(19, "g")(20, "g")(21, "g")(22, "g")(23, "g")(24, "g")(25, "g")(26, "g")(27, "g")(28, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currencyTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 8, ctx.currencyDate), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("trend-down", ctx.isTrendGoDown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.currentCurrency);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("trend-transform", !ctx.isTrendGoDown);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.isTrendGoDown ? "downTrend" : "upTrend");
    } }, dependencies: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_1__.MatCardSubtitle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: ["mat-card[_ngcontent-%COMP%] {\n  margin: 20px;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: green;\n  font-size: 35px;\n}\n\n.trend-down[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.trend-transform[_ngcontent-%COMP%] {\n  transform: scale(1, -1);\n}\n\n.trend-direction[_ngcontent-%COMP%] {\n  width: 60px;\n  height: 60px;\n  top: 30%;\n  right: 10%;\n  position: absolute;\n}\n\n#upTrend[_ngcontent-%COMP%] {\n  fill: green;\n}\n\n#downTrend[_ngcontent-%COMP%] {\n  fill: red;\n}\n\n.currency-block[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.currency-block[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbmN5LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGOztBQUVBO0VBQ0UsU0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUFFO0VBQ0UsV0FBQTtBQUVKIiwiZmlsZSI6ImN1cnJlbmN5LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuaDIge1xuICBjb2xvcjogZ3JlZW47XG4gIGZvbnQtc2l6ZTogMzVweDtcbn1cblxuLnRyZW5kLWRvd24ge1xuICBjb2xvcjogcmVkO1xufVxuXG4udHJlbmQtdHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLCAtMSk7XG59XG5cbi50cmVuZC1kaXJlY3Rpb24ge1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICB0b3A6IDMwJTtcbiAgcmlnaHQ6IDEwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4jdXBUcmVuZCB7XG4gIGZpbGw6IGdyZWVuO1xufVxuXG4jZG93blRyZW5kIHtcbiAgZmlsbDogcmVkO1xufVxuXG4uY3VycmVuY3ktYmxvY2sge1xuICB3aWR0aDogMjAwcHg7XG4gIHNwYW4ge1xuICAgIGNvbG9yOiBncmF5O1xuICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 8662:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LoaderComponent {
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 7, vars: 0, consts: [[1, "sk-chase"], [1, "sk-chase-dot"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1)(2, "div", 1)(3, "div", 1)(4, "div", 1)(5, "div", 1)(6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".sk-chase[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  position: relative;\n  animation: sk-chase 2.5s infinite linear both;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  animation: sk-chase-dot 2s infinite ease-in-out both;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:before {\n  content: \"\";\n  display: block;\n  width: 25%;\n  height: 25%;\n  background-color: #424242;\n  border-radius: 100%;\n  animation: sk-chase-dot-before 2s infinite ease-in-out both;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(1) {\n  animation-delay: -1.1s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: -1s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: -0.9s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(4) {\n  animation-delay: -0.8s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(5) {\n  animation-delay: -0.7s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(6) {\n  animation-delay: -0.6s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(1):before {\n  animation-delay: -1.1s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(2):before {\n  animation-delay: -1s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(3):before {\n  animation-delay: -0.9s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(4):before {\n  animation-delay: -0.8s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(5):before {\n  animation-delay: -0.7s;\n}\n\n.sk-chase-dot[_ngcontent-%COMP%]:nth-child(6):before {\n  animation-delay: -0.6s;\n}\n\n@keyframes sk-chase {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes sk-chase-dot {\n  80%, 100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes sk-chase-dot-before {\n  50% {\n    transform: scale(0.4);\n  }\n  100%, 0% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0Esb0RBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxvQkFBQTtBQUVGOztBQUFBO0VBQ0Usc0JBQUE7QUFHRjs7QUFEQTtFQUNFLHNCQUFBO0FBSUY7O0FBRkE7RUFDRSxzQkFBQTtBQUtGOztBQUhBO0VBQ0Usc0JBQUE7QUFNRjs7QUFKQTtFQUNFLHNCQUFBO0FBT0Y7O0FBTEE7RUFDRSxvQkFBQTtBQVFGOztBQU5BO0VBQ0Usc0JBQUE7QUFTRjs7QUFQQTtFQUNFLHNCQUFBO0FBVUY7O0FBUkE7RUFDRSxzQkFBQTtBQVdGOztBQVRBO0VBQ0Usc0JBQUE7QUFZRjs7QUFUQTtFQUNFO0lBQ0UseUJBQUE7RUFZRjtBQUNGOztBQVRBO0VBQ0U7SUFFRSx5QkFBQTtFQVVGO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLHFCQUFBO0VBU0Y7RUFQQTtJQUVFLG1CQUFBO0VBUUY7QUFDRiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2stY2hhc2Uge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGFuaW1hdGlvbjogc2stY2hhc2UgMi41cyBpbmZpbml0ZSBsaW5lYXIgYm90aDtcbn1cblxuLnNrLWNoYXNlLWRvdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBhbmltYXRpb246IHNrLWNoYXNlLWRvdCAycyBpbmZpbml0ZSBlYXNlLWluLW91dCBib3RoO1xufVxuXG4uc2stY2hhc2UtZG90OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjUlO1xuICBoZWlnaHQ6IDI1JTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYW5pbWF0aW9uOiBzay1jaGFzZS1kb3QtYmVmb3JlIDJzIGluZmluaXRlIGVhc2UtaW4tb3V0IGJvdGg7XG59XG5cbi5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDEpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMS4xcztcbn1cbi5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDIpIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG59XG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCgzKSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOXM7XG59XG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCg0KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuOHM7XG59XG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCg1KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuN3M7XG59XG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCg2KSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuNnM7XG59XG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCgxKTpiZWZvcmUge1xuICBhbmltYXRpb24tZGVsYXk6IC0xLjFzO1xufVxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoMik6YmVmb3JlIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMXM7XG59XG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCgzKTpiZWZvcmUge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjlzO1xufVxuLnNrLWNoYXNlLWRvdDpudGgtY2hpbGQoNCk6YmVmb3JlIHtcbiAgYW5pbWF0aW9uLWRlbGF5OiAtMC44cztcbn1cbi5zay1jaGFzZS1kb3Q6bnRoLWNoaWxkKDUpOmJlZm9yZSB7XG4gIGFuaW1hdGlvbi1kZWxheTogLTAuN3M7XG59XG4uc2stY2hhc2UtZG90Om50aC1jaGlsZCg2KTpiZWZvcmUge1xuICBhbmltYXRpb24tZGVsYXk6IC0wLjZzO1xufVxuXG5Aa2V5ZnJhbWVzIHNrLWNoYXNlIHtcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLWNoYXNlLWRvdCB7XG4gIDgwJSxcbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLWNoYXNlLWRvdC1iZWZvcmUge1xuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KTtcbiAgfVxuICAxMDAlLFxuICAwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 9419:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/menu/menu.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



const _c0 = function () { return ["/history"]; };
const _c1 = function () { return ["/"]; };
class MenuComponent {
}
MenuComponent.ɵfac = function MenuComponent_Factory(t) { return new (t || MenuComponent)(); };
MenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MenuComponent, selectors: [["cmx-menu"]], decls: 10, vars: 5, consts: [[3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", "", 3, "routerLink"]], template: function MenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div")(2, "div")(3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", null, 1)(6, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "History");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
    } }, dependencies: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MatMenu, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MatMenuItem, _angular_material_menu__WEBPACK_IMPORTED_MODULE_1__.MatMenuTrigger, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink], styles: ["div[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 5px;\n  background-color: white;\n  margin: 6px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUNGIiwiZmlsZSI6Im1lbnUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDZweCAwO1xufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 5349:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 2156);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ 8589);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _components_currency_card_currency_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/currency-card/currency-card.component */ 4684);
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/loader/loader.component */ 8662);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/menu/menu.component */ 9419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);








class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_components_currency_card_currency_card_component__WEBPACK_IMPORTED_MODULE_0__.CurrencyCardComponent, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent], imports: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_4__.MatMenuModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule], exports: [_components_currency_card_currency_card_component__WEBPACK_IMPORTED_MODULE_0__.CurrencyCardComponent, _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_1__.LoaderComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_2__.MenuComponent] }); })();


/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    isOffileMode: false,
    currencyApi: 'https://free.currconv.com',
    accessKey: '15718ccc26ece1b807b0'
};


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 23);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
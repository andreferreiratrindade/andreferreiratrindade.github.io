function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesIonicCoreDistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./ion-action-sheet-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-ios.entry.js", "common", 0],
      "./ion-action-sheet-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-action-sheet-md.entry.js", "common", 1],
      "./ion-alert-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-ios.entry.js", "common", 2],
      "./ion-alert-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-alert-md.entry.js", "common", 3],
      "./ion-app_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-ios.entry.js", "common", 4],
      "./ion-app_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-app_8-md.entry.js", "common", 5],
      "./ion-avatar_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-ios.entry.js", "common", 6],
      "./ion-avatar_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-avatar_3-md.entry.js", "common", 7],
      "./ion-back-button-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-ios.entry.js", "common", 8],
      "./ion-back-button-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-back-button-md.entry.js", "common", 9],
      "./ion-backdrop-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-ios.entry.js", 10],
      "./ion-backdrop-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js", 11],
      "./ion-button_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-ios.entry.js", "common", 12],
      "./ion-button_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-button_2-md.entry.js", "common", 13],
      "./ion-card_5-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-ios.entry.js", "common", 14],
      "./ion-card_5-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-card_5-md.entry.js", "common", 15],
      "./ion-checkbox-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-ios.entry.js", "common", 16],
      "./ion-checkbox-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-checkbox-md.entry.js", "common", 17],
      "./ion-chip-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-ios.entry.js", "common", 18],
      "./ion-chip-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-chip-md.entry.js", "common", 19],
      "./ion-col_3.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-col_3.entry.js", 20],
      "./ion-datetime_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-ios.entry.js", "common", 21],
      "./ion-datetime_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-datetime_3-md.entry.js", "common", 22],
      "./ion-fab_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-ios.entry.js", "common", 23],
      "./ion-fab_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-fab_3-md.entry.js", "common", 24],
      "./ion-img.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-img.entry.js", 25],
      "./ion-infinite-scroll_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-ios.entry.js", 26],
      "./ion-infinite-scroll_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2-md.entry.js", 27],
      "./ion-input-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-ios.entry.js", "common", 28],
      "./ion-input-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-input-md.entry.js", "common", 29],
      "./ion-item-option_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-ios.entry.js", "common", 30],
      "./ion-item-option_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item-option_3-md.entry.js", "common", 31],
      "./ion-item_8-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-ios.entry.js", "common", 32],
      "./ion-item_8-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-item_8-md.entry.js", "common", 33],
      "./ion-loading-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-ios.entry.js", "common", 34],
      "./ion-loading-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-loading-md.entry.js", "common", 35],
      "./ion-menu_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-ios.entry.js", "common", 36],
      "./ion-menu_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-menu_3-md.entry.js", "common", 37],
      "./ion-modal-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-ios.entry.js", "common", 38],
      "./ion-modal-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-modal-md.entry.js", "common", 39],
      "./ion-nav_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js", "common", 40],
      "./ion-popover-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-ios.entry.js", "common", 41],
      "./ion-popover-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-popover-md.entry.js", "common", 42],
      "./ion-progress-bar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-ios.entry.js", "common", 43],
      "./ion-progress-bar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-progress-bar-md.entry.js", "common", 44],
      "./ion-radio_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-ios.entry.js", "common", 45],
      "./ion-radio_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-radio_2-md.entry.js", "common", 46],
      "./ion-range-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-ios.entry.js", "common", 47],
      "./ion-range-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-range-md.entry.js", "common", 48],
      "./ion-refresher_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-ios.entry.js", "common", 49],
      "./ion-refresher_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-refresher_2-md.entry.js", "common", 50],
      "./ion-reorder_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-ios.entry.js", "common", 51],
      "./ion-reorder_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-reorder_2-md.entry.js", "common", 52],
      "./ion-ripple-effect.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js", 53],
      "./ion-route_4.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-route_4.entry.js", "common", 54],
      "./ion-searchbar-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-ios.entry.js", "common", 55],
      "./ion-searchbar-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-searchbar-md.entry.js", "common", 56],
      "./ion-segment_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-ios.entry.js", "common", 57],
      "./ion-segment_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-segment_2-md.entry.js", "common", 58],
      "./ion-select_3-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-ios.entry.js", "common", 59],
      "./ion-select_3-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-select_3-md.entry.js", "common", 60],
      "./ion-slide_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-ios.entry.js", 61],
      "./ion-slide_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-slide_2-md.entry.js", 62],
      "./ion-spinner.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-spinner.entry.js", "common", 63],
      "./ion-split-pane-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-ios.entry.js", 64],
      "./ion-split-pane-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-split-pane-md.entry.js", 65],
      "./ion-tab-bar_2-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-ios.entry.js", "common", 66],
      "./ion-tab-bar_2-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab-bar_2-md.entry.js", "common", 67],
      "./ion-tab_2.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js", "common", 68],
      "./ion-text.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-text.entry.js", "common", 69],
      "./ion-textarea-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-ios.entry.js", "common", 70],
      "./ion-textarea-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-textarea-md.entry.js", "common", 71],
      "./ion-toast-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-ios.entry.js", "common", 72],
      "./ion-toast-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toast-md.entry.js", "common", 73],
      "./ion-toggle-ios.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-ios.entry.js", "common", 74],
      "./ion-toggle-md.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-toggle-md.entry.js", "common", 75],
      "./ion-virtual-scroll.entry.js": ["./node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js", 76]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\" menuId=\"mainContent\" side=\"start\">\n      <ion-content class=\"background\">\n        <ion-list id=\"inbox-list\">\n          \n         <span *ngIf=\"usuarioLogado\">\n          <ion-list-header>{{recuperaDadosUsuario.nome}}</ion-list-header>\n          <ion-note>{{recuperaDadosUsuario.email}}</ion-note>\n\n          <ion-chip color=\"tertiary\" (click)=\"logoff()\"  slot=\"close\" routerDirection=\"root\" [routerLink]=\"prestador-consultar\"  size=\"6\">\n            <ion-label>Sair</ion-label>\n            <ion-icon name=\"log-out-outline\"></ion-icon>\n          </ion-chip>\n          </span>\n\n          <span *ngIf=\"!usuarioLogado\" class=\"row justify-content-md-center\">\n            <ion-chip color=\"tertiary\" (click)=\"login()\"  size=\"6\">\n              <ion-label>Login</ion-label>\n              <ion-icon name=\"log-in-outline\"></ion-icon>\n            </ion-chip>\n          </span>\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/accordion/accordion/accordion.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/accordion/accordion/accordion.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAccordionAccordionAccordionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div #wrapper class='expand-wrapper' [class.collapsed]=\"!expanded\">\n  <ng-content></ng-content>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mensagem-validacao/mensagem-validacao.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mensagem-validacao/mensagem-validacao.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMensagemValidacaoMensagemValidacaoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"error-container\">\n  <ng-container *ngFor=\"let validation of validation_messages_object\">\n    <div class=\"error-message\" *ngIf=\"form.get(nomeCampo).hasError(validation.type) && (form.get(nomeCampo).dirty || form.get(nomeCampo).touched)\">\n      <ion-icon name=\"information-circle-outline\"></ion-icon>\n      <span>{{ validation.message }}</span>\n    </div>\n  </ng-container>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menuLateral/menu-lateral/menu-lateral.component.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/menuLateral/menu-lateral/menu-lateral.component.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMenuLateralMenuLateralMenuLateralComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  \n  <!-- <ion-list-header *ngif=\"email\">{{nome}}</ion-list-header>\n  <ion-note *ngif=\"email\">{{email}}</ion-note> -->\n\n  <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n    <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\"\n      [class.selected]=\"selectedIndex == i\">\n      <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n      <ion-label>{{ p.title }}</ion-label>\n    </ion-item>\n  </ion-menu-toggle>\n";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _providers_AuthGuard_AuthGuard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./providers/AuthGuard/AuthGuard */
    "./src/app/providers/AuthGuard/AuthGuard.ts");
    /* harmony import */


    var _providers_AuthGuard_PrestadorSituacaoRedirect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./providers/AuthGuard/PrestadorSituacaoRedirect */
    "./src/app/providers/AuthGuard/PrestadorSituacaoRedirect.ts");

    var routes = [{
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
    }, {
      path: 'folder/:id',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | folder-folder-module */
        "folder-folder-module").then(__webpack_require__.bind(null,
        /*! ./folder/folder.module */
        "./src/app/folder/folder.module.ts")).then(function (m) {
          return m.FolderPageModule;
        });
      }
    }, {
      path: 'sign-in',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-sign-in-sign-in-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-sign-in-sign-in-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/sign-in/sign-in.module */
        "./src/app/pages/sign-in/sign-in.module.ts")).then(function (m) {
          return m.SignInPageModule;
        });
      }
    }, {
      path: 'sign-up',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-sign-up-sign-up-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-sign-up-sign-up-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/sign-up/sign-up.module */
        "./src/app/pages/sign-up/sign-up.module.ts")).then(function (m) {
          return m.SignUpPageModule;
        });
      }
    }, {
      path: 'profile',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-profile-profile-module */
        "pages-profile-profile-module").then(__webpack_require__.bind(null,
        /*! ./pages/profile/profile.module */
        "./src/app/pages/profile/profile.module.ts")).then(function (m) {
          return m.ProfilePageModule;
        });
      }
    }, {
      path: 'criar-igreja',
      canActivate: [_providers_AuthGuard_AuthGuard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-gerenciarIgreja-criar-igreja-criar-igreja-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-gerenciarIgreja-criar-igreja-criar-igreja-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/gerenciarIgreja/criar-igreja/criar-igreja.module */
        "./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.module.ts")).then(function (m) {
          return m.CriarIgrejaPageModule;
        });
      }
    }, {
      path: 'prestador-Form1',
      canActivate: [_providers_AuthGuard_PrestadorSituacaoRedirect__WEBPACK_IMPORTED_MODULE_4__["PrestadorSituacaoRedirect"]],
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-prestador-prestadorCadastro-prestador-cadastro-form1-prestador-cadastro-form1-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-prestador-prestadorCadastro-prestador-cadastro-form1-prestador-cadastro-form1-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.module */
        "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.module.ts")).then(function (m) {
          return m.PrestadorCadastroForm1PageModule;
        });
      }
    }, {
      path: 'prestador-consultar',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-prestador-prestador-consultar-prestador-consultar-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-prestador-prestador-consultar-prestador-consultar-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/prestador/prestador-consultar/prestador-consultar.module */
        "./src/app/pages/prestador/prestador-consultar/prestador-consultar.module.ts")).then(function (m) {
          return m.PrestadorConsultarPageModule;
        });
      }
    }, {
      path: 'home',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-prestador-prestador-consultar-prestador-consultar-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-prestador-prestador-consultar-prestador-consultar-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/prestador/prestador-consultar/prestador-consultar.module */
        "./src/app/pages/prestador/prestador-consultar/prestador-consultar.module.ts")).then(function (m) {
          return m.PrestadorConsultarPageModule;
        });
      }
    }, {
      path: 'prestador-Form2',
      canActivate: [_providers_AuthGuard_PrestadorSituacaoRedirect__WEBPACK_IMPORTED_MODULE_4__["PrestadorSituacaoRedirect"]],
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-prestador-prestadorCadastro-prestador-cadastro-form2-prestador-cadastro-form2-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-prestador-prestadorCadastro-prestador-cadastro-form2-prestador-cadastro-form2-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/prestador/prestadorCadastro/prestador-cadastro-form2/prestador-cadastro-form2.module */
        "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form2/prestador-cadastro-form2.module.ts")).then(function (m) {
          return m.PrestadorCadastroForm2PageModule;
        });
      }
    }, {
      path: 'prestador-Form3',
      canActivate: [_providers_AuthGuard_PrestadorSituacaoRedirect__WEBPACK_IMPORTED_MODULE_4__["PrestadorSituacaoRedirect"]],
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-prestador-prestadorCadastro-prestador-cadastro-form3-prestador-cadastro-form3-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-prestador-prestadorCadastro-prestador-cadastro-form3-prestador-cadastro-form3-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/prestador/prestadorCadastro/prestador-cadastro-form3/prestador-cadastro-form3.module */
        "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form3/prestador-cadastro-form3.module.ts")).then(function (m) {
          return m.PrestadorCadastroForm3PageModule;
        });
      }
    }, {
      path: 'prestador-cadastro-form4',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | pages-prestador-prestadorCadastro-prestador-cadastro-form4-prestador-cadastro-form4-module */
        "pages-prestador-prestadorCadastro-prestador-cadastro-form4-prestador-cadastro-form4-module").then(__webpack_require__.bind(null,
        /*! ./pages/prestador/prestadorCadastro/prestador-cadastro-form4/prestador-cadastro-form4.module */
        "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form4/prestador-cadastro-form4.module.ts")).then(function (m) {
          return m.PrestadorCadastroForm4PageModule;
        });
      }
    }, {
      path: 'modal-dominio-servicos',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-prestador-prestadorCadastro-modal-dominio-servicos-modal-dominio-servicos-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-prestador-prestadorCadastro-modal-dominio-servicos-modal-dominio-servicos-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/prestador/prestadorCadastro/modal-dominio-servicos/modal-dominio-servicos.module */
        "./src/app/pages/prestador/prestadorCadastro/modal-dominio-servicos/modal-dominio-servicos.module.ts")).then(function (m) {
          return m.ModalDominioServicosPageModule;
        });
      }
    }, {
      path: 'visualizar-prestador',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-prestador-visualizar-prestador-visualizar-prestador-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-prestador-visualizar-prestador-visualizar-prestador-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/prestador/visualizar-prestador/visualizar-prestador.module */
        "./src/app/pages/prestador/visualizar-prestador/visualizar-prestador.module.ts")).then(function (m) {
          return m.VisualizarPrestadorPageModule;
        });
      }
    }, {
      path: 'consultar-prestador-adm',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pages-gerenciarIgreja-manterPrestadores-consultar-prestador-adm-consultar-prestador-adm-module */
        [__webpack_require__.e("common"), __webpack_require__.e("pages-gerenciarIgreja-manterPrestadores-consultar-prestador-adm-consultar-prestador-adm-module")]).then(__webpack_require__.bind(null,
        /*! ./pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.module */
        "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.module.ts")).then(function (m) {
          return m.ConsultarPrestadorAdmPageModule;
        });
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: url('background.jpg') 0 0/100% 100% no-repeat;\n}\n\nion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyREFBQTtBQ0NGOztBRElBO0VBQ0UsMkVBQUE7QUNERjs7QURJQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDREY7O0FESUE7RUFDRSxlQUFBO0FDREY7O0FESUE7RUFDRSxtQkFBQTtBQ0RGOztBRElBOztFQUVFLGtCQUFBO0FDREY7O0FESUE7RUFDRSwyREFBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUNGRjs7QURLQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQ0xGOztBRFFBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxzREFBQTtBQ0xGOztBRFFBO0VBQ0UsK0JBQUE7QUNMRjs7QURRQTtFQUNFLGNBQUE7QUNMRjs7QURRQTtFQUNFLGdCQUFBO0FDTEY7O0FEUUE7RUFDRSxzQkFBQTtBQ0xGOztBRFFBO0VBQ0UsbUJBQUE7QUNMRjs7QURRQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUNMRjs7QURRQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0xGOztBRFFBO0VBQ0UsK0JBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDTEY7O0FEUUE7RUFDRSxrQkFBQTtBQ0xGOztBRFFBOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUNMRjs7QURRQTtFQUNFLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQ05GOztBRFNBO0VBQ0UsaUNBQUE7QUNORiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAtLWJhY2tncm91bmQ6IHVybCguLi9hc3NldHMvaW1nL2JhY2tncm91bmQuanBnKSAgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cblxuXG5pb24tbWVudSBpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgLS1wYWRkaW5nLWVuZDogOHB4O1xuICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcblxuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgbWFyZ2luLWJvdHRvbTogMThweDtcblxuICBjb2xvcjogIzc1NzU3NTtcblxuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG59XG5cbmlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoLi4vYXNzZXRzL2ltZy9iYWNrZ3JvdW5kLmpwZykgMCAwLzEwMCUgMTAwJSBuby1yZXBlYXQ7XG59XG5cbmlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./config */
    "./src/app/config.ts");
    /* harmony import */


    var _providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./providers/usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");
    /* harmony import */


    var _providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./providers/base-provider/firebase-auth-service.service */
    "./src/app/providers/base-provider/firebase-auth-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(platform, splashScreen, statusBar, firebaseAuthService, router, usuarioService) {
        _classCallCheck(this, AppComponent);

        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.firebaseAuthService = firebaseAuthService;
        this.router = router;
        this.usuarioService = usuarioService;
        this.selectedIndex = 0;
        this.appPages = [{
          title: 'Consultar Prestador',
          url: 'prestador-consultar',
          icon: 'search'
        }, {
          title: 'Seja um Prestador',
          url: 'prestador-Form1',
          icon: 'people'
        }, {
          title: 'Adicione sua Igreja',
          url: 'criar-igreja',
          icon: 'business'
        }];
        this.labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
        this.initializeApp();
      }

      _createClass(AppComponent, [{
        key: "initializeApp",
        value: function initializeApp() {
          var _this = this;

          this.platform.ready().then(function () {
            _this.statusBar.styleDefault();

            _this.splashScreen.hide();
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var path = window.location.pathname.split('folder/')[1];

          if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(function (page) {
              return page.title.toLowerCase() === path.toLowerCase();
            });
          }

          this.usuarioService.recuperaUsuarioLogado();
        }
      }, {
        key: "logoff",
        value: function logoff() {
          this.firebaseAuthService.signOut();
          this.router.navigate(['/home']);
        }
      }, {
        key: "login",
        value: function login() {
          this.router.navigate(['sign-in']);
        }
      }, {
        key: "recuperaDadosUsuario",
        get: function get() {
          var _a;

          return (_a = _config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario()) !== null && _a !== void 0 ? _a : {
            nome: "",
            email: ""
          };
        }
      }, {
        key: "usuarioLogado",
        get: function get() {
          return _config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario();
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]
      }, {
        type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__["SplashScreen"]
      }, {
        type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"]
      }, {
        type: _providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
      }, {
        type: _providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic-native/splash-screen/ngx */
    "./node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/status-bar/ngx */
    "./node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
    /* harmony import */


    var br_mask__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! br-mask */
    "./node_modules/br-mask/__ivy_ngcc__/dist/index.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var _providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./providers/base-provider/firebase-auth-service.service */
    "./src/app/providers/base-provider/firebase-auth-service.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _providers_base_provider_base_provider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./providers/base-provider/base-provider */
    "./src/app/providers/base-provider/base-provider.ts");
    /* harmony import */


    var _providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./providers/buscaCEP/buscar-cep.service */
    "./src/app/providers/buscaCEP/buscar-cep.service.ts");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_20__);

    firebase__WEBPACK_IMPORTED_MODULE_20__["initializeApp"](src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase);

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      entryComponents: [],
      imports: [br_mask__WEBPACK_IMPORTED_MODULE_7__["BrMaskerModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_http__WEBPACK_IMPORTED_MODULE_17__["HttpModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot({
        mode: 'ios'
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_14__["ComponentsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase), _angular_fire_auth__WEBPACK_IMPORTED_MODULE_11__["AngularFireAuthModule"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_19__["AngularFirestoreModule"]],
      providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"], _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"], _providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_16__["BuscarCEPService"], _providers_base_provider_base_provider__WEBPACK_IMPORTED_MODULE_15__["BaseProvider"], _providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_12__["FirebaseAuthService"], {
        provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
        useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/accordion/accordion/accordion.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/accordion/accordion/accordion.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAccordionAccordionAccordionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "accordion-list .wrapper {\n  transition: 0.2s linear;\n}\naccordion-list .collapsed {\n  height: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uL2FjY29yZGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLHVCQUFBO0FDRFI7QURJSTtFQUNJLG9CQUFBO0FDRlIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWNjb3JkaW9uLWxpc3Qge1xuIFxuICAgIC53cmFwcGVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogMC4ycyBsaW5lYXI7XG4gICAgfSAgIFxuIFxuICAgIC5jb2xsYXBzZWQge1xuICAgICAgICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgICB9XG4gXG59IiwiYWNjb3JkaW9uLWxpc3QgLndyYXBwZXIge1xuICB0cmFuc2l0aW9uOiAwLjJzIGxpbmVhcjtcbn1cbmFjY29yZGlvbi1saXN0IC5jb2xsYXBzZWQge1xuICBoZWlnaHQ6IDAgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/accordion/accordion/accordion.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/accordion/accordion/accordion.component.ts ***!
    \***********************************************************************/

  /*! exports provided: AccordionComponent */

  /***/
  function srcAppComponentsAccordionAccordionAccordionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccordionComponent", function () {
      return AccordionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AccordionComponent = /*#__PURE__*/function () {
      function AccordionComponent(renderer) {
        _classCallCheck(this, AccordionComponent);

        this.renderer = renderer;
        this.expanded = false;
        this.expandHeight = "150px";
      }

      _createClass(AccordionComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
        }
      }]);

      return AccordionComponent;
    }();

    AccordionComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("expandWrapper", {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
    })], AccordionComponent.prototype, "expandWrapper", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expanded")], AccordionComponent.prototype, "expanded", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("expandHeight")], AccordionComponent.prototype, "expandHeight", void 0);
    AccordionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-accordion',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./accordion.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/accordion/accordion/accordion.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./accordion.component.scss */
      "./src/app/components/accordion/accordion/accordion.component.scss"))["default"]]
    })], AccordionComponent);
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _mensagem_validacao_mensagem_validacao_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mensagem-validacao/mensagem-validacao.component */
    "./src/app/components/mensagem-validacao/mensagem-validacao.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _menuLateral_menu_lateral_menu_lateral_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./menuLateral/menu-lateral/menu-lateral.component */
    "./src/app/components/menuLateral/menu-lateral/menu-lateral.component.ts");
    /* harmony import */


    var _accordion_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./accordion/accordion/accordion.component */
    "./src/app/components/accordion/accordion/accordion.component.ts");

    var PAGES_COMPONENTS = [_mensagem_validacao_mensagem_validacao_component__WEBPACK_IMPORTED_MODULE_3__["MensagemValidacaoComponent"], _menuLateral_menu_lateral_menu_lateral_component__WEBPACK_IMPORTED_MODULE_6__["MenuLateralComponent"], _accordion_accordion_accordion_component__WEBPACK_IMPORTED_MODULE_7__["AccordionComponent"]];

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot()],
      declarations: [PAGES_COMPONENTS],
      exports: [PAGES_COMPONENTS],
      entryComponents: []
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/mensagem-validacao/mensagem-validacao.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/mensagem-validacao/mensagem-validacao.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMensagemValidacaoMensagemValidacaoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".error-container .error-message {\n  margin: 16px 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n.error-container .error-message ion-icon {\n  font-size: 16px;\n  -webkit-padding-end: 8px;\n          padding-inline-end: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvY29tcG9uZW50cy9tZW5zYWdlbS12YWxpZGFjYW8vbWVuc2FnZW0tdmFsaWRhY2FvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21lbnNhZ2VtLXZhbGlkYWNhby9tZW5zYWdlbS12YWxpZGFjYW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0ROO0FER007RUFDRSxlQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW5zYWdlbS12YWxpZGFjYW8vbWVuc2FnZW0tdmFsaWRhY2FvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIC5lcnJvci1jb250YWluZXIge1xuICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgIG1hcmdpbjogMTZweCAwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfSIsIi5lcnJvci1jb250YWluZXIgLmVycm9yLW1lc3NhZ2Uge1xuICBtYXJnaW46IDE2cHggMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcik7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5lcnJvci1jb250YWluZXIgLmVycm9yLW1lc3NhZ2UgaW9uLWljb24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIHBhZGRpbmctaW5saW5lLWVuZDogOHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/mensagem-validacao/mensagem-validacao.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/mensagem-validacao/mensagem-validacao.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: MensagemValidacaoComponent */

  /***/
  function srcAppComponentsMensagemValidacaoMensagemValidacaoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MensagemValidacaoComponent", function () {
      return MensagemValidacaoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var MensagemValidacaoComponent = function MensagemValidacaoComponent() {
      _classCallCheck(this, MensagemValidacaoComponent);
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MensagemValidacaoComponent.prototype, "form", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MensagemValidacaoComponent.prototype, "nomeCampo", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], MensagemValidacaoComponent.prototype, "validation_messages_object", void 0);
    MensagemValidacaoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mensagem-validacao',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./mensagem-validacao.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mensagem-validacao/mensagem-validacao.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./mensagem-validacao.component.scss */
      "./src/app/components/mensagem-validacao/mensagem-validacao.component.scss"))["default"]]
    })], MensagemValidacaoComponent);
    /***/
  },

  /***/
  "./src/app/components/menuLateral/menu-lateral/menu-lateral.component.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/components/menuLateral/menu-lateral/menu-lateral.component.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMenuLateralMenuLateralMenuLateralComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvY29tcG9uZW50cy9tZW51TGF0ZXJhbC9tZW51LWxhdGVyYWwvbWVudS1sYXRlcmFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL21lbnVMYXRlcmFsL21lbnUtbGF0ZXJhbC9tZW51LWxhdGVyYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyRUFBQTtBQ0NKOztBREVFO0VBQ0Usb0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFRTtFQUNFLGVBQUE7QUNDSjs7QURFRTtFQUNFLG1CQUFBO0FDQ0o7O0FERUU7O0VBRUUsa0JBQUE7QUNDSjs7QURFRTtFQUNFLDJEQUFBO0FDQ0o7O0FERUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxnQkFBQTtBQ0FKOztBREdFO0VBQ0UsZUFBQTtFQUVBLG1CQUFBO0VBRUEsY0FBQTtFQUVBLGdCQUFBO0FDSEo7O0FETUU7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNISjs7QURNRTtFQUNFLHNEQUFBO0FDSEo7O0FETUU7RUFDRSwrQkFBQTtBQ0hKOztBRE1FO0VBQ0UsY0FBQTtBQ0hKOztBRE1FO0VBQ0UsZ0JBQUE7QUNISjs7QURNRTtFQUNFLHNCQUFBO0FDSEo7O0FETUU7RUFDRSxtQkFBQTtBQ0hKOztBRE1FO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRE1FO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FETUU7RUFDRSwrQkFBQTtBQ0hKOztBRE1FO0VBQ0UsZUFBQTtFQUNBLGNBQUE7QUNISjs7QURNRTtFQUNFLGtCQUFBO0FDSEo7O0FETUU7O0VBRUUsa0JBQUE7RUFDQSxtQkFBQTtBQ0hKOztBRE1FO0VBQ0Usa0JBQUE7QUNISjs7QURNRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0FDSko7O0FET0U7RUFDRSxpQ0FBQTtBQ0pKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51TGF0ZXJhbC9tZW51LWxhdGVyYWwvbWVudS1sYXRlcmFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWl0ZW0tYmFja2dyb3VuZCwgdmFyKC0taW9uLWJhY2tncm91bmQtY29sb3IsICNmZmYpKTtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgICAtLXBhZGRpbmctdG9wOiAyMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgICBwYWRkaW5nOiAyMHB4IDA7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tbGlzdC1oZWFkZXIsXG4gIGlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc3RlcC0xNTAsICNkN2Q4ZGEpO1xuICB9XG4gIFxuICBpb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIFxuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICBcbiAgICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuICBcbiAgICBjb2xvcjogIzc1NzU3NTtcbiAgXG4gICAgbWluLWhlaWdodDogMjZweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAgIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cbiAgXG4gIGlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzYxNmU3ZTtcbiAgfVxuICBcbiAgaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIH1cbiAgXG4gIGlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gICAgcGFkZGluZzogMjBweCAwIDAgMDtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAgIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAgIC0tbWluLWhlaWdodDogNTBweDtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogIzczODQ5YTtcbiAgfVxuICBcbiAgaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuICBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICB9XG4gIFxuICBpb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuICBcbiAgaW9uLW5vdGUge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIFxuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgfVxuICBcbiAgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAgIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgfSIsImlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtaW4taGVpZ2h0OiAyMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIGNvbG9yOiAjNzU3NTc1O1xuICBtaW4taGVpZ2h0OiAyNnB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgLS1wYWRkaW5nLWVuZDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tYmFja2dyb3VuZDogcmdiYSh2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1yZ2IpLCAwLjE0KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNjE2ZTdlO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWNvbnRlbnQge1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDAgMCAwO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBsaW5lLWhlaWdodDogMjRweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctZW5kOiAxNnB4O1xuICAtLW1pbi1oZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICM3Mzg0OWE7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCNsYWJlbHMtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdC1oZWFkZXIsXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW5vdGUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/menuLateral/menu-lateral/menu-lateral.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/components/menuLateral/menu-lateral/menu-lateral.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: MenuLateralComponent */

  /***/
  function srcAppComponentsMenuLateralMenuLateralMenuLateralComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuLateralComponent", function () {
      return MenuLateralComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/providers/usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");

    var MenuLateralComponent = /*#__PURE__*/function () {
      function MenuLateralComponent(usuarioService) {
        _classCallCheck(this, MenuLateralComponent);

        this.usuarioService = usuarioService;
        this.selectedIndex = 0;
        this.appPages = [{
          title: 'Seja um Prestador',
          url: 'sign-up',
          icon: 'warning'
        }, {
          title: 'Adicione sua Igreja',
          url: 'criar-igreja',
          icon: 'warning'
        }];
      }

      _createClass(MenuLateralComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var path = window.location.pathname.split('folder/')[1];

          if (path !== undefined) {
            this.selectedIndex = this.appPages.findIndex(function (page) {
              return page.title.toLowerCase() === path.toLowerCase();
            });
          }

          if (!src_app_config__WEBPACK_IMPORTED_MODULE_2__["Config"].RecuperaInstancia()) {
            this.usuarioService.recuperaUsuarioLogado().then(function (usuario) {
              if (usuario) {
                _this2.usuario = usuario;
              }
            });
          }
        }
      }]);

      return MenuLateralComponent;
    }();

    MenuLateralComponent.ctorParameters = function () {
      return [{
        type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
      }];
    };

    MenuLateralComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-menu-lateral',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./menu-lateral.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/menuLateral/menu-lateral/menu-lateral.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./menu-lateral.component.scss */
      "./src/app/components/menuLateral/menu-lateral/menu-lateral.component.scss"))["default"]]
    })], MenuLateralComponent);
    /***/
  },

  /***/
  "./src/app/config.ts":
  /*!***************************!*\
    !*** ./src/app/config.ts ***!
    \***************************/

  /*! exports provided: Config */

  /***/
  function srcAppConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Config", function () {
      return Config;
    });

    var Config = /*#__PURE__*/function () {
      function Config() {
        _classCallCheck(this, Config);
      }

      _createClass(Config, [{
        key: "adicionaUsuario",
        value: function adicionaUsuario(u) {
          this.usuario = u;
        }
      }, {
        key: "recuperaUsuario",
        value: function recuperaUsuario() {
          return this.usuario;
        }
      }], [{
        key: "RecuperaInstancia",
        value: function RecuperaInstancia() {
          if (!Config.instance) {
            Config.instance = new Config();
          }

          return Config.instance;
        }
      }]);

      return Config;
    }();
    /***/

  },

  /***/
  "./src/app/helpers/loadingContr.ts":
  /*!*****************************************!*\
    !*** ./src/app/helpers/loadingContr.ts ***!
    \*****************************************/

  /*! exports provided: LoadingContr */

  /***/
  function srcAppHelpersLoadingContrTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoadingContr", function () {
      return LoadingContr;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var LoadingContr = /*#__PURE__*/function () {
      /**
       *
       */
      function LoadingContr(loadingController) {
        _classCallCheck(this, LoadingContr);

        this.loadingController = loadingController;
        this.isLoading = false;
      }

      _createClass(LoadingContr, [{
        key: "showLoader",
        value: function showLoader() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.isLoading = true;
                    _context.next = 3;
                    return this.loadingController.create({// duration: 5000,
                    }).then(function (a) {
                      a.present().then(function () {
                        if (!_this3.isLoading) {
                          a.dismiss();
                        }
                      });
                    });

                  case 3:
                    return _context.abrupt("return", _context.sent);

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        } // Hide the loader if already created otherwise return error

      }, {
        key: "hideLoader",
        value: function hideLoader() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.isLoading = false;
                    _context2.next = 3;
                    return this.loadingController.dismiss();

                  case 3:
                    return _context2.abrupt("return", _context2.sent);

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }], [{
        key: "getLoadingContent",
        value: function getLoadingContent() {
          return {
            content: 'Processando.'
          };
        }
      }]);

      return LoadingContr;
    }();

    LoadingContr.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["LoadingController"]
      }];
    };

    LoadingContr = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], LoadingContr);
    /***/
  },

  /***/
  "./src/app/helpers/toastCustom.ts":
  /*!****************************************!*\
    !*** ./src/app/helpers/toastCustom.ts ***!
    \****************************************/

  /*! exports provided: ToastCustom */

  /***/
  function srcAppHelpersToastCustomTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastCustom", function () {
      return ToastCustom;
    });

    var ToastCustom = /*#__PURE__*/function () {
      function ToastCustom() {
        _classCallCheck(this, ToastCustom);
      }

      _createClass(ToastCustom, null, [{
        key: "errorToast",
        value: function errorToast(msg, toastCtrl) {
          this.CustomToast(toastCtrl, msg, "danger", 4000);
        }
      }, {
        key: "SucessoToast",
        value: function SucessoToast(toastCtrl) {
          this.CustomToast(toastCtrl, "Operação realizada com sucesso.", "success", 4000);
        }
      }, {
        key: "CustomToast",
        value: function CustomToast(toastCtrl, message, color, duration) {
          toastCtrl.create({
            message: message,
            duration: duration,
            color: color
          }).then(function (x) {
            x.present();
          });
        }
      }]);

      return ToastCustom;
    }();
    /***/

  },

  /***/
  "./src/app/pages/profile/profile.model.ts":
  /*!************************************************!*\
    !*** ./src/app/pages/profile/profile.model.ts ***!
    \************************************************/

  /*! exports provided: ProfileModel */

  /***/
  function srcAppPagesProfileProfileModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModel", function () {
      return ProfileModel;
    });

    var ProfileModel = function ProfileModel() {
      _classCallCheck(this, ProfileModel);
    };
    /***/

  },

  /***/
  "./src/app/providers/AuthGuard/AuthGuard.ts":
  /*!**************************************************!*\
    !*** ./src/app/providers/AuthGuard/AuthGuard.ts ***!
    \**************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppProvidersAuthGuardAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");
    /* harmony import */


    var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(router, usuarioService, loadingControll) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.usuarioService = usuarioService;
        this.loadingControll = loadingControll;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this4 = this;

          this.loadingControll.showLoader();
          return this.usuarioService.recuperaUsuarioLogado().then(function (x) {
            _this4.loadingControll.hideLoader();

            if (x == null && !src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario()) {
              _this4.router.navigate(['/sign-in'], {
                queryParams: {
                  returnUrl: state.url
                }
              });
            }

            return true;
          })["catch"](function () {
            _this4.loadingControll.showLoader();

            return true;
          });
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
      }, {
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_3__["LoadingContr"]
      }];
    };

    AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/providers/AuthGuard/PrestadorSituacaoRedirect.ts":
  /*!******************************************************************!*\
    !*** ./src/app/providers/AuthGuard/PrestadorSituacaoRedirect.ts ***!
    \******************************************************************/

  /*! exports provided: PrestadorSituacaoRedirect */

  /***/
  function srcAppProvidersAuthGuardPrestadorSituacaoRedirectTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorSituacaoRedirect", function () {
      return PrestadorSituacaoRedirect;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");
    /* harmony import */


    var _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var _prestador_prestador_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../prestador/prestador.service */
    "./src/app/providers/prestador/prestador.service.ts");
    /* harmony import */


    var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/utils/constants */
    "./src/app/utils/constants.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/helpers/toastCustom */
    "./src/app/helpers/toastCustom.ts");

    var PrestadorSituacaoRedirect = /*#__PURE__*/function () {
      function PrestadorSituacaoRedirect(router, usuarioService, loadingControll, prestadorService, toast) {
        _classCallCheck(this, PrestadorSituacaoRedirect);

        this.router = router;
        this.usuarioService = usuarioService;
        this.loadingControll = loadingControll;
        this.prestadorService = prestadorService;
        this.toast = toast;
      }

      _createClass(PrestadorSituacaoRedirect, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          var _this5 = this;

          this.loadingControll.showLoader();
          return this.usuarioService.recuperaUsuarioLogado().then(function (x) {
            if (x == null && !src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario()) {
              _this5.loadingControll.hideLoader();

              _this5.router.navigate(['/sign-in'], {
                queryParams: {
                  returnUrl: state.url
                }
              });
            } else {
              _this5.prestadorService.RecuperaPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId).then(function (result) {
                var redirectStr = "home";
                var situacaoPrestador = 0;

                if (result) {
                  situacaoPrestador = result.situacaoPrestador;
                }

                switch (situacaoPrestador) {
                  case src_app_utils_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].TipoSituacaoPrestador.Form1:
                    redirectStr = "prestador-Form1";
                    break;

                  case src_app_utils_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].TipoSituacaoPrestador.Form2:
                    redirectStr = "prestador-Form2";
                    break;

                  case src_app_utils_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].TipoSituacaoPrestador.Form3:
                    redirectStr = "prestador-Form3";
                    break;

                  case src_app_utils_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].TipoSituacaoPrestador.PendenteAutorizacao:
                    src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_9__["ToastCustom"].CustomToast(_this5.toast, "Anteção. Existe uma solicitação de aprovação deste prestador para o adiministrador da igreja.", "danger", 5000);
                    redirectStr = "visualizar-prestador";
                    break;

                  default:
                    redirectStr = "visualizar-prestador";
                    break;
                }

                _this5.loadingControll.hideLoader();

                _this5.router.navigate([redirectStr], {
                  queryParams: {
                    usuarioId: src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId
                  }
                });
              });
            }

            return true;
          })["catch"](function () {
            _this5.loadingControll.hideLoader();

            return true;
          });
        }
      }]);

      return PrestadorSituacaoRedirect;
    }();

    PrestadorSituacaoRedirect.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _usuario_usuario_service__WEBPACK_IMPORTED_MODULE_4__["UsuarioService"]
      }, {
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_3__["LoadingContr"]
      }, {
        type: _prestador_prestador_service__WEBPACK_IMPORTED_MODULE_6__["PrestadorService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
      }];
    };

    PrestadorSituacaoRedirect = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PrestadorSituacaoRedirect);
    /***/
  },

  /***/
  "./src/app/providers/base-provider/base-provider.ts":
  /*!**********************************************************!*\
    !*** ./src/app/providers/base-provider/base-provider.ts ***!
    \**********************************************************/

  /*! exports provided: BaseProvider */

  /***/
  function srcAppProvidersBaseProviderBaseProviderTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseProvider", function () {
      return BaseProvider;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/http */
    "./node_modules/@angular/http/__ivy_ngcc__/fesm2015/http.js");

    var BaseProvider = /*#__PURE__*/function () {
      function BaseProvider(http) {
        _classCallCheck(this, BaseProvider);

        this.http = http;
      }

      _createClass(BaseProvider, [{
        key: "apiGet",
        value: function apiGet(url) {
          return this.http.get(url).toPromise().then(function (data) {
            return data.json();
          })["catch"](this.handleError);
        }
      }, {
        key: "apiPost",
        value: function apiPost(url, obj) {// return this.http
          //   .post(Config.apiUrl + url, obj, this.getRequestOptions())
          //   .toPromise()
          //   .then(data => {
          //     return data.json();
          //   })
          //   .catch(this.handleError);
        }
      }, {
        key: "getRequestOptions",
        value: function getRequestOptions() {
          var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]();
          headers.append('Content-Type', 'application/json');
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('X-Requested-With', 'XMLHttpRequest'); // headers.append('Authentication', Config.token);

          return new _angular_http__WEBPACK_IMPORTED_MODULE_2__["RequestOptions"]({
            headers: headers
          });
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.error(error); // return Observable.throw(error.json() || 'Server error');
        }
      }, {
        key: "extractData",
        value: function extractData(res) {
          var body = res.json();
          return body || {};
        }
      }]);

      return BaseProvider;
    }();

    BaseProvider.ctorParameters = function () {
      return [{
        type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]
      }];
    };

    BaseProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], BaseProvider);
    /***/
  },

  /***/
  "./src/app/providers/base-provider/firebase-auth-service.service.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/providers/base-provider/firebase-auth-service.service.ts ***!
    \**************************************************************************/

  /*! exports provided: FirebaseAuthService */

  /***/
  function srcAppProvidersBaseProviderFirebaseAuthServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirebaseAuthService", function () {
      return FirebaseAuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_pages_profile_profile_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/pages/profile/profile.model */
    "./src/app/pages/profile/profile.model.ts");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");

    var FirebaseAuthService = /*#__PURE__*/function () {
      function FirebaseAuthService(angularFire, platform) {
        _classCallCheck(this, FirebaseAuthService);

        this.angularFire = angularFire;
        this.platform = platform;
        this.redirectResult = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
      }

      _createClass(FirebaseAuthService, [{
        key: "verificaUsuarioLogado",
        value: function verificaUsuarioLogado() {
          var _this6 = this;

          return new Promise(function (resolve, reject) {
            _this6.angularFire.onAuthStateChanged(function (usr) {
              return resolve(usr);
            });
          });
        }
        /*
            // when using signInWithRedirect, this listens for the redirect results
            this.angularFire.getRedirectResult()
            .then((result) => {
              // result.credential.accessToken gives you the Provider Access Token. You can use it to access the Provider API.
              if (result.user) {
                this.setProviderAdditionalInfo(result.additionalUserInfo.profile);
                this.currentUser = result.user;
                this.redirectResult.next(result);
              }
            }, (error) => {
              this.redirectResult.next({error: error.code});
            });*/

      }, {
        key: "getRedirectResult",
        value: function getRedirectResult() {
          return this.redirectResult.asObservable();
        }
      }, {
        key: "setProviderAdditionalInfo",
        value: function setProviderAdditionalInfo(additionalInfo) {
          this.userProviderAdditionalInfo = Object.assign({}, additionalInfo);
        }
      }, {
        key: "getProfileData",
        value: function getProfileData() {
          var userModel = new src_app_pages_profile_profile_model__WEBPACK_IMPORTED_MODULE_6__["ProfileModel"]();
          var providerData = this.currentUser.providerData[0];

          if (this.userProviderAdditionalInfo) {
            providerData = Object.assign(Object.assign({}, providerData), this.userProviderAdditionalInfo);
          } // Default imgs are too small and our app needs a bigger image


          switch (providerData.providerId) {
            case 'facebook.com':
              userModel.image = providerData.photoURL + '?height=400';
              break;

            case 'password':
              userModel.image = 'https://s3-us-west-2.amazonaws.com/ionicthemes/otros/avatar-placeholder.png';
              break;

            case 'twitter.com':
              userModel.image = providerData.photoURL.replace('_normal', '_400x400');
              break;

            case 'google.com':
              userModel.image = providerData.photoURL.split('=')[0];
              break;

            default:
              userModel.image = providerData.photoURL;
          }

          userModel.name = providerData.name || providerData.displayName || 'What\'s your name?';
          userModel.role = 'How would you describe yourself?';
          userModel.description = providerData.description || 'Anything else you would like to share with the world?';
          userModel.phoneNumber = providerData.phoneNumber || 'Is there a number where I can reach you?';
          userModel.email = providerData.email || 'Where can I send you emails?';
          userModel.provider = providerData.providerId !== 'password' ? providerData.providerId : 'Credentials';
          return userModel;
        } // Get the currently signed-in user

      }, {
        key: "getLoggedInUser",
        value: function getLoggedInUser() {
          return this.currentUser;
        }
      }, {
        key: "signOut",
        value: function signOut() {
          src_app_config__WEBPACK_IMPORTED_MODULE_7__["Config"].RecuperaInstancia().adicionaUsuario(null);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(this.angularFire.signOut());
        }
      }, {
        key: "signInWithEmail",
        value: function signInWithEmail(email, password) {
          return this.angularFire.signInWithEmailAndPassword(email, password);
        }
      }, {
        key: "signUpWithEmail",
        value: function signUpWithEmail(email, password) {
          return this.angularFire.createUserWithEmailAndPassword(email, password);
        }
      }, {
        key: "socialSignIn",
        value: function socialSignIn(providerName, scopes) {
          var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].OAuthProvider(providerName); // add any permission scope you need

          if (scopes) {
            scopes.forEach(function (scope) {
              provider.addScope(scope);
            });
          }

          if (this.platform.is('desktop')) {
            return this.angularFire.signInWithPopup(provider);
          } else {
            // web but not desktop, for example mobile PWA
            return this.angularFire.signInWithRedirect(provider);
          }
        }
      }, {
        key: "signInWithFacebook",
        value: function signInWithFacebook() {
          var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].FacebookAuthProvider(); // const scopes = ['user_birthday'];

          return this.socialSignIn(provider.providerId);
        }
      }, {
        key: "signInWithGoogle",
        value: function signInWithGoogle() {
          var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].GoogleAuthProvider();
          var scopes = ['profile', 'email'];
          return this.socialSignIn(provider.providerId, scopes);
        }
      }, {
        key: "signInWithTwitter",
        value: function signInWithTwitter() {
          var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_5__["auth"].TwitterAuthProvider();
          return this.socialSignIn(provider.providerId);
        }
      }]);

      return FirebaseAuthService;
    }();

    FirebaseAuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
      }];
    };

    FirebaseAuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], FirebaseAuthService);
    /***/
  },

  /***/
  "./src/app/providers/buscaCEP/buscar-cep.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/providers/buscaCEP/buscar-cep.service.ts ***!
    \**********************************************************/

  /*! exports provided: BuscarCEPService */

  /***/
  function srcAppProvidersBuscaCEPBuscarCepServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuscarCEPService", function () {
      return BuscarCEPService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _base_provider_base_provider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-provider/base-provider */
    "./src/app/providers/base-provider/base-provider.ts");

    var BuscarCEPService = /*#__PURE__*/function () {
      function BuscarCEPService(baseProvider) {
        _classCallCheck(this, BuscarCEPService);

        this.baseProvider = baseProvider;
      }

      _createClass(BuscarCEPService, [{
        key: "buscarCEP",
        value: function buscarCEP(cep) {
          return this.baseProvider.apiGet("https://viacep.com.br/ws/" + cep + "/json/");
        }
      }, {
        key: "RecuperaEnderecoCompleto",
        value: function RecuperaEnderecoCompleto(item) {
          return item.logradouro + ", " + item.bairro + " - " + item.cidade + "/" + item.uf + " - " + item.cep;
        }
      }]);

      return BuscarCEPService;
    }();

    BuscarCEPService.ctorParameters = function () {
      return [{
        type: _base_provider_base_provider__WEBPACK_IMPORTED_MODULE_2__["BaseProvider"]
      }];
    };

    BuscarCEPService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], BuscarCEPService);
    /***/
  },

  /***/
  "./src/app/providers/prestador/prestador.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/providers/prestador/prestador.service.ts ***!
    \**********************************************************/

  /*! exports provided: PrestadorService */

  /***/
  function srcAppProvidersPrestadorPrestadorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorService", function () {
      return PrestadorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_repository_prestador_prestador_rep_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/repository/prestador/prestador-rep-service.service */
    "./src/app/repository/prestador/prestador-rep-service.service.ts");

    var PrestadorService = /*#__PURE__*/function () {
      function PrestadorService(prestadorRepService) {
        _classCallCheck(this, PrestadorService);

        this.prestadorRepService = prestadorRepService;
      }

      _createClass(PrestadorService, [{
        key: "recuperaPrestadoresPorIgreja",
        value: function recuperaPrestadoresPorIgreja(igrejaId) {
          return this.prestadorRepService.recuperaPrestadoresPorIgreja(igrejaId);
        }
      }, {
        key: "AtualizaPrestador",
        value: function AtualizaPrestador(usuarioId, obj) {
          return this.prestadorRepService.AtualizaPrestador(usuarioId, obj);
        }
      }, {
        key: "ExcluirServico",
        value: function ExcluirServico(usuarioId, servicoId) {
          return this.prestadorRepService.ExcluirServico(usuarioId, servicoId);
        }
      }, {
        key: "AdicionaServicoAoPrestador",
        value: function AdicionaServicoAoPrestador(usuarioId, servico) {
          return this.prestadorRepService.AdicionaServicoAoPrestador(usuarioId, servico);
        }
      }, {
        key: "RecuperaPrestador",
        value: function RecuperaPrestador(usuarioId) {
          return this.prestadorRepService.RecuperaPrestador(usuarioId);
        }
      }, {
        key: "RecuperaUfPrestadorDisponiveis",
        value: function RecuperaUfPrestadorDisponiveis() {
          return this.prestadorRepService.recuperaUfPrestadorDisponiveis();
        }
      }, {
        key: "AdicionarNovoPrestador",
        value: function AdicionarNovoPrestador(prestador) {
          return this.prestadorRepService.AdicionaPrestador(prestador);
        }
      }, {
        key: "RecuperaPestadoresPorCidadeEhUFEhServico",
        value: function RecuperaPestadoresPorCidadeEhUFEhServico(ufSelecionado, cidadeSelecionado, servicoId) {
          return this.prestadorRepService.RecuperaPestadoresPorCidadeEhUFEhServico(ufSelecionado, cidadeSelecionado, servicoId);
        }
      }, {
        key: "RecuperaCidadePrestadorDisponiveis",
        value: function RecuperaCidadePrestadorDisponiveis(ufSelecionado) {
          return this.prestadorRepService.RecuperaCidadePrestadorDisponiveis(ufSelecionado);
        }
      }, {
        key: "recuperaServicosPorPrestador",
        value: function recuperaServicosPorPrestador(usuarioId) {
          return this.prestadorRepService.recuperaServicosPorPrestador(usuarioId);
        }
      }, {
        key: "recuperaServicosPorPrestadores",
        value: function recuperaServicosPorPrestadores(usuarioId) {
          return this.prestadorRepService.recuperaServicosPorPrestadores(usuarioId);
        }
      }]);

      return PrestadorService;
    }();

    PrestadorService.ctorParameters = function () {
      return [{
        type: src_app_repository_prestador_prestador_rep_service_service__WEBPACK_IMPORTED_MODULE_2__["PrestadorRepServiceService"]
      }];
    };

    PrestadorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PrestadorService);
    /***/
  },

  /***/
  "./src/app/providers/usuario/usuario.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/providers/usuario/usuario.service.ts ***!
    \******************************************************/

  /*! exports provided: UsuarioService */

  /***/
  function srcAppProvidersUsuarioUsuarioServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioService", function () {
      return UsuarioService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_repository_usuario_usuario_rep_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/repository/usuario/usuario-rep.service */
    "./src/app/repository/usuario/usuario-rep.service.ts");
    /* harmony import */


    var _base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base-provider/firebase-auth-service.service */
    "./src/app/providers/base-provider/firebase-auth-service.service.ts");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");

    var UsuarioService = /*#__PURE__*/function () {
      function UsuarioService(usuarioRepository, firebaseAutentication) {
        _classCallCheck(this, UsuarioService);

        this.usuarioRepository = usuarioRepository;
        this.firebaseAutentication = firebaseAutentication;
      }

      _createClass(UsuarioService, [{
        key: "AdicionarUsuario",
        value: function AdicionarUsuario(item) {
          return this.usuarioRepository.add(item, item.usuarioId);
        }
      }, {
        key: "RecuperaNomeUsuarios",
        value: function RecuperaNomeUsuarios(usuarios) {
          return this.usuarioRepository.find({
            elemento: "usuarioId",
            tipoComparacao: "in",
            comparacao: usuarios
          });
        }
      }, {
        key: "RecuperaUsuarioPorUsuarioId",
        value: function RecuperaUsuarioPorUsuarioId(usuarioId) {
          var _this7 = this;

          return new Promise(function (resolve, reject) {
            _this7.usuarioRepository.findOne(usuarioId).then(function (result) {
              resolve(result);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "recuperaUsuarioLogado",
        value: function recuperaUsuarioLogado() {
          var _this8 = this;

          console.log("Verifica Usuario Logado;");
          return new Promise(function (resolve, reject) {
            _this8.firebaseAutentication.verificaUsuarioLogado().then(function (user) {
              if (user != null) {
                _this8.usuarioRepository.findOne(user.uid).then(function (result) {
                  src_app_config__WEBPACK_IMPORTED_MODULE_4__["Config"].RecuperaInstancia().adicionaUsuario(result);
                  resolve(result);
                });
              } else {
                src_app_config__WEBPACK_IMPORTED_MODULE_4__["Config"].RecuperaInstancia().adicionaUsuario(null);
                resolve(null);
              }
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }]);

      return UsuarioService;
    }();

    UsuarioService.ctorParameters = function () {
      return [{
        type: src_app_repository_usuario_usuario_rep_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioRepService"]
      }, {
        type: _base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_3__["FirebaseAuthService"]
      }];
    };

    UsuarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UsuarioService);
    /***/
  },

  /***/
  "./src/app/repository/prestador/prestador-rep-service.service.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/repository/prestador/prestador-rep-service.service.ts ***!
    \***********************************************************************/

  /*! exports provided: PrestadorRepServiceService */

  /***/
  function srcAppRepositoryPrestadorPrestadorRepServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorRepServiceService", function () {
      return PrestadorRepServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../repository-interface/Repository-Base */
    "./src/app/repository/repository-interface/Repository-Base.ts");
    /* harmony import */


    var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/utils/constants */
    "./src/app/utils/constants.ts");

    var PrestadorRepServiceService = /*#__PURE__*/function (_repository_interface) {
      _inherits(PrestadorRepServiceService, _repository_interface);

      var _super = _createSuper(PrestadorRepServiceService);

      function PrestadorRepServiceService() {
        _classCallCheck(this, PrestadorRepServiceService);

        return _super.apply(this, arguments);
      }

      _createClass(PrestadorRepServiceService, [{
        key: "recuperaPrestadoresPorIgreja",
        value: function recuperaPrestadoresPorIgreja(igrejaId) {
          var _this9 = this;

          return new Promise(function (retorno, reject) {
            _this9.db.collectionGroup("prestador").where("igrejas", "array-contains", igrejaId).get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                lst.push(doc.data());
              });
              retorno(lst);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "ExcluirServico",
        value: function ExcluirServico(usuarioId, servicoId) {
          var _this10 = this;

          return new Promise(function (retorno, reject) {
            return _this10.db.collection("usuario").doc(usuarioId).collection("prestador").doc(usuarioId).collection("servico").doc(servicoId)["delete"]().then(function (result) {
              retorno(result);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "AtualizaPrestador",
        value: function AtualizaPrestador(usuarioId, item) {
          var _this11 = this;

          return new Promise(function (retorno, reject) {
            _this11.db.collection("usuario").doc(usuarioId).collection("prestador").doc(usuarioId).update(item).then(function (result) {
              retorno(result);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "AdicionaServicoAoPrestador",
        value: function AdicionaServicoAoPrestador(usuarioId, servico) {
          var _this12 = this;

          return new Promise(function (retorno, reject) {
            return _this12.db.collection("usuario").doc(usuarioId).collection("prestador").doc(usuarioId).collection("servico").doc(servico.servicoId).set(Object.assign({}, servico), {
              merge: true
            }).then(function (result) {
              retorno(result);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "RecuperaPrestador",
        value: function RecuperaPrestador(usuarioId) {
          var _this13 = this;

          return new Promise(function (retorno, reject) {
            _this13.db.collection("usuario").doc(usuarioId).collection("prestador").doc(usuarioId).get().then(function (result) {
              retorno(result.data());
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "recuperaServicosPorPrestadores",
        value: function recuperaServicosPorPrestadores(usuarios) {
          var _this14 = this;

          return new Promise(function (resolve, reject) {
            _this14.db.collectionGroup("servico").where("usuarioId", "in", usuarios).get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                lst.push(doc.data());
              });
              resolve(lst);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "recuperaServicosPorPrestador",
        value: function recuperaServicosPorPrestador(usuarioId) {
          var _this15 = this;

          return new Promise(function (resolve, reject) {
            _this15.db.collection("usuario").doc(usuarioId).collection("prestador").doc(usuarioId).collection("servico").get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                lst.push(doc.data());
              });
              resolve(lst);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "RecuperaPestadoresPorCidadeEhUFEhServico",
        value: function RecuperaPestadoresPorCidadeEhUFEhServico(ufSelecionado, cidadeSelecionado, servicoId) {
          var _this16 = this;

          return new Promise(function (resolve, reject) {
            var query = _this16.db.collectionGroup("prestador").where("situacaoPrestador", "==", src_app_utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].TipoSituacaoPrestador.PendenteAutorizacao).where("uf", "==", ufSelecionado);

            if (cidadeSelecionado) {
              query.where("cidade", "==", cidadeSelecionado);
            }

            if (servicoId) {
              query.firestore.collectionGroup("servico").where("servicoId", "==", servicoId);
            }

            query.get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                lst.push(doc.data());
              });
              resolve(lst);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "RecuperaCidadePrestadorDisponiveis",
        value: function RecuperaCidadePrestadorDisponiveis(ufSelecionado) {
          var _this17 = this;

          return new Promise(function (resolve, reject) {
            _this17.db.collectionGroup("prestador").where("uf", "==", ufSelecionado).where("situacaoPrestador", "==", src_app_utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].TipoSituacaoPrestador.Form2).get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                if (!lst.includes(doc.data().cidade)) {
                  lst.push(doc.data().cidade);
                }
              });
              resolve(lst);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "recuperaUfPrestadorDisponiveis",
        value: function recuperaUfPrestadorDisponiveis() {
          var _this18 = this;

          return new Promise(function (resolve, reject) {
            _this18.db.collectionGroup("prestador").where("situacaoPrestador", "==", src_app_utils_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].TipoSituacaoPrestador.Form2).get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                if (!lst.includes(doc.data().uf)) {
                  lst.push(doc.data().uf);
                }
              });
              resolve(lst);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }, {
        key: "AdicionaPrestador",
        value: function AdicionaPrestador(prestador) {
          var _this19 = this;

          console.log(prestador);
          return new Promise(function (resolve, reject) {
            _this19.db.collection("usuario").doc(prestador.usuarioId).collection("prestador").doc(prestador.usuarioId).set(Object.assign({}, prestador)).then(function (obj) {
              resolve(obj);
            })["catch"](function (err) {
              reject(err);
            });
          });
        }
      }]);

      return PrestadorRepServiceService;
    }(_repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__["BaseRepository"]);

    PrestadorRepServiceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PrestadorRepServiceService);
    /***/
  },

  /***/
  "./src/app/repository/repository-interface/Repository-Base.ts":
  /*!********************************************************************!*\
    !*** ./src/app/repository/repository-interface/Repository-Base.ts ***!
    \********************************************************************/

  /*! exports provided: BaseRepository */

  /***/
  function srcAppRepositoryRepositoryInterfaceRepositoryBaseTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseRepository", function () {
      return BaseRepository;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_1__);

    var BaseRepository = /*#__PURE__*/function () {
      /**
       *
       */
      function BaseRepository() {
        var _this20 = this;

        _classCallCheck(this, BaseRepository);

        // success
        this.addCollection = function (item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this20, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    return _context3.abrupt("return", null);

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        };

        this.update = function (documentName, item) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this20, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    return _context4.abrupt("return", null);

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        };

        this.db = firebase_app__WEBPACK_IMPORTED_MODULE_1__["firestore"]();
      }

      _createClass(BaseRepository, [{
        key: "add",
        value: function add(item, id) {
          var _this21 = this;

          var idTemp = id ? id : this.db.collection(this._collectionName).doc().id;
          item.id = idTemp;
          return new Promise(function (resolve, reject) {
            _this21.db.collection(_this21._collectionName).doc(idTemp).set(Object.assign({}, item)).then(function (obj) {
              resolve(obj);
            })["catch"](function (error) {
              reject(error);
            });
          });
        } // .where(element.obj, element.type, element.compare)

      }, {
        key: "find",
        value: function find(filter) {
          var _this22 = this;

          return new Promise(function (resolve, reject) {
            var ref = _this22.db.collection(_this22._collectionName).where(filter.elemento, filter.tipoComparacao, filter.comparacao).get().then(function (result) {
              var lst = [];
              result.forEach(function (doc) {
                lst.push({
                  data: doc.data(),
                  id: doc.id
                });
              });
              resolve(lst);
            })["catch"](function (error) {
              console.log("Error getting documents: ", error);
            });
          });
        }
      }, {
        key: "findOne",
        value: function findOne(id) {
          var _this23 = this;

          return new Promise(function (resolve, reject) {
            _this23.db.collection(_this23._collectionName).doc(id).get().then(function (result) {
              resolve(result.data());
            });
          });
        } // return  firebase.database().ref(documentName).once("value",(result=>{
        // 	console.log(result);			
        // }));

      }, {
        key: "delete",
        value: function _delete(id) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    throw new Error('Method not implemented.');

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5);
          }));
        }
      }, {
        key: "recuperaColletion",
        value: function recuperaColletion(collection) {
          return this.db.collection(collection);
        }
      }, {
        key: "serverTimestamp",
        get: function get() {
          return null; //firebase.firestore.Timestamp.now().toDate().toString(); // Timestamp.now.toString();
        }
      }]);

      return BaseRepository;
    }();
    /***/

  },

  /***/
  "./src/app/repository/usuario/usuario-rep.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/repository/usuario/usuario-rep.service.ts ***!
    \***********************************************************/

  /*! exports provided: UsuarioRepService */

  /***/
  function srcAppRepositoryUsuarioUsuarioRepServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioRepService", function () {
      return UsuarioRepService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../repository-interface/Repository-Base */
    "./src/app/repository/repository-interface/Repository-Base.ts");

    var UsuarioRepService = /*#__PURE__*/function (_repository_interface2) {
      _inherits(UsuarioRepService, _repository_interface2);

      var _super2 = _createSuper(UsuarioRepService);

      function UsuarioRepService() {
        var _this24;

        _classCallCheck(this, UsuarioRepService);

        _this24 = _super2.call(this);
        _this24._collectionName = "usuario";
        return _this24;
      }

      return UsuarioRepService;
    }(_repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__["BaseRepository"]);

    UsuarioRepService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UsuarioRepService);
    /***/
  },

  /***/
  "./src/app/utils/constants.ts":
  /*!************************************!*\
    !*** ./src/app/utils/constants.ts ***!
    \************************************/

  /*! exports provided: Constants */

  /***/
  function srcAppUtilsConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Constants", function () {
      return Constants;
    });

    var Constants;

    (function (Constants) {
      var ListTipoSituacaoPrestador = /*#__PURE__*/function () {
        function ListTipoSituacaoPrestador() {
          _classCallCheck(this, ListTipoSituacaoPrestador);
        }

        _createClass(ListTipoSituacaoPrestador, null, [{
          key: "RecuperaListagem",
          value: function RecuperaListagem() {
            return [{
              valor: TipoSituacaoPrestador.Form1,
              descricao: "Informações Iniciais"
            }, {
              valor: TipoSituacaoPrestador.Form2,
              descricao: "Serviços"
            }, {
              valor: TipoSituacaoPrestador.Form3,
              descricao: "Confirmar Dados"
            }, {
              valor: TipoSituacaoPrestador.PendenteAutorizacao,
              descricao: "Pendente de Autorização"
            }, {
              valor: TipoSituacaoPrestador.Ativo,
              descricao: "Ativo"
            }, {
              valor: TipoSituacaoPrestador.Suspenso,
              descricao: "Suspenso"
            }];
          }
        }, {
          key: "RecuperaDescricaoPorValor",
          value: function RecuperaDescricaoPorValor(valor) {
            return this.RecuperaListagem().filter(function (y) {
              return y.valor == valor;
            })[0].descricao;
          }
        }]);

        return ListTipoSituacaoPrestador;
      }();

      Constants.ListTipoSituacaoPrestador = ListTipoSituacaoPrestador;

      var TipoSituacaoPrestador = function TipoSituacaoPrestador() {
        _classCallCheck(this, TipoSituacaoPrestador);
      };

      TipoSituacaoPrestador.Form1 = 0;
      TipoSituacaoPrestador.Form2 = 1;
      TipoSituacaoPrestador.Form3 = 2;
      TipoSituacaoPrestador.PendenteAutorizacao = 3;
      TipoSituacaoPrestador.Ativo = 4;
      TipoSituacaoPrestador.Suspenso = 5;
      TipoSituacaoPrestador.Cancelado = 6;
      Constants.TipoSituacaoPrestador = TipoSituacaoPrestador;

      var TipoMinisterio = function TipoMinisterio() {
        _classCallCheck(this, TipoMinisterio);
      };

      TipoMinisterio.louvor = 1;
      TipoMinisterio.educacao = 2;
      TipoMinisterio.infantil = 3;
      Constants.TipoMinisterio = TipoMinisterio;
      ;
      ;

      var TipoPessoaIgreja = function TipoPessoaIgreja() {
        _classCallCheck(this, TipoPessoaIgreja);
      };

      TipoPessoaIgreja.admin = 1;
      TipoPessoaIgreja.participante = 2;
      TipoPessoaIgreja.pendente = 3;
      TipoPessoaIgreja.naoSolicitado = 4;
      TipoPessoaIgreja.naoAceito = 5;
      Constants.TipoPessoaIgreja = TipoPessoaIgreja;
      ;

      var TipoPessoaMinisterio = function TipoPessoaMinisterio() {
        _classCallCheck(this, TipoPessoaMinisterio);
      };

      TipoPessoaMinisterio.admin = 7;
      TipoPessoaMinisterio.adminSecundario = 1;
      TipoPessoaMinisterio.pessoa = 2;
      TipoPessoaMinisterio.pendente = 3;
      TipoPessoaMinisterio.naoSolicitado = 4;
      TipoPessoaMinisterio.naoAceito = 5;
      Constants.TipoPessoaMinisterio = TipoPessoaMinisterio;
      ;

      var TipoFuncaoPessoaEquipe = function TipoFuncaoPessoaEquipe() {
        _classCallCheck(this, TipoFuncaoPessoaEquipe);
      };

      TipoFuncaoPessoaEquipe.guitarra = 7;
      TipoFuncaoPessoaEquipe.vocal = 1;
      TipoFuncaoPessoaEquipe.violao = 2;
      TipoFuncaoPessoaEquipe.teclado = 3;
      TipoFuncaoPessoaEquipe.dataShow = 4;
      TipoFuncaoPessoaEquipe.bateria = 5;
      TipoFuncaoPessoaEquipe.baixo = 6;
      Constants.TipoFuncaoPessoaEquipe = TipoFuncaoPessoaEquipe;
      ;

      var TipoLinkMusica = function TipoLinkMusica() {
        _classCallCheck(this, TipoLinkMusica);
      };

      TipoLinkMusica.youtube = 0;
      TipoLinkMusica.cifra = 1;
      TipoLinkMusica.letra = 2;
      TipoLinkMusica.outro = 3;
      Constants.TipoLinkMusica = TipoLinkMusica;
      ;

      var TipoPeriodoMinistracao = function TipoPeriodoMinistracao() {
        _classCallCheck(this, TipoPeriodoMinistracao);
      };

      TipoPeriodoMinistracao.manha = 1;
      TipoPeriodoMinistracao.tarde = 2;
      TipoPeriodoMinistracao.noite = 3;
      Constants.TipoPeriodoMinistracao = TipoPeriodoMinistracao;
    })(Constants || (Constants = {}));
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      firebase: {
        apiKey: "AIzaSyD0NntaNdFAWPCa4Ekodz05XQoxKS2DP6Q",
        authDomain: "igrejaapp-842f7.firebaseapp.com",
        databaseURL: "https://igrejaapp-842f7.firebaseio.com",
        projectId: "igrejaapp-842f7",
        storageBucket: "igrejaapp-842f7.appspot.com",
        messagingSenderId: "955960870186",
        appId: "1:955960870186:web:03030e61bb1a7420780a53",
        measurementId: "G-CC964Q03J6"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/travis/build/andreferreiratrindade/IgrejaApp/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
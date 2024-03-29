function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestador-cadastro-prestador-cadastro-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.page.html":
  /*!***********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.page.html ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPrestadorPrestadorCadastroPrestadorCadastroPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n\n  <ion-navbar>\n    <ion-title>Novo registro</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-grid>\n    <ion-row justify-content-around>\n      <ion-col col-sm-6 col-md-6 col-lg-4 col-xl-3 align-self-center>\n        <form [formGroup]=\"regData\" (ngSubmit)=\"register()\">\n\n          <ion-item>\n            <ion-label floating>Nome:</ion-label>\n            <ion-input type=\"text\" formControlName=\"name\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>E-mail:</ion-label>\n            <ion-input type=\"email\" formControlName=\"login\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Senha:</ion-label>\n            <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label floating>Confirma senha:</ion-label>\n            <ion-input type=\"password\" formControlName=\"confirm_password\"></ion-input>\n          </ion-item>\n\n          <button margin-top ion-button type=\"submit\" [disabled]=\"!regData.valid\">Registrar</button>\n\n        </form>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestador-cadastro/prestador-cadastro-routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestador-cadastro/prestador-cadastro-routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: PrestadorCadastroPageRoutingModule */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroPrestadorCadastroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorCadastroPageRoutingModule", function () {
      return PrestadorCadastroPageRoutingModule;
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


    var _prestador_cadastro_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./prestador-cadastro.page */
    "./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.page.ts");

    var routes = [{
      path: '',
      component: _prestador_cadastro_page__WEBPACK_IMPORTED_MODULE_3__["PrestadorCadastroPage"]
    }, {
      path: 'prestador-cadastro-form1',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | prestadorCadastro-prestador-cadastro-form1-prestador-cadastro-form1-module */
        "prestadorCadastro-prestador-cadastro-form1-prestador-cadastro-form1-module").then(__webpack_require__.bind(null,
        /*! ../prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.module */
        "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.module.ts")).then(function (m) {
          return m.PrestadorCadastroForm1PageModule;
        });
      }
    }];

    var PrestadorCadastroPageRoutingModule = function PrestadorCadastroPageRoutingModule() {
      _classCallCheck(this, PrestadorCadastroPageRoutingModule);
    };

    PrestadorCadastroPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PrestadorCadastroPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: PrestadorCadastroPageModule */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroPrestadorCadastroModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorCadastroPageModule", function () {
      return PrestadorCadastroPageModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _prestador_cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./prestador-cadastro-routing.module */
    "./src/app/pages/prestador/prestador-cadastro/prestador-cadastro-routing.module.ts");
    /* harmony import */


    var _prestador_cadastro_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./prestador-cadastro.page */
    "./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.page.ts");

    var PrestadorCadastroPageModule = function PrestadorCadastroPageModule() {
      _classCallCheck(this, PrestadorCadastroPageModule);
    };

    PrestadorCadastroPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _prestador_cadastro_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrestadorCadastroPageRoutingModule"]],
      declarations: [_prestador_cadastro_page__WEBPACK_IMPORTED_MODULE_6__["PrestadorCadastroPage"]]
    })], PrestadorCadastroPageModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.page.scss":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.page.scss ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroPrestadorCadastroPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXN0YWRvci9wcmVzdGFkb3ItY2FkYXN0cm8vcHJlc3RhZG9yLWNhZGFzdHJvLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.page.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.page.ts ***!
    \*******************************************************************************/

  /*! exports provided: PrestadorCadastroPage */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroPrestadorCadastroPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorCadastroPage", function () {
      return PrestadorCadastroPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PrestadorCadastroPage = /*#__PURE__*/function () {
      function PrestadorCadastroPage() {
        _classCallCheck(this, PrestadorCadastroPage);
      }

      _createClass(PrestadorCadastroPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PrestadorCadastroPage;
    }();

    PrestadorCadastroPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prestador-cadastro',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./prestador-cadastro.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./prestador-cadastro.page.scss */
      "./src/app/pages/prestador/prestador-cadastro/prestador-cadastro.page.scss"))["default"]]
    })], PrestadorCadastroPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-prestador-prestador-cadastro-prestador-cadastro-module-es5.js.map
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gerenciarIgreja-manterPrestadores-consultar-prestador-adm-consultar-prestador-adm-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.html":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.html ***!
    \*********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGerenciarIgrejaManterPrestadoresConsultarPrestadorAdmConsultarPrestadorAdmPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>consultarPrestadorAdm</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm-routing.module.ts":
  /*!***************************************************************************************************************************!*\
    !*** ./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm-routing.module.ts ***!
    \***************************************************************************************************************************/

  /*! exports provided: ConsultarPrestadorAdmPageRoutingModule */

  /***/
  function srcAppPagesGerenciarIgrejaManterPrestadoresConsultarPrestadorAdmConsultarPrestadorAdmRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsultarPrestadorAdmPageRoutingModule", function () {
      return ConsultarPrestadorAdmPageRoutingModule;
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


    var _consultar_prestador_adm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./consultar-prestador-adm.page */
    "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.ts");

    var routes = [{
      path: '',
      component: _consultar_prestador_adm_page__WEBPACK_IMPORTED_MODULE_3__["ConsultarPrestadorAdmPage"]
    }];

    var ConsultarPrestadorAdmPageRoutingModule = function ConsultarPrestadorAdmPageRoutingModule() {
      _classCallCheck(this, ConsultarPrestadorAdmPageRoutingModule);
    };

    ConsultarPrestadorAdmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ConsultarPrestadorAdmPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.module.ts":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.module.ts ***!
    \*******************************************************************************************************************/

  /*! exports provided: ConsultarPrestadorAdmPageModule */

  /***/
  function srcAppPagesGerenciarIgrejaManterPrestadoresConsultarPrestadorAdmConsultarPrestadorAdmModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsultarPrestadorAdmPageModule", function () {
      return ConsultarPrestadorAdmPageModule;
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


    var _consultar_prestador_adm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./consultar-prestador-adm-routing.module */
    "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm-routing.module.ts");
    /* harmony import */


    var _consultar_prestador_adm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./consultar-prestador-adm.page */
    "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.ts");

    var ConsultarPrestadorAdmPageModule = function ConsultarPrestadorAdmPageModule() {
      _classCallCheck(this, ConsultarPrestadorAdmPageModule);
    };

    ConsultarPrestadorAdmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _consultar_prestador_adm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsultarPrestadorAdmPageRoutingModule"]],
      declarations: [_consultar_prestador_adm_page__WEBPACK_IMPORTED_MODULE_6__["ConsultarPrestadorAdmPage"]]
    })], ConsultarPrestadorAdmPageModule);
    /***/
  },

  /***/
  "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.scss":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.scss ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGerenciarIgrejaManterPrestadoresConsultarPrestadorAdmConsultarPrestadorAdmPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlcmVuY2lhcklncmVqYS9tYW50ZXJQcmVzdGFkb3Jlcy9jb25zdWx0YXItcHJlc3RhZG9yLWFkbS9jb25zdWx0YXItcHJlc3RhZG9yLWFkbS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: ConsultarPrestadorAdmPage */

  /***/
  function srcAppPagesGerenciarIgrejaManterPrestadoresConsultarPrestadorAdmConsultarPrestadorAdmPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConsultarPrestadorAdmPage", function () {
      return ConsultarPrestadorAdmPage;
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


    var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/providers/prestador/prestador.service */
    "./src/app/providers/prestador/prestador.service.ts");
    /* harmony import */


    var src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/providers/igreja/igreja.service */
    "./src/app/providers/igreja/igreja.service.ts");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");

    var ConsultarPrestadorAdmPage = /*#__PURE__*/function () {
      function ConsultarPrestadorAdmPage(prestadorService, igrejaService) {
        _classCallCheck(this, ConsultarPrestadorAdmPage);

        this.prestadorService = prestadorService;
        this.igrejaService = igrejaService;
        this.prestadores = [];
      }

      _createClass(ConsultarPrestadorAdmPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var usuario = src_app_config__WEBPACK_IMPORTED_MODULE_4__["Config"].RecuperaInstancia().recuperaUsuario();
          this.igrejaService.RecuperaIgrejaPorAdministrador(usuario.usuarioId).then(function (igrejaResult) {
            _this.prestadorService.recuperaPrestadoresPorIgreja(igrejaResult.igrejaId).then(function (prestadoresResult) {
              _this.prestadores = prestadoresResult;
            });
          });
        }
      }]);

      return ConsultarPrestadorAdmPage;
    }();

    ConsultarPrestadorAdmPage.ctorParameters = function () {
      return [{
        type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_2__["PrestadorService"]
      }, {
        type: src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_3__["IgrejaService"]
      }];
    };

    ConsultarPrestadorAdmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-consultar-prestador-adm',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./consultar-prestador-adm.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./consultar-prestador-adm.page.scss */
      "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.scss"))["default"]]
    })], ConsultarPrestadorAdmPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-gerenciarIgreja-manterPrestadores-consultar-prestador-adm-consultar-prestador-adm-module-es5.js.map
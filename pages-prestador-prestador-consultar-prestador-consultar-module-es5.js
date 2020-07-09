function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestador-consultar-prestador-consultar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestador-consultar/prestador-consultar.page.html":
  /*!*************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestador-consultar/prestador-consultar.page.html ***!
    \*************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPrestadorPrestadorConsultarPrestadorConsultarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n      <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n    <ion-title>\n      Consultar Prestador\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <form [formGroup]=\"formulario\" (ngSubmit)=\"ConsultarPrestador()\">\n     <ion-list  lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n      <ion-item class=\"input-item\">\n        <ion-label>UF <ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-select class=\"ion-text-end\" name=\"uf\" formControlName=\"uf\" (ionChange)=\"buscarCidades()\" interface=\"action-sheet\">\n          <ion-select-option *ngFor=\"let item of UfList\" value=\"{{item}}\">\n              {{ item }}\n          </ion-select-option>\n        </ion-select>\n    \n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.uf\" [form]=\"formulario\"\n      [nomeCampo]=\"'uf'\"></app-mensagem-validacao>\n\n      <ion-item>\n        <ion-label>Cidade</ion-label>\n        <ion-select class=\"ion-text-end\" name=\"cidade\" formControlName=\"cidade\"  [disabled]=\"!formulario.value['uf']\" interface=\"action-sheet\">\n          <ion-select-option *ngFor=\"let item of cidadeList\"  selected=\"selected\" value=\"{{item}}\">\n              {{ item }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.cidade\" [form]=\"formulario\"\n      [nomeCampo]=\"'cidade'\"></app-mensagem-validacao> \n    </ion-list> \n    <div class=\"error-container\" *ngIf=\"submitError\">\n      <div class=\"error-message\">\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n        <span>{{ submitError }}</span>\n      </div>\n    </div>\n    <ion-button class=\"sign-up-btn\" type=\"submit\" expand=\"block\" [disabled]=\"!formulario.valid\">Pesquisar</ion-button>\n  </form>\n\n\n  <ion-item *ngFor=\"let item of prestadores\" value=\"{{item}}\">\n\n    <ion-label>\n      <h2>{{item.nome}}</h2>\n      <h3>{{item.telefone}}</h3>\n      <p>{{item.cidade}} / {{item.uf}}</p>\n      <p>{{item.nomeIgreja}}</p>\n    </ion-label>\n  </ion-item>\n\n</ion-content> ";
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestador-consultar/prestador-consultar-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestador-consultar/prestador-consultar-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: PrestadorConsultarPageRoutingModule */

  /***/
  function srcAppPagesPrestadorPrestadorConsultarPrestadorConsultarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorConsultarPageRoutingModule", function () {
      return PrestadorConsultarPageRoutingModule;
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


    var _prestador_consultar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./prestador-consultar.page */
    "./src/app/pages/prestador/prestador-consultar/prestador-consultar.page.ts");

    var routes = [{
      path: '',
      component: _prestador_consultar_page__WEBPACK_IMPORTED_MODULE_3__["PrestadorConsultarPage"]
    }];

    var PrestadorConsultarPageRoutingModule = function PrestadorConsultarPageRoutingModule() {
      _classCallCheck(this, PrestadorConsultarPageRoutingModule);
    };

    PrestadorConsultarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PrestadorConsultarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestador-consultar/prestador-consultar.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/prestador/prestador-consultar/prestador-consultar.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: PrestadorConsultarPageModule */

  /***/
  function srcAppPagesPrestadorPrestadorConsultarPrestadorConsultarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorConsultarPageModule", function () {
      return PrestadorConsultarPageModule;
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


    var _prestador_consultar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./prestador-consultar-routing.module */
    "./src/app/pages/prestador/prestador-consultar/prestador-consultar-routing.module.ts");
    /* harmony import */


    var _prestador_consultar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./prestador-consultar.page */
    "./src/app/pages/prestador/prestador-consultar/prestador-consultar.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var PrestadorConsultarPageModule = function PrestadorConsultarPageModule() {
      _classCallCheck(this, PrestadorConsultarPageModule);
    };

    PrestadorConsultarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _prestador_consultar_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrestadorConsultarPageRoutingModule"]],
      declarations: [_prestador_consultar_page__WEBPACK_IMPORTED_MODULE_6__["PrestadorConsultarPage"]]
    })], PrestadorConsultarPageModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestador-consultar/prestador-consultar.page.scss":
  /*!***********************************************************************************!*\
    !*** ./src/app/pages/prestador/prestador-consultar/prestador-consultar.page.scss ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPrestadorPrestadorConsultarPrestadorConsultarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXN0YWRvci9wcmVzdGFkb3ItY29uc3VsdGFyL3ByZXN0YWRvci1jb25zdWx0YXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestador-consultar/prestador-consultar.page.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/pages/prestador/prestador-consultar/prestador-consultar.page.ts ***!
    \*********************************************************************************/

  /*! exports provided: PrestadorConsultarPage */

  /***/
  function srcAppPagesPrestadorPrestadorConsultarPrestadorConsultarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorConsultarPage", function () {
      return PrestadorConsultarPage;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/helpers/handlerError */
    "./src/app/helpers/handlerError.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/providers/igreja/igreja.service */
    "./src/app/providers/igreja/igreja.service.ts");
    /* harmony import */


    var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/providers/usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");
    /* harmony import */


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");

    var PrestadorConsultarPage = /*#__PURE__*/function () {
      function PrestadorConsultarPage(prestadorService, toastCtrl, igrejaService, usuarioService, loadingContr) {
        _classCallCheck(this, PrestadorConsultarPage);

        this.prestadorService = prestadorService;
        this.toastCtrl = toastCtrl;
        this.igrejaService = igrejaService;
        this.usuarioService = usuarioService;
        this.loadingContr = loadingContr;
        this.validation_messages = {
          'uf': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }]
        };
        this.formulario = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          'uf': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'cidade': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        this.prestadores = [];
      }

      _createClass(PrestadorConsultarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loadingContr.showLoader();
          this.prestadorService.RecuperaUfPrestadorDisponiveis().then(function (result) {
            _this.UfList = result;
          })["catch"](function (x) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this.toastCtrl);
          })["finally"](function () {
            _this.loadingContr.hideLoader();
          });
        }
      }, {
        key: "buscarCidades",
        value: function buscarCidades() {
          var _this2 = this;

          this.loadingContr.showLoader();
          this.formulario.value['cidade'] = "";
          this.prestadorService.RecuperaCidadePrestadorDisponiveis(this.formulario.value['uf']).then(function (result) {
            _this2.cidadeList = result;
          })["catch"](function (x) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this2.toastCtrl);
          })["finally"](function () {
            _this2.loadingContr.hideLoader();
          });
        }
      }, {
        key: "ConsultarPrestador",
        value: function ConsultarPrestador() {
          var _this3 = this;

          this.loadingContr.showLoader();
          this.prestadores = [];
          this.prestadorService.RecuperaPestadoresPorCidadeEhUF(this.formulario.value['uf'], this.formulario.value['cidade']).then(function (prestadoresResult) {
            var igrejas = [];
            igrejas = prestadoresResult.map(function (x) {
              return x.igrejas[0].igrejaId;
            });

            _this3.igrejaService.RecuperaNomeIgreja(igrejas).then(function (resultIgreja) {
              var usuarios = [];
              usuarios = prestadoresResult.map(function (x) {
                return x.usuarioId;
              });

              _this3.usuarioService.RecuperaNomeUsuarios(usuarios).then(function (usuariosResult) {
                _this3.prestadores = prestadoresResult.map(function (x) {
                  return {
                    nome: usuariosResult.find(function (y) {
                      return y.id == x.usuarioId;
                    }).data.nome,
                    nomeIgreja: resultIgreja.find(function (y) {
                      return y.id == x.igrejas[0].igrejaId;
                    }).data.nomeIgreja,
                    cidade: x.cidade,
                    uf: x.uf,
                    telefone: x.telefone,
                    usuarioId: x.usuarioId,
                    igrejaId: x.igrejas[0].igrejaId
                  };
                });
              })["finally"](function () {
                _this3.loadingContr.hideLoader();
              });
            });
          })["catch"](function (x) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this3.toastCtrl);

            _this3.loadingContr.hideLoader();
          });
        }
      }]);

      return PrestadorConsultarPage;
    }();

    PrestadorConsultarPage.ctorParameters = function () {
      return [{
        type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_2__["PrestadorService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"]
      }, {
        type: src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_6__["IgrejaService"]
      }, {
        type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_7__["UsuarioService"]
      }, {
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_8__["LoadingContr"]
      }];
    };

    PrestadorConsultarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prestador-consultar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./prestador-consultar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestador-consultar/prestador-consultar.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./prestador-consultar.page.scss */
      "./src/app/pages/prestador/prestador-consultar/prestador-consultar.page.scss"))["default"]]
    })], PrestadorConsultarPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-prestador-prestador-consultar-prestador-consultar-module-es5.js.map
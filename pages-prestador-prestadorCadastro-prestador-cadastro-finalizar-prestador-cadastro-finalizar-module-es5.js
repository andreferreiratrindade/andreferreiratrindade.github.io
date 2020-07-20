function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestadorCadastro-prestador-cadastro-finalizar-prestador-cadastro-finalizar-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-finalizar/prestador-cadastro-finalizar.page.html":
  /*!*************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-finalizar/prestador-cadastro-finalizar.page.html ***!
    \*************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPrestadorPrestadorCadastroPrestadorCadastroFinalizarPrestadorCadastroFinalizarPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Finalizar\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      Dados empresa\n    </ion-list-header>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Nome</p>\n        <h3>{{usuario.nome}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Email</p>\n        <h3>{{usuario.email}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Razão Social</p>\n        <h3>{{prestador.razaoSocial}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Telefone</p>\n        <h3>{{prestador.telefone}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Endereço</p>\n        <h3>{{prestador.logradouro}}, {{prestador.bairro}} - {{prestador.cidade}} / {{prestador.uf}}</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      Local Atendimento\n    </ion-list-header>\n    <ion-item *ngFor=\"let item of prestador.locaisAtendimento\">\n      <ion-label class=\"ion-text-wrap\">\n        <h1>{{item.cidade}} / {{item.uf}}</h1>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      Serviços\n    </ion-list-header>\n    <ion-item *ngFor=\"let item of prestadorServicos\">\n      <ion-label class=\"ion-text-wrap\">\n        <h1>{{item.nomeServico}}</h1>\n        <h3>{{item.breveDescricao}}</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Igreja Vinculo\n    </ion-list-header>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <h3>{{prestador.nomeIgreja}}</h3>\n        <h3>{{prestador.staMembro}}</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-button class=\"default\" type=\"button\"  (click)=\"voltar()\">Voltar</ion-button>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button class=\"success\" type=\"button\" (click)=\"finalizar()\">Finalizar</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>";
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-finalizar/prestador-cadastro-finalizar-routing.module.ts":
  /*!*******************************************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-finalizar/prestador-cadastro-finalizar-routing.module.ts ***!
    \*******************************************************************************************************************************/

  /*! exports provided: PrestadorCadastroFinalizarPageRoutingModule */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroPrestadorCadastroFinalizarPrestadorCadastroFinalizarRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorCadastroFinalizarPageRoutingModule", function () {
      return PrestadorCadastroFinalizarPageRoutingModule;
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


    var _prestador_cadastro_finalizar_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./prestador-cadastro-finalizar.page */
    "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-finalizar/prestador-cadastro-finalizar.page.ts");

    var routes = [{
      path: '',
      component: _prestador_cadastro_finalizar_page__WEBPACK_IMPORTED_MODULE_3__["PrestadorCadastroFinalizarPage"]
    }];

    var PrestadorCadastroFinalizarPageRoutingModule = function PrestadorCadastroFinalizarPageRoutingModule() {
      _classCallCheck(this, PrestadorCadastroFinalizarPageRoutingModule);
    };

    PrestadorCadastroFinalizarPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PrestadorCadastroFinalizarPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-finalizar/prestador-cadastro-finalizar.module.ts":
  /*!***********************************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-finalizar/prestador-cadastro-finalizar.module.ts ***!
    \***********************************************************************************************************************/

  /*! exports provided: PrestadorCadastroFinalizarPageModule */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroPrestadorCadastroFinalizarPrestadorCadastroFinalizarModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorCadastroFinalizarPageModule", function () {
      return PrestadorCadastroFinalizarPageModule;
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


    var _prestador_cadastro_finalizar_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./prestador-cadastro-finalizar-routing.module */
    "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-finalizar/prestador-cadastro-finalizar-routing.module.ts");
    /* harmony import */


    var _prestador_cadastro_finalizar_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./prestador-cadastro-finalizar.page */
    "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-finalizar/prestador-cadastro-finalizar.page.ts");

    var PrestadorCadastroFinalizarPageModule = function PrestadorCadastroFinalizarPageModule() {
      _classCallCheck(this, PrestadorCadastroFinalizarPageModule);
    };

    PrestadorCadastroFinalizarPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _prestador_cadastro_finalizar_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrestadorCadastroFinalizarPageRoutingModule"]],
      declarations: [_prestador_cadastro_finalizar_page__WEBPACK_IMPORTED_MODULE_6__["PrestadorCadastroFinalizarPage"]]
    })], PrestadorCadastroFinalizarPageModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-finalizar/prestador-cadastro-finalizar.page.scss":
  /*!***********************************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-finalizar/prestador-cadastro-finalizar.page.scss ***!
    \***********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroPrestadorCadastroFinalizarPrestadorCadastroFinalizarPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3ByZXN0YWRvci9wcmVzdGFkb3JDYWRhc3Ryby9wcmVzdGFkb3ItY2FkYXN0cm8tZmluYWxpemFyL3ByZXN0YWRvci1jYWRhc3Ryby1maW5hbGl6YXIucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-finalizar/prestador-cadastro-finalizar.page.ts":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-finalizar/prestador-cadastro-finalizar.page.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: PrestadorCadastroFinalizarPage */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroPrestadorCadastroFinalizarPrestadorCadastroFinalizarPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorCadastroFinalizarPage", function () {
      return PrestadorCadastroFinalizarPage;
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


    var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/utils/constants */
    "./src/app/utils/constants.ts");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/helpers/toastCustom */
    "./src/app/helpers/toastCustom.ts");
    /* harmony import */


    var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/helpers/handlerError */
    "./src/app/helpers/handlerError.ts");
    /* harmony import */


    var src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/providers/igreja/igreja.service */
    "./src/app/providers/igreja/igreja.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/providers/usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");
    /* harmony import */


    var src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/providers/dominioServico/dominio-servico.service */
    "./src/app/providers/dominioServico/dominio-servico.service.ts");
    /* harmony import */


    var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/providers/prestador/prestador.service */
    "./src/app/providers/prestador/prestador.service.ts");

    var PrestadorCadastroFinalizarPage = /*#__PURE__*/function () {
      function PrestadorCadastroFinalizarPage(prestadorService, dominioServicoService, loadingContr, ngZone, router, usuarioService, toastCtrl, igrejaService) {
        _classCallCheck(this, PrestadorCadastroFinalizarPage);

        this.prestadorService = prestadorService;
        this.dominioServicoService = dominioServicoService;
        this.loadingContr = loadingContr;
        this.ngZone = ngZone;
        this.router = router;
        this.usuarioService = usuarioService;
        this.toastCtrl = toastCtrl;
        this.igrejaService = igrejaService;
        this.prestador = {};
        this.prestadorUsuario = {};
        this.prestadorServicos = [];
        this.usuario = {};
      }

      _createClass(PrestadorCadastroFinalizarPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loadingContr.showLoader();
          this.usuario = src_app_config__WEBPACK_IMPORTED_MODULE_3__["Config"].RecuperaInstancia().recuperaUsuario();
          this.prestadorService.RecuperaPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_3__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId).then(function (result) {
            _this.prestador = result;

            _this.igrejaService.RecuperaNomeIgreja([_this.prestador.igrejaId]).then(function (result) {
              _this.prestador.nomeIgreja = result[0].data.nomeIgreja;

              _this.loadingContr.hideLoader();
            })["catch"](function (err) {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_5__["HandlerError"].handler(err, _this.toastCtrl);

              _this.loadingContr.hideLoader();
            });
          })["catch"](function (err) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_5__["HandlerError"].handler(err, _this.toastCtrl);

            _this.loadingContr.hideLoader();
          });
          this.prestadorService.recuperaServicosPorPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_3__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId).then(function (result) {
            _this.prestadorServicos = result;

            _this.dominioServicoService.recuperaDominioServico().then(function (x) {
              _this.prestadorServicos.map(function (listItem) {
                var _a;

                listItem.expanded = false;
                listItem.breveDescricao = (_a = listItem.breveDescricao) !== null && _a !== void 0 ? _a : "";
                listItem.nomeServico = x.filter(function (y) {
                  return y.servicoId == listItem.servicoId;
                })[0].nomeServico;
                return listItem;
              });

              _this.loadingContr.hideLoader();
            })["catch"](function (err) {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_5__["HandlerError"].handler(err, _this.toastCtrl);

              _this.loadingContr.hideLoader();
            });
          })["catch"](function (err) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_5__["HandlerError"].handler(err, _this.toastCtrl);

            _this.loadingContr.hideLoader();
          });
        }
      }, {
        key: "finalizar",
        value: function finalizar() {
          var _this2 = this;

          this.loadingContr.showLoader();
          var obj = {
            situacaoPrestador: src_app_utils_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].TipoSituacaoPrestador.PendenteAutorizacao
          };
          this.prestadorService.AtualizaPrestador(src_app_config__WEBPACK_IMPORTED_MODULE_3__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId, obj).then(function () {
            _this2.loadingContr.hideLoader();

            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_4__["ToastCustom"].CustomToast(_this2.toastCtrl, "Operação realizadao com sucesso. Sua solicitação foi encaminhada para o administrador da igreja.", "success", 5000);

            _this2.ngZone.run(function () {
              _this2.router.navigate(['home']);
            });
          })["catch"](function (err) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_5__["HandlerError"].handler(err, _this2.toastCtrl);

            _this2.loadingContr.hideLoader();
          });
        }
      }]);

      return PrestadorCadastroFinalizarPage;
    }();

    PrestadorCadastroFinalizarPage.ctorParameters = function () {
      return [{
        type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_12__["PrestadorService"]
      }, {
        type: src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_11__["DominioServicoService"]
      }, {
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_10__["LoadingContr"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
      }, {
        type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"]
      }, {
        type: src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_6__["IgrejaService"]
      }];
    };

    PrestadorCadastroFinalizarPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prestador-cadastro-finalizar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./prestador-cadastro-finalizar.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-finalizar/prestador-cadastro-finalizar.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./prestador-cadastro-finalizar.page.scss */
      "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-finalizar/prestador-cadastro-finalizar.page.scss"))["default"]]
    })], PrestadorCadastroFinalizarPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-prestador-prestadorCadastro-prestador-cadastro-finalizar-prestador-cadastro-finalizar-module-es5.js.map
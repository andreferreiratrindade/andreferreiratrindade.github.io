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


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Consultar Prestador\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <form [formGroup]=\"formulario\" (ngSubmit)=\"ConsultarPrestador()\">\n    <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n      <ion-item>\n        <ion-label>Serviço <ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-select class=\"ion-text-end\" name=\"servicoId\" formControlName=\"servicoId\" interface=\"action-sheet\">\n          <ion-select-option *ngFor=\"let item of servicos\" selected=\"selected\" value=\"{{item.servicoId}}\">\n            {{ item.nomeServico }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <ion-item class=\"input-item\">\n        <ion-label>UF <ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-select class=\"ion-text-end\" name=\"uf\" formControlName=\"uf\" (ionChange)=\"buscarCidades()\"\n          interface=\"action-sheet\">\n          <ion-select-option *ngFor=\"let item of UfList\" value=\"{{item}}\">\n            {{ item }}\n          </ion-select-option>\n        </ion-select>\n\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.uf\" [form]=\"formulario\"\n        [nomeCampo]=\"'uf'\"></app-mensagem-validacao>\n\n      <ion-item>\n        <ion-label>Cidade</ion-label>\n        <ion-select class=\"ion-text-end\" name=\"cidade\" formControlName=\"cidade\" [disabled]=\"!formulario.value['uf']\"\n          interface=\"action-sheet\">\n          <ion-select-option *ngFor=\"let item of cidadeList\" selected=\"selected\" value=\"{{item}}\">\n            {{ item }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.cidade\" [form]=\"formulario\"\n        [nomeCampo]=\"'cidade'\"></app-mensagem-validacao>\n\n\n    </ion-list>\n    <div class=\"error-container\" *ngIf=\"submitError\">\n      <div class=\"error-message\">\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n        <span>{{ submitError }}</span>\n      </div>\n    </div>\n    <ion-button class=\"sign-up-btn\" type=\"submit\" expand=\"block\" [disabled]=\"!formulario.valid\">Pesquisar</ion-button>\n  </form>\n\n  <ion-card *ngFor=\"let item of prestadores\" value=\"{{item}}\">\n    <ion-card-header>\n      <ion-card-title>{{item.nome}} </ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      <ion-item>\n        <ion-label>\n          <h2>{{item.telefone}}</h2>\n          <h2>{{item.email}}</h2>\n          <p>{{item.nomeIgreja}}</p>\n          <p>{{item.cidade}} / {{item.uf}}</p>\n        </ion-label>\n      </ion-item>\n      <ion-row>\n        <ion-col>\n          <ion-button  color=\"warning\" (click)=\"detalhes(item.usuarioId)\">\n            <ion-icon name=\"eye-outline\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>";
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
    /* harmony import */


    var src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/providers/dominioServico/dominio-servico.service */
    "./src/app/providers/dominioServico/dominio-servico.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/helpers/toastCustom */
    "./src/app/helpers/toastCustom.ts");

    var PrestadorConsultarPage = /*#__PURE__*/function () {
      function PrestadorConsultarPage(prestadorService, toastCtrl, igrejaService, usuarioService, loadingContr, dominioServicoService, router) {
        _classCallCheck(this, PrestadorConsultarPage);

        this.prestadorService = prestadorService;
        this.toastCtrl = toastCtrl;
        this.igrejaService = igrejaService;
        this.usuarioService = usuarioService;
        this.loadingContr = loadingContr;
        this.dominioServicoService = dominioServicoService;
        this.router = router;
        this.validation_messages = {
          'uf': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }],
          'servicoId': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }]
        };
        this.formulario = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          'uf': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'cidade': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
          'servicoId': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]))
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

            _this.loadingContr.hideLoader();
          })["catch"](function (x) {
            _this.loadingContr.hideLoader();

            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this.toastCtrl);
          });
          this.dominioServicoService.recuperaDominioServico().then(function (result) {
            _this.servicos = result;

            _this.loadingContr.hideLoader();
          })["catch"](function (x) {
            _this.loadingContr.hideLoader();

            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this.toastCtrl);
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

            _this2.loadingContr.hideLoader();
          })["catch"](function (x) {
            _this2.loadingContr.hideLoader();

            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this2.toastCtrl);
          });
        }
      }, {
        key: "ConsultarPrestador",
        value: function ConsultarPrestador() {
          var _this3 = this;

          this.loadingContr.showLoader();
          this.prestadores = [];
          this.prestadorService.RecuperaPestadoresPorCidadeEhUFEhServico(this.formulario.value['uf'], this.formulario.value['cidade'], this.formulario.value['servicoId']).then(function (prestadoresResult) {
            if (!prestadoresResult) {
              src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_11__["ToastCustom"].CustomToast(_this3.toastCtrl, "Nenhum prestador encontrado.", "danger", 4000);

              _this3.loadingContr.hideLoader();

              return false;
            }

            var lstusuarioId = [];
            lstusuarioId = prestadoresResult.map(function (x) {
              return x.usuarioId;
            });
            _this3.prestadores = prestadoresResult;
            var lstIgrejaId = [];
            lstIgrejaId = prestadoresResult.map(function (x) {
              return x.igrejas[0].igrejaId;
            });

            _this3.consultaMasterPrestador(lstusuarioId, lstIgrejaId).then(function () {
              _this3.loadingContr.hideLoader();
            })["catch"](function (x) {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this3.toastCtrl);

              _this3.loadingContr.hideLoader();
            });
          })["catch"](function (x) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this3.toastCtrl);

            _this3.loadingContr.hideLoader();
          });
        }
      }, {
        key: "consultaMasterPrestador",
        value: function consultaMasterPrestador(lstusuarioId, lstIgrejaId) {
          var _this4 = this;

          return new Promise(function (result, reject) {
            // Recupera igreja 
            _this4.recuperaNomeIgreja(lstIgrejaId); // Recupera Nome 


            _this4.recuperaNomePrestadores(lstusuarioId); // Recupera Servicos
            //this.recuperaServicosPorPrestadores(lstusuarioId);

          });
        }
      }, {
        key: "recuperaServicosPorPrestadores",
        value: function recuperaServicosPorPrestadores(lstusuarioId) {
          var _this5 = this;

          return new Promise(function () {
            _this5.prestadorService.recuperaServicosPorPrestadores(lstusuarioId).then(function (servicosPorPrestador) {
              _this5.prestadores.map(function (x) {
                x.servicos = servicosPorPrestador.find(function (y) {
                  y.usuarioId == x.usuarioId;
                });
              });

              _this5.loadingContr.hideLoader();
            })["catch"](function (x) {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this5.toastCtrl);

              _this5.loadingContr.hideLoader();
            });
          });
        }
      }, {
        key: "recuperaNomePrestadores",
        value: function recuperaNomePrestadores(lstusuarioId) {
          var _this6 = this;

          return new Promise(function () {
            _this6.usuarioService.RecuperaNomeUsuarios(lstusuarioId).then(function (usuariosResult) {
              _this6.prestadores.map(function (x) {
                x.nome = usuariosResult.find(function (y) {
                  return y.data.usuarioId == x.usuarioId;
                }).data.nome;
                x.email = usuariosResult.find(function (y) {
                  return y.data.usuarioId == x.usuarioId;
                }).data.email;
              });

              _this6.loadingContr.hideLoader();
            })["catch"](function (x) {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this6.toastCtrl);

              _this6.loadingContr.hideLoader();
            });
          });
        }
      }, {
        key: "recuperaNomeIgreja",
        value: function recuperaNomeIgreja(lstIgrejaId) {
          var _this7 = this;

          return new Promise(function () {
            _this7.igrejaService.RecuperaNomeIgreja(lstIgrejaId).then(function (resultIgreja) {
              _this7.prestadores.map(function (x) {
                x.nomeIgreja = resultIgreja.find(function (y) {
                  return y.data.id == x.igrejas[0].igrejaId;
                }).data.nomeIgreja;
              });
            })["catch"](function (x) {
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_4__["HandlerError"].handler(x, _this7.toastCtrl);

              _this7.loadingContr.hideLoader();
            });
          });
        }
      }, {
        key: "detalhes",
        value: function detalhes(usuarioId) {
          this.router.navigate(['/visualizar-prestador'], {
            queryParams: {
              usuarioId: usuarioId
            }
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
      }, {
        type: src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_9__["DominioServicoService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
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
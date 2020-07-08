function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-prestador-prestadorCadastro-prestador-cadastro-form1-prestador-cadastro-form1-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.page.html":
  /*!*****************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.page.html ***!
    \*****************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPrestadorPrestadorCadastroPrestadorCadastroForm1PrestadorCadastroForm1PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header translucent>\n  <ion-toolbar>\n    <ion-title>Seja um Prestador - Cadastro</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <form [formGroup]=\"form1\" (ngSubmit)=\"submitError='';SalvarForm1()\">\n    <ion-list  lines=\"full\" class=\"ion-no-margin ion-no-padding\">\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">CPF / CNPJ <ion-text color=\"danger\">*</ion-text></ion-label>\n\n        <ion-input type=\"text\" [brmasker]=\"{person: true}\" formControlName=\"cnpcnpj\" clearInput autocapitalize=\"off\"></ion-input>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.cnpcnpj\" [form]=\"form1\"\n      [nomeCampo]=\"'cnpcnpj'\"></app-mensagem-validacao>\n\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\" >Telefone <ion-text color=\"danger\">*</ion-text></ion-label>\n\n        <ion-input type=\"text\"  [brmasker]=\"{phone: true}\" formControlName=\"telefone\" clearInput autocapitalize=\"off\" ></ion-input>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.telefone\" [form]=\"form1\"\n      [nomeCampo]=\"'telefone'\"></app-mensagem-validacao>\n\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Cep <ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-input type=\"number\" maxlength=\"8\" formControlName=\"cep\" clearInput autocapitalize=\"off\"></ion-input>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.cep\" [form]=\"form1\"\n        [nomeCampo]=\"'cep'\"></app-mensagem-validacao>\n       \n        <ion-chip color=\"tertiary\" (click)=\"submitError='';buscarEnderecoPorCEP()\" size=\"6\">\n          <ion-label>Buscar Endereço</ion-label>\n          <ion-icon name=\"search-outline\"></ion-icon>\n        </ion-chip>\n        <ion-item class=\"input-item\">\n          <ion-label>\n            <p>{{enderecoParte1}}</p>\n            <p>{{enderecoParte2}} </p>\n          </ion-label>\n        </ion-item>\n        <!-- <ion-button class=\"ion-align-self-end\" position=\"right\" color=\"tertiary\" type=\"button\" (click)=\"submitError='';buscarEnderecoPorCEP()\" [disabled]=\"!form1.value['cep']\">Buscar endereço</ion-button> -->\n    \n      <ion-item>\n        <ion-label>Igreja Vinculo <ion-text color=\"danger\">*</ion-text></ion-label>\n        <ion-select class=\"ion-text-end\" name=\"igrejaVinculo\" formControlName=\"igrejaVinculo\"  interface=\"popover\" [disabled]=\"!igrejas.length>0\">\n          <ion-select-option *ngFor=\"let item of igrejas\" value=\"{{item.id}}\">\n              {{ item.nomeIgreja }}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.igrejaVinculo\" [form]=\"form1\"\n      [nomeCampo]=\"'igrejaVinculo'\"></app-mensagem-validacao>\n\n      <ion-item>\n        <ion-label>Membro da Igreja vinculada</ion-label>\n        <ion-toggle slot=\"start\" name=\"StaMembro\" checked></ion-toggle>\n      </ion-item>\n    </ion-list>\n    <div class=\"error-container\" *ngIf=\"submitError\">\n      <div class=\"error-message\">\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n        <span>{{ submitError }}</span>\n      </div>\n    </div>\n    <ion-button class=\"sign-up-btn\" type=\"submit\" expand=\"block\" [disabled]=\"!form1.valid\">Prosseguir</ion-button>\n  </form>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1-routing.module.ts":
  /*!***********************************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1-routing.module.ts ***!
    \***********************************************************************************************************************/

  /*! exports provided: PrestadorCadastroForm1PageRoutingModule */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroPrestadorCadastroForm1PrestadorCadastroForm1RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorCadastroForm1PageRoutingModule", function () {
      return PrestadorCadastroForm1PageRoutingModule;
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


    var _prestador_cadastro_form1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./prestador-cadastro-form1.page */
    "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.page.ts");

    var routes = [{
      path: '',
      component: _prestador_cadastro_form1_page__WEBPACK_IMPORTED_MODULE_3__["PrestadorCadastroForm1Page"]
    }];

    var PrestadorCadastroForm1PageRoutingModule = function PrestadorCadastroForm1PageRoutingModule() {
      _classCallCheck(this, PrestadorCadastroForm1PageRoutingModule);
    };

    PrestadorCadastroForm1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PrestadorCadastroForm1PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.module.ts":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.module.ts ***!
    \***************************************************************************************************************/

  /*! exports provided: PrestadorCadastroForm1PageModule */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroPrestadorCadastroForm1PrestadorCadastroForm1ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorCadastroForm1PageModule", function () {
      return PrestadorCadastroForm1PageModule;
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


    var _prestador_cadastro_form1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./prestador-cadastro-form1-routing.module */
    "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1-routing.module.ts");
    /* harmony import */


    var _prestador_cadastro_form1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./prestador-cadastro-form1.page */
    "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var routes = [{
      path: '',
      component: _prestador_cadastro_form1_page__WEBPACK_IMPORTED_MODULE_6__["PrestadorCadastroForm1Page"]
    }];

    var PrestadorCadastroForm1PageModule = function PrestadorCadastroForm1PageModule() {
      _classCallCheck(this, PrestadorCadastroForm1PageModule);
    };

    PrestadorCadastroForm1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _prestador_cadastro_form1_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrestadorCadastroForm1PageRoutingModule"]],
      declarations: [_prestador_cadastro_form1_page__WEBPACK_IMPORTED_MODULE_6__["PrestadorCadastroForm1Page"]]
    })], PrestadorCadastroForm1PageModule);
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.page.scss":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.page.scss ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroPrestadorCadastroForm1PrestadorCadastroForm1PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ":root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvcHJlc3RhZG9yL3ByZXN0YWRvckNhZGFzdHJvL3ByZXN0YWRvci1jYWRhc3Ryby1mb3JtMS9wcmVzdGFkb3ItY2FkYXN0cm8tZm9ybTEucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9wcmVzdGFkb3IvcHJlc3RhZG9yQ2FkYXN0cm8vcHJlc3RhZG9yLWNhZGFzdHJvLWZvcm0xL3ByZXN0YWRvci1jYWRhc3Ryby1mb3JtMS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLDRCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcmVzdGFkb3IvcHJlc3RhZG9yQ2FkYXN0cm8vcHJlc3RhZG9yLWNhZGFzdHJvLWZvcm0xL3ByZXN0YWRvci1jYWRhc3Ryby1mb3JtMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6cm9vdCB7XG4gICAgLS1pb24tc2FmZS1hcmVhLXRvcDogMjBweDtcbiAgICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xuICB9IiwiOnJvb3Qge1xuICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xuICAtLWlvbi1zYWZlLWFyZWEtYm90dG9tOiAyMnB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.page.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.page.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: PrestadorCadastroForm1Page */

  /***/
  function srcAppPagesPrestadorPrestadorCadastroPrestadorCadastroForm1PrestadorCadastroForm1PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrestadorCadastroForm1Page", function () {
      return PrestadorCadastroForm1Page;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/providers/usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/providers/buscaCEP/buscar-cep.service */
    "./src/app/providers/buscaCEP/buscar-cep.service.ts");
    /* harmony import */


    var src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/providers/igreja/igreja.service */
    "./src/app/providers/igreja/igreja.service.ts");
    /* harmony import */


    var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/helpers/handlerError */
    "./src/app/helpers/handlerError.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/providers/prestador/prestador.service */
    "./src/app/providers/prestador/prestador.service.ts");
    /* harmony import */


    var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/utils/constants */
    "./src/app/utils/constants.ts");
    /* harmony import */


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");
    /* harmony import */


    var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/helpers/toastCustom */
    "./src/app/helpers/toastCustom.ts");

    var PrestadorCadastroForm1Page = /*#__PURE__*/function () {
      function PrestadorCadastroForm1Page(usuarioService, igrejaService, router, toastCtrl, ngZone, prestadorService, buscarCEPService, loadingContr) {
        _classCallCheck(this, PrestadorCadastroForm1Page);

        this.usuarioService = usuarioService;
        this.igrejaService = igrejaService;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.ngZone = ngZone;
        this.prestadorService = prestadorService;
        this.buscarCEPService = buscarCEPService;
        this.loadingContr = loadingContr;
        this.validation_messages = {
          'cnpcnpj': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }],
          'telefone': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }],
          'estadoOrigem': [{
            type: 'required',
            message: 'campo de preenchimento obrigatório.'
          }],
          'cidadeOrigem': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }],
          'igrejaVinculo': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }],
          'staMembro': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }],
          'cep': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }]
        };
        this.form1 = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          'cnpcnpj': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          'telefone': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          'cep': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          'igrejaVinculo': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
        this.igrejas = [];
      }

      _createClass(PrestadorCadastroForm1Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.loadingContr.showLoader();
          this.usuarioService.recuperaUsuarioLogado().then(function (x) {
            if (x == null) {
              _this.ngZone.run(function () {
                _this.router.navigate(['sign-in']);
              });
            }
          })["finally"](function () {
            return _this.loadingContr.hideLoader();
          });
        }
      }, {
        key: "buscarEnderecoPorCEP",
        value: function buscarEnderecoPorCEP() {
          var _this2 = this;

          this.prestador = {};
          this.enderecoCompleto = "";
          this.buscarCEPService.buscarCEP(this.form1.value['cep']).then(function (x) {
            debugger;

            if (x && !x.erro) {
              _this2.prestador.cidade = x.localidade;
              _this2.prestador.bairro = x.bairro;
              _this2.prestador.uf = x.uf;
              _this2.prestador.logradouro = x.logradouro;
              _this2.prestador.cep = x.cep;
              _this2.enderecoParte1 = x.logradouro + ", " + x.bairro;
              _this2.enderecoParte2 = x.localidade + "/" + x.uf;

              _this2.igrejaService.RecuperaIgrejasPorCidade(_this2.prestador.cidade).then(function (x) {
                if (x && x.length > 0) {
                  _this2.igrejas = x.map(function (map) {
                    return {
                      id: map.id,
                      nomeIgreja: map.data.nomeIgreja
                    };
                  });
                } else {
                  _this2.igrejas = [];
                  src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Nenhuma igreja encontrada para localidade informada.", _this2.toastCtrl);
                }
              });
            } else {
              _this2.igrejas = [];
              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Favor inserir CEP válido, antes de continuar.", _this2.toastCtrl);
            }
          })["catch"](function (x) {
            _this2.igrejas = [];
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(x, _this2.toastCtrl);
          });
        }
      }, {
        key: "SalvarForm1",
        value: function SalvarForm1() {
          var _this3 = this;

          if (!this.prestador || !this.prestador.cidade) {
            this.submitError = "Favor inserir CEP válido, antes de continuar.";
            return false;
          }

          this.loadingContr.showLoader();
          this.prestador.igrejas = [{
            igrejaId: this.form1.value['igrejaVinculo']
          }];
          this.prestador.uid = src_app_config__WEBPACK_IMPORTED_MODULE_9__["Config"].recuperaUsuario().uid;
          this.prestador.situacaoPrestador = src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].TipoSituacaoPrestador.Form2;
          this.prestadorService.AdicionarNovoPrestador(this.prestador).then(function () {
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_13__["ToastCustom"].SucessoToast(_this3.toastCtrl);
          })["catch"](function (error) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(error, _this3.toastCtrl);
          })["finally"](function () {
            return _this3.loadingContr.hideLoader();
          });
        }
      }]);

      return PrestadorCadastroForm1Page;
    }();

    PrestadorCadastroForm1Page.ctorParameters = function () {
      return [{
        type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"]
      }, {
        type: src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_6__["IgrejaService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_10__["PrestadorService"]
      }, {
        type: src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_5__["BuscarCEPService"]
      }, {
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_12__["LoadingContr"]
      }];
    };

    PrestadorCadastroForm1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-prestador-cadastro-form1',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./prestador-cadastro-form1.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./prestador-cadastro-form1.page.scss */
      "./src/app/pages/prestador/prestadorCadastro/prestador-cadastro-form1/prestador-cadastro-form1.page.scss"))["default"]]
    })], PrestadorCadastroForm1Page);
    /***/
  }
}]);
//# sourceMappingURL=pages-prestador-prestadorCadastro-prestador-cadastro-form1-prestador-cadastro-form1-module-es5.js.map
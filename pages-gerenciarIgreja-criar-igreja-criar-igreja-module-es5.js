function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gerenciarIgreja-criar-igreja-criar-igreja-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesGerenciarIgrejaCriarIgrejaCriarIgrejaPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Adicionar Igreja\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n  <form [formGroup]=\"formData\" (ngSubmit)=\"salvarIgreja()\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Nome Igreja <ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n\n        <ion-input type=\"text\" formControlName=\"nomeIgreja\" clearInput autocapitalize=\"off\"></ion-input>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.nomeIgreja\" [form]=\"formData\"\n        [nomeCampo]=\"'nomeIgreja'\"></app-mensagem-validacao>\n\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Cep <ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input type=\"text\" formControlName=\"cep\" clearInput autocapitalize=\"off\"></ion-input>\n      </ion-item>\n\n      <ion-chip color=\"tertiary\" (click)=\"submitError='';buscarEnderecoPorCEP()\" size=\"6\">\n        <ion-label>Buscar Endereço</ion-label>\n        <ion-icon name=\"search-outline\"></ion-icon>\n      </ion-chip>\n      <ion-item class=\"input-item\">\n        <ion-label class=\"ion-text-wrap\" *ngIf=\"igrejaEntity.logradouro\">\n          <p>{{igrejaEntity.logradouro}}, {{igrejaEntity.bairro}} - {{igrejaEntity.cidade}} / {{igrejaEntity.uf}}</p>\n        </ion-label>\n\n        <!-- <ion-button color=\"tertiary\" type=\"button\" (click)=\"submitError='';buscarEnderecoPorCEP()\" [submitError]=\"\">Buscar endereço</ion-button> -->\n        <app-mensagem-validacao [validation_messages_object]=\"validation_messages.cep\" [form]=\"formData\"\n          [nomeCampo]=\"'cep'\"></app-mensagem-validacao>\n      </ion-item>\n\n      <ion-item class=\"input-item\">\n        <ion-label position=\"floating\">Email do Administrador da Igreja <ion-text color=\"danger\">*</ion-text>\n        </ion-label>\n        <ion-input type=\"text\" formControlName=\"emailAdministrador\" clearInput autocapitalize=\"off\"></ion-input>\n      </ion-item>\n      <ion-chip color=\"tertiary\" (click)=\"submitError='';buscarUsuarioAdministradorIgreja()\" size=\"6\">\n        <ion-label>Buscar Usuário</ion-label>\n        <ion-icon name=\"search-outline\"></ion-icon>\n      </ion-chip>\n      <ion-item class=\"input-item\">\n        <ion-label class=\"ion-text-wrap\" *ngIf=\"igrejaEntity.nomeUsuarioAdministrador\">\n          <p>{{igrejaEntity.nomeUsuarioAdministrador}}</p>\n          <p>{{igrejaEntity.emailUsuarioAdministrador}}</p>\n        </ion-label>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.emailAdministrador\" [form]=\"formData\"\n        [nomeCampo]=\"'emailAdministrador'\"></app-mensagem-validacao>\n      </ion-item>\n\n    </ion-list>\n    <ion-button class=\"sign-up-btn\" type=\"submit\" [submitError]=\"\" expand=\"block\">\n      Cadastrar</ion-button>\n  </form>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.module.ts ***!
    \***************************************************************************/

  /*! exports provided: CriarIgrejaPageModule */

  /***/
  function srcAppPagesGerenciarIgrejaCriarIgrejaCriarIgrejaModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CriarIgrejaPageModule", function () {
      return CriarIgrejaPageModule;
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


    var _criar_igreja_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./criar-igreja.page */
    "./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [{
      path: '',
      component: _criar_igreja_page__WEBPACK_IMPORTED_MODULE_5__["CriarIgrejaPage"]
    }];

    var CriarIgrejaPageModule = function CriarIgrejaPageModule() {
      _classCallCheck(this, CriarIgrejaPageModule);
    };

    CriarIgrejaPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_6__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(routes)],
      declarations: [_criar_igreja_page__WEBPACK_IMPORTED_MODULE_5__["CriarIgrejaPage"]]
    })], CriarIgrejaPageModule);
    /***/
  },

  /***/
  "./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.scss":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.scss ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesGerenciarIgrejaCriarIgrejaCriarIgrejaPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlcmVuY2lhcklncmVqYS9jcmlhci1pZ3JlamEvY3JpYXItaWdyZWphLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.ts ***!
    \*************************************************************************/

  /*! exports provided: CriarIgrejaPage */

  /***/
  function srcAppPagesGerenciarIgrejaCriarIgrejaCriarIgrejaPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CriarIgrejaPage", function () {
      return CriarIgrejaPage;
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


    var src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/providers/buscaCEP/buscar-cep.service */
    "./src/app/providers/buscaCEP/buscar-cep.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/providers/igreja/igreja.service */
    "./src/app/providers/igreja/igreja.service.ts");
    /* harmony import */


    var src_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/config */
    "./src/app/config.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/helpers/handlerError */
    "./src/app/helpers/handlerError.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/helpers/loadingContr */
    "./src/app/helpers/loadingContr.ts");
    /* harmony import */


    var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/helpers/toastCustom */
    "./src/app/helpers/toastCustom.ts");

    var CriarIgrejaPage = /*#__PURE__*/function () {
      function CriarIgrejaPage(buscarCEPService, igrejaService, router, toastCtrl, loadingControll, ngZone) {
        _classCallCheck(this, CriarIgrejaPage);

        this.buscarCEPService = buscarCEPService;
        this.igrejaService = igrejaService;
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.loadingControll = loadingControll;
        this.ngZone = ngZone;
        this.igrejaEntity = {};
        this.validation_messages = {
          'nomeIgreja': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }],
          'cep': [{
            type: 'required',
            message: 'Campo de preenchimento obrigatório.'
          }]
        };
        this.formData = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          'cep': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
          'nomeIgreja': new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]))
        });
      }

      _createClass(CriarIgrejaPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "buscarEnderecoPorCEP",
        value: function buscarEnderecoPorCEP() {
          var _this = this;

          this.igrejaEntity = {};

          if (!this.formData.value['cep'] || this.formData.value['cep'].toString().length != "8") {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
            return false;
          }

          this.loadingControll.showLoader();
          this.buscarCEPService.buscarCEP(this.formData.value['cep']).then(function (x) {
            if (x && !x.erro) {
              _this.igrejaEntity.cidade = x.localidade;
              _this.igrejaEntity.bairro = x.bairro;
              _this.igrejaEntity.uf = x.uf;
              _this.igrejaEntity.logradouro = x.logradouro;
              _this.igrejaEntity.cep = x.cep;

              _this.loadingControll.hideLoader();
            } else {
              _this.loadingControll.hideLoader();

              src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Favor inserir CEP válido, antes de continuar.", _this.toastCtrl);
            }
          })["catch"](function (x) {
            _this.loadingControll.hideLoader();

            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(x, _this.toastCtrl);
          });
        }
      }, {
        key: "salvarIgreja",
        value: function salvarIgreja() {
          var _this2 = this;

          if (!this.igrejaEntity || !this.igrejaEntity.cidade) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Favor inserir CEP válido, antes de continuar.", this.toastCtrl);
            return false;
          }

          if (!this.formData.valid) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler("Favor preencher todos os campos devidamente sinalizados antes de continuar.", this.toastCtrl);
            return false;
          }

          this.loadingControll.showLoader();
          this.igrejaEntity.nomeIgreja = this.formData.value['nomeIgreja'];
          this.igrejaEntity.administradores = [{
            usuarioId: src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId
          }];
          this.igrejaService.AdicionarNovaIgreja(this.igrejaEntity).then(function () {
            _this2.loadingControll.hideLoader();

            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_10__["ToastCustom"].SucessoToast(_this2.toastCtrl);

            _this2.ngZone.run(function () {
              _this2.router.navigate(['home']);
            });
          })["catch"](function (error) {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_7__["HandlerError"].handler(error, _this2.toastCtrl);

            _this2.loadingControll.hideLoader();
          });
        }
      }, {
        key: "buscarUsuarioAdministradorIgreja",
        value: function buscarUsuarioAdministradorIgreja() {}
      }]);

      return CriarIgrejaPage;
    }();

    CriarIgrejaPage.ctorParameters = function () {
      return [{
        type: src_app_providers_buscaCEP_buscar_cep_service__WEBPACK_IMPORTED_MODULE_2__["BuscarCEPService"]
      }, {
        type: src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_4__["IgrejaService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"]
      }, {
        type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_9__["LoadingContr"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    CriarIgrejaPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-criar-igreja',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./criar-igreja.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./criar-igreja.page.scss */
      "./src/app/pages/gerenciarIgreja/criar-igreja/criar-igreja.page.scss"))["default"]]
    })], CriarIgrejaPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-gerenciarIgreja-criar-igreja-criar-igreja-module-es5.js.map
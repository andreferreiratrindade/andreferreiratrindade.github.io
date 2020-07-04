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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-sign-up-sign-up-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up/sign-up.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up/sign-up.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSignUpSignUpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"sign-up-content\">\n  <h2 class=\"auth-title\">\n    Cadastre-se\n  </h2>\n\n  <form [formGroup]=\"signUpForm\" (ngSubmit)=\"signUpWithEmail()\">\n    <ion-list class=\"inputs-list\" lines=\"full\">\n      <ion-item class=\"input-item\">\n        <ion-label floating>Nome:</ion-label>\n\n        <ion-input type=\"text\" formControlName=\"nome\" clearInput autocapitalize=\"off\"></ion-input>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.nome\" [form]=\"signUpForm\"\n        [nomeCampo]=\"'nome'\"></app-mensagem-validacao>\n\n      <ion-item class=\"input-item\">\n        <ion-label floating>Email:</ion-label>\n\n        <ion-input type=\"email\" formControlName=\"email\" clearInput autocapitalize=\"off\" inputmode=\"email\"></ion-input>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.email\" [form]=\"signUpForm\"\n        [nomeCampo]=\"'email'\"></app-mensagem-validacao>\n\n      <ion-item class=\"input-item\">\n        <ion-label floating>Senha:</ion-label>\n\n        <ion-input type=\"password\" formControlName=\"password\"></ion-input>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.password\" [form]=\"signUpForm\"\n        [nomeCampo]=\"'password'\"></app-mensagem-validacao>\n      <ion-item class=\"input-item\">\n        <ion-label floating>Confirmar Senha:</ion-label>\n        <ion-input type=\"password\" formControlName=\"confirm_password\"></ion-input>\n      </ion-item>\n      <app-mensagem-validacao [validation_messages_object]=\"validation_messages.confirm_password\" [form]=\"signUpForm\"\n        [nomeCampo]=\"'confirm_password'\"></app-mensagem-validacao>\n\n    </ion-list>\n\n    <ion-button class=\"sign-up-btn\" type=\"submit\" expand=\"block\" [disabled]=\"!signUpForm.valid\">Cadastrar</ion-button>\n    <div class=\"error-container\" *ngIf=\"submitError\">\n      <div class=\"error-message\">\n        <ion-icon name=\"information-circle-outline\"></ion-icon>\n        <span>{{ submitError }}</span>\n      </div>\n    </div>\n    <ion-row class=\"sign-in-btn-wrapper\">\n      <ion-button class=\"sign-in-btn\" fill=\"clear\" [routerLink]=\"['/sign-in']\">\n        Já possui login?\n      </ion-button>\n    </ion-row>\n  </form>\n\n  <div class=\"social-auth-options\">\n    <p class=\"options-divider\">Ou</p>\n    <ion-button class=\"social-auth-btn\" color=\"primary\" expand=\"block\" (click)=\"facebookSignUp()\">Facebook Sign Up\n    </ion-button>\n    <ion-button class=\"social-auth-btn google-auth-btn\" color=\"danger\" expand=\"block\" (click)=\"googleSignUp()\">Google\n      Sign Up</ion-button>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/entity/usuario-entity.ts":
  /*!******************************************!*\
    !*** ./src/app/entity/usuario-entity.ts ***!
    \******************************************/

  /*! exports provided: UsuarioEntity */

  /***/
  function srcAppEntityUsuarioEntityTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsuarioEntity", function () {
      return UsuarioEntity;
    });

    var UsuarioEntity = function UsuarioEntity() {
      _classCallCheck(this, UsuarioEntity);
    };
    /***/

  },

  /***/
  "./src/app/pages/sign-up/sign-up.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/sign-up/sign-up.module.ts ***!
    \*************************************************/

  /*! exports provided: SignUpPageModule */

  /***/
  function srcAppPagesSignUpSignUpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function () {
      return SignUpPageModule;
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


    var _sign_up_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./sign-up.page */
    "./src/app/pages/sign-up/sign-up.page.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var routes = [{
      path: '',
      component: _sign_up_page__WEBPACK_IMPORTED_MODULE_5__["SignUpPage"]
    }];

    var SignUpPageModule = function SignUpPageModule() {
      _classCallCheck(this, SignUpPageModule);
    };

    SignUpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)],
      declarations: [_sign_up_page__WEBPACK_IMPORTED_MODULE_5__["SignUpPage"]]
    })], SignUpPageModule);
    /***/
  },

  /***/
  "./src/app/pages/sign-up/sign-up.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/sign-up/sign-up.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSignUpSignUpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sign-up-content {\n  text-align: center;\n  --padding-bottom: 16px;\n  --padding-end: 16px;\n  --padding-start: 16px;\n  --padding-top: 16px;\n}\n.sign-up-content .auth-title {\n  font-weight: bold;\n  margin-bottom: 64px;\n  letter-spacing: 0.6px;\n}\n.sign-up-content .social-auth-options .options-divider {\n  text-align: center;\n}\n.sign-up-content .inputs-list .input-item {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  --inner-padding-end: 0px;\n}\n.sign-up-content .error-container .error-message {\n  margin: 16px 0px;\n  display: flex;\n  align-items: center;\n  color: var(--ion-color-danger);\n  font-size: 14px;\n}\n.sign-up-content .error-container .error-message ion-icon {\n  font-size: 16px;\n  -webkit-padding-end: 8px;\n          padding-inline-end: 8px;\n}\n.sign-up-content .sign-up-btn {\n  margin: 16px 0px;\n}\n.sign-up-content .sign-in-btn-wrapper {\n  justify-content: flex-end;\n  align-items: center;\n}\n.sign-up-content .sign-in-btn-wrapper .sign-in-btn {\n  --padding-end: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2lnbi11cC9zaWduLXVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUNDRjtBRENFO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FDQ0o7QURHSTtFQUNBLGtCQUFBO0FDREo7QURNSTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ0pOO0FEU0k7RUFDRSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ1BOO0FEU007RUFDRSxlQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtBQ1BSO0FEWUU7RUFDRSxnQkFBQTtBQ1ZKO0FEYUU7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0FDWEo7QURhSTtFQUNFLGtCQUFBO0FDWE4iLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWduLXVwL3NpZ24tdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ24tdXAtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xuXG4gIC5hdXRoLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjZweDtcbiAgfVxuXG4gIC5zb2NpYWwtYXV0aC1vcHRpb25zIHtcbiAgICAub3B0aW9ucy1kaXZpZGVyIHtcbiAgXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAuaW5wdXRzLWxpc3Qge1xuICAgIC5pbnB1dC1pdGVtIHtcbiAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5lcnJvci1jb250YWluZXIge1xuICAgIC5lcnJvci1tZXNzYWdlIHtcbiAgICAgIG1hcmdpbjogMTZweCAwcHg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgaW9uLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogOHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zaWduLXVwLWJ0biB7XG4gICAgbWFyZ2luOiAxNnB4IDBweDtcbiAgfVxuXG4gIC5zaWduLWluLWJ0bi13cmFwcGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAuc2lnbi1pbi1idG4ge1xuICAgICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIH1cbiAgfVxufVxuIiwiLnNpZ24tdXAtY29udGVudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxNnB4O1xuICAtLXBhZGRpbmctdG9wOiAxNnB4O1xufVxuLnNpZ24tdXAtY29udGVudCAuYXV0aC10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiA2NHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC42cHg7XG59XG4uc2lnbi11cC1jb250ZW50IC5zb2NpYWwtYXV0aC1vcHRpb25zIC5vcHRpb25zLWRpdmlkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc2lnbi11cC1jb250ZW50IC5pbnB1dHMtbGlzdCAuaW5wdXQtaXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbn1cbi5zaWduLXVwLWNvbnRlbnQgLmVycm9yLWNvbnRhaW5lciAuZXJyb3ItbWVzc2FnZSB7XG4gIG1hcmdpbjogMTZweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFuZ2VyKTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLnNpZ24tdXAtY29udGVudCAuZXJyb3ItY29udGFpbmVyIC5lcnJvci1tZXNzYWdlIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDhweDtcbn1cbi5zaWduLXVwLWNvbnRlbnQgLnNpZ24tdXAtYnRuIHtcbiAgbWFyZ2luOiAxNnB4IDBweDtcbn1cbi5zaWduLXVwLWNvbnRlbnQgLnNpZ24taW4tYnRuLXdyYXBwZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNpZ24tdXAtY29udGVudCAuc2lnbi1pbi1idG4td3JhcHBlciAuc2lnbi1pbi1idG4ge1xuICAtLXBhZGRpbmctZW5kOiAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/sign-up/sign-up.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/sign-up/sign-up.page.ts ***!
    \***********************************************/

  /*! exports provided: SignUpPage */

  /***/
  function srcAppPagesSignUpSignUpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignUpPage", function () {
      return SignUpPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/providers/base-provider/firebase-auth-service.service */
    "./src/app/providers/base-provider/firebase-auth-service.service.ts");
    /* harmony import */


    var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/providers/usuario/usuario.service */
    "./src/app/providers/usuario/usuario.service.ts");
    /* harmony import */


    var src_app_entity_usuario_entity__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/entity/usuario-entity */
    "./src/app/entity/usuario-entity.ts");

    var SignUpPage = /*#__PURE__*/function () {
      function SignUpPage(angularFire, router, ngZone, authService, usuarioService) {
        var _this = this;

        _classCallCheck(this, SignUpPage);

        this.angularFire = angularFire;
        this.router = router;
        this.ngZone = ngZone;
        this.authService = authService;
        this.usuarioService = usuarioService;
        this.validation_messages = {
          'email': [{
            type: 'required',
            message: 'Email é de preenchimento obrigatório.'
          }, {
            type: 'pattern',
            message: 'Email inválido.'
          }],
          'password': [{
            type: 'required',
            message: 'Senha é de preenchimento obrigatório.'
          }, {
            type: 'minlength',
            message: 'Senha deverá conter pelo menos 6 caracteres'
          }],
          'nome': [{
            type: 'required',
            message: 'Nome é de preenchimento obrigatório.'
          }],
          'confirm_password': [{
            type: 'required',
            message: 'Confirmar Senha é de preenchimento obrigatório.'
          }]
        };
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])),
          'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
          'confirm_password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
          'nome': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]))
        }); // Get firebase authentication redirect result invoken when using signInWithRedirect()
        // signInWithRedirect() is only used when client is in web but not desktop

        this.authRedirectResult = this.authService.getRedirectResult().subscribe(function (result) {
          if (result.user) {
            _this.redirectLoggedUserToProfilePage();
          } else if (result.error) {
            _this.submitError = result.error;
          }
        });
      } // Once the auth provider finished the authentication flow, and the auth redirect completes,
      // redirect the user to the profile page


      _createClass(SignUpPage, [{
        key: "redirectLoggedUserToProfilePage",
        value: function redirectLoggedUserToProfilePage() {
          var _this2 = this;

          // As we are calling the Angular router navigation inside a subscribe method, the navigation will be triggered outside Angular zone.
          // That's why we need to wrap the router navigation call inside an ngZone wrapper
          this.ngZone.run(function () {
            _this2.router.navigate(['profile']);
          });
        }
      }, {
        key: "signUpWithEmail",
        value: function signUpWithEmail() {
          var _this3 = this;

          this.authService.signUpWithEmail(this.signUpForm.value['email'], this.signUpForm.value['password']).then(function (user) {
            // navigate to user profile
            var usuarioObj = new src_app_entity_usuario_entity__WEBPACK_IMPORTED_MODULE_7__["UsuarioEntity"]();
            usuarioObj.nome = _this3.signUpForm.value['nome'];
            usuarioObj.uid = user.user.uid;

            _this3.usuarioService.AdicionarUsuario(usuarioObj).then(function (x) {
              _this3.redirectLoggedUserToProfilePage();
            })["catch"](function (error) {
              _this3.submitError = error.message;
            });
          })["catch"](function (error) {
            _this3.submitError = error.message;
          });
        }
      }, {
        key: "facebookSignUp",
        value: function facebookSignUp() {
          var _this4 = this;

          this.authService.signInWithFacebook().then(function (result) {
            if (result.additionalUserInfo) {
              _this4.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
            } // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            // const token = result.credential.accessToken;
            // The signed-in user info is in result.user;


            _this4.redirectLoggedUserToProfilePage();
          })["catch"](function (error) {
            // Handle Errors here.
            console.log(error);
          });
        }
      }, {
        key: "googleSignUp",
        value: function googleSignUp() {
          var _this5 = this;

          this.authService.signInWithGoogle().then(function (result) {
            if (result.additionalUserInfo) {
              _this5.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
            } // This gives you a Google Access Token. You can use it to access the Google API.
            // const token = result.credential.accessToken;
            // The signed-in user info is in result.user;


            _this5.redirectLoggedUserToProfilePage();
          })["catch"](function (error) {
            // Handle Errors here.
            console.log(error);
          });
        }
      }, {
        key: "twitterSignUp",
        value: function twitterSignUp() {
          var _this6 = this;

          this.authService.signInWithTwitter().then(function (result) {
            if (result.additionalUserInfo) {
              _this6.authService.setProviderAdditionalInfo(result.additionalUserInfo.profile);
            } // This gives you a Twitter Access Token. You can use it to access the Twitter API.
            // const token = result.credential.accessToken;
            // The signed-in user info is in result.user;


            _this6.redirectLoggedUserToProfilePage();
          })["catch"](function (error) {
            // Handle Errors here.
            console.log(error);
          });
        }
      }]);

      return SignUpPage;
    }();

    SignUpPage.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: src_app_providers_base_provider_firebase_auth_service_service__WEBPACK_IMPORTED_MODULE_5__["FirebaseAuthService"]
      }, {
        type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_6__["UsuarioService"]
      }];
    };

    SignUpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sign-up',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./sign-up.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/sign-up/sign-up.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./sign-up.page.scss */
      "./src/app/pages/sign-up/sign-up.page.scss"))["default"]]
    })], SignUpPage);
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

    var UsuarioService = /*#__PURE__*/function () {
      function UsuarioService(usuarioRepository) {
        _classCallCheck(this, UsuarioService);

        this.usuarioRepository = usuarioRepository;
      }

      _createClass(UsuarioService, [{
        key: "AdicionarUsuario",
        value: function AdicionarUsuario(item) {
          return this.usuarioRepository.add('usuario/', item);
        }
      }]);

      return UsuarioService;
    }();

    UsuarioService.ctorParameters = function () {
      return [{
        type: src_app_repository_usuario_usuario_rep_service__WEBPACK_IMPORTED_MODULE_2__["UsuarioRepService"]
      }];
    };

    UsuarioService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UsuarioService);
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

    var UsuarioRepService = /*#__PURE__*/function (_repository_interface) {
      _inherits(UsuarioRepService, _repository_interface);

      var _super = _createSuper(UsuarioRepService);

      function UsuarioRepService() {
        _classCallCheck(this, UsuarioRepService);

        return _super.apply(this, arguments);
      }

      return UsuarioRepService;
    }(_repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__["BaseRepository"]);

    UsuarioRepService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UsuarioRepService);
    /***/
  }
}]);
//# sourceMappingURL=pages-sign-up-sign-up-module-es5.js.map
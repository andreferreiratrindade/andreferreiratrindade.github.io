(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gerenciarIgreja-manterPrestadores-manter-prestador-manter-prestador-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.page.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.page.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      Manter Prestador\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-list-header>\n      Dados empresa\n    </ion-list-header>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Nome</p>\n        <h3>{{prestador.nome}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Email</p>\n        <h3>{{prestador.email}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Razão Social</p>\n        <h3>{{prestador.razaoSocial}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Telefone</p>\n        <h3>{{prestador.telefone}}</h3>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <p>Endereço</p>\n        <h3>{{prestador.logradouro}}, {{prestador.bairro}} - {{prestador.cidade}} / {{prestador.uf}}</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      Local Atendimento\n    </ion-list-header>\n    <ion-item *ngFor=\"let item of prestador.locaisAtendimento\">\n      <ion-label class=\"ion-text-wrap\">\n        <h1>{{item.cidade}} / {{item.uf}}</h1>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-list-header>\n      Serviços\n    </ion-list-header>\n    <ion-item *ngFor=\"let item of prestadorServicos\">\n      <ion-label class=\"ion-text-wrap\">\n        <h1>{{item.nomeServico}}</h1>\n        <h3>{{item.breveDescricao}}</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header>\n      Igreja Vinculo\n    </ion-list-header>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap\">\n        <h3>{{prestador.nomeIgreja}}</h3>\n        <h3>{{prestador.staMembro}}</h3>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n  <ion-list>\n    <ion-item>\n      <ion-label>Situação do Prestador</ion-label>\n      <ion-select [(ngModel)]=\"prestador.situacaoPrestador\">\n        <ion-select-option *ngFor=\"let item of situacoesPrestador\" [value]=\"item.valor\">\n          {{ item.descricao }}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-button class=\"default\" type=\"button\" (click)=\"voltar()\">Voltar</ion-button>\n        </ion-col>\n        <ion-col size=\"4\">\n          <ion-button class=\"success\" type=\"button\" (click)=\"atualizarPrestador()\">Atualizar</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-toolbar>\n</ion-footer>");

/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador-routing.module.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador-routing.module.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ManterPrestadorPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManterPrestadorPageRoutingModule", function() { return ManterPrestadorPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _manter_prestador_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manter-prestador.page */ "./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.page.ts");




const routes = [
    {
        path: '',
        component: _manter_prestador_page__WEBPACK_IMPORTED_MODULE_3__["ManterPrestadorPage"]
    }
];
let ManterPrestadorPageRoutingModule = class ManterPrestadorPageRoutingModule {
};
ManterPrestadorPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ManterPrestadorPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ManterPrestadorPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManterPrestadorPageModule", function() { return ManterPrestadorPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _manter_prestador_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manter-prestador-routing.module */ "./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador-routing.module.ts");
/* harmony import */ var _manter_prestador_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manter-prestador.page */ "./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let ManterPrestadorPageModule = class ManterPrestadorPageModule {
};
ManterPrestadorPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _manter_prestador_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManterPrestadorPageRoutingModule"]
        ],
        declarations: [_manter_prestador_page__WEBPACK_IMPORTED_MODULE_6__["ManterPrestadorPage"]]
    })
], ManterPrestadorPageModule);



/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.page.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.page.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2dlcmVuY2lhcklncmVqYS9tYW50ZXJQcmVzdGFkb3Jlcy9tYW50ZXItcHJlc3RhZG9yL21hbnRlci1wcmVzdGFkb3IucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.page.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.page.ts ***!
  \***************************************************************************************************/
/*! exports provided: ManterPrestadorPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManterPrestadorPage", function() { return ManterPrestadorPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/utils/constants */ "./src/app/utils/constants.ts");
/* harmony import */ var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/toastCustom */ "./src/app/helpers/toastCustom.ts");
/* harmony import */ var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/prestador/prestador.service */ "./src/app/providers/prestador/prestador.service.ts");
/* harmony import */ var src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/providers/dominioServico/dominio-servico.service */ "./src/app/providers/dominioServico/dominio-servico.service.ts");
/* harmony import */ var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/helpers/loadingContr */ "./src/app/helpers/loadingContr.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/providers/usuario/usuario.service */ "./src/app/providers/usuario/usuario.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/providers/igreja/igreja.service */ "./src/app/providers/igreja/igreja.service.ts");
/* harmony import */ var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/helpers/handlerError */ "./src/app/helpers/handlerError.ts");












let ManterPrestadorPage = class ManterPrestadorPage {
    constructor(prestadorService, dominioServicoService, loadingContr, router, usuarioService, toastCtrl, igrejaService, route) {
        this.prestadorService = prestadorService;
        this.dominioServicoService = dominioServicoService;
        this.loadingContr = loadingContr;
        this.router = router;
        this.usuarioService = usuarioService;
        this.toastCtrl = toastCtrl;
        this.igrejaService = igrejaService;
        this.route = route;
        this.prestador = {};
        this.prestadorUsuario = {};
        this.prestadorServicos = [];
        this.prestador = { usuarioId: this.route.snapshot.queryParams['prestadorUsuarioId'] };
    }
    ngOnInit() {
        this.loadingContr.showLoader();
        this.situacoesPrestador = src_app_utils_constants__WEBPACK_IMPORTED_MODULE_2__["Constants"].ListTipoSituacaoPrestador.RecuperaListagem();
        this.prestadorService.RecuperaPrestador(this.prestador.usuarioId)
            .then((result) => {
            this.prestador = result;
            debugger;
            this.igrejaService.RecuperaNomeIgreja([this.prestador.igrejaId]).then(result => {
                this.prestador.nomeIgreja = result[0].data.nomeIgreja;
                this.loadingContr.hideLoader();
            }).catch(err => {
                src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_11__["HandlerError"].handler(err, this.toastCtrl);
                this.loadingContr.hideLoader();
            });
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_11__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
        this.prestadorService.recuperaServicosPorPrestador(this.prestador.usuarioId)
            .then(result => {
            this.prestadorServicos = result;
            this.dominioServicoService.recuperaDominioServico().then(x => {
                this.prestadorServicos.map((listItem) => {
                    var _a;
                    listItem.expanded = false;
                    listItem.breveDescricao = (_a = listItem.breveDescricao) !== null && _a !== void 0 ? _a : "";
                    listItem.nomeServico = x.filter(y => y.servicoId == listItem.servicoId)[0].nomeServico;
                    return listItem;
                });
                this.loadingContr.hideLoader();
            }).catch(err => {
                src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_11__["HandlerError"].handler(err, this.toastCtrl);
                this.loadingContr.hideLoader();
            });
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_11__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
        this.usuarioService.RecuperaUsuarioPorUsuarioId(this.prestador.usuarioId)
            .then(result => {
            this.prestador.nome = result.nome;
            this.prestador.email = result.email;
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_11__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
    atualizarPrestador() {
        this.loadingContr.showLoader();
        let obj = { situacaoPrestador: this.prestador.situacaoPrestador };
        this.prestadorService
            .AtualizaPrestador(this.prestador.usuarioId, obj).then(() => {
            this.loadingContr.hideLoader();
            src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_3__["ToastCustom"].SucessoToast(this.toastCtrl);
        }).catch(err => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_11__["HandlerError"].handler(err, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
};
ManterPrestadorPage.ctorParameters = () => [
    { type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_4__["PrestadorService"] },
    { type: src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_5__["DominioServicoService"] },
    { type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_6__["LoadingContr"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_8__["UsuarioService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__["ToastController"] },
    { type: src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_10__["IgrejaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
ManterPrestadorPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manter-prestador',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./manter-prestador.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./manter-prestador.page.scss */ "./src/app/pages/gerenciarIgreja/manterPrestadores/manter-prestador/manter-prestador.page.scss")).default]
    })
], ManterPrestadorPage);



/***/ })

}]);
//# sourceMappingURL=pages-gerenciarIgreja-manterPrestadores-manter-prestador-manter-prestador-module-es2015.js.map
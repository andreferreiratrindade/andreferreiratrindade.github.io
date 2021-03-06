(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-gerenciarIgreja-manterPrestadores-consultar-prestador-adm-consultar-prestador-adm-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content fullscreen>\n  <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button></ion-menu-button>\n      </ion-buttons>\n      <ion-title>\n        Mantem Prestadores\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Consultar Prestadores</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <form [formGroup]=\"formConsultarPrestadorADM\" (ngSubmit)=\"ConsultarPrestador()\">\n\n        <ion-item (click)=\"abrirModalIgreja()\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Igreja</ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-note color=\"primary\"> {{formConsultarPrestadorADM.value.nomeIgreja}}</ion-note>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <ion-icon name=\"chevron-down-outline\" slot=\"end\"></ion-icon>\n\n        </ion-item>\n        <ion-item (click)=\"abrirModalSituacaoPrestador()\">\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"12\">\n                <ion-label>Situação Prestador\n                </ion-label>\n              </ion-col>\n              <ion-col size=\"12\">\n                <ion-note color=\"primary\"> {{formConsultarPrestadorADM.value.nomeSituacaoPrestador}}\n                </ion-note>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n\n          <ion-icon name=\"chevron-down-outline\" slot=\"end\"></ion-icon>\n\n        </ion-item>\n        <div class=\"ion-text-end\" style=\"margin-top: 20px;\">\n\n          <ion-button class=\"primary\" type=\"submit\"><ion-icon name=\"search-outline\" style=\"margin-right:10px;\"></ion-icon>Pesquisar</ion-button>\n\n        </div>\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor=\"let item of prestadores\" class=\"ion-no-border\">\n    <ion-card-header>\n\n      <ion-card-title>\n        <h3>{{item.nome}} </h3>\n      </ion-card-title>\n    </ion-card-header>\n    <ion-item class=\"ion-no-border\">\n      <ion-icon name=\"business-outline\" slot=\"start\"></ion-icon>\n      <ion-label class=\"ion-text-wrap on-no-border\">\n        <h2>{{item.nomeIgreja}} </h2>\n      </ion-label>\n      \n    </ion-item>\n    <ion-item>\n      <ion-icon name=\"golf-outline\" slot=\"start\"></ion-icon>\n      <ion-label class=\"ion-text-wrap on-no-border\">\n        <h2>{{item.bairro}} - {{item.cidade}} / {{item.uf}}</h2>\n      </ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label class=\"ion-text-wrap on-no-border\">\n        <h2>{{item.nomeSituacaoPrestador}}</h2>\n      </ion-label>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col size=\"4\">\n          <ion-button size=\"small\" (click)=\"configuracoes(item.usuarioId)\">Configurações</ion-button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>");

/***/ }),

/***/ "./src/app/helpers/handlerError.ts":
/*!*****************************************!*\
  !*** ./src/app/helpers/handlerError.ts ***!
  \*****************************************/
/*! exports provided: HandlerError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandlerError", function() { return HandlerError; });
/* harmony import */ var _toastCustom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toastCustom */ "./src/app/helpers/toastCustom.ts");

class HandlerError {
    static handler(err, toastCtrl) {
        var data = err;
        let message = data.error ? data.error.message : data;
        _toastCustom__WEBPACK_IMPORTED_MODULE_0__["ToastCustom"].errorToast(message, toastCtrl);
    }
}


/***/ }),

/***/ "./src/app/helpers/toastCustom.ts":
/*!****************************************!*\
  !*** ./src/app/helpers/toastCustom.ts ***!
  \****************************************/
/*! exports provided: ToastCustom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastCustom", function() { return ToastCustom; });
class ToastCustom {
    static errorToast(msg, toastCtrl) {
        this.CustomToast(toastCtrl, msg, "danger", 4000);
    }
    static SucessoToast(toastCtrl) {
        this.CustomToast(toastCtrl, "Operação realizada com sucesso.", "success", 4000);
    }
    static CustomToast(toastCtrl, message, color, duration) {
        toastCtrl.create({
            message: message,
            duration: duration,
            color: color
        }).then(x => {
            x.present();
        });
    }
}


/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm-routing.module.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm-routing.module.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: ConsultarPrestadorAdmPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarPrestadorAdmPageRoutingModule", function() { return ConsultarPrestadorAdmPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _consultar_prestador_adm_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consultar-prestador-adm.page */ "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.ts");




const routes = [
    {
        path: '',
        component: _consultar_prestador_adm_page__WEBPACK_IMPORTED_MODULE_3__["ConsultarPrestadorAdmPage"]
    }
];
let ConsultarPrestadorAdmPageRoutingModule = class ConsultarPrestadorAdmPageRoutingModule {
};
ConsultarPrestadorAdmPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ConsultarPrestadorAdmPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.module.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.module.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: ConsultarPrestadorAdmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarPrestadorAdmPageModule", function() { return ConsultarPrestadorAdmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _consultar_prestador_adm_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./consultar-prestador-adm-routing.module */ "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm-routing.module.ts");
/* harmony import */ var _consultar_prestador_adm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultar-prestador-adm.page */ "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let ConsultarPrestadorAdmPageModule = class ConsultarPrestadorAdmPageModule {
};
ConsultarPrestadorAdmPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _consultar_prestador_adm_routing_module__WEBPACK_IMPORTED_MODULE_5__["ConsultarPrestadorAdmPageRoutingModule"]
        ],
        declarations: [_consultar_prestador_adm_page__WEBPACK_IMPORTED_MODULE_6__["ConsultarPrestadorAdmPage"]]
    })
], ConsultarPrestadorAdmPageModule);



/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card-content {\n  padding-left: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3RyYXZpcy9idWlsZC9hbmRyZWZlcnJlaXJhdHJpbmRhZGUvSWdyZWphQXBwL3NyYy9hcHAvcGFnZXMvZ2VyZW5jaWFySWdyZWphL21hbnRlclByZXN0YWRvcmVzL2NvbnN1bHRhci1wcmVzdGFkb3ItYWRtL2NvbnN1bHRhci1wcmVzdGFkb3ItYWRtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZ2VyZW5jaWFySWdyZWphL21hbnRlclByZXN0YWRvcmVzL2NvbnN1bHRhci1wcmVzdGFkb3ItYWRtL2NvbnN1bHRhci1wcmVzdGFkb3ItYWRtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9nZXJlbmNpYXJJZ3JlamEvbWFudGVyUHJlc3RhZG9yZXMvY29uc3VsdGFyLXByZXN0YWRvci1hZG0vY29uc3VsdGFyLXByZXN0YWRvci1hZG0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQtY29udGVudHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xuICB9XG4gICIsImlvbi1jYXJkLWNvbnRlbnQge1xuICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ConsultarPrestadorAdmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultarPrestadorAdmPage", function() { return ConsultarPrestadorAdmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/providers/prestador/prestador.service */ "./src/app/providers/prestador/prestador.service.ts");
/* harmony import */ var src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/providers/usuario/usuario.service */ "./src/app/providers/usuario/usuario.service.ts");
/* harmony import */ var src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/providers/igreja/igreja.service */ "./src/app/providers/igreja/igreja.service.ts");
/* harmony import */ var src_app_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/config */ "./src/app/config.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/helpers/loadingContr */ "./src/app/helpers/loadingContr.ts");
/* harmony import */ var src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/providers/dominioServico/dominio-servico.service */ "./src/app/providers/dominioServico/dominio-servico.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/utils/constants */ "./src/app/utils/constants.ts");
/* harmony import */ var _modalSituacaoPrestador_modal_situacao_prestador_modal_situacao_prestador_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../modalSituacaoPrestador/modal-situacao-prestador/modal-situacao-prestador.page */ "./src/app/pages/gerenciarIgreja/manterPrestadores/modalSituacaoPrestador/modal-situacao-prestador/modal-situacao-prestador.page.ts");
/* harmony import */ var src_app_pages_igreja_modal_igreja_modal_igreja_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/pages/igreja/modal-igreja/modal-igreja.page */ "./src/app/pages/igreja/modal-igreja/modal-igreja.page.ts");
/* harmony import */ var src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/helpers/toastCustom */ "./src/app/helpers/toastCustom.ts");
/* harmony import */ var src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/helpers/handlerError */ "./src/app/helpers/handlerError.ts");
















let ConsultarPrestadorAdmPage = class ConsultarPrestadorAdmPage {
    constructor(prestadorService, toastCtrl, igrejaService, usuarioService, loadingContr, dominioServicoService, router, modalCtrl) {
        this.prestadorService = prestadorService;
        this.toastCtrl = toastCtrl;
        this.igrejaService = igrejaService;
        this.usuarioService = usuarioService;
        this.loadingContr = loadingContr;
        this.dominioServicoService = dominioServicoService;
        this.router = router;
        this.modalCtrl = modalCtrl;
        this.prestadores = [];
        this.formConsultarPrestadorADM = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroup"]({
            'nomeSituacaoPrestador': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
            'situacaoPrestador': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
            'nomeIgreja': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
            'igrejaId': new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"](),
        });
        this.prestadores = [];
    }
    ngOnInit() {
        this.loadingContr.showLoader();
        this.igrejaService.RecuperaIgrejaPorAdministrador(src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId)
            .then(result => {
            this.igrejasDoAdmin = result;
            this.formConsultarPrestadorADM.controls['nomeIgreja'].setValue(result[0].nomeIgreja);
            this.formConsultarPrestadorADM.controls['igrejaId'].setValue(result[0].id);
            this.loadingContr.hideLoader();
        }).catch(err => {
            this.loadingContr.hideLoader();
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_15__["HandlerError"].handler(err, this.toastCtrl);
        });
        // let usuario = Config.RecuperaInstancia().recuperaUsuario();
        // this.igrejaService.RecuperaIgrejaPorAdministrador(usuario.usuarioId)
        //   .then(igrejaResult => {
        //     this.prestadorService.recuperaPrestadoresPorIgreja(igrejaResult.igrejaId)
        //       .then(prestadoresResult => {
        //         this.prestadores = prestadoresResult
        //       })
        //   })
    }
    ConsultarPrestador() {
        this.prestadores = [];
        this.loadingContr.showLoader();
        this.prestadorService
            .RecuperaPestadoresPesquisarPorAdministrador(this.formConsultarPrestadorADM.value.situacaoPrestador, this.formConsultarPrestadorADM.value.igrejaId, src_app_config__WEBPACK_IMPORTED_MODULE_5__["Config"].RecuperaInstancia().recuperaUsuario().usuarioId, this.igrejasDoAdmin.map(x => { let obj = { igrejaId: x.id }; return obj; }))
            .then(prestadoresResult => {
            if (!prestadoresResult || prestadoresResult.length == 0) {
                src_app_helpers_toastCustom__WEBPACK_IMPORTED_MODULE_14__["ToastCustom"].CustomToast(this.toastCtrl, "Nenhum prestador encontrado.", "danger", 4000);
                this.loadingContr.hideLoader();
                return false;
            }
            this.prestadores = prestadoresResult;
            this.prestadores.map(y => { y.nomeSituacaoPrestador = src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].ListTipoSituacaoPrestador.RecuperaDescricaoPorValor(y.situacaoPrestador); });
            let lstusuarioId = [];
            lstusuarioId = prestadoresResult.map(x => { return x.usuarioId; });
            this.recuperaNomePrestadores(lstusuarioId);
            let lstIgrejaId = [];
            lstIgrejaId = prestadoresResult.map(x => { return x.igrejaId; });
            this.recuperaNomeIgreja(lstIgrejaId);
        }).catch(x => {
            src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_15__["HandlerError"].handler(x, this.toastCtrl);
            this.loadingContr.hideLoader();
        });
    }
    recuperaNomePrestadores(lstusuarioId) {
        return new Promise((result, reject) => {
            this.usuarioService.RecuperaNomeUsuarios(lstusuarioId)
                .then(usuariosResult => {
                this.prestadores.map(x => {
                    x.nome = usuariosResult.find(y => y.data.usuarioId == x.usuarioId).data.nome;
                    x.email = usuariosResult.find(y => y.data.usuarioId == x.usuarioId).data.email;
                });
                this.ionContent.scrollToPoint(0, 350, 800);
                this.loadingContr.hideLoader();
            }).catch(x => {
                src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_15__["HandlerError"].handler(x, this.toastCtrl);
                this.loadingContr.hideLoader();
            });
        });
    }
    recuperaNomeIgreja(lstIgrejaId) {
        return new Promise((result, reject) => {
            this.igrejaService.RecuperaNomeIgreja(lstIgrejaId)
                .then(resultIgreja => {
                this.prestadores.map(x => {
                    x.nomeIgreja = resultIgreja.find(y => y.data.id == x.igrejaId).data.nomeIgreja;
                });
                this.loadingContr.hideLoader();
            }).catch(x => {
                reject(x);
                src_app_helpers_handlerError__WEBPACK_IMPORTED_MODULE_15__["HandlerError"].handler(x, this.toastCtrl);
                this.loadingContr.hideLoader();
            });
        });
    }
    abrirModalSituacaoPrestador() {
        const modal = this.modalCtrl.create({
            component: _modalSituacaoPrestador_modal_situacao_prestador_modal_situacao_prestador_page__WEBPACK_IMPORTED_MODULE_12__["ModalSituacaoPrestadorPage"],
            componentProps: { situacoes: src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].ListTipoSituacaoPrestador.RecuperaListagem().filter(y => { return y.value !== src_app_utils_constants__WEBPACK_IMPORTED_MODULE_11__["Constants"].TipoSituacaoPrestador.PrestadorEmEdicao; }) },
            backdropDismiss: false,
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {
                if (resultModal.data) {
                    this.formConsultarPrestadorADM.controls['nomeSituacaoPrestador'].setValue(resultModal.data.descricao);
                    this.formConsultarPrestadorADM.controls['situacaoPrestador'].setValue(resultModal.data.valor);
                }
            });
        });
    }
    configuracoes(item) {
        this.router.navigate(['/manter-prestador'], { queryParams: { prestadorUsuarioId: item } });
    }
    abrirModalIgreja() {
        const modal = this.modalCtrl.create({
            component: src_app_pages_igreja_modal_igreja_modal_igreja_page__WEBPACK_IMPORTED_MODULE_13__["ModalIgrejaPage"],
            componentProps: {
                igrejas: this.igrejasDoAdmin
            },
            backdropDismiss: false,
        }).then((modal) => {
            modal.present();
            modal.onWillDismiss().then(resultModal => {
                if (resultModal) {
                    this.formConsultarPrestadorADM.controls['nomeIgreja'].setValue(resultModal.data.nomeIgreja);
                    this.formConsultarPrestadorADM.controls['igrejaId'].setValue(resultModal.data.id);
                }
            });
        });
    }
};
ConsultarPrestadorAdmPage.ctorParameters = () => [
    { type: src_app_providers_prestador_prestador_service__WEBPACK_IMPORTED_MODULE_2__["PrestadorService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: src_app_providers_igreja_igreja_service__WEBPACK_IMPORTED_MODULE_4__["IgrejaService"] },
    { type: src_app_providers_usuario_usuario_service__WEBPACK_IMPORTED_MODULE_3__["UsuarioService"] },
    { type: src_app_helpers_loadingContr__WEBPACK_IMPORTED_MODULE_8__["LoadingContr"] },
    { type: src_app_providers_dominioServico_dominio_servico_service__WEBPACK_IMPORTED_MODULE_9__["DominioServicoService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonContent"])
], ConsultarPrestadorAdmPage.prototype, "ionContent", void 0);
ConsultarPrestadorAdmPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consultar-prestador-adm',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./consultar-prestador-adm.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./consultar-prestador-adm.page.scss */ "./src/app/pages/gerenciarIgreja/manterPrestadores/consultar-prestador-adm/consultar-prestador-adm.page.scss")).default]
    })
], ConsultarPrestadorAdmPage);



/***/ }),

/***/ "./src/app/providers/dominioServico/dominio-servico.service.ts":
/*!*********************************************************************!*\
  !*** ./src/app/providers/dominioServico/dominio-servico.service.ts ***!
  \*********************************************************************/
/*! exports provided: DominioServicoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DominioServicoService", function() { return DominioServicoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_repository_dominioServico_dominio_servico_repository_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/repository/dominioServico/dominio-servico-repository.service */ "./src/app/repository/dominioServico/dominio-servico-repository.service.ts");



let DominioServicoService = class DominioServicoService {
    constructor(dominioServico) {
        this.dominioServico = dominioServico;
    }
    recuperaServicoAutoComplete(ev) {
        return this.dominioServico.recuperaServicoAutoComplete(ev);
    }
    recuperaDominioServico() {
        return this.dominioServico.recuperaDominioServico();
    }
    recuperaDominioServicoAtivo() {
        return this.dominioServico.recuperaDominioServicoAtivo();
    }
    adicionaServico(servico) {
        servico.nomeServico_insensitive = servico.nomeServico.toLowerCase();
        return this.dominioServico.add(servico, null);
    }
    excluirServico(servicoId) {
        return this.dominioServico.delete(servicoId);
    }
};
DominioServicoService.ctorParameters = () => [
    { type: src_app_repository_dominioServico_dominio_servico_repository_service__WEBPACK_IMPORTED_MODULE_2__["DominioServicoRepositoryService"] }
];
DominioServicoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DominioServicoService);



/***/ }),

/***/ "./src/app/providers/igreja/igreja.service.ts":
/*!****************************************************!*\
  !*** ./src/app/providers/igreja/igreja.service.ts ***!
  \****************************************************/
/*! exports provided: IgrejaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgrejaService", function() { return IgrejaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_repository_igreja_igreja_rep_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/repository/igreja/igreja-rep.service */ "./src/app/repository/igreja/igreja-rep.service.ts");



let IgrejaService = class IgrejaService {
    constructor(igrejaRepService) {
        this.igrejaRepService = igrejaRepService;
    }
    RecuperaTodasAsIgrejas() {
        return this.igrejaRepService.RecuperaTodasAsIgrejas();
    }
    RecuperaIgrejaPorIgrejaId(igrejaId) {
        return this.igrejaRepService.RecuperaIgrejaPorIgrejaId(igrejaId);
    }
    RecuperaIgrejaPorAdministrador(usuarioId) {
        return this.igrejaRepService.RecuperaIgrejaPorAdministrador(usuarioId);
    }
    AdicionarNovaIgreja(obj) {
        return this.igrejaRepService.AdicionaNovaIgreja(obj, obj.igrejaId);
    }
    RecuperaIgrejasPorCidade(cidade) {
        return this.igrejaRepService.RecuperaIgrejasPorCidade(cidade);
    }
    RecuperaIgrejasPorEndereco(uf, cidade, bairro) {
        return this.igrejaRepService.RecuperaIgrejasPorEndereco(uf, cidade, bairro);
    }
    RecuperaNomeIgreja(igrejas) {
        return this.igrejaRepService.RecuperaNomeIgreja(igrejas);
    }
};
IgrejaService.ctorParameters = () => [
    { type: src_app_repository_igreja_igreja_rep_service__WEBPACK_IMPORTED_MODULE_2__["IgrejaRepService"] }
];
IgrejaService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IgrejaService);



/***/ }),

/***/ "./src/app/repository/dominioServico/dominio-servico-repository.service.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/repository/dominioServico/dominio-servico-repository.service.ts ***!
  \*********************************************************************************/
/*! exports provided: DominioServicoRepositoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DominioServicoRepositoryService", function() { return DominioServicoRepositoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository-interface/Repository-Base */ "./src/app/repository/repository-interface/Repository-Base.ts");



let DominioServicoRepositoryService = class DominioServicoRepositoryService extends _repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__["BaseRepository"] {
    /**
     *
     */
    constructor() {
        super();
        this.servicoConverter = {
            toFirestore: function (servico) {
                return { servicoId: servico.servicoId,
                    nomeServico: servico.nomeServico };
            }
        };
        this._collectionName = "dominioServico";
    }
    recuperaServicoAutoComplete(query) {
        return new Promise((response, resp) => {
            query = query.toLowerCase();
            const endText = query + '\uf8ff';
            this.db.collection("dominioServico")
                .orderBy("nomeServico_insensitive")
                .limit(10)
                .startAt(query)
                .endAt(endText)
                // .where("nomeServico",">=",query)
                // .where("nomeServico","<=",endText)
                // .startAt(query)
                // .endAt(endText)
                .get()
                .then((result) => {
                let lst = [];
                result.forEach(function (doc) {
                    lst.push({ nomeServico: doc.data().nomeServico, servicoId: doc.id });
                });
                response(lst);
            })
                .catch((err) => {
                resp(err);
            });
        });
    }
    recuperaDominioServico() {
        return new Promise((response, resp) => {
            this.db.collection("dominioServico").orderBy("nomeServico").get()
                .then((result) => {
                let lst = [];
                result.forEach(function (doc) {
                    lst.push({ nomeServico: doc.data().nomeServico, servicoId: doc.id, deletado: doc.data().deletado });
                });
                response(lst);
            });
        });
    }
    recuperaDominioServicoAtivo() {
        return new Promise((response, resp) => {
            this.db.collection("dominioServico")
                .where("deletado", "==", false)
                .orderBy("nomeServico")
                .get()
                .then((result) => {
                let lst = [];
                result.forEach(function (doc) {
                    lst.push({ nomeServico: doc.data().nomeServico, servicoId: doc.id, deletado: doc.data().deletado });
                });
                response(lst);
            });
        });
    }
};
DominioServicoRepositoryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], DominioServicoRepositoryService);



/***/ }),

/***/ "./src/app/repository/igreja/igreja-rep.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/repository/igreja/igreja-rep.service.ts ***!
  \*********************************************************/
/*! exports provided: IgrejaRepService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IgrejaRepService", function() { return IgrejaRepService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../repository-interface/Repository-Base */ "./src/app/repository/repository-interface/Repository-Base.ts");



let IgrejaRepService = class IgrejaRepService extends _repository_interface_Repository_Base__WEBPACK_IMPORTED_MODULE_2__["BaseRepository"] {
    constructor() {
        super();
        this._collectionName = "igreja";
    }
    RecuperaIgrejasPorEndereco(uf, cidade, bairro) {
        return new Promise((resolve, reject) => {
            let query = this.db.collection('igreja')
                .where("uf", "==", uf);
            if (cidade) {
                query = query.where("cidade", "==", cidade);
            }
            if (bairro) {
                query = query.where("bairro", "==", bairro);
            }
            query.get()
                .then((result) => {
                let lst = [];
                result.forEach(function (doc) {
                    lst.push(doc.data());
                });
                resolve(lst);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    AdicionaNovaIgreja(item, id) {
        let idTemp = id ? id : this.db.collection(this._collectionName).doc().id;
        item.id = idTemp;
        item.igrejaId = idTemp;
        return new Promise((resolve, reject) => {
            this.db.collection(this._collectionName)
                .doc(idTemp)
                .set(Object.assign({}, item), { merge: true })
                .then((obj) => {
                resolve(obj);
            })
                .catch((error) => {
                reject(error);
            });
        });
    }
    RecuperaIgrejaPorAdministrador(usuarioId) {
        return new Promise((resolve, reject) => {
            this.db.collection('igreja')
                .where("administradores", "array-contains", usuarioId)
                .get()
                .then((result) => {
                let lst = [];
                result.forEach(function (doc) {
                    lst.push(doc.data());
                });
                resolve(lst);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    RecuperaIgrejasPorCidade(cidade) {
        return this.find({ elemento: "cidade", tipoComparacao: "==", comparacao: cidade });
    }
    RecuperaNomeIgreja(igrejas) {
        // return this.db.collection("igreja").where(firebase.firestore.FieldPath.documentId(),"array-contains",igrejas).get()
        return this.find({ elemento: "id", tipoComparacao: "in", comparacao: igrejas });
    }
    RecuperaTodasAsIgrejas() {
        return new Promise((resolve, reject) => {
            this.db.collection(this._collectionName)
                .get()
                .then((result) => {
                let lst = [];
                result.forEach(function (doc) {
                    lst.push(doc.data());
                });
                resolve(lst);
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
    RecuperaIgrejaPorIgrejaId(igrejaId) {
        return new Promise((resolve, reject) => {
            this.db.collection(this._collectionName).doc(igrejaId)
                .get()
                .then((result) => {
                resolve(result.data());
            })
                .catch((err) => {
                reject(err);
            });
        });
    }
};
IgrejaRepService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], IgrejaRepService);



/***/ })

}]);
//# sourceMappingURL=pages-gerenciarIgreja-manterPrestadores-consultar-prestador-adm-consultar-prestador-adm-module-es2015.js.map
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
	"sap/ui/core/format/DateFormat",
	"sap/m/MessageToast",
	"sap/ui/integration/library",
	"sap/ui/core/date/UI5Date"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("tech.controller.home", {
            onInit: function () {
                

            },
            listCert: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("TargetViewTo", {} );
            },
            onPressWithParameter: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("TargetViewToParameter", { parameter: "test"} );
            },
            listCurs: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("TargetView2", {} );
            },
            formulario: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Targetform", {} );
            },
            evaluaciones: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Targetevaluaciones", {} );
            },
            prueba: function (oEvent) {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("TargetdetallesView", {} );
            }
        });
    });

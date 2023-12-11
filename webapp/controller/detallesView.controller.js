sap.ui.define(
    [
        "sap/ui/core/mvc/Controller"
    ],
    function(Controller) {
      "use strict";
  
      return Controller.extend("tech.controller.detallesView", {
        onInit: function() {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("TargetdetallesView").attachPatternMatched(this._onRouteMatched, this);
        },
        
        _onRouteMatched: function (oEvent) {
                
          var oArguments = oEvent.getParameter(("arguments"));
          var oView = this.getView();
          var num = oArguments.parameter ;
          console.log(num)
          oView.bindElement({path: `listApis>/curso/${num}`});
          console.log(oView)

      }
      });
    }
  );
  
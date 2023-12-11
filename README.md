## Vista Previa:
![image](https://github.com/Freddy4M/certficado/assets/48028307/f15ed02f-e2b0-44fa-a0d2-8b7f5f375647)

![image](https://github.com/Freddy4M/certficado/assets/48028307/ebaccad6-fb32-4378-8ccc-318d91b11a8e)
![image](https://github.com/Freddy4M/certficado/assets/48028307/d2833ac0-ddc1-4e98-b804-bb500fcfc186)
![image](https://github.com/Freddy4M/certficado/assets/48028307/2d350b59-9df9-4512-9d46-4c351c9c1b9b)
![image](https://github.com/Freddy4M/certficado/assets/48028307/f117b5e4-3243-40fa-a2bc-b696e645a24b)

## Creacion del proyecto

![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/c544a5fb-c2b2-4d7c-90b3-a4081fd05cc6)
![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/9baced86-062f-409f-adce-7ef93a8affa7)
![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/fe51c5f7-b133-40b7-bef9-a15972aa2a0d)
![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/507147fb-cf68-46d8-9bdf-2210ad0b138b)
![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/c1d1e150-e6ab-4bf7-a427-ca30a2b89bf4)
![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/74dad4a0-d5fd-455c-8111-9de73aa82764)
![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/200f9cd8-014e-4fca-9abf-f9477263b584)
![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/decec672-4485-47ee-a4cf-9b1719b10a2b)
![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/f61e0f80-c5b3-4fda-b08f-5eb1bdc71ef6)
![image](https://github.com/Freddy4M/proyecto-sap/assets/48028307/b6981b95-c14d-4ebb-a32c-4a879fe09d1d)
Mas informacion :
https://github.com/SAP-samples/teched2022-AD280/tree/main/exercises/ex2/ex2.1

## Nombre de los archivos (vista y controladores).
(Vistas)
```
detallesView.view.xml
evaluaciones.view.xml
form.view.xml
home.view.xml
View2.view.xml
ViewTo.view.xml
```
(controllers)
```
detallesView.controller.js
evaluaciones.controller.js
form.controller.js
home.controller.js
View2.controller.js
ViewTo.controller.js
```

Debes copiar el codigo para cada archivo creado
## detallesView.view.xml.
```
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
  


```
## evaluaciones.view.xml.
```
sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/routing/History"
    ],
    function(Controller, History) {
      "use strict";
  
      return Controller.extend("tech.controller.evaluaciones", {
        onInit: function() {
        },
        _onRouteMatched: function (oEvent) {
			
			alert(oEvent.getParameter("arguments").parameter.split(';'));

		},
		onNavBack: function (oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("TargetViewFrom", true);
			}
		}
			
        
      });
    }
  );

```
## form.view.xml.
```

  sap.ui.define([
    'sap/ui/core/mvc/Controller',
    "sap/ui/core/routing/History",
    'sap/ui/model/json/JSONModel',
    "sap/m/MessageToast",
    "sap/m/MessageBox"
  ], function (Controller, History , JSONModel, MessageToast, MessageBox) {
    "use strict";
  
    return Controller.extend("tech.controller.form", {
      onInit: function () {
        this._wizard = this.byId("CreateProductWizard");
        this._oNavContainer = this.byId("wizardNavContainer");
        this._oWizardContentPage = this.byId("wizardContentPage");
  
        this.model = new JSONModel();
        this.model.setData({
          productNameState: "Error",
          productWeightState: "Error"
        });
        this.getView().setModel(this.model);
        this.model.setProperty("/productType", "Mobile");
        this.model.setProperty("/availabilityType", "In Store");
        this.model.setProperty("/navApiEnabled", true);
        this.model.setProperty("/productVAT", false);
        this.model.setProperty("/measurement", "");
        this._setEmptyValue("/productManufacturer");
        this._setEmptyValue("/productDescription");
        this._setEmptyValue("/size");
        this._setEmptyValue("/productPrice");
        this._setEmptyValue("/manufacturingDate");
        this._setEmptyValue("/discountGroup");
  
      },

      _onRouteMatched: function (oEvent) {
			
        alert(oEvent.getParameter("arguments").parameter.split(';'));
  
      },
      onNavBack: function (oEvent) {
        var oHistory = History.getInstance();
        var sPreviousHash = oHistory.getPreviousHash();
  
        if (sPreviousHash !== undefined) {
          window.history.go(-1);
        } else {
          var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter.navTo("TargetViewFrom", true);
        }
      },
  
      setProductType: function (evt) {
        var productType = evt.getSource().getTitle();
        this.model.setProperty("/productType", productType);
        this.byId("ProductStepChosenType").setText("Chosen product type: " + productType);
        this._wizard.validateStep(this.byId("ProductTypeStep"));
      },
  
      setProductTypeFromSegmented: function (evt) {
        var productType = evt.getParameters().item.getText();
        this.model.setProperty("/productType", productType);
        this._wizard.validateStep(this.byId("ProductTypeStep"));
      },
  
      additionalInfoValidation: function () {
        var name = this.byId("ProductName").getValue();
        var weight = parseInt(this.byId("ProductWeight").getValue());
  
        if (isNaN(weight)) {
          this._wizard.setCurrentStep(this.byId("ProductInfoStep"));
          this.model.setProperty("/productWeightState", "Error");
        } else {
          this.model.setProperty("/productWeightState", "None");
        }
  
        if (name.length < 6) {
          this._wizard.setCurrentStep(this.byId("ProductInfoStep"));
          this.model.setProperty("/productNameState", "Error");
        } else {
          this.model.setProperty("/productNameState", "None");
        }
  
        if (name.length < 6 || isNaN(weight)) {
          this._wizard.invalidateStep(this.byId("ProductInfoStep"));
        } else {
          this._wizard.validateStep(this.byId("ProductInfoStep"));
        }
      },
  
      optionalStepActivation: function () {
        MessageToast.show(
          'This event is fired on activate of Step3.'
        );
      },
  
      optionalStepCompletion: function () {
        MessageToast.show(
          'This event is fired on complete of Step3. You can use it to gather the information, and lock the input data.'
        );
      },
  
      pricingActivate: function () {
        this.model.setProperty("/navApiEnabled", true);
      },
  
      pricingComplete: function () {
        this.model.setProperty("/navApiEnabled", false);
      },
  
      scrollFrom4to2: function () {
        this._wizard.goToStep(this.byId("ProductInfoStep"));
      },
  
      goFrom4to3: function () {
        if (this._wizard.getProgressStep() === this.byId("PricingStep")) {
          this._wizard.previousStep();
        }
      },
  
      goFrom4to5: function () {
        if (this._wizard.getProgressStep() === this.byId("PricingStep")) {
          this._wizard.nextStep();
        }
      },
  
      wizardCompletedHandler: function () {
        this._oNavContainer.to(this.byId("wizardReviewPage"));
      },
  
      backToWizardContent: function () {
        this._oNavContainer.backToPage(this._oWizardContentPage.getId());
      },
  
      editStepOne: function () {
        this._handleNavigationToStep(0);
      },
  
      editStepTwo: function () {
        this._handleNavigationToStep(1);
      },
  
      editStepThree: function () {
        this._handleNavigationToStep(2);
      },
  
      editStepFour: function () {
        this._handleNavigationToStep(3);
      },
  
      _handleNavigationToStep: function (iStepNumber) {
        var fnAfterNavigate = function () {
          this._wizard.goToStep(this._wizard.getSteps()[iStepNumber]);
          this._oNavContainer.detachAfterNavigate(fnAfterNavigate);
        }.bind(this);
  
        this._oNavContainer.attachAfterNavigate(fnAfterNavigate);
        this.backToWizardContent();
      },
  
      _handleMessageBoxOpen: function (sMessage, sMessageBoxType) {
        MessageBox[sMessageBoxType](sMessage, {
          actions: [MessageBox.Action.YES, MessageBox.Action.NO],
          onClose: function (oAction) {
            if (oAction === MessageBox.Action.YES) {
              this._handleNavigationToStep(0);
              this._wizard.discardProgress(this._wizard.getSteps()[0]);
            }
          }.bind(this)
        });
      },
  
      _setEmptyValue: function (sPath) {
        this.model.setProperty(sPath, "n/a");
      },
  
      handleWizardCancel: function () {
        this._handleMessageBoxOpen("¿Estás seguro de que quieres cancelar tu Solicitud?", "warning");
      },
  
      handleWizardSubmit: function () {
        this._handleMessageBoxOpen("¿Estás seguro de que quieres enviar tu Solicitud?", "confirm");
      },
  
      productWeighStateFormatter: function (val) {
        return isNaN(val) ? "Error" : "None";
      },
  
      discardProgress: function () {
        this._wizard.discardProgress(this.byId("ProductTypeStep"));
  
        var clearContent = function (content) {
          for (var i = 0; i < content.length; i++) {
            if (content[i].setValue) {
              content[i].setValue("");
            }
  
            if (content[i].getContent) {
              clearContent(content[i].getContent());
            }
          }
        };
  
        this.model.setProperty("/productWeightState", "Error");
        this.model.setProperty("/productNameState", "Error");
        clearContent(this._wizard.getSteps());
      }
    });
  });
  

```
## home.view.xml.
```
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


```
## View2.view.xml.
```
/*eslint-disable no-console, no-alert */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("tech.controller.View2", {

		//Attarch event
		onInit: function () {
			
		},
		_onRouteMatched: function (oEvent) {
			
			alert(oEvent.getParameter("arguments").parameter.split(';'));

		},
		onNavBack: function (oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("TargetViewFrom", true);
			}
		},
		detalles: function (oEvent) {

			var listcurso =  oEvent.getSource().getBindingContext("listApis").getObject();
			console.log(listcurso);
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("TargetdetallesView", { parameter: listcurso.id} );
		}
		
	});

});

```
## ViewTo.view.xml.
```
/*eslint-disable no-console, no-alert */
sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	'sap/ui/model/json/JSONModel',
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
], function (Controller, History, _JSONModel, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("tech.controller.ViewTo", {

		//Attarch event
		onInit: function () {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("TargetViewToParameter").attachPatternMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function (oEvent) {
			
			alert(oEvent.getParameter("arguments").parameter.split(';'));

		},
		onNavBack: function (oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("TargetViewFrom", true);
			}
		},  onFilterInvoices(oEvent) {
            // build filter array
            const aFilter = [];
            const sQuery = oEvent.getParameter("query");
            if (sQuery) {
                aFilter.push(new Filter("NombCert", FilterOperator.Contains, sQuery));
            }

            // filter binding
            const oList = this.byId("certificado");
            const oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },

        onPress: function (oEvent) {
            MessageToast.show("Pressed on " + oEvent.getSource().getSender());
        },

        print: function (_oEvent) {

            var anchor = document.createElement('a');
            anchor.href = 'https://www.mercaba.org/Narrativa/Tolkien.El%20Se%C3%B1or%20de%20los%20Anillos.La%20Comunidad%20del%20Anillo.pdf';
            anchor.target = '_blank';
            anchor.download = 'archivo.ext';
            anchor.click();

        },
        Desimg: function (_oEvent) {

            const images = document.querySelectorAll('img');
            images.forEach((img, index) => {
                const src = img.src;
                const extension = src.substring(src.lastIndexOf('.') + 1);
                const name = `blog${index + 1}`;

                const link = document.createElement('a');
                link.setAttribute('href', src);
                link.setAttribute('download', `${name}.${extension}`);
                link.style.display = 'none';

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });

        },
        Preview: function (_oEvent) {

            var source = 'https://www.google.es/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png';

            var a = document.createElement('a');

            a.download = true;
            a.target = '_blank';
            a.href = source;

            a.click();

        }
	});

});


```

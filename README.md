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


## Nombre de las vistas:
![image](https://github.com/Freddy4M/certficado/assets/48028307/53ae3449-2e47-4501-9e36-ac3447fbc4ed)

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
## detallesView.controller.js
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
## evaluaciones.controller.js
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
## form.controller.js
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
## home.controller.js
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
## View2.controller.js
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
## ViewTo.controller.js
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


## detallesView.view.xml
```
<mvc:View
	controllerName="tech.controller.detallesView"
	xmlns="sap.ui.webc.main"
	xmlns:mvc="sap.ui.core.mvc"
	xmlns:l="sap.ui.layout"
	height="100%">
	<l:VerticalLayout class="sapUiContentPadding" width="100%">
		<Card width="600px" >
			<List separators="None" >
				<StandardListItem
					description="{listApis>Curso}"
					icon="sap-icon://create-session"
					text="Curso" />

                    <StandardListItem
					description="{listApis>Horas}"
					text="Horas" />
                
                        <StandardListItem
					description="{listApis>Autor}"
					text="Profesor " />
                            <StandardListItem
					description="{listApis>Nivel}"
					text="Nivel" />
                            <StandardListItem
					description="Online"
					text="Modalidad" />
				
			</List>
		</Card>
	</l:VerticalLayout>
</mvc:View>
```
## evaluaciones.view.xml
```

<mvc:View
	xmlns="sap.m"
	xmlns:mvc="sap.ui.core.mvc"
	xmlns:grid="sap.ui.layout.cssgrid"
	xmlns:f="sap.f"
	xmlns:dnd="sap.ui.core.dnd"
	xmlns:dnd-grid="sap.f.dnd"
	controllerName="tech.controller.evaluaciones">
    <Page showNavButton="true" navButtonPress="onNavBack">
	<Panel id="panelForGridList" backgroundDesign="Transparent" >

		<f:GridList
			id="gridList"
			headerText="Evaluaciones"
			items="{path :'listApis>/evaluaciones/'}">

			<f:dragDropConfig>
				<dnd:DragInfo sourceAggregation="items" />
				<dnd-grid:GridDropInfo targetAggregation="items" dropPosition="Between" dropLayout="Horizontal" drop="onDrop" />
			</f:dragDropConfig>

			<f:customLayout>
				<grid:GridBoxLayout boxMinWidth="17rem" />
			</f:customLayout>

			<f:GridListItem
				counter="{counter}"
				highlight="{listApis>Estatus}"
				type="{type}"
				unread="{unread}">
				<VBox height="100%">
					<VBox class="sapUiSmallMargin">
						<layoutData>
							<FlexItemData growFactor="1" shrinkFactor="0" />
						</layoutData>

						<Title text="{listApis>Nombre}" wrapping="true" level="H4"/>
						<Label text="RIF: {listApis>Rif}" wrapping="true" />
						<Label text="Direccion: {listApis>Direcciones}" wrapping="true" />
						
						<Title text="Auditor" wrapping="true" level="H4"/>
						<Label text="Auditor: {listApis>Auditor}" wrapping="true" />
						<Label text="Acotacion: {listApis>Acotacion}" wrapping="true" />
						<Label text="Requisitos: {listApis>Requisitos}" wrapping="true" />
					</VBox>
				</VBox>
			</f:GridListItem>
		</f:GridList>
	</Panel>
    </Page>
</mvc:View>
```
## form.view.xml
```

<mvc:View
		height="100%"
		controllerName="tech.controller.form"
		xmlns:form="sap.ui.layout.form"
		xmlns:core="sap.ui.core"
		xmlns:u="sap.ui.unified"
		xmlns:mvc="sap.ui.core.mvc"
		xmlns="sap.m">
		<NavContainer id="wizardNavContainer">
			<pages>
				<Page
				id="wizardContentPage"
		
                showNavButton="true" navButtonPress="onNavBack">
					<content>
						<Wizard id="CreateProductWizard" class="sapUiResponsivePadding--header sapUiResponsivePadding--content"
								complete="wizardCompletedHandler">
							<WizardStep id="ProductTypeStep"
										title="Solicitud de certificado"
										validated="true">
								<MessageStrip class="sapUiSmallMarginBottom"
										text="Rellene correctamente los items del formulario"
										showIcon="true"/>
								<HBox
										alignItems="Center"
										justifyContent="Center"
										width="100%">
									<SegmentedButton
										width="320px"
										selectionChange="setProductTypeFromSegmented">

									</SegmentedButton>
								</HBox>
							</WizardStep>
							<WizardStep id="ProductInfoStep"
										validated="false"
										title="Informacion de la empresa"
										activate="additionalInfoValidation">
								<MessageStrip class="sapUiSmallMarginBottom"
										text="Validation in the wizard is controlled by calling the validateStep(Step) and invalidateStep(Step) methods "
										showIcon="true"/>
								<Text text="Cras tellus leo, volutpat vitae ullamcorper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien et viverra imperdiet, orci erat porttitor nulla, eget commodo metus nibh nec ipsum. Aliquam lacinia euismod metus, sollicitudin pellentesque purus volutpat eget. Pellentesque egestas erat quis eros convallis mattis. Mauris hendrerit sapien a malesu corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien	corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien	"/>
								<form:SimpleForm
										editable="true"
										layout="ResponsiveGridLayout">
									<Label text="Nombre de la empresa" required="true"/>
									<Input valueStateText="Enter 6 symbols or more"
											valueState="{/productNameState}" id="ProductName" liveChange="additionalInfoValidation"
											placeholder="Enter name with length greater than 6" value="{/productName}"/>
									<Label text="RIF" required="true"/>
									<Input valueStateText="Enter digits"
											valueState="{/productWeightState}" id="ProductWeight"
											liveChange="additionalInfoValidation" type="Number" placeholder="Enter digits"
											value="{/productWeight}"/>
									<Label text="Manufacturer"/>
									
									<Label text="Description"/>
									<TextArea value="{/productDescription}" rows="8"/>
								</form:SimpleForm>
							</WizardStep>
							<WizardStep id="OptionalInfoStep"
										validated="true"
										activate="optionalStepActivation"
										title="Informacion adicional">
								<MessageStrip class="sapUiSmallMarginBottom"
										text="You can validate steps by default with the validated='true' property of the step. The next button is always enabled."
										showIcon="true"/>
								<Text text="Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec ppellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien	corper eu, posuere malesuada nisl. Integer pellentesque leo sit amet dui vehicula, quis ullamcorper est pulvinar. Nam in libero sem. Suspendisse arcu metus, molestie a turpis a, molestie aliquet dui. Donec pulvinar, sapien	"/>
								<form:SimpleForm
										editable="true"
										layout="ResponsiveGridLayout">
									<Label text="Requisitos legales"/>
									<u:FileUploader
											width="100%"
											tooltip="Upload product cover photo to the local server"
											style="Emphasized"
											placeholder="Choose a file for Upload..."/>
									<Label text="Fecha de solicitud"/>
									<DatePicker
											id="DP3"
											displayFormat="short"
											value="{/manufacturingDate}"/>
									<Label text="Availability"/>
									

								</form:SimpleForm>
							</WizardStep>
							<WizardStep id="PricingStep"
										activate="pricingActivate"
										complete="pricingComplete"
										validated="true"
										title="Revision">
								<MessageStrip class="sapUiSmallMarginBottom"
										text="You can use the wizard previousStep() and nextStep() methods to navigate from step to step without validation. Also you can use the GoToStep(step) method to scroll programmatically to previously visited steps."
										showIcon="true"/>
								<form:SimpleForm
										editable="true"
										layout="ResponsiveGridLayout">
									<Label text="Auditores"/>
									<Input value="{/productPrice}"/>
									<Label text=" Factura comercial"/>
									<CheckBox selected="{/productVAT}"/>
								</form:SimpleForm>
							</WizardStep>
						</Wizard>
					</content>
					<footer>
						<OverflowToolbar>
							<ToolbarSpacer/>
							<Button text="Cancelar" press="handleWizardCancel"/>
						</OverflowToolbar>
					</footer>
				</Page>
				<Page id="wizardReviewPage" showHeader="false">
					<content>
						

						<form:SimpleForm
								title="2. informacion adicional"
								minWidth="1024"
								editable="false"
								layout="ResponsiveGridLayout">
							<form:content>
								<Label text="Name"/>
								<Text id="ProductNameChosen" text="{/productName}"/>
						
								<Label text="Manufacturer"/>
								<Text id="ProductManufacturerChosen" text="{/productManufacturer}"/>
								<Label text="Description"/>
								<Text id="ProductDescriptionChosen" text="{/productDescription}"/>
								<Link press="editStepTwo" text="Edit" />
							</form:content>
						</form:SimpleForm>

						<form:SimpleForm
								title="3. informacion adicional"
								minWidth="1024"
								editable="false"
								layout="ResponsiveGridLayout">
							<form:content>
								<Label text="Some text"/>
								<Text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. "/>
								<Label text="Manufacturing Date"/>
								<Text id="ManufacturingDate" text="{/manufacturingDate}"/>
								<Label text="Availability"/>
								<Text id="AvailabilityChosen" text="{/availabilityType}"/>
								<Label text="Size"/>
								<HBox>
									<Text id="Size" text="{/size}"/>
									<Text id="Size2" class="sapUiTinyMarginBegin" text="{/measurement}"/>
								</HBox>
								<Link press="editStepThree" text="Edit" />
							</form:content>
						</form:SimpleForm>

						<form:SimpleForm
								title="4. Revision"
								minWidth="1024"
								editable="false"
								layout="ResponsiveGridLayout">
							<form:content>
								<Label text="Price"/>
								<Text id="ProductPriceChosen" text="{/productPrice}"/>
								<Label text="VAT Included"/>
								<Text id="ProductVATChosen" text="{/productVAT}"/>
								<Link press="editStepFour" text="Edit" />
							</form:content>
						</form:SimpleForm>
					</content>
					<footer>
						<Bar>
							<contentRight>
								<Button text="Enviar" press="handleWizardSubmit"/>
								<Button text="Cancelar" press="handleWizardCancel"/>
							</contentRight>
						</Bar>
					</footer>
				</Page>
			</pages>
		</NavContainer>
</mvc:View>
```
## home.view.xml
```

<mvc:View
	controllerName="tech.controller.home"
	xmlns="sap.m"
	xmlns:mvc="sap.ui.core.mvc"
	xmlns:f="sap.f"
	xmlns:card="sap.f.cards"
	xmlns:core="sap.ui.core"
	xmlns:w="sap.ui.integration.widgets"
	displayBlock="true"
	height="100%">
	<ScrollContainer
		height="100%"
		width="100%"
		vertical="true">


			<f:ShellBar
		title="Certificado Dashboard"
		secondTitle="{/date}"
		homeIcon="{/homeIconUrl}"
		showCopilot="true"
		showSearch="true"
		showNotifications="true"
		showProductSwitcher="true"
		notificationsNumber="2"
		class="sapUiSmallMarginTop sapUiSmallMarginBegin">
	
	</f:ShellBar>

	
		<f:GridContainer id="demoGrid" class="sapUiSmallMargin" columnsChange=".onGridColumnsChange">
			<f:layout>
				<f:GridContainerSettings rowSize="84px" columnSize="84px" gap="8px" />
			</f:layout>
			<f:layoutXS>
				<f:GridContainerSettings rowSize="70px" columnSize="70px" gap="8px" />
			</f:layoutXS>

			<GenericTile
				press="listCert"
				header="Certificados"
				subheader="Listado de certificado, agrupado por tipos">
				<layoutData>
					<f:GridContainerItemLayoutData minRows="2" columns="2" />
				</layoutData>
				<TileContent >
					<ImageContent src="sap-icon://activity-2" />
				</TileContent>
			</GenericTile>
			 

			<GenericTile press="listCurs" header="Cursos" subheader="Mostrar Cursos Disponibles">
				<layoutData>
					<f:GridContainerItemLayoutData minRows="2" columns="2" />
				</layoutData>
				<TileContent>
					<ImageContent src="sap-icon://create-session" />
				</TileContent>
			</GenericTile>

			<f:Card>
				<f:layoutData>
					<f:GridContainerItemLayoutData columns="4" />
				</f:layoutData>
				<f:header>
			<card:Header title="Upcoming Avtivities" subtitle="For Today" />
		</f:header>
				<f:content>
					
			<IllustratedMessage illustrationType="sapIllus-NoActivities">
				<additionalContent>
					<Button text="Add Activity" />
				</additionalContent>
			</IllustratedMessage>
		
				</f:content>
			</f:Card>
			
			
			

			<GenericTile press="formulario" header="Solicitud de Certificados" subheader="Formulario para completar la solicitud">
				<layoutData>
					<f:GridContainerItemLayoutData minRows="2" columns="2" />
				</layoutData>
				<TileContent>
					<ImageContent src="sap-icon://multi-select" />
				</TileContent>
			</GenericTile>

			<GenericTile press="evaluaciones" header="Evaluaciones" subheader="Mostrar listados para evaluar">
				<layoutData>
					<f:GridContainerItemLayoutData minRows="2" columns="2" />
				</layoutData>
				<TileContent>
					<ImageContent src="sap-icon://vertical-bullet-chart" />
				</TileContent>
			</GenericTile>
 
		</f:GridContainer>
	</ScrollContainer>
</mvc:View>



```
## View2.view.xml
```

<mvc:View
	controllerName="tech.controller.View2"
	xmlns="sap.m"
	xmlns:mvc="sap.ui.core.mvc"
	xmlns:f="sap.f"
	xmlns:cards="sap.f.cards"
	xmlns:l="sap.ui.layout"
	height="100%">
	<Page title="Cursos Disponibles" showNavButton="true" navButtonPress="onNavBack" class="sapUiResponsiveContentPadding">
		<Carousel
			height="auto"
			pages="{
				path: 'listApis>/curso/'
			}">
			<customLayout>
				<CarouselLayout visiblePagesCount="2" />
			</customLayout>
			<ScrollContainer 
				vertical="false" 
				horizontal="false" 
				class="sapUiContentPadding">

				<f:Card>
					<f:header>
						<cards:Header
							title="{listApis>Curso}"
							subtitle="{listApis>Autor}"
							iconSrc="sap-icon://create-session"
							iconDisplayShape="Square" />
					</f:header>
					<f:content>
						<l:VerticalLayout class="sapUiContentPadding" width="100%">
							<l:BlockLayout>
								<l:BlockLayoutRow>
									<l:BlockLayoutCell title="{listApis>Curso}" width="1">
										<HBox class="sapUiTinyMarginBottom">
											<Label text="Descripcion" />
										</HBox>
										<HBox class="sapUiSmallMarginBottom">
											<Text text="{listApis>Descripcion}" />
										</HBox>
										<HBox class="sapUiTinyMarginBottom">
											<Label text="Nivel" />
										</HBox>
										<HBox class="sapUiSmallMarginBottom">
											<Text text="{listApis>Nivel}" />
										</HBox>
										<HBox class="sapUiTinyMarginBottom">
											<Label text="Fecha" />
										</HBox>
										<HBox class="sapUiSmallMarginBottom">
											<Text text="{listApis>fechaCurso}" />
										</HBox>
										<Button text="Detalles" press="detalles"></Button>
									</l:BlockLayoutCell>

									
								</l:BlockLayoutRow>
							</l:BlockLayout>
						</l:VerticalLayout>
					</f:content>
				</f:Card>
			</ScrollContainer>
		</Carousel>
	</Page>
</mvc:View>
```
## ViewTo.view.xml
```
<mvc:View
    xmlns:l="sap.ui.layout"
    xmlns:mvc="sap.ui.core.mvc"
    xmlns="sap.m"
    controllerName="tech.controller.ViewTo"
>
    <Page   showNavButton="true" navButtonPress="onNavBack">
        <List
            id="certificado"
            items="{ path : 'listApis>/certificado/', sorter : {  path : 'Grupo',  group : true  } }"
            headerText="Lista de certificados"
            growing="true"
            growingThreshold="4"
            growingScrollToLoad="false"
        >
            <headerToolbar>
                <Toolbar>
                    <Title text="{i18n>Listas de Certificados}" />
                    <ToolbarSpacer />
                    <SearchField
                        width="50%"
                        search=".onFilterInvoices"
                    />
                </Toolbar>
            </headerToolbar>
            
            
            <FeedListItem
                sender="{listApis>NombCert}"
                icon="sap-icon://create-session"
                senderPress="onPress"
                iconPress="onPress"
                info=""
                timestamp="{listApis>FechaCert}"
                text="{listApis>Descripcion}"
                convertLinksToAnchorTags="All"
                actions="print"
                type="Navigation"
                        press=".onListItemPressed"
            >
                <FeedListItemAction
                    text="print"
                    icon="sap-icon://print"
                    press="print"
                    
                />
            </FeedListItem>
        </List>
     <content />
    </Page>
</mvc:View>

```

## Creacion del archivo Manifest.json
manifest.json
```
{
  "_version": "1.59.0",
  "sap.app": {
    "id": "tech",
    "type": "application",
    "i18n": "i18n/i18n.properties",
    "applicationVersion": {
      "version": "0.0.1"
    },
    "title": "{{appTitle}}",
    "description": "{{appDescription}}",
    "resources": "resources.json",
    "sourceTemplate": {
      "id": "@sap/generator-fiori:basic",
      "version": "1.11.5",
      "toolsId": "7ebfcd5b-8f97-4e1e-888d-f33ff74f48bf"
    },
    "crossNavigation": {
      "inbounds": {
        "dev-display": {
          "semanticObject": "dev",
          "action": "display",
          "title": "{{flpTitle}}",
          "signature": {
            "parameters": {},
            "additionalParameters": "allowed"
          }
        }
      }
    }
  },
  "sap.ui": {
    "technology": "UI5",
    "icons": {
      "icon": "",
      "favIcon": "",
      "phone": "",
      "phone@2": "",
      "tablet": "",
      "tablet@2": ""
    },
    "deviceTypes": {
      "desktop": true,
      "tablet": true,
      "phone": true
    }
  },
  "sap.ui5": {
    "flexEnabled": false,
    "dependencies": {
      "minUI5Version": "1.120.1",
      "libs": {
        "sap.m": {},
        "sap.ui.core": {},
        "sap.f": {},
        "sap.suite.ui.generic.template": {},
        "sap.ui.comp": {},
        "sap.ui.generic.app": {},
        "sap.ui.table": {},
        "sap.ushell": {}
      }
    },
    "contentDensities": {
      "compact": true,
      "cozy": true
    },
    "models": {
      "i18n": {
        "type": "sap.ui.model.resource.ResourceModel",
        "settings": {
          "bundleName": "tech.i18n.i18n"
        }
      },
      "listApis":{
        "type": "sap.ui.model.json.JSONModel",
        "uri": "https://48823328-9e21-4a40-8cdb-0abf3a63aec1.mock.pstmn.io/v1/data"
      }
    },
    "resources": {
      "css": [
        {
          "uri": "css/style.css"
        }
      ]
    },
    "routing": {
      "config": {
        "routerClass": "sap.m.routing.Router",
        "viewType": "XML",
        "async": true,
        "viewPath": "tech.view",
        "controlAggregation": "pages",
        "controlId": "app",
        "clearControlAggregation": false
      },
      "routes": [
        {
          "name": "Routehome",
          "pattern": ":?query:",
          "target": [
            "Targethome"
          ]
        },
        {
					"name": "TargetViewTo",
					"pattern": "RouteViewTo",
					"titleTarget": "",
					"greedy": false,
					"target": [
						"TargetViewTo"
					]
				},
        {
					"name": "TargetViewToParameter",
					"pattern": "RouteViewTo/{parameter}",
					"titleTarget": "",
					"greedy": false,
					"target": [
						"TargetViewToParameter"
					]
				},
        {
					"name": "TargetView2",
					"pattern": "RouteView2",
					"titleTarget": "",
					"greedy": false,
					"target": [
						"TargetView2"
					]
				},
        {
					"name": "Targetform",
					"pattern": "Routeform",
					"titleTarget": "",
					"greedy": false,
					"target": [
						"Targetform"
					]
				},
        {
					"name": "Targetevaluaciones",
					"pattern": "Routeevaluaciones",
					"titleTarget": "",
					"greedy": false,
					"target": [
						"Targetevaluaciones"
					]
				},
        {
					"name": "TargetdetallesView",
					"pattern": "RoutedetallesView/{parameter}",
					"titleTarget": "",
					"greedy": false,
					"target": [
						"TargetdetallesView"
					]
				}
      ],
      "targets": {
        "Targethome": {
          "viewType": "XML",
          "transition": "slide",
          "clearControlAggregation": false,
          "viewId": "home",
          "viewName": "home"
        },
        "TargetViewTo": {
					"viewType": "XML",
					"viewName": "ViewTo"
				},
        "TargetViewToParameter": {
					"viewType": "XML",
					"transition": "slide",
					"clearControlAggregation": false,
					"viewName": "ViewTo"
				},
        "TargetView2": {
					"viewType": "XML",
					"viewName": "View2"
				},
        "Targetform": {
          "viewType": "XML",
					"viewName": "form"
        },
        "Targetevaluaciones":{
          "viewType": "XML",
					"viewName": "evaluaciones"
        },
        "TargetdetallesView":{
          "viewType": "XML",
					"transition": "slide",
					"clearControlAggregation": false,
					"viewName": "detallesView"
        }

      }
    },
    "rootView": {
      "viewName": "tech.view.App",
      "type": "XML",
      "async": true,
      "id": "App"
    }
  },
  "sap.cloud": {
    "public": true,
    "service": "tech"
  }
}

```

Component.js
```
/**
 * eslint-disable @sap/ui5-jsdocs/no-jsdoc
 */

sap.ui.define([
        "sap/ui/core/UIComponent",
        "sap/ui/Device",
        "tech/model/models"
    ],
    function (UIComponent, Device, models) {
        "use strict";

        return UIComponent.extend("tech.Component", {
            metadata: {
                manifest: "json"
            },

            /**
             * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
             * @public
             * @override
             */
            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                // set the device model
                this.setModel(models.createDeviceModel(), "device");
            }
        });
    }
);
```

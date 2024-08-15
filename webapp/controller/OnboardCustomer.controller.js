sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast" 
],
function (Controller,JSONModel,MessageToast) {
    "use strict";

    return Controller.extend("com.lead.leadgenerationm.controller.OnboardCustomer", {
        onInit: function () {

            var model = new JSONModel()
            this.getView().setModel(model,'onboardCustomer')
    

        },
        backToDashboard:function(){
            var backToDashboard = this.getOwnerComponent().getRouter();
            backToDashboard.navTo("RouteDashboard")
        },

        OnCancelPress:function(){
            var customerData = {
                "name":"",
                "email":"",
                "phoneNumber":"",
                "city":""
              };
              this.getView().getModel("onboardCustomer").setData(customerData);
        },

        
        
  



        // Onboarding the CUSTOMER -->
        
        OnboardCustomer: function () {
            var custPayload = this.getView().getModel("onboardCustomer").getData();
            var oForm = this.getView().byId("SimpleFormChange354");
            var oBindings = oForm.getBinding("items");
    
            var payload = {
              "Input": {
                "name":custPayload.name,
                "email":custPayload.email,
                "phoneNumber":custPayload.phoneNumber,
                "city":custPayload.city,
     
              }
            };
            let oModel = this.getOwnerComponent().getModel();
                this.getView().setModel(oModel)
                    let oBindList = oModel.bindList("/CreateCustomer");
    
                     oBindList.create(payload);
                    //  this.onCancel()
                    //  oBindings.refresh();





           },

        
        
    
        
                
        
        
        


    });
});

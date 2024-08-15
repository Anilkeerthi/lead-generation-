sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/odata/v4/ODataModel",
    "sap/m/MessageToast"
],
function (Controller,ODataModel, MessageToast) {
    "use strict";

    return Controller.extend("com.lead.leadgenerationm.controller.ExistingCustomer", {
        onInit: function () {

        },
        backToDashboard:function(){
            var backToDashboard = this.getOwnerComponent().getRouter();
            backToDashboard.navTo("RouteDashboard")
        },
        // OnSearchCustomer: function () {
        //     // var custPayload = this.getView().getModel("onboardCustomer").getData();
        //     var oForm = this.getView().byId("existingCustomerTable");
        //     var oCustomer = this.getView().byId("searchCustomer");
        //     var oBindings = oForm.getBinding("items");
    
        //     var payload = {
        //       "Input": {
        //         "name":custPayload.name,
        //         "email":custPayload.email,
        //         "phoneNumber":custPayload.phoneNumber,
        //         "city":custPayload.city,
     
        //       }
        //     };
        //     let oModel = this.getOwnerComponent().getModel();
        //         this.getView().setModel(oModel)
        //             let oBindList = oModel.bindList("/CreateCustomer");
    
        //              oBindList.create(payload);
        //              this.onCancel()
        //              oBindings.refresh();


                     
        //   }


        OnSearchCustomer: function () {

            // Capture the data from the form and the search field
        
            var oForm = this.getView().byId("existingCustomerTable");
        
            var oCustomer = this.getView().byId("searchCustomer").getValue(); // Assume it's a SearchField or similar input
        
            // Get the model associated with the component
        
            let oModel = this.getOwnerComponent().getModel();
         
            // Construct the payload for the customer creation
        
            var payload = {
        
                 
        
                    "name": oCustomer,  // Assuming oCustomer value corresponds to the name
        
                   
        
                
        
            };
         
            // Bind the list to the `/CreateCustomer` entity set
        
            let oBindList = oModel.bindList("/SearchLeadsAndCustomers");
         
            // Create the customer entry with the payload
        
            oBindList.create(payload);
         
            //Refresh the binding to update the UI
        
            var oBindings = oForm.getBinding("items");
        
            oBindings.refresh();
         
            //Optional: Close the dialog or reset the form if needed
        
            // this.onCancel();
        
        },
        
    
        
        
        
         
    });
});

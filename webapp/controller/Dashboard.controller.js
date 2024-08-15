sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.lead.leadgenerationm.controller.Dashboard", {
        onInit: function () {

        },
        onPressExistingCustomer:function(){
            var lead = this.getOwnerComponent().getRouter();
            lead.navTo("RouteExistingCustomer")    
        },
        onPressOnBoardCustomer:function(){
            var customer = this.getOwnerComponent().getRouter();
            customer.navTo("RouteOnboardCustomer")
        },
        onPressExistingLead:function(){
            var  existingLead= this.getOwnerComponent().getRouter();
            existingLead.navTo("RouteExistingLeads")
        },
        onPressCreateLead:function(){
            var createLead= this.getOwnerComponent().getRouter();
            createLead.navTo("RouteCreateLead")
        },
    });
});

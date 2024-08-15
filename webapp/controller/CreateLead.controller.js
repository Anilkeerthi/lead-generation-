sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.lead.leadgenerationm.controller.CreateLead", {
        onInit: function () {

        },
        backToDashboard:function(){
            var backToDashboard = this.getOwnerComponent().getRouter();
            backToDashboard.navTo("RouteDashboard")
        }
    });
});

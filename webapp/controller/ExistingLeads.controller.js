sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("com.lead.leadgenerationm.controller.ExistingLeads", {
            onInit: function () {

            },
            backToDashboard: function () {
                var backToDashboard = this.getOwnerComponent().getRouter();
                backToDashboard.navTo("RouteDashboard")
            },
            // OnSearchLeads: function (oEvent) {

            //     // Get the SearchField control
            //     var oSearchField = oEvent.getSource();

            //     // Get the current value entered by the user
            //     var sValue = oSearchField.getValue();
            //     let oModel = this.getOwnerComponent().getModel();

            //     var payload = {
            //         "title": sValue
            //     };

            //     // Bind the list to the `/CreateCustomer` entity set
            //     let oBindList = oModel.bindList("/SearchLeadsByTitle");
            //     oBindList.create(payload);

            // },

            // OnSearchLeads: function (oEvent) {
            //     // Get the SearchField control
            //     var oSearchField = oEvent.getSource();
            
            //     // Get the current value entered by the user
            //     var sValue = oSearchField.getValue();
            //     let oModel = this.getOwnerComponent().getModel();
            
            //     // Prepare the payload for the action
            //     var payload = {
            //         title: sValue
            //     };
            
            //     // Bind a list to the action (this is unconventional for actions)
            //     let oBindList = oModel.bindList("/SearchLeadsByTitle");
            
            //     // Create a new entry in the bound list with the payload
            //     oBindList.create(payload, {
            //         success: function (oData) {
            //             // Assuming the response data is a list of leads
            //             let oLeadsModel = new sap.ui.model.json.JSONModel(oData);
            //             let oTable = this.byId("existingLeadsTable"); // Assume your table ID is 'leadsTable'
            //             oTable.setModel(oLeadsModel);
            
            //             // Bind the items aggregation to the model
            //             oTable.bindItems({
            //                 path: "/", // Bind to the root of the JSONModel
            //                 template: this.byId("leadTemplate") // Assume you have an item template with ID 'leadTemplate'
            //             });
            
            //             sap.m.MessageToast.show("Search successful!");
            //         }.bind(this),
            //         error: function (oError) {
            //             sap.m.MessageToast.show("Search failed. Please try again.");
            //         }
            //     });
            // },

            onSearchLeads: async function(oEvent) {

                const sSearchTerm = oEvent.getParameter("value").toLowerCase(); // Make search case-insensitive
               
                // Call your backend service with the search term
              
                const searchResults = await this._searchLeadsByTitle(SearchTerm);
               
                // Update the table binding with the filtered results
              
                const oTable = this.byId("existingLeadsTable");
              
                const oBinding = oTable.getBinding("items");
              
                oBinding.filter(new sap.ui.model.Filter("title", sap.ui.model.FilterOperator.Contains, sSearchTerm));
              
              },
               
              _searchLeadsByTitle: async function(searchTerm) {
              
                // Replace with your actual call to the backend service
              
                const response = await fetch("/your/backend/api/endpoint?title=" + searchTerm);
                const data = await response.json();
                return data;
              
              }
               
            

        });
    });

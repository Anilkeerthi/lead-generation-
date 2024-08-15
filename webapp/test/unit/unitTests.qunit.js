/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comlead/lead_generation_m/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});

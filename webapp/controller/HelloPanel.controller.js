sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/core/Fragment"
], function (Controller, MessageToast, Fragment) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.HelloPanel", {
        onShowHello: function () {
            // 读取 i18n 模型中的消息
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty(("/recipient/name"))
            var sMsg = oBundle.getText("helloMsg", [sRecipient])

            // 展示消息
            MessageToast.show(sMsg);
        },
        onOpenDialog: function () {
            // 懒创建对话框
            if (!this.pDiaglog) {
                this.pDialog = this.loadFragment({
                    name: "sap.ui.demo.walkthrough.view.HelloDialog"
                });
                this.pDialog.then(function (oDialog) {
                    oDialog.open();
                })
            }
        },
        onCloseDialog: function () {
            // note: We don't need to chain to the pDialog promise, since this event-handler
            // is only called from within the loaded dialog itself.
            this.byId("helloDialog").close();
            // this.pDialog.then(function (oDialog) {
            //     oDialog.destroy();
            // })
        }
    })
})
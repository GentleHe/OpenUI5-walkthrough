sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
], function (Controller, MessageToast, JSONModel, ResourceModel) {
    "use strict"

    return Controller.extend("sap.ui.demo.walkthrough.controller.App", {

        onInit: function () {
            var oData = {
                recipient: {
                    name: "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);

            // 在视图中设置 i18n 模型
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
            });
            this.getView().setModel(i18nModel, "i18n")
        },

        onShowHello: function () {
            // 读取 i18n 模型中的消息
            var oBundle = this.getView().getModel("i18n").getResourceBundle();
            var sRecipient = this.getView().getModel().getProperty(("/recipient/name"))
            var sMsg = oBundle.getText("helloMsg", [sRecipient])

            // 展示消息
            MessageToast.show(sMsg);
        }
    });
})
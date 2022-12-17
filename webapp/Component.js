sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata: {
            "interface": ["sap.ui.core.IAsyncContentCreation"],
            "rootView": {
                "viewName": "sap.ui.demo.walkthrough.view.App",
                "type": "XML",
                /*"async": true, // 通过 sap.ui.core.IAsyncContentCreation 接口直接设置*/
                "id": "app"
            }
        },

        init: function () {
            // 直接调用 parent 的 init 方法
            UIComponent.prototype.init.apply(this, arguments);

            // 设置数据模型
            var oData = {
                recipient: {
                    name: "World"
                }
            };
            var oModel = new JSONModel(oData);
            this.setModel(oModel);

            // 设置 i18n 模型
            var i18nModel = new ResourceModel({
                bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
            });
            this.setModel(i18nModel, "i18n");
        }
    })
});
sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
], function (UIComponent, JSONModel, ResourceModel) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
        metadata: {
            interface: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
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
        }
    })
});
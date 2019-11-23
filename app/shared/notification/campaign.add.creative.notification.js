var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
var CampaignAddCreativeNotification = /** @class */ (function (_super) {
    __extends(CampaignAddCreativeNotification, _super);
    function CampaignAddCreativeNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CampaignAddCreativeNotification.prototype.render = function () {
        return (React.createElement("section", null,
            this.props.MessageUpload == "OK" ? React.createElement("div", { className: "actionMessage" }, "You successfully upload the creative! ")
                : "",
            this.props.MessageUploadError == "Request failed with status code 500" ? React.createElement("div", { className: "actionMessage" }, "Server response with the code 500. Please try again later. ")
                : ""));
    };
    return CampaignAddCreativeNotification;
}(React.Component));
export { CampaignAddCreativeNotification };
//# sourceMappingURL=campaign.add.creative.notification.js.map
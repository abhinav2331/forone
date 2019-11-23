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
var CampaignRevenueNotification = /** @class */ (function (_super) {
    __extends(CampaignRevenueNotification, _super);
    function CampaignRevenueNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CampaignRevenueNotification.prototype.render = function () {
        return (React.createElement("section", null,
            this.props.CampaignRevenueCreateMessage == "OK" ?
                React.createElement("div", { className: "actionMessage" }, "You successfully Created Revenue! ")
                : "",
            this.props.CampaignRevenueCreateErrorMessage == "Request failed with status code 400" ?
                React.createElement("div", { className: "actionMessage" }, "The server responded with a status of 400. Please try again later.")
                : "",
            this.props.CampaignRevenueEditMessage == "OK" ?
                React.createElement("div", { className: "actionMessage" }, "You successfully Edited Revenue! ")
                : "",
            this.props.CampaignRevenueEditErrorMessage == "Request failed with status code 400" ?
                React.createElement("div", { className: "actionMessage" }, "The server responded with a status of 400. Please try again later.")
                : ""));
    };
    return CampaignRevenueNotification;
}(React.Component));
export { CampaignRevenueNotification };
//# sourceMappingURL=campaign.revenue.notification.js.map
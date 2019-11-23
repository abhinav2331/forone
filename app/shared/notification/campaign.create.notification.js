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
var CampaignCreateNotification = /** @class */ (function (_super) {
    __extends(CampaignCreateNotification, _super);
    function CampaignCreateNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CampaignCreateNotification.prototype.render = function () {
        return (React.createElement("section", null, this.props.Message == "OK" ?
            React.createElement("div", { className: "actionMessage" }, " You successfully Created Campaign! ")
            : ""));
    };
    return CampaignCreateNotification;
}(React.Component));
export { CampaignCreateNotification };
//# sourceMappingURL=campaign.create.notification.js.map
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
var AffiliateEditNotification = /** @class */ (function (_super) {
    __extends(AffiliateEditNotification, _super);
    function AffiliateEditNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AffiliateEditNotification.prototype.render = function () {
        return (React.createElement("section", null,
            this.props.Message == "OK" ?
                React.createElement("div", { className: "actionMessage" }, "You successfully Edit Affiliate! ")
                : "",
            this.props.Error == "Request failed with status code 400" ?
                React.createElement("div", { className: "actionMessage" }, "The server responded with a status of 400. Please try again later.")
                : ""));
    };
    return AffiliateEditNotification;
}(React.Component));
export { AffiliateEditNotification };
//# sourceMappingURL=affiliate.edit.notification.js.map
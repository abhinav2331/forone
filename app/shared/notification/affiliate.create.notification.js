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
var AffiliateCreateNotification = /** @class */ (function (_super) {
    __extends(AffiliateCreateNotification, _super);
    function AffiliateCreateNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AffiliateCreateNotification.prototype.render = function () {
        return (React.createElement("section", null,
            this.props.Message == "OK" ?
                React.createElement("div", { className: "actionMessage" }, "You successfully created Affiliate!")
                : "",
            this.props.Error == "Request failed with status code 400" ?
                React.createElement("div", { className: "actionMessage" }, "The server responded with a status of 400. Please try again later.")
                : "",
            this.props.MessageRoiCreate == "OK" ?
                React.createElement("div", { className: "actionMessage" }, "You successfully created Target!")
                : "",
            this.props.ErrorRoiCreate == "Request failed with status code 500" ?
                React.createElement("div", { className: "actionMessage" }, "The server responded with a status of 500. Please try again later.")
                : "",
            this.props.MessageRoiEdit == "OK" ?
                React.createElement("div", { className: "actionMessage" }, "You successfully edit Target!")
                : "",
            this.props.ErrorRoiEdit == "Request failed with status code 400" ?
                React.createElement("div", { className: "actionMessage" }, "The server responded with a status of 400. Please try again later.")
                : ""));
    };
    return AffiliateCreateNotification;
}(React.Component));
export { AffiliateCreateNotification };
//# sourceMappingURL=affiliate.create.notification.js.map
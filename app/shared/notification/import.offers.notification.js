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
var NotificationMessage = /** @class */ (function (_super) {
    __extends(NotificationMessage, _super);
    function NotificationMessage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NotificationMessage.prototype.render = function () {
        return (React.createElement("section", null,
            this.props.Message == "OK" ?
                React.createElement("div", { className: "actionMessage" }, "You successfully Imported Offers. ")
                : "",
            this.props.Status == "400" ?
                React.createElement("div", { className: "actionMessage" }, "Campaign already exist. Please Try with another! ")
                : "",
            this.props.Error == "Request failed with status code 500" ?
                React.createElement("div", { className: "actionMessage" }, "This is some Internal Server Error! Please try again later.")
                : ""));
    };
    return NotificationMessage;
}(React.Component));
export { NotificationMessage };
//# sourceMappingURL=import.offers.notification.js.map
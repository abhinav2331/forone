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
var UserNotification = /** @class */ (function (_super) {
    __extends(UserNotification, _super);
    function UserNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UserNotification.prototype.render = function () {
        return (React.createElement("section", null,
            this.props.UserCreateMessage == "OK" ?
                React.createElement("div", { className: "actionMessage" }, "You successfully Created User! ")
                : "",
            this.props.UserEditMessage == "OK" ?
                React.createElement("div", { className: "actionMessage" }, "You successfully Edit User! ")
                : "",
            this.props.UserEditErrorMessage == "Request failed with status code 400" ?
                React.createElement("div", { className: "actionMessage" }, "The server responded with a status of 400. Please try again later.")
                : ""));
    };
    return UserNotification;
}(React.Component));
export { UserNotification };
//# sourceMappingURL=users.notification.js.map
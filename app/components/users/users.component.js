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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { UserNotification } from '../../shared/notification/users.notification';
import { UsersEdit } from './user/user.edit';
import { Button } from 'reactstrap';
var UsersList = /** @class */ (function (_super) {
    __extends(UsersList, _super);
    function UsersList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UsersList.prototype.componentDidMount = function () {
        this.props.usersstore.getUsers();
    };
    UsersList.prototype.render = function () {
        return (React.createElement("section", null,
            React.createElement(UserNotification, { UserCreateMessage: this.props.usersstore.UserCreateResponse.statusText, IsNotifyUserCreate: this.props.usersstore.IsNotifyUserCreate }),
            React.createElement(UserNotification, { UserEditMessage: this.props.usersstore.UsereditResponse.statusText, IsNotifyUserEdit: this.props.usersstore.IsNotifyUserEdit }),
            React.createElement(UserNotification, { UserEditMessage: this.props.usersstore.UsereditResponse.statusText, IsNotifyUserEditError: this.props.usersstore.IsNotifyUserEditError }),
            React.createElement("div", { style: { marginBottom: "10px" } },
                React.createElement(Button, { type: "button", onClick: this.props.usersstore.showCreateUserModal, className: "btn btn-success", style: { marginRight: '10px' } }, "Create User")),
            React.createElement("div", { className: "table-responsive" }, this.props.usersstore.Userloading ? React.createElement("div", { className: "loaderImg" }) : React.createElement(BootstrapTable, { data: this.props.usersstore.Users, pagination: true, containerStyle: { width: '100%' }, options: { noDataText: 'No data found in Campaign Table!' }, striped: true, hover: true, responsive: true },
                React.createElement(TableHeaderColumn, { width: '120px', dataField: "UserId", isKey: true }, "UserId"),
                React.createElement(TableHeaderColumn, { dataField: "UserName" }, "User Name"),
                React.createElement(TableHeaderColumn, { dataField: "EmailAddress" }, "Email Address"),
                React.createElement(TableHeaderColumn, { dataField: "FirstName" }, "First Name"),
                React.createElement(TableHeaderColumn, { dataField: "LastName" }, "Last Name"),
                React.createElement(TableHeaderColumn, { dataField: "button", dataFormat: this.props.usersstore.buttonFunction.bind(this) }, "Action"))),
            React.createElement("section", null,
                React.createElement(UsersEdit, null))));
    };
    UsersList = __decorate([
        inject('usersstore'),
        observer
    ], UsersList);
    return UsersList;
}(React.Component));
export { UsersList };
//# sourceMappingURL=users.component.js.map
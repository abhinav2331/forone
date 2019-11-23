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
/// <reference path="../../../../typings/index.d.ts" />
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { InputNormal } from '../../../shared/formelement/input.normal';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
function onAfterSaveCell(row, cellName, cellValue) {
    //alert(`Save cell ${cellName} with value ${cellValue}`);
    var rowStr = '';
    for (var prop in row) {
        rowStr += prop + ': ' + row[prop] + '\n';
    }
    //alert('Thw whole row :\n' + rowStr);   
}
function onBeforeSaveCell(row, cellName, cellValue) {
    // You can do any validation on here for editing value,
    // return false for reject the editing
    return true;
}
var cellEditProp = {
    mode: 'click',
    blurToSave: true,
    beforeSaveCell: onBeforeSaveCell,
    afterSaveCell: onAfterSaveCell // a hook for after saving cell
};
var UsersCreate = /** @class */ (function (_super) {
    __extends(UsersCreate, _super);
    function UsersCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UsersCreate.prototype.render = function () {
        var _this = this;
        return (React.createElement("section", null,
            React.createElement(Modal, { isOpen: this.props.usersstore.UserCreateModal, toggle: this.props.usersstore.toggleUserCreateModal },
                React.createElement(ModalHeader, { toggle: this.props.usersstore.toggleUserCreateModal }, "User Create Modal"),
                React.createElement(ModalBody, null,
                    React.createElement("form", { onSubmit: this.props.usersstore.handleUserCreateSubmit },
                        React.createElement("div", { className: "form_list row" },
                            React.createElement("ul", null,
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "User Name"),
                                        React.createElement(InputNormal, { inputType: 'text', name: 'UserName', controlFunc: this.props.usersstore.handleNormalChange, placeholder: 'User Name' }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Email Address"),
                                        React.createElement(InputNormal, { inputType: 'email', name: 'EmailAddress', controlFunc: this.props.usersstore.handleNormalChange, placeholder: 'Email Address' }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "First Name"),
                                        React.createElement(InputNormal, { inputType: 'text', name: 'FirstName', controlFunc: this.props.usersstore.handleNormalChange, placeholder: 'First Name' }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Last Name"),
                                        React.createElement(InputNormal, { inputType: 'text', name: 'LastName', controlFunc: this.props.usersstore.handleNormalChange, placeholder: 'Last Name' }))),
                                React.createElement("li", { className: "col-md-12 clearfix" },
                                    React.createElement("div", { className: "form_label" }, "Claims:"),
                                    React.createElement("div", { className: "row", style: { marginTop: "10px" } }, this.props.usersstore.NewUserClaims.map(function (Claim, index) {
                                        return (React.createElement("div", { className: "col-md-4", key: index },
                                            React.createElement("div", { className: "form-check" },
                                                React.createElement("label", { className: "form-check-label" },
                                                    React.createElement("input", { className: "form-check-input", name: "AddClaim", checked: Claim.AddClaim, type: "checkbox", onChange: function () { return _this.props.usersstore.handleCheckbox(index); } }),
                                                    " ",
                                                    Claim.ClaimValue,
                                                    React.createElement("span", { className: "form-check-sign" },
                                                        React.createElement("span", { className: "check" }))))));
                                    }))))),
                        React.createElement("div", { className: "divider" }),
                        React.createElement("button", { type: "submit", style: { marginLeft: '10px' }, className: "btn btn-success pull-right" }, "Save changes"),
                        React.createElement("button", { type: "button", className: "btn btn-info pull-right", onClick: this.props.usersstore.toggleUserCreateModal }, "Close"))),
                React.createElement(ModalFooter, null))));
    };
    UsersCreate = __decorate([
        inject('usersstore'),
        observer
    ], UsersCreate);
    return UsersCreate;
}(React.Component));
export { UsersCreate };
//# sourceMappingURL=user.create.js.map
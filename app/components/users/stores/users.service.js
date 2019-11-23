var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/// <reference path="../../../../typings/index.d.ts" />
import * as React from 'react';
import { extendObservable, action } from "mobx";
import { get, post } from '../../../shared/api.service';
var UsersStore = /** @class */ (function () {
    function UsersStore() {
        var _this = this;
        extendObservable(this, {
            Users: [],
            Userloading: false,
            UserEditModal: false,
            UserCreateModal: false,
            UsersObj: {},
            UserEditObj: {},
            IsNotifyUserEdit: false,
            IsNotifyUserCreate: false,
            AddClaims: [],
            Claims: {},
            isChecked: true,
            UserCreateResponse: '',
            UsereditResponse: '',
            //UserClaims
            Userclaims: [],
            NewUserClaims: [
                {
                    ClaimValue: "User Management",
                    AddClaim: false
                },
                {
                    ClaimValue: "Invoicing",
                    AddClaim: false
                },
            ],
            UserId: '',
            UserIsInEditMode: false,
            UserCreate: false,
            UserEditError: '',
            IsNotifyUserEditError: false,
            //Mobx Actions
            getUsers: action(function () {
                _this.Userloading = true;
                get("users/")
                    .then(function (response) {
                    _this.Users = '';
                    _this.Users = response;
                    _this.Userloading = false;
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            toggleUserEditModal: action(function () {
                _this.UserEditModal = !_this.UserEditModal;
            }),
            toggleUserCreateModal: action(function () {
                _this.UserCreateModal = !_this.UserCreateModal;
            }),
            //We use this for claims check
            handleCheckbox: action(function (index) {
                var UserclaimsTemp = _this.NewUserClaims.map(function (user, i) {
                    if (i !== index) {
                        return user;
                    }
                    return __assign({}, user, { AddClaim: !user.AddClaim });
                });
                _this.NewUserClaims = UserclaimsTemp;
            }),
            handleCheckboxEdit: action(function (index) {
                var UserclaimsTemp = _this.Userclaims.map(function (user, i) {
                    if (i !== index) {
                        return user;
                    }
                    return __assign({}, user, { AddClaim: !user.AddClaim });
                });
                _this.Userclaims = UserclaimsTemp;
            }),
            onSubmitCheckbox: action(function (e) {
                e.preventDefault();
            }),
            toggleCheckbox: action(function (e) {
                alert(e.target.value);
                _this.isChecked = !_this.isChecked;
            }),
            _rowUserEditorPopup: action(function (row, index) {
                _this.UserId = row.UserId;
                get('users/' + _this.UserId).then(function (response) {
                    _this.UserEditModal = !_this.UserEditModal,
                        _this.UsersObj = response;
                    _this.Userclaims = _this.UsersObj.UserRoles;
                });
                _this.UserIsInEditMode = true;
            }),
            buttonFunction: action(function (cell, row, index) {
                return (React.createElement("div", { className: "actionsBtn" },
                    React.createElement("button", { type: "button", id: "validatebutton", onClick: function (index) { _this._rowUserEditorPopup(row, index); }, className: "btn btn-success" },
                        React.createElement("i", { className: "material-icons" }, "edit"))));
            }),
            radiobuttonFunction: action(function (e) {
                return (React.createElement("div", null,
                    React.createElement("input", { type: "checkbox", name: "AddClaim", checked: _this.isChecked, onChange: _this.toggleCheckbox })));
            }),
            handleUserChange: action(function (e) {
                var levels = e.target.name.split('_');
                var value = e.target.value;
                if (e.target.type == "checkbox") {
                    console.log("ischecked: " + e.target.checked);
                    value = e.target.checked ? true : false;
                }
                var obj = _this.UsersObj;
                for (var i = 0; i < levels.length - 1; i++) {
                    obj = obj[levels[i]]; // work through relations, until reaching correct object
                }
                if (levels[levels.length - 1].indexOf('[') > -1) {
                    var l = levels[levels.length - 1];
                    levels[levels.length - 1] = l.substr(0, l.indexOf('['));
                }
                if (typeof obj[levels[levels.length - 1]] == "object") {
                    var name = e.target.name.split('_');
                    name = name[name.length - 1];
                    var arr = obj[levels[levels.length - 1]];
                    var itemValue = name.substr(name.indexOf('[') + 1).slice(0, -1);
                    var index = arr.indexOf(+itemValue);
                    if (value === true) {
                        // add if not present
                        if (index == -1) {
                            arr.push(+itemValue);
                        }
                    }
                    else {
                        // remove if present
                        if (index > -1) {
                            arr.splice(index, 1);
                        }
                    }
                }
                else {
                    obj[levels[levels.length - 1]] = value; // populate correct object with it's new value
                }
            }),
            showCreateUserModal: action(function (e) {
                _this.UserIsInEditMode = false;
                _this.UserEditModal = !_this.UserEditModal;
                _this.UserCreate = true;
                _this.UsersObj = {};
            }),
            handleUsersSubmit: action(function (event) {
                _this.AddClaims.push(_this.Claims);
                _this.UsersObj.UserRoles = _this.NewUserClaims;
                event.preventDefault();
                if (_this.UserCreate == true) {
                    post("users/create", _this.UsersObj)
                        .then(function (response) {
                        console.log(response);
                        _this.UserCreateResponse = response;
                        _this.UserEditModal = false;
                        _this.getUsers();
                    }).catch(function (error) {
                        console.log(error);
                        _this.UserEditError = error;
                        _this.UserEditModal = false;
                        _this.IsNotifyUserEditError = !_this.IsNotifyUserEditError;
                    });
                }
                else {
                    post("users/" + _this.UsersObj.UserId + "/update", _this.UsersObj)
                        .then(function (response) {
                        console.log(response);
                        _this.UsereditResponse = response;
                        _this.UserEditModal = false;
                        _this.IsNotifyUserEdit = !_this.IsNotifyUserEdit;
                        _this.getUsers();
                    }).catch(function (error) {
                        console.log(error);
                        _this.UserEditError = error;
                        _this.UserEditModal = false;
                        _this.IsNotifyUserEditError = !_this.IsNotifyUserEditError;
                    });
                }
            }),
        });
    }
    UsersStore.prototype.getUsers = function () {
        throw new Error("Method not implemented.");
    };
    UsersStore.prototype._rowUserEditorPopup = function (arg0, arg1) {
        throw new Error("Method not implemented.");
    };
    return UsersStore;
}());
export { UsersStore };
//# sourceMappingURL=users.service.js.map
/// <reference path="../../../../typings/index.d.ts" />
import * as React from 'react';
import * as axios from "axios";
import { extendObservable, observable, action } from "mobx";
import { get, post } from '../../../shared/api.service';


export class UsersStore {        
    IsNotifyUserEditError: boolean;
    UserEditError: any;
    UserCreate: boolean;
    UserIsInEditMode: boolean;
    UserId: any;
    UserclaimsTemp: any;
    NewUserClaims: any;
    NewClaim: any;
    toggleCheckbox: any;
    Userclaims: any;
    getUsers(): any {
        throw new Error("Method not implemented.");
    }
    IsNotifyUserCreate: boolean;
    UserCreateResponse: {};
    isChecked: boolean;
    Claims: any;
    AddClaims: any;
    UserCreateModal: boolean;
    IsNotifyUserEdit: boolean;
    UsereditResponse: {};
    UsersObj: any;
    UserEditObj: any;
    UserEditModal: boolean;
    _rowUserEditorPopup(arg0: any, arg1: any): any {
        throw new Error("Method not implemented.");
    }
    Userloading: boolean;
    Users: {};
    

    constructor() {
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
            getUsers: action(() => {
                this.Userloading = true;
                get("users/")
                    .then(response => {
                        this.Users = '';
                        this.Users = response;
                        this.Userloading = false;
                    }).catch(error => {
                        console.log(error)
                    });
            }),

            toggleUserEditModal: action(() => {
                this.UserEditModal = !this.UserEditModal;
            }),

            toggleUserCreateModal: action(() => {
                this.UserCreateModal = !this.UserCreateModal;
            }),            
            //We use this for claims check
            handleCheckbox: action((index: any) => {                
                const UserclaimsTemp = this.NewUserClaims.map((user, i) => {
                    if (i !== index) { return user; }
                    return {
                        ...user,
                        AddClaim: !user.AddClaim
                    }
                })
                this.NewUserClaims = UserclaimsTemp;
            }),

            handleCheckboxEdit: action((index: any) => {                
                const UserclaimsTemp = this.Userclaims.map((user, i) => {
                    if (i !== index) { return user; }
                    return {
                        ...user,
                        AddClaim: !user.AddClaim
                    }
                })
                this.Userclaims = UserclaimsTemp;
            }),

            onSubmitCheckbox: action((e: any) => {
                e.preventDefault();                
            }),

            toggleCheckbox: action((e: any) => {
                alert(e.target.value);
                this.isChecked = !this.isChecked;
            }),           

            _rowUserEditorPopup: action((row, index) => {
                this.UserId = row.UserId;
                get('users/' + this.UserId).then(response => {
                    this.UserEditModal = !this.UserEditModal,                        
                        this.UsersObj = response;
                    this.Userclaims = this.UsersObj.UserRoles;                    
                });
                this.UserIsInEditMode = true;
            }),

            buttonFunction: action((cell, row, index) => {
                return (
                    <div className="actionsBtn">
                        <button type="button" id="validatebutton" onClick={index => { this._rowUserEditorPopup(row, index); }} className="btn btn-success">
                            <i className="material-icons">edit</i>
                        </button>
                    </div>
                );
            }),

            radiobuttonFunction: action((e: any) => {
                return (
                    <div>
                        <input type="checkbox" name="AddClaim" checked={this.isChecked} onChange={this.toggleCheckbox} />
                    </div>
                );
            }),

            handleUserChange: action((e: any) => {
                var levels = e.target.name.split('_');
                var value = e.target.value;

                if (e.target.type == "checkbox") {
                    console.log("ischecked: " + e.target.checked);
                    value = e.target.checked ? true : false;
                }                

                var obj = this.UsersObj;

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

            showCreateUserModal: action((e: any) => {
                this.UserIsInEditMode = false;
                this.UserEditModal = !this.UserEditModal;
                this.UserCreate = true;
                this.UsersObj = {};                
            }),

            handleUsersSubmit: action((event: any) => {
                this.AddClaims.push(this.Claims);
                this.UsersObj.UserRoles = this.NewUserClaims;
                event.preventDefault();

                if (this.UserCreate == true) {
                    post("users/create", this.UsersObj)
                        .then(response => {
                            console.log(response);
                            this.UserCreateResponse = response;
                            this.UserEditModal = false;
                            this.getUsers();
                        }).catch(error => {
                            console.log(error);
                            this.UserEditError = error;
                            this.UserEditModal = false;
                            this.IsNotifyUserEditError = !this.IsNotifyUserEditError;
                        });
                }
                else {
                    post("users/" + this.UsersObj.UserId + "/update", this.UsersObj)
                        .then(response => {
                            console.log(response);
                            this.UsereditResponse = response;
                            this.UserEditModal = false;
                            this.IsNotifyUserEdit = !this.IsNotifyUserEdit;
                            this.getUsers();
                        }).catch(error => {
                            console.log(error);
                            this.UserEditError = error;
                            this.UserEditModal = false;
                            this.IsNotifyUserEditError = !this.IsNotifyUserEditError;
                        });
                }
            }),

            //End
        })

    }


}




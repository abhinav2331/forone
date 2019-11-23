/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import { extendObservable, action } from "mobx";
import { get, post } from '../../../../shared/api.service';
var CampaignCategory = /** @class */ (function () {
    function CampaignCategory() {
        var _this = this;
        extendObservable(this, {
            Categories: [],
            loading: false,
            modalCategoryEdit: false,
            CategoryObj: {},
            CatCreateStatus: [],
            CatEditStatus: [],
            IsNotifyCatCreate: false,
            IsNotifyCatEdit: false,
            CategoryIDEdit: '',
            CategoryID: '',
            CampaignCategoryIsInEditMode: false,
            CatCreatErrore: '',
            IsNotifyCatCreateError: false,
            //Mobx Actions  
            getAllCategory: action(function () {
                _this.loading = true;
                get("leadgeneration/categories")
                    .then(function (response) {
                    _this.Categories = response;
                    _this.loading = false;
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            toggleCategoryCreateModal: action(function () {
                _this.modalCategoryCreate = !_this.modalCategoryCreate;
            }),
            toggleCategoryEditModal: action(function () {
                _this.modalCategoryEdit = !_this.modalCategoryEdit;
            }),
            handleNormalChange: action(function (e) {
                var levels = e.target.name.split('_');
                var value = e.target.value;
                var obj = _this.CategoryObj;
                for (var i = 0; i < levels.length - 1; i++) {
                    obj = obj[levels[i]]; // work through relations, until reaching correct object
                }
                obj[levels[levels.length - 1]] = value; // populate correct object with it's new value
            }),
            //Category Create
            showCategoryCreateModal: action(function (e) {
                _this.CampaignCategoryIsInEditMode = false;
                _this.modalCategoryEdit = !_this.modalCategoryEdit;
                _this.CategoryObj = {};
            }),
            // Category Edit
            _rowCatEditorPopup: action(function (row, index) {
                debugger;
                _this.CategoryID = row.CategoryID;
                _this.CampaignCategoryIsInEditMode = true;
                get('leadgeneration/categories/' + _this.CategoryID).then(function (response) {
                    _this.modalCategoryEdit = !_this.modalCategoryEdit,
                        _this.CategoryObj = response;
                    console.log(response);
                });
            }),
            buttonCatEditFunction: action(function (cell, row, index) {
                return (React.createElement("div", { className: "actionsBtn" },
                    React.createElement("button", { type: "button", "data-toggle": "modal", "data-target": "#catEdit", onClick: function (index) { _this._rowCatEditorPopup(row, index); }, className: "btn tooltipC btn-success" },
                        React.createElement("i", { className: "material-icons" }, "edit"),
                        " ",
                        React.createElement("span", { className: "tooltiptext" }, "Edit"))));
            }),
            handleSubmitCategory: action(function (event) {
                event.preventDefault();
                if (_this.CampaignCategoryIsInEditMode == false) {
                    post("leadgeneration/categories/create", _this.CategoryObj)
                        .then(function (response) {
                        console.log(response);
                        _this.CatCreateStatus = response;
                        _this.modalCategoryEdit = false;
                        _this.IsNotifyCatCreate = !_this.IsNotifyCatCreate;
                    }).catch(function (error) {
                        console.log(error);
                        _this.CatCreatErrore = error;
                        _this.modalCategoryEdit = false;
                        _this.IsNotifyCatCreateError = !_this.IsNotifyCatCreateError;
                    });
                    _this.getAllCategory();
                }
                else {
                    post("leadgeneration/categories/" + _this.CategoryID + "/update", _this.CategoryObj)
                        .then(function (response) {
                        alert(2);
                        console.log(response);
                        _this.CatEditStatus = response;
                        _this.modalCategoryEdit = false;
                        _this.IsNotifyCatEdit = !_this.IsNotifyCatEdit;
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
            }),
        });
    }
    CampaignCategory.prototype._rowCatEditorPopup = function (arg0, arg1) {
        throw new Error("Method not implemented.");
    };
    CampaignCategory.prototype.getAllCategory = function () {
        throw new Error("Method not implemented.");
    };
    return CampaignCategory;
}());
export { CampaignCategory };
//# sourceMappingURL=campaign.categories.service.js.map
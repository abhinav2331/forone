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
/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { TextareaNormal } from '../../../../shared/formelement/textarea.normal';
import { InputNormal } from '../../../../shared/formelement/input.normal';
var CategoryEdit = /** @class */ (function (_super) {
    __extends(CategoryEdit, _super);
    function CategoryEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CategoryEdit.prototype.render = function () {
        var header = React.createElement(ModalHeader, { toggle: this.props.campaigncategory.toggleCategoryEditModal }, "Create Campaign Category");
        if (this.props.campaigncategory.CampaignCategoryIsInEditMode) {
            header = React.createElement(ModalHeader, { toggle: this.props.campaigncategory.toggleCategoryEditModal },
                "Edit ",
                this.props.campaigncategory.CategoryObj.Name);
        }
        return (React.createElement("section", null,
            React.createElement(Modal, { id: "catEdit", isOpen: this.props.campaigncategory.modalCategoryEdit, toggle: this.props.campaigncategory.toggleCategoryEditModal },
                header,
                React.createElement(ModalBody, null,
                    React.createElement("form", { onSubmit: this.props.campaigncategory.handleSubmitCategory },
                        React.createElement("div", { className: "form_list row", style: { marginBottom: "20px" } },
                            React.createElement("ul", null,
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Name"),
                                        React.createElement(InputNormal, { inputType: 'text', name: 'Name', controlFunc: this.props.campaigncategory.handleNormalChange, placeholder: 'Name', content: this.props.campaigncategory.CategoryObj.Name }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Url"),
                                        React.createElement(InputNormal, { inputType: 'text', name: 'Url', controlFunc: this.props.campaigncategory.handleNormalChange, placeholder: 'Url', content: this.props.campaigncategory.CategoryObj.Url }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "PageTitle"),
                                        React.createElement(InputNormal, { inputType: 'text', name: 'PageTitle', controlFunc: this.props.campaigncategory.handleNormalChange, placeholder: 'Page Title', content: this.props.campaigncategory.CategoryObj.PageTitle }))),
                                React.createElement("li", { className: "col-md-6", style: { height: "80px" } },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Meta Keywords"),
                                        React.createElement(TextareaNormal, { name: 'MetaKeywords', controlFunc: this.props.campaigncategory.handleNormalChange, placeholder: 'Meta Keywords', content: this.props.campaigncategory.CategoryObj.MetaKeywords }))),
                                React.createElement("li", { className: "col-md-6", style: { height: "80px" } },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Meta description"),
                                        React.createElement(TextareaNormal, { name: 'MetaDescription', controlFunc: this.props.campaigncategory.handleNormalChange, placeholder: 'Meta description', content: this.props.campaigncategory.CategoryObj.MetaDescription }))))),
                        React.createElement("button", { type: "submit", className: "btn btn-success pull-right" }, "Save Category"),
                        React.createElement("button", { type: "button", style: { marginRight: '10px' }, className: "btn btn-danger pull-right", onClick: this.props.campaigncategory.toggleCategoryEditModal }, "Close"))))));
    };
    CategoryEdit = __decorate([
        inject('campaignstore', 'campaigncategory'),
        observer
    ], CategoryEdit);
    return CategoryEdit;
}(React.Component));
export { CategoryEdit };
//# sourceMappingURL=category.edit.js.map
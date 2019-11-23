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
import { SelectFormElement } from '../../../../shared/formelement/select.formelement';
import { InputNormal } from '../../../../shared/formelement/input.normal';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
var RoiEdit = /** @class */ (function (_super) {
    __extends(RoiEdit, _super);
    function RoiEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoiEdit.prototype.render = function () {
        var header = React.createElement(ModalHeader, { toggle: this.props.reportstore.toggleRoiEditModal }, "Create ROI");
        if (this.props.reportstore.RoiIsInEditMode) {
            header = React.createElement(ModalHeader, { toggle: this.props.reportstore.toggleRoiEditModal }, "Edit ROI");
        }
        return (React.createElement("section", null,
            React.createElement(Modal, { isOpen: this.props.reportstore.RoiEditModal, toggle: this.props.reportstore.toggleRoiEditModal },
                header,
                React.createElement(ModalBody, null,
                    React.createElement("section", null,
                        React.createElement("form", { onSubmit: this.props.reportstore.handleRoiSubmit },
                            React.createElement("div", { className: "form_list row" },
                                React.createElement("ul", null,
                                    React.createElement("li", { className: "col-md-6" },
                                        React.createElement("div", { className: "form-group" },
                                            React.createElement("div", { className: "form_label" }, "Website"),
                                            React.createElement(SelectFormElement, { name: 'RoiTrackingWebsiteID', placeholder: 'Select...', controlFunc: this.props.reportstore.handleRoiChange, options: this.props.reportstore.Websiteid.map(function (w) { return { name: w.WebsiteName, value: w.WebsiteID }; }), selectedOption: this.props.reportstore.RoiObj.RoiTrackingWebsiteID }))),
                                    React.createElement("li", { className: "col-md-6" },
                                        React.createElement("div", { className: "form-group" },
                                            React.createElement("div", { className: "form_label" }, "Affiliate"),
                                            React.createElement(InputNormal, { inputType: 'text', name: 'AffiliateID', controlFunc: this.props.reportstore.handleRoiChange, content: this.props.reportstore.RoiObj.AffiliateID, placeholder: 'Affiliate ID' }))),
                                    React.createElement("li", { className: "col-md-6" },
                                        React.createElement("div", { className: "form-group" },
                                            React.createElement("div", { className: "form_label" }, "Affiliate Code"),
                                            React.createElement(SelectFormElement, { name: 'AffiliateCode', placeholder: 'Select...', controlFunc: this.props.reportstore.handleRoiChange, options: this.props.reportstore.Affiliatedata.map(function (a) { return { name: a.AffiliateCode, value: a.AffiliateCode }; }), selectedOption: this.props.reportstore.RoiObj.AffiliateCode }))),
                                    React.createElement("li", { className: "col-md-6" },
                                        React.createElement("div", { className: "form-group reduce_width" },
                                            React.createElement("div", { className: "form_label" }, "Profit Margin Threshold"),
                                            React.createElement(InputNormal, { inputType: 'text', name: 'ProfitMarginThreshold', controlFunc: this.props.reportstore.handleRoiChange, content: this.props.reportstore.RoiObj.ProfitMarginThreshold, placeholder: 'Profit Margin Threshold' })),
                                        React.createElement("span", { className: "persentage" }, "%")),
                                    React.createElement("li", { className: "col-md-6" },
                                        React.createElement("div", { className: "form-group reduce_width" },
                                            React.createElement("div", { className: "form_label" }, "Pay Percentage"),
                                            React.createElement(InputNormal, { inputType: 'text', name: 'PayPercentage', controlFunc: this.props.reportstore.handleRoiChange, content: this.props.reportstore.RoiObj.PayPercentage, placeholder: 'Pay Percentage' })),
                                        React.createElement("span", { className: "persentage" }, "%")))),
                            React.createElement("div", { className: "divider" }),
                            React.createElement("button", { type: "submit", style: { marginLeft: '10px' }, className: "btn btn-success pull-right" }, "Save"),
                            React.createElement("button", { type: "button", className: "btn btn-info pull-right", onClick: this.props.reportstore.toggleRoiEditModal }, "Close")))),
                React.createElement(ModalFooter, null))));
    };
    RoiEdit = __decorate([
        inject('reportstore'),
        observer
    ], RoiEdit);
    return RoiEdit;
}(React.Component));
export { RoiEdit };
//# sourceMappingURL=roi.edit.js.map
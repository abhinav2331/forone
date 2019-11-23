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
import { InputNormalunRequired } from '../../../../shared/formelement/input.normal.unrequired';
import { Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';
var AffiliatesEdit = /** @class */ (function (_super) {
    __extends(AffiliatesEdit, _super);
    function AffiliatesEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AffiliatesEdit.prototype.render = function () {
        var header = React.createElement(ModalHeader, { toggle: this.props.reportstore.toggleAffiliateEditModal }, "Create Affiliate");
        var affiliateCode = null;
        if (this.props.reportstore.AffiliateIsInEditMode) {
            header = React.createElement(ModalHeader, { toggle: this.props.reportstore.toggleAffiliateEditModal }, "Edit Affiliate");
            affiliateCode = React.createElement("li", { className: "col-md-6 disabled" },
                React.createElement("div", { className: "form-group" },
                    React.createElement("div", { className: "form_label" }, "Affiliate Code"),
                    React.createElement(InputNormal, { inputType: 'text', name: 'AffiliateCode', controlFunc: this.props.reportstore.handleAffiliateChange, content: this.props.reportstore.AffiliateObj.AffiliateCode, placeholder: 'ho_{ab}' })));
        }
        else {
            affiliateCode = React.createElement("li", { className: "col-md-6" },
                React.createElement("div", { className: "form-group" },
                    React.createElement("div", { className: "form_label" }, "Affiliate Code"),
                    React.createElement(InputNormal, { inputType: 'text', name: 'AffiliateCode', controlFunc: this.props.reportstore.handleAffiliateChange, content: this.props.reportstore.AffiliateObj.AffiliateCode, placeholder: 'ho_{ab}' })));
        }
        return (React.createElement("section", null,
            React.createElement(Modal, { isOpen: this.props.reportstore.AffiliateEditModal, toggle: this.props.reportstore.toggleAffiliateEditModal },
                header,
                React.createElement(ModalBody, null,
                    React.createElement("form", { onSubmit: this.props.reportstore.handleAffiliateEditSubmit },
                        React.createElement("div", { className: "form_list row" },
                            React.createElement("ul", null,
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Website"),
                                        React.createElement(SelectFormElement, { name: 'Website_WebsiteID', placeholder: 'Select...', controlFunc: this.props.reportstore.handleAffiliateChange, options: this.props.reportstore.Websites.map(function (w) { return { name: w.WebsiteName, value: w.WebsiteID }; }), selectedOption: this.props.reportstore.AffiliateObj.Website.WebsiteID }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Name"),
                                        React.createElement(InputNormal, { inputType: 'text', name: 'Name', controlFunc: this.props.reportstore.handleAffiliateChange, content: this.props.reportstore.AffiliateObj.Name, placeholder: 'Affiliate 1' }))),
                                affiliateCode,
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Currency Code"),
                                        React.createElement(SelectFormElement, { name: 'CurrencyCode', placeholder: 'Currency Code', controlFunc: this.props.reportstore.handleAffiliateChange, options: this.props.reportstore.CurrencyCodes, selectedOption: this.props.reportstore.AffiliateObj.CurrencyCode }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Current CPA"),
                                        React.createElement(InputNormal, { inputType: 'text', name: 'CurrentCPA', controlFunc: this.props.reportstore.handleAffiliateChange, content: this.props.reportstore.AffiliateObj.CurrentCPA, placeholder: '0.00' }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "RegistrationTypeID"),
                                        React.createElement(SelectFormElement, { name: 'RegistrationType_RegistrationTypeID', placeholder: 'Registration Type', controlFunc: this.props.reportstore.handleAffiliateChange, options: this.props.reportstore.RegistrationTypes.map(function (w) { return { name: w.Name, value: w.RegistrationTypeID }; }), selectedOption: this.props.reportstore.AffiliateObj.RegistrationType.RegistrationTypeID }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Disabled"),
                                        React.createElement("div", { className: "switch-container" },
                                            React.createElement("label", null,
                                                React.createElement("input", { ref: "switch", name: "Disabled", checked: this.props.reportstore.AffiliateObj.Disabled, onChange: this.props.reportstore.handleAffiliateChange, className: "switch", type: "checkbox" }),
                                                React.createElement("div", null,
                                                    React.createElement("span", null,
                                                        React.createElement("g", { className: "icon icon-toolbar grid-view" }, "Yes")),
                                                    React.createElement("span", null,
                                                        React.createElement("g", { className: "icon icon-toolbar ticket-view" }, "No")),
                                                    React.createElement("div", null)))))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Traffic Is Incentivised"),
                                        React.createElement("div", { className: "switch-container" },
                                            React.createElement("label", null,
                                                React.createElement("input", { ref: "switch", name: "TrafficIsIncentivised", checked: this.props.reportstore.AffiliateObj.TrafficIsIncentivised, onChange: this.props.reportstore.handleAffiliateChange, className: "switch", type: "checkbox" }),
                                                React.createElement("div", null,
                                                    React.createElement("span", null,
                                                        React.createElement("g", { className: "icon icon-toolbar grid-view" }, "Yes")),
                                                    React.createElement("span", null,
                                                        React.createElement("g", { className: "icon icon-toolbar ticket-view" }, "No")),
                                                    React.createElement("div", null)))))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Override Has Offers Payout"),
                                        React.createElement("div", { className: "switch-container" },
                                            React.createElement("label", null,
                                                React.createElement("input", { ref: "switch", name: "OverrideHasOffersPayout", checked: this.props.reportstore.AffiliateObj.OverrideHasOffersPayout, onChange: this.props.reportstore.handleAffiliateChange, className: "switch", type: "checkbox" }),
                                                React.createElement("div", null,
                                                    React.createElement("span", null,
                                                        React.createElement("g", { className: "icon icon-toolbar grid-view" }, "Yes")),
                                                    React.createElement("span", null,
                                                        React.createElement("g", { className: "icon icon-toolbar ticket-view" }, "No")),
                                                    React.createElement("div", null)))))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Duplicate Member Payout"),
                                        React.createElement(InputNormalunRequired, { inputType: 'number', name: 'DuplicateMemberPayout', controlFunc: this.props.reportstore.handleAffiliateChange, content: this.props.reportstore.AffiliateObj.DuplicateMemberPayout, placeholder: 'Duplicate Member Payout' }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Costing model"),
                                        React.createElement(SelectFormElement, { name: 'CostingModelID', controlFunc: this.props.reportstore.handleAffiliateChange, options: this.props.reportstore.CostingModels, selectedOption: this.props.reportstore.AffiliateObj.CostingModelID, placeholder: 'Select...' }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "HasOffers Affiliate ID"),
                                        React.createElement(InputNormalunRequired, { inputType: 'text', name: 'HasOffersAffiliateID', controlFunc: this.props.reportstore.handleAffiliateChange, content: this.props.reportstore.AffiliateObj.HasOffersAffiliateID }))))),
                        React.createElement("div", { className: "divider" }),
                        React.createElement("button", { type: "submit", style: { marginLeft: '10px' }, className: "btn btn-success pull-right" }, "Save changes"),
                        React.createElement("button", { type: "button", className: "btn btn-info pull-right", onClick: this.props.reportstore.toggleAffiliateEditModal }, "Close"))),
                React.createElement(ModalFooter, null))));
    };
    AffiliatesEdit = __decorate([
        inject('reportstore'),
        observer
    ], AffiliatesEdit);
    return AffiliatesEdit;
}(React.Component));
export { AffiliatesEdit };
//# sourceMappingURL=affiliates.edit.js.map
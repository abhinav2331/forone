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
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import { InputNumericNormal } from '../../../../shared/formelement/input.numeric';
import { InputNormal } from '../../../../shared/formelement/input.normal';
import { SelectFormElement } from '../../../../shared/formelement/select.formelement';
var CampaignRevenueEdit = /** @class */ (function (_super) {
    __extends(CampaignRevenueEdit, _super);
    function CampaignRevenueEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CampaignRevenueEdit.prototype.render = function () {
        var header = React.createElement(ModalHeader, { toggle: this.props.campaignstore.toggleEditModal }, "Create Campaign Revenue");
        if (this.props.campaignstore.CampaignRevenueIsInEditMode) {
            header = React.createElement(ModalHeader, { toggle: this.props.campaignstore.toggleEditModal },
                "Edit Campaign ID ",
                this.props.campaignstore.RevenueCID,
                ", Revenue ID ",
                this.props.campaignstore.RevenueObj.RevenueID);
        }
        return (React.createElement("section", null,
            React.createElement(Modal, { isOpen: this.props.campaignstore.RevenueEditModal, toggle: this.props.campaignstore.toggleRevenueEditModal },
                header,
                React.createElement(ModalBody, null,
                    React.createElement("form", { onSubmit: this.props.campaignstore.handleRevenueSubmit },
                        React.createElement("div", { className: "form_list row" },
                            React.createElement("ul", null,
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Period From"),
                                        React.createElement(DatePicker, { className: "form-control", onChange: this.props.campaignstore.handlePeriodFromChange, selected: this.props.campaignstore.SelectedPeriodFromChange }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Currency"),
                                        React.createElement(SelectFormElement, { name: 'RevenueCurrency', placeholder: 'Currency Code', controlFunc: this.props.campaignstore.handleRevenueChange, options: this.props.campaignstore.CurrencyCodeRevenue, selectedOption: this.props.campaignstore.RevenueObj.RevenueCurrency }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Payout Type"),
                                        React.createElement(SelectFormElement, { name: 'PayoutType', placeholder: 'Payout Type', controlFunc: this.props.campaignstore.handleRevenueChange, options: this.props.campaignstore.PayoutTypeRevenue, selectedOption: this.props.campaignstore.RevenueObj.PayoutType }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Payout Rate"),
                                        React.createElement(InputNumericNormal, { inputType: 'number', stepType: 'any', name: 'PayoutRate', controlFunc: this.props.campaignstore.handleRevenueChange, content: this.props.campaignstore.RevenueObj.PayoutRate }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Billable Count"),
                                        React.createElement(InputNormal, { inputType: 'number', name: 'BillableCount', controlFunc: this.props.campaignstore.handleRevenueChange, content: this.props.campaignstore.RevenueObj.BillableCount }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Revenue"),
                                        React.createElement(InputNumericNormal, { inputType: 'number', stepType: 'any', name: 'Revenue', controlFunc: this.props.campaignstore.handleRevenueChange, content: this.props.campaignstore.RevenueObj.Revenue }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Disable Automatic Update"),
                                        React.createElement("div", { className: "switch-container" },
                                            React.createElement("label", null,
                                                React.createElement("input", { ref: "switch", name: "DisableAutomaticUpdate", checked: this.props.campaignstore.RevenueObj.DisableAutomaticUpdate, onChange: this.props.campaignstore.handleRevenueChange, className: "switch", type: "checkbox" }),
                                                React.createElement("div", null,
                                                    React.createElement("span", null,
                                                        React.createElement("g", { className: "icon icon-toolbar grid-view" }, "Yes")),
                                                    React.createElement("span", null,
                                                        React.createElement("g", { className: "icon icon-toolbar ticket-view" }, "No")),
                                                    React.createElement("div", null)))))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Approved For Invoicing"),
                                        React.createElement("div", { className: "switch-container" },
                                            React.createElement("label", null,
                                                React.createElement("input", { ref: "switch", name: "ConfirmedForInvoicing", checked: this.props.campaignstore.RevenueObj.ConfirmedForInvoicing, onChange: this.props.campaignstore.handleRevenueChange, className: "switch", type: "checkbox" }),
                                                React.createElement("div", null,
                                                    React.createElement("span", null,
                                                        React.createElement("g", { className: "icon icon-toolbar grid-view" }, "Yes")),
                                                    React.createElement("span", null,
                                                        React.createElement("g", { className: "icon icon-toolbar ticket-view" }, "No")),
                                                    React.createElement("div", null)))))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Invoiced"),
                                        React.createElement("div", { className: "switch-container" },
                                            React.createElement("label", null,
                                                React.createElement("input", { ref: "switch", name: "Invoiced", checked: this.props.campaignstore.RevenueObj.Invoiced, onChange: this.props.campaignstore.handleRevenueChange, className: "switch", type: "checkbox" }),
                                                React.createElement("div", null,
                                                    React.createElement("span", null,
                                                        React.createElement("g", { className: "icon icon-toolbar grid-view" }, "Yes")),
                                                    React.createElement("span", null,
                                                        React.createElement("g", { className: "icon icon-toolbar ticket-view" }, "No")),
                                                    React.createElement("div", null)))))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Invoice Notes"),
                                        React.createElement(InputNormal, { inputType: 'text', name: 'InvoiceNotes', controlFunc: this.props.campaignstore.handleRevenueChange, placeholder: 'Invoice Notes', content: this.props.campaignstore.RevenueObj.InvoiceNotes }))))),
                        React.createElement("button", { type: "submit", className: "btn btn-success pull-right" }, "Save Revenue"),
                        React.createElement("button", { type: "button", style: { marginRight: '10px' }, className: "btn btn-danger pull-right", onClick: this.props.campaignstore.toggleRevenueEditModal }, "Close"))))));
    };
    CampaignRevenueEdit = __decorate([
        inject('campaignstore'),
        observer
    ], CampaignRevenueEdit);
    return CampaignRevenueEdit;
}(React.Component));
export { CampaignRevenueEdit };
//# sourceMappingURL=campaign.revenue.edit.js.map
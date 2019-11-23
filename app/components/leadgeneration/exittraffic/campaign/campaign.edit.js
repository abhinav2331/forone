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
import { Modal, ModalHeader, ModalBody, } from 'reactstrap';
import { TextareaNormal } from '../../../../shared/formelement/textarea.normal';
import { InputNormal } from '../../../../shared/formelement/input.normal';
import { InputNormalunRequired } from '../../../../shared/formelement/input.normal.unrequired';
import { SelectFormElement } from '../../../../shared/formelement/select.formelement';
import { CheckboxInline } from '../../../../shared/formelement/radio.checkbox.inline';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
var CampaignEdit = /** @class */ (function (_super) {
    __extends(CampaignEdit, _super);
    function CampaignEdit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CampaignEdit.prototype.render = function () {
        var _this = this;
        var header = React.createElement(ModalHeader, { toggle: this.props.campaignstore.toggleEditModal }, "Create Exit Campaign");
        if (this.props.campaignstore.CampaignIsInEditMode) {
            header = React.createElement(ModalHeader, { toggle: this.props.campaignstore.toggleEditModal },
                "Edit ",
                this.props.campaignstore.CampaignsObj.Name,
                " Campaign");
        }
        return (React.createElement("section", null,
            React.createElement(Modal, { isOpen: this.props.campaignstore.modalEdit, toggle: this.props.campaignstore.toggleEditModal },
                header,
                React.createElement(ModalBody, null,
                    React.createElement("form", { onSubmit: this.props.campaignstore.handleEditSubmit, name: 'EditCampaign' },
                        React.createElement("div", { className: "form_list row", style: { marginBottom: "20px" } },
                            React.createElement("ul", null,
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Campaign Name"),
                                        React.createElement(InputNormal, { inputType: 'text', name: 'Name', controlFunc: this.props.campaignstore.handleCampaignChange, content: this.props.campaignstore.CampaignsObj.Name, placeholder: 'Campaign Name' }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Client Name"),
                                        React.createElement(InputNormal, { inputType: 'text', name: 'ClientName', controlFunc: this.props.campaignstore.handleCampaignChange, content: this.props.campaignstore.CampaignsObj.ClientName, placeholder: 'Client Name' }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Campaign type"),
                                        React.createElement(SelectFormElement, { name: 'Type', placeholder: 'Campaign type', controlFunc: this.props.campaignstore.handleCampaignChange, options: this.props.campaignstore.Types, selectedOption: this.props.campaignstore.CampaignsObj.Type }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Status"),
                                        React.createElement(SelectFormElement, { name: 'Status_StatusID', placeholder: 'Status', controlFunc: this.props.campaignstore.handleCampaignChange, options: this.props.campaignstore.Status, selectedOption: this.props.campaignstore.CampaignsObj.Status.StatusID }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Country Code"),
                                        React.createElement(SelectFormElement, { name: 'CountryCode', placeholder: 'Country Code', controlFunc: this.props.campaignstore.handleCampaignChange, options: this.props.campaignstore.CuntryCode, selectedOption: this.props.campaignstore.CampaignsObj.CountryCode }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Payout Type"),
                                        React.createElement(SelectFormElement, { name: 'Payout_PayoutType', placeholder: 'Payout Type', controlFunc: this.props.campaignstore.handleCampaignChange, options: this.props.campaignstore.PayoutType, selectedOption: this.props.campaignstore.CampaignsObj.Payout.PayoutType }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group", style: { width: "45%", float: "left", marginRight: "30px" } },
                                        React.createElement("div", { className: "form_label" }, "Payout"),
                                        React.createElement(SelectFormElement, { name: 'Payout_CurrencyCode', placeholder: 'Currency Code', controlFunc: this.props.campaignstore.handleCampaignChange, options: this.props.campaignstore.CurrencyCode, selectedOption: this.props.campaignstore.CampaignsObj.Payout.CurrencyCode })),
                                    React.createElement("div", { className: "form-group", style: { width: "45%", float: "left" } },
                                        React.createElement("div", { className: "form_label" }, "Payout Rate"),
                                        React.createElement(InputNormal, { inputType: 'number', name: 'Payout_PayoutRate', controlFunc: this.props.campaignstore.handleCampaignChange, placeholder: 'Payout Rate', content: this.props.campaignstore.CampaignsObj.Payout.PayoutRate }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Has Offers Tracking"),
                                        React.createElement("div", { className: "switch-container" },
                                            React.createElement("label", null,
                                                React.createElement("input", { ref: "switch", name: "HasOffers_Enabled", checked: this.props.campaignstore.CampaignsObj.HasOffers.Enabled, onChange: this.props.campaignstore.handleCampaignChange, className: "switch", type: "checkbox" }),
                                                React.createElement("div", null,
                                                    React.createElement("span", null,
                                                        React.createElement("g", { className: "icon icon-toolbar grid-view" }, "Yes")),
                                                    React.createElement("span", null,
                                                        React.createElement("g", { className: "icon icon-toolbar ticket-view" }, "No")),
                                                    React.createElement("div", null)))))),
                                this.props.campaignstore.showHasOffersEditSection ?
                                    React.createElement("li", { className: "col-md-6" },
                                        React.createElement("div", { className: "form-group" },
                                            React.createElement("div", { className: "form_label" }, "Offer ID"),
                                            React.createElement(InputNormalunRequired, { inputType: 'text', name: 'HasOffers_OfferID', controlFunc: this.props.campaignstore.handleCampaignChange, content: this.props.campaignstore.CampaignsObj.HasOffers.OfferID })))
                                    : "",
                                this.props.campaignstore.showHasOffersEditSection ?
                                    React.createElement("li", { className: "col-md-6" },
                                        React.createElement("div", { className: "form-group" },
                                            React.createElement("div", { className: "form_label" }, "Additional Query"),
                                            React.createElement(InputNormalunRequired, { inputType: 'text', name: 'HasOffers_AdditionalQueryString', controlFunc: this.props.campaignstore.handleCampaignChange, content: this.props.campaignstore.CampaignsObj.HasOffers.AdditionalQueryString, placeholder: 'Additional Query' })))
                                    : "",
                                !this.props.campaignstore.showHasOffersEditSection ? React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Manual Tracking Link"),
                                        React.createElement(InputNormal, { inputType: 'text', name: 'ManualTrackingLink', controlFunc: this.props.campaignstore.handleCampaignChange, content: this.props.campaignstore.CampaignsObj.ManualTrackingLink, placeholder: 'Manual Tracking Link' }))) : "",
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group " },
                                        React.createElement("div", { className: "form_label" }, "Affiliate network"),
                                        React.createElement("div", { className: "selectdiv" },
                                            React.createElement("select", null,
                                                React.createElement("option", null, "No network"))))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Publisher"),
                                        React.createElement(SelectFormElement, { name: 'Publisher_SupplierID', placeholder: 'Publisher', controlFunc: this.props.campaignstore.handleCampaignChange, options: this.props.campaignstore.Publisher, selectedOption: this.props.campaignstore.CampaignsObj.Publisher.SupplierID }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Call to Action"),
                                        React.createElement(InputNormalunRequired, { inputType: 'text', name: 'Creative_CallToAction', controlFunc: this.props.campaignstore.handleCampaignChange, content: this.props.campaignstore.CampaignsObj.Creative.CallToAction, placeholder: 'Call To Action' }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Targeting for Gender"),
                                        React.createElement("div", { className: "selectdiv" },
                                            React.createElement("select", { name: "TargetGender", onChange: this.props.campaignstore.handleCampaignChange },
                                                React.createElement("option", { value: "" }, "No restriction"),
                                                React.createElement("option", { value: "male" }, "Male"),
                                                React.createElement("option", { value: "Female" }, "Female"))))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Age"),
                                        React.createElement("div", { className: "row" },
                                            React.createElement("div", { className: "col-md-5" },
                                                React.createElement(InputNormalunRequired, { inputType: 'text', name: 'TargetMinAge', controlFunc: this.props.campaignstore.handleCampaignChange, content: this.props.campaignstore.CampaignsObj.TargetMinAge, placeholder: 'Target Min Age' })),
                                            React.createElement("div", { className: "col-md-2 textCenter" }, "-"),
                                            React.createElement("div", { className: "col-md-5" },
                                                React.createElement(InputNormalunRequired, { inputType: 'text', name: 'TargetMaxAge', controlFunc: this.props.campaignstore.handleCampaignChange, content: this.props.campaignstore.CampaignsObj.TargetMaxAge, placeholder: 'Target Max Age' }))))),
                                React.createElement("li", { className: "col-md-6", style: { height: "80px" } },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Description"),
                                        React.createElement(TextareaNormal, { name: 'Creative_Description', controlFunc: this.props.campaignstore.handleCampaignChange, content: this.props.campaignstore.CampaignsObj.Creative.Description, placeholder: 'Description' }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Sub Heading"),
                                        React.createElement(InputNormalunRequired, { inputType: 'text', name: 'Creative_SubHeading', controlFunc: this.props.campaignstore.handleCampaignChange, content: this.props.campaignstore.CampaignsObj.Creative.SubHeading, placeholder: 'Sub Heading' }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Category"),
                                        React.createElement(SelectFormElement, { name: 'CategoryId', placeholder: 'Category', controlFunc: this.props.campaignstore.handleCampaignChange, options: this.props.campaignstore.Category, selectedOption: this.props.campaignstore.CampaignsObj.CategoryId }))),
                                React.createElement("li", { className: "col-md-6 textareaMeta" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Meta Keywords"),
                                        React.createElement(TextareaNormal, { name: 'MetaKeywords', controlFunc: this.props.campaignstore.handleCampaignChange, placeholder: 'Meta Keywords', content: this.props.campaignstore.CampaignsObj.MetaKeywords }))),
                                React.createElement("li", { className: "col-md-6 textareaMeta" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Meta description"),
                                        React.createElement(TextareaNormal, { name: 'MetaDescription', controlFunc: this.props.campaignstore.handleCampaignChange, placeholder: 'Meta description', content: this.props.campaignstore.CampaignsObj.MetaDescription }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Expiry date:"),
                                        React.createElement(DatePicker, { className: "form-control", onChange: this.props.campaignstore.handleExpiryDateTimeChange, selected: this.props.campaignstore.SelectedExpiryDateTimeUtc }))),
                                React.createElement("li", { className: "col-md-12" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Placements"),
                                        React.createElement("div", { className: "row no-margin" },
                                            React.createElement("div", { className: "placement_list" },
                                                React.createElement("ul", null, this.props.campaignstore.Placements.map(function (option) {
                                                    return (React.createElement("li", { key: "placements" + option.value },
                                                        React.createElement(CheckboxInline, { name: 'Placements[' + option.value + ']', display: option.name, controlFunc: _this.props.campaignstore.handlePlacementsChange, checked: _this.props.campaignstore.SelectedPlacements.indexOf(+option.value) > -1 })));
                                                })))))))),
                        React.createElement("button", { type: "submit", className: "btn btn-success pull-right" }, "Save changes"),
                        "\u00A0",
                        React.createElement("button", { type: "button", style: { marginRight: '10px' }, className: "btn btn-danger pull-right", onClick: this.props.campaignstore.toggleEditModal }, "Close"))))));
    };
    CampaignEdit = __decorate([
        inject('campaignstore'),
        observer
    ], CampaignEdit);
    return CampaignEdit;
}(React.Component));
export { CampaignEdit };
//# sourceMappingURL=campaign.edit.js.map
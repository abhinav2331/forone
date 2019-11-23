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
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Select } from '../../../shared/filterelements/select.dropdown.filter';
import { AffiliateEditNotification } from '../../../shared/notification/affiliate.edit.notification';
import { AffiliateCreateNotification } from '../../../shared/notification/affiliate.create.notification';
import { AffiliatesEdit } from './report/affiliates.edit';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
var AffiliatesList = /** @class */ (function (_super) {
    __extends(AffiliatesList, _super);
    function AffiliatesList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AffiliatesList.prototype.componentDidMount = function () {
        this.props.reportstore.getRegistrationTypes();
        this.props.reportstore.getAffiliates();
        this.props.reportstore.getWebsites();
    };
    AffiliatesList.prototype.render = function () {
        function showWebsiteData(cell, row) {
            return row.Website.WebsiteName;
        }
        function showRegistrationTypeData(cell, row) {
            return row.RegistrationType.Name;
        }
        return (React.createElement("section", null,
            React.createElement(AffiliateEditNotification, { Message: this.props.reportstore.EditResponse.statusText, IsAffiliateEdit: this.props.reportstore.IsAffiliateEdit }),
            React.createElement(AffiliateEditNotification, { Error: this.props.reportstore.AffliateEditError, IsAffiliateEditError: this.props.reportstore.AffliateEditError }),
            React.createElement(AffiliateCreateNotification, { Message: this.props.reportstore.CreateResponse.statusText, IsAffiliateCreate: this.props.reportstore.IsAffiliateCreate }),
            React.createElement(AffiliateCreateNotification, { Error: this.props.reportstore.AffliateCreateError, IsAffiliateCreate: this.props.reportstore.IsAffiliateCreate }),
            React.createElement("div", { className: "fllter-wrap clearfix" },
                React.createElement(Button, { type: "button", onClick: this.props.reportstore.showCreateAffiliateModal, className: "btn btn-success", style: { marginRight: '10px' } }, "Create Affiliate"),
                React.createElement(Button, { color: "info", onClick: this.props.reportstore.toggleFilterModal },
                    React.createElement("i", { className: "fa fa-search", style: { marginRight: '10px' } }, " "),
                    " Filter"),
                React.createElement(Modal, { isOpen: this.props.reportstore.showFilterModal, toggle: this.props.reportstore.toggleFilterModal },
                    React.createElement(ModalHeader, { toggle: this.props.reportstore.toggleFilterModal }, "Reports Filter"),
                    React.createElement(ModalBody, null,
                        React.createElement("div", { className: "clearfix" },
                            React.createElement(Select, { name: 'WebsiteIDSelected', placeholder: 'Website', controlFunc: this.props.reportstore.handleChange, options: this.props.reportstore.Websites.map(function (w) {
                                    return { name: w.WebsiteName, value: w.WebsiteID };
                                }), selectedOption: this.props.reportstore.WebsiteIDSelected }),
                            React.createElement(Select, { name: 'RegistrationTypeIdSelected', placeholder: 'Registration Type', controlFunc: this.props.reportstore.handleChange, options: this.props.reportstore.RegistrationTypes.map(function (w) {
                                    return { name: w.Name, value: w.RegistrationTypeID };
                                }), selectedOption: this.props.reportstore.RegistrationTypeIdSelected })),
                        React.createElement("div", { className: "divider" }),
                        React.createElement("div", null,
                            React.createElement("button", { className: "btn btn-success pull-right", onClick: this.props.reportstore.affiliateFilter }, "Apply Filter"))),
                    React.createElement(ModalFooter, null))),
            React.createElement("div", { className: "table-responsive" }, this.props.reportstore.Affiliateloading ? React.createElement("div", { className: "loaderImg" }) : React.createElement(BootstrapTable, { data: this.props.reportstore.Affiliatedata, pagination: true, containerStyle: { width: '100%' }, options: { noDataText: 'No affiliates match your filter' }, striped: true, hover: true, responsive: true },
                React.createElement(TableHeaderColumn, { dataField: "WebsiteID", dataFormat: showWebsiteData, isKey: true, dataSort: true }, "Website"),
                React.createElement(TableHeaderColumn, { dataField: "AffiliateCode", dataSort: true }, "Affiliate Code"),
                React.createElement(TableHeaderColumn, { width: '90px', dataField: "Name", dataSort: true }, "Name"),
                React.createElement(TableHeaderColumn, { width: '160px', dataField: "CurrencyCode", dataSort: true }, "Currency Code"),
                React.createElement(TableHeaderColumn, { dataField: "CurrentCPA", dataSort: true }, "Current CPA"),
                React.createElement(TableHeaderColumn, { dataField: "data", dataFormat: showRegistrationTypeData, dataSort: true }, "Registration"),
                React.createElement(TableHeaderColumn, { dataField: "OverrideHasOffersPayout", dataSort: true }, "Override Has Offers Payout"),
                React.createElement(TableHeaderColumn, { dataField: "CostingModelID", dataSort: true }, "Costing Model"),
                React.createElement(TableHeaderColumn, { dataField: "HasOffersAffiliateID", dataSort: true }, "HasOffers Affiliate ID"),
                React.createElement(TableHeaderColumn, { width: '70px', dataField: "data", dataFormat: this.props.reportstore.buttonAffiliateFunction.bind(this) }, "Action"))),
            React.createElement("section", null,
                React.createElement(AffiliatesEdit, null))));
    };
    AffiliatesList = __decorate([
        inject('reportstore'),
        observer
    ], AffiliatesList);
    return AffiliatesList;
}(React.Component));
export { AffiliatesList };
//# sourceMappingURL=affiliates.list.component.js.map
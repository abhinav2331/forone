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
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { observer, inject } from 'mobx-react';
import moment from 'moment/moment.js';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { SelectFormElement } from '../../../../shared/formelement/select.formelement';
import { SelectTypeID } from '../../../../shared/formelement/select.type.id';
import { NotificationMessage } from '../../../../shared/notification/import.offers.notification';
var ImportOffer = /** @class */ (function (_super) {
    __extends(ImportOffer, _super);
    function ImportOffer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImportOffer.prototype.render = function () {
        function dateFormatter(cell) {
            if (!cell) {
                return "";
            }
            return "" + (moment(cell).format("DD-MM-YYYY HH:MM:SS") ? moment(cell).format("DD-MM-YYYY HH:MM:SS") : moment(cell).format("DD-MM-YYYY HH:MM:SS"));
        }
        var options = { sizePerPage: 5, noDataText: 'No data found in Table!' };
        return (React.createElement("section", null,
            React.createElement(NotificationMessage, { Message: this.props.importofferstore.data.statusText, IsNotify: this.props.importofferstore.IsNotify }),
            React.createElement(NotificationMessage, { Status: this.props.importofferstore.errordata, IsNotifyError: this.props.importofferstore.IsNotifyError }),
            React.createElement(NotificationMessage, { Error: this.props.importofferstore.AffiliateNetworkError, IsAffiliateError: this.props.importofferstore.IsAffiliateError }),
            React.createElement(Modal, { isOpen: this.props.importofferstore.modalImportoffer, toggle: this.props.importofferstore.toggleImportoffer },
                React.createElement(ModalHeader, { toggle: this.props.importofferstore.toggleImportoffer }, "Import offer from networks "),
                React.createElement(ModalBody, null,
                    React.createElement("section", null,
                        React.createElement(Modal, { isOpen: this.props.importofferstore.modal, toggle: this.props.importofferstore.toggle },
                            React.createElement(ModalHeader, { toggle: this.props.importofferstore.toggle }, "Please select the Publisher and Types before proceed. "),
                            React.createElement(ModalBody, null,
                                React.createElement("div", { className: "row" },
                                    React.createElement("div", { className: "col-md-6" },
                                        React.createElement("div", { className: "form-group" },
                                            React.createElement("div", { className: "form_label" }, "Publisher"),
                                            React.createElement(SelectFormElement, { name: 'SupplierID', placeholder: 'Publisher', controlFunc: this.props.importofferstore.handleImportOffersChange, options: this.props.campaignstore.Publisher }))),
                                    React.createElement("div", { className: "col-md-6" },
                                        React.createElement("div", { className: "form-group" },
                                            React.createElement("div", { className: "form_label" }, "Campaign type"),
                                            React.createElement(SelectTypeID, { name: 'TypeID', placeholder: 'Campaign type', controlFunc: this.props.importofferstore.handleImportOffersChange, options: this.props.importofferstore.TypesNew }))))),
                            React.createElement(ModalFooter, null,
                                React.createElement("button", { type: "button", className: "btn btn-info", onClick: this.props.importofferstore.toggle }, "Close"),
                                React.createElement("button", { type: "submit", style: { marginLeft: '10px' }, onClick: this.props.importofferstore.handleOfferSubmit, className: "btn btn-success" }, "Proceed")))),
                    this.props.campaignstore.loadingNetwork ? React.createElement("div", { className: "row disabled" },
                        React.createElement("div", { className: "col-md-9" },
                            React.createElement(SelectFormElement, { name: 'NetworkID', placeholder: 'Affiliate Network', controlFunc: this.props.importofferstore.changeAffiliateNetwork, options: this.props.campaignstore.AffiliateNetwork })),
                        React.createElement("div", { className: "col-md-3" },
                            React.createElement("button", { onClick: this.props.importofferstore.networkSearch, className: "btn btn-success pull-right" }, "Search"))) : React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-9" },
                            React.createElement(SelectFormElement, { name: 'NetworkID', placeholder: 'Affiliate Network', controlFunc: this.props.importofferstore.changeAffiliateNetwork, options: this.props.campaignstore.AffiliateNetwork })),
                        React.createElement("div", { className: "col-md-3" }, this.props.importofferstore.ANetworkidCon == "" ? React.createElement("button", { onClick: this.props.importofferstore.networkSearch, disabled: true, className: "btn btn-success pull-right" }, "Search") : React.createElement("button", { onClick: this.props.importofferstore.networkSearch, className: "btn btn-success pull-right" }, "Search"))),
                    this.props.importofferstore.loading ? React.createElement("div", { className: "loaderImg" }) : (React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-12" }, this.props.importofferstore.Networkoffer.length > 0 ? React.createElement(BootstrapTable, { data: this.props.importofferstore.Networkoffer, pagination: true, containerStyle: { width: '100%' }, options: options, striped: true, hover: true },
                            React.createElement(TableHeaderColumn, { dataField: "CampaignId", isKey: true, dataAlign: "left" }, "Offer ID"),
                            React.createElement(TableHeaderColumn, { dataField: "Name" }, "Offer"),
                            React.createElement(TableHeaderColumn, { dataField: "Expirationdate", dataFormat: dateFormatter }, "Expiration date"),
                            React.createElement(TableHeaderColumn, { dataField: "Status" }, "Status"),
                            React.createElement(TableHeaderColumn, { dataField: "button", width: "180px", dataFormat: this.props.importofferstore.buttonOfferFunction.bind(this) }, "Action")) : "")))),
                React.createElement(ModalFooter, null))));
    };
    ImportOffer = __decorate([
        inject('importofferstore', 'campaignstore'),
        observer
    ], ImportOffer);
    return ImportOffer;
}(React.Component));
export { ImportOffer };
//# sourceMappingURL=import.offer.js.map
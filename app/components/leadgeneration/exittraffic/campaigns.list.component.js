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
import { Redirect } from 'react-router';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { observer, inject } from 'mobx-react';
import moment from 'moment/moment.js';
import { withRouter } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Select } from '../../../shared/filterelements/select.dropdown.filter';
import { SelectSimple } from '../../../shared/filterelements/select.dropdown.filter.simple';
import { CampaignEdit } from './campaign/campaign.edit';
import { ImportOffer } from './campaign/import.offer';
import { CampaignImageUpload } from './campaign/campaign.image.upload';
import { CampaignEditNotification } from '../../../shared/notification/campaign.edit.notification';
import { CampaignCreateNotification } from '../../../shared/notification/campaign.create.notification';
import { CampaignAddCreativeNotification } from '../../../shared/notification/campaign.add.creative.notification';
var Campaigns = /** @class */ (function (_super) {
    __extends(Campaigns, _super);
    function Campaigns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Campaigns.prototype.componentDidMount = function () {
        this.props.campaignstore.getCampaigns();
        this.props.campaignstore.getPublisher();
        this.props.campaignstore.getTypes();
        this.props.campaignstore.getStatus();
        this.props.campaignstore.getClients();
        this.props.campaignstore.getCategory();
        this.props.campaignstore.getAffiliatenetworks();
        this.props.importofferstore.getTypesNew();
        this.props.campaignstore.getPlacements();
    };
    Campaigns.prototype.render = function () {
        function showCreativeAssetsData(cell, row) {
            var apidata = row.Creative.Assets;
            var data = apidata.filter(function (p) {
                return p.Dimensions == "240x175";
            });
            //console.log(data);
            if (data.length > 0) {
                return React.createElement("div", { className: "demoImage" },
                    " ",
                    React.createElement("img", { src: process.env.CDN_PATH + "exittraffic/" + data[0].Dimensions + "/thumbs/" + data[0].Url, alt: "" }));
            }
            else {
                return React.createElement("div", { className: "demoImage" },
                    " ",
                    React.createElement("img", { src: "http://rexdl.com/wp-content/uploads/2016/04/infinite-painter-android-thumb.jpg" }));
            }
        }
        function showStatusData(cell, row) {
            return row.Status.Name;
        }
        function showPublisherData(cell, row) {
            return row.Publisher.Name;
        }
        function dateFormatter(cell) {
            if (!cell) {
                return "";
            }
            return "<div className=\"datenew\">" + (moment(cell).format("DD-MM-YYYY") ? moment(cell).format("DD-MM-YYYY") : moment(cell).format("DD-MM-YYYY")) + "</div>";
        }
        var requiredItem = this.props.campaignstore.requiredItem;
        var Linkurl = '/lead-generation/exit-traffic/campaigns/' + this.props.campaignstore.RevenueCID + '/revenue';
        if (this.props.campaignstore.redirect) {
            return React.createElement(Redirect, { push: true, to: Linkurl });
        }
        return (React.createElement("section", null,
            React.createElement("section", null,
                React.createElement(CampaignCreateNotification, { Message: this.props.campaignstore.dataCreate.statusText, IsNotifyCreate: this.props.campaignstore.IsNotifyCreate }),
                React.createElement(CampaignEditNotification, { Message: this.props.campaignstore.statusText.statusText, IsNotify2: this.props.campaignstore.IsNotify2 }),
                React.createElement(CampaignAddCreativeNotification, { MessageUpload: this.props.campaignstore.ImageUploadStatus.statusText, IsNotifyAddCreative: this.props.campaignstore.IsNotifyAddCreative }),
                React.createElement(CampaignAddCreativeNotification, { MessageUploadError: this.props.campaignstore.ImageUploadError, IsNotifyAddCreativeError: this.props.campaignstore.IsNotifyAddCreativeError }),
                React.createElement("div", { className: "fllter-wrap clearfix" },
                    React.createElement(Button, { type: "button", onClick: this.props.importofferstore.toggleImportoffer, className: "btn btn-primary", style: { marginRight: '10px' } }, "Import Offer"),
                    React.createElement(Button, { type: "button", onClick: this.props.campaignstore.showCreateCampaignModal, className: "btn btn-success", style: { marginRight: '10px' } }, "Create Campaign"),
                    React.createElement(Button, { className: "", color: "info", onClick: this.props.campaignstore.toggleModal },
                        React.createElement("i", { className: "fa fa-search", style: { marginRight: '10px' } }, " "),
                        " Filter"),
                    React.createElement("div", { className: "filter_tags clearfix" },
                        this.props.campaignstore.PublishSelectedData == "" ? "" : React.createElement("div", { className: "tag_item" },
                            this.props.campaignstore.PublishSelectedData,
                            " ",
                            React.createElement("i", { onClick: this.props.campaignstore.campaignClearPublisherFilter, className: "material-icons icon_size" }, "clear")),
                        this.props.campaignstore.TypesSelectedData == "" ? "" : React.createElement("div", { className: "tag_item" },
                            this.props.campaignstore.TypesSelectedData,
                            " ",
                            React.createElement("i", { onClick: this.props.campaignstore.campaignClearTypesFilter, className: "material-icons icon_size" }, "clear")),
                        this.props.campaignstore.StatusSelectedData == "" ? "" : React.createElement("div", { className: "tag_item" },
                            this.props.campaignstore.StatusSelectedData,
                            " ",
                            React.createElement("i", { onClick: this.props.campaignstore.campaignClearStatusFilter, className: "material-icons icon_size" }, "clear")),
                        this.props.campaignstore.ClientsSelected == "" ? "" : React.createElement("div", { className: "tag_item" },
                            this.props.campaignstore.ClientsSelected,
                            " ",
                            React.createElement("i", { onClick: this.props.campaignstore.campaignClearClientFilter, className: "material-icons icon_size" }, "clear"))),
                    React.createElement(Modal, { isOpen: this.props.campaignstore.modal, toggle: this.props.campaignstore.toggleModal },
                        React.createElement(ModalHeader, { toggle: this.props.campaignstore.toggleModal }, "Filter Exit traffic campaigns"),
                        React.createElement(ModalBody, null,
                            React.createElement("div", { className: "clearfix" },
                                React.createElement(Select, { name: 'PublisherSelected', placeholder: 'Publisher', controlFunc: this.props.campaignstore.handleCampaignChangePublisher, options: this.props.campaignstore.Publisher, selectedOption: this.props.campaignstore.PublisherSelected }),
                                React.createElement(Select, { name: 'TypesSelected', placeholder: 'Types', controlFunc: this.props.campaignstore.handleCampaignChangeTypes, options: this.props.campaignstore.CustomTypes, selectedOption: this.props.campaignstore.TypesSelected }),
                                React.createElement(Select, { name: 'StatusSelected', placeholder: 'Status', controlFunc: this.props.campaignstore.handleCampaignChangeStatus, options: this.props.campaignstore.Status, selectedOption: this.props.campaignstore.StatusSelected }),
                                React.createElement(SelectSimple, { name: 'ClientsSelected', placeholder: 'Clients', controlFunc: this.props.campaignstore.handleCampaignChange, options: this.props.campaignstore.Clients, selectedOption: this.props.campaignstore.ClientsSelected })),
                            React.createElement("div", { className: "divider" }),
                            React.createElement("div", null,
                                React.createElement("button", { className: "btn btn-success pull-right", onClick: this.props.campaignstore.campaignFilter }, "Apply Filter"))),
                        React.createElement(ModalFooter, null))),
                React.createElement("div", { className: "table-responsive searchFeature" }, this.props.campaignstore.loading ? React.createElement("div", { className: "loaderImg" }) : React.createElement(BootstrapTable, { data: this.props.campaignstore.Campaigndata, pagination: true, containerStyle: { width: '100%' }, options: { noDataText: 'No data found in Campaign Table!' }, striped: true, hover: true, search: true },
                    React.createElement(TableHeaderColumn, { width: '120px', dataField: "CampaignID", isKey: true, dataAlign: "left", dataSort: true }, "ID"),
                    React.createElement(TableHeaderColumn, { width: '120px', dataField: "data", dataFormat: showCreativeAssetsData }, "Assets"),
                    React.createElement(TableHeaderColumn, { width: "300px", dataField: "Name", dataSort: true }, "Name"),
                    React.createElement(TableHeaderColumn, { dataField: "data", dataFormat: showPublisherData, dataSort: true }, "Publisher"),
                    React.createElement(TableHeaderColumn, { dataField: "Type" }, "Type"),
                    React.createElement(TableHeaderColumn, { dataField: "ClientName", dataSort: true }, "Client"),
                    React.createElement(TableHeaderColumn, { dataField: "data", dataFormat: showStatusData }, "Status"),
                    React.createElement(TableHeaderColumn, { dataField: "ExpiryDateTimeUtc", dataFormat: dateFormatter, dataSort: true }, "Expires"),
                    React.createElement(TableHeaderColumn, { width: "200px", dataField: "button", dataFormat: this.props.campaignstore.buttonFunction.bind(this) }, "Action"))),
                React.createElement(CampaignEdit, null),
                React.createElement("section", null,
                    React.createElement(ImportOffer, null)),
                React.createElement("section", null,
                    React.createElement(CampaignImageUpload, null)))));
    };
    Campaigns = __decorate([
        inject('campaignstore', 'importofferstore'),
        withRouter,
        observer
    ], Campaigns);
    return Campaigns;
}(React.Component));
export { Campaigns };
//# sourceMappingURL=campaigns.list.component.js.map
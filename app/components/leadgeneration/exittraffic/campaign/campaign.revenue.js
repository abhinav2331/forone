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
import { Button } from 'reactstrap';
import { CampaignRevenueNotification } from '../../../../shared/notification/campaign.revenue.notification';
import { CampaignRevenueEdit } from './campaign.revenue.edit';
var CampaignsRevenue = /** @class */ (function (_super) {
    __extends(CampaignsRevenue, _super);
    function CampaignsRevenue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CampaignsRevenue.prototype.componentDidMount = function () {
        this.props.campaignstore.getCampaignRevenue();
    };
    CampaignsRevenue.prototype.render = function () {
        function payoutFormatter(cell, row) {
            return React.createElement("span", null,
                row.PayoutType,
                " ",
                "",
                "   ",
                row.PayoutRate,
                " ");
        }
        function automaticFormatter(cell, row) {
            if (row.DisableAutomaticUpdate == true) {
                return '<div><img src="/public/images/check.png" alt="true" /></div>';
            }
            else {
                return '<div><img src="/public/images/close.png" alt="false" /></div>';
            }
        }
        function dateFormatter(cell) {
            if (!cell) {
                return "";
            }
            return "<div className=\"datenew\">" + (moment(cell).format("DD-MMM-YYYY") ? moment(cell).format("DD-MMM-YYYY") : moment(cell).format("DD-MMM-YYYY")) + "</div>";
        }
        return (React.createElement("section", null,
            React.createElement(CampaignRevenueNotification, { CampaignRevenueCreateMessage: this.props.campaignstore.RevenueStatus.statusText, IsNotifyCreateRevenue: this.props.campaignstore.IsNotifyCreateRevenue }),
            React.createElement(CampaignRevenueNotification, { CampaignRevenueCreateErrorMessage: this.props.campaignstore.RevenueError, IsRevenueCreateError: this.props.campaignstore.IsRevenueCreateError }),
            React.createElement(CampaignRevenueNotification, { CampaignRevenueEditMessage: this.props.campaignstore.RevenueStatusEdit.statusText, IsNotifyEditRevenue: this.props.campaignstore.IsNotifyEditRevenue }),
            React.createElement(CampaignRevenueNotification, { CampaignRevenueEditErrorMessage: this.props.campaignstore.RevenueError, IsRevenueEditError: this.props.campaignstore.IsRevenueEditError }),
            React.createElement("div", { style: { marginBottom: "20px" } },
                React.createElement(Button, { type: "button", color: "success", onClick: this.props.campaignstore.showCreateCampaignRevenueModal, className: "btn btn-success", style: { marginRight: '10px' } }, "Create Revenue")),
            React.createElement("section", null,
                React.createElement("div", { className: "table-responsive" },
                    React.createElement(BootstrapTable, { data: this.props.campaignstore.CampaignRevenueObj, pagination: true, containerStyle: { width: '100%' }, options: { noDataText: 'No data found in Campaign Table!' }, striped: true, hover: true, responsive: true },
                        React.createElement(TableHeaderColumn, { dataField: "RevenueID", isKey: true, dataAlign: "left", dataSort: true }, "Revenue ID"),
                        React.createElement(TableHeaderColumn, { dataField: "PeriodStart", dataAlign: "left", dataFormat: dateFormatter, dataSort: true }, "Period From"),
                        React.createElement(TableHeaderColumn, { dataField: "PeriodEnd", dataAlign: "left", dataFormat: dateFormatter, dataSort: true }, "Period To"),
                        React.createElement(TableHeaderColumn, { dataField: "RevenueCurrency", dataAlign: "left", dataSort: true }, "Currency"),
                        React.createElement(TableHeaderColumn, { dataField: "data", dataAlign: "left", dataFormat: payoutFormatter, dataSort: true }, "Payout Type"),
                        React.createElement(TableHeaderColumn, { dataField: "BillableCount", dataAlign: "left", dataSort: true }, "Billable Count"),
                        React.createElement(TableHeaderColumn, { dataField: "Revenue", dataAlign: "left", dataSort: true }, "Revenue"),
                        React.createElement(TableHeaderColumn, { dataField: "data", dataAlign: "center", dataFormat: automaticFormatter, dataSort: true }, "Disable Automatic Update"),
                        React.createElement(TableHeaderColumn, { dataField: "InvoiceNotes", dataAlign: "left", dataSort: true }, "InvoiceNotes"),
                        React.createElement(TableHeaderColumn, { width: "90px", dataField: "Buttons", dataAlign: "left", dataFormat: this.props.campaignstore.buttonRevenueFunction.bind(this) }, "Actions")))),
            React.createElement("section", null,
                React.createElement(CampaignRevenueEdit, null))));
    };
    CampaignsRevenue = __decorate([
        inject('campaignstore'),
        observer
    ], CampaignsRevenue);
    return CampaignsRevenue;
}(React.Component));
export { CampaignsRevenue };
//# sourceMappingURL=campaign.revenue.js.map
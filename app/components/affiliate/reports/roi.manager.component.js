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
//import { RoiCreate } from './report/roi.create';
import { RoiEdit } from './report/roi.edit';
import { AffiliateCreateNotification } from '../../../shared/notification/affiliate.create.notification';
import { Button } from 'reactstrap';
var RoiManagerList = /** @class */ (function (_super) {
    __extends(RoiManagerList, _super);
    function RoiManagerList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoiManagerList.prototype.componentDidMount = function () {
        this.props.reportstore.getRoimanagerList();
        this.props.reportstore.getRoiAffiliate();
        this.props.reportstore.getWebsiteid();
        this.props.reportstore.getAffiliates();
    };
    RoiManagerList.prototype.render = function () {
        function automaticFormatter(cell, row) {
            if (row.RoiTrackingWebsiteID == 1) {
                return 'offerx.co.uk';
            }
            if (row.RoiTrackingWebsiteID == 3) {
                return 'yourfreebeistyle.co.uk';
            }
        }
        return (React.createElement("section", null,
            React.createElement(AffiliateCreateNotification, { MessageRoiCreate: this.props.reportstore.RoiCreateResponse.statusText, isRoiCreated: this.props.reportstore.isRoiCreated }),
            React.createElement(AffiliateCreateNotification, { ErrorRoiCreate: this.props.reportstore.RoiCreateError, isRoiCreatedError: this.props.reportstore.isRoiCreated }),
            React.createElement(AffiliateCreateNotification, { MessageRoiEdit: this.props.reportstore.RoiEditResponse.statusText, isRoiEdited: this.props.reportstore.isRoiEdited }),
            React.createElement(AffiliateCreateNotification, { ErrorRoiEdit: this.props.reportstore.RoiEditError, isRoiEditedError: this.props.reportstore.isRoiCreated }),
            React.createElement("div", { className: "fllter-wrap clearfix" },
                React.createElement(Button, { type: "button", onClick: this.props.reportstore.showROICreateModal, className: "btn btn-success", style: { marginRight: '10px' } }, "Create Affiliate")),
            React.createElement("div", { className: "table-responsive" }, this.props.reportstore.Roiloading ? React.createElement("div", { className: "loaderImg" }) : React.createElement(BootstrapTable, { data: this.props.reportstore.Roilistsdata, pagination: true, containerStyle: { width: '100%' }, options: { noDataText: 'No data found in Table!' }, hover: true, responsive: true },
                React.createElement(TableHeaderColumn, { dataField: "RoiTrackingWebsiteID", dataFormat: automaticFormatter, isKey: true, dataSort: true }, "Website"),
                React.createElement(TableHeaderColumn, { dataField: "AffiliateID", dataSort: true }, "Affiliate"),
                React.createElement(TableHeaderColumn, { dataField: "ProfitMarginThreshold", dataSort: true }, "Profit Margin Threshold"),
                React.createElement(TableHeaderColumn, { width: '160px', dataField: "PayPercentage", dataSort: true }, "Pay Percentage"),
                React.createElement(TableHeaderColumn, { dataField: "CurrentCPA", dataSort: true }, "Number of Registration"),
                React.createElement(TableHeaderColumn, { width: '70px', dataField: "data", dataFormat: this.props.reportstore.buttonRoiFunction.bind(this) }, "Action"))),
            React.createElement(RoiEdit, null)));
    };
    RoiManagerList = __decorate([
        inject('reportstore'),
        observer
    ], RoiManagerList);
    return RoiManagerList;
}(React.Component));
export { RoiManagerList };
//# sourceMappingURL=roi.manager.component.js.map
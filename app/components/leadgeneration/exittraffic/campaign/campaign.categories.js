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
import { Button } from 'reactstrap';
import { CategoryEdit } from './category.edit';
import { CategoryNotification } from '../../../../shared/notification/category.notification';
var CampaignCategories = /** @class */ (function (_super) {
    __extends(CampaignCategories, _super);
    function CampaignCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CampaignCategories.prototype.componentDidMount = function () {
        this.props.campaigncategory.getAllCategory();
    };
    CampaignCategories.prototype.render = function () {
        return (React.createElement("section", null,
            React.createElement("section", null,
                React.createElement(CategoryNotification, { CatCreateMessage: this.props.campaigncategory.CatCreateStatus.statusText, IsNotifyCatCreate: this.props.campaigncategory.IsNotifyCatCreate }),
                React.createElement(CategoryNotification, { CatEditMessage: this.props.campaigncategory.CatEditStatus.statusText, IsNotifyCatEdit: this.props.campaigncategory.IsNotifyCatEdit }),
                React.createElement(CategoryNotification, { CatCreatErroreMessage: this.props.campaigncategory.CatCreatErrore, IsNotifyCatCreateError: this.props.campaigncategory.IsNotifyCatCreateError }),
                React.createElement("div", { className: "fllter-wrap clearfix" },
                    React.createElement(Button, { type: "button", onClick: this.props.campaigncategory.showCategoryCreateModal, className: "btn btn-success", style: { marginRight: '10px' } }, "Create Category")),
                React.createElement("div", { className: "table-responsive" }, this.props.campaigncategory.loading ? React.createElement("div", { className: "loaderImg" }) : React.createElement(BootstrapTable, { data: this.props.campaigncategory.Categories, pagination: true, containerStyle: { width: '100%' }, options: { noDataText: 'No data found in Campaign Table!' }, striped: true, hover: true, responsive: true },
                    React.createElement(TableHeaderColumn, { width: "350px", dataField: "Name", isKey: true, dataAlign: "left", dataSort: true }, "Name"),
                    React.createElement(TableHeaderColumn, { dataField: "Url", dataAlign: "left", dataSort: true }, "Url"),
                    React.createElement(TableHeaderColumn, { width: "90px", dataField: "Buttons", dataAlign: "left", dataFormat: this.props.campaigncategory.buttonCatEditFunction.bind(this) }, "Actions")))),
            React.createElement(CategoryEdit, null)));
    };
    CampaignCategories = __decorate([
        inject('campaignstore', 'campaigncategory'),
        observer
    ], CampaignCategories);
    return CampaignCategories;
}(React.Component));
export { CampaignCategories };
//# sourceMappingURL=campaign.categories.js.map
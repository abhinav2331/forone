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
import { SelectFormElement } from '../../../shared/formelement/select.formelement';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
var RegistrationCostReport = /** @class */ (function (_super) {
    __extends(RegistrationCostReport, _super);
    function RegistrationCostReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegistrationCostReport.prototype.componentDidMount = function () {
        this.props.reportstore.getRegistrationTypes();
        this.props.reportstore.getAffiliates();
        this.props.reportstore.getWebsites();
    };
    RegistrationCostReport.prototype.render = function () {
        return (React.createElement("section", null,
            React.createElement("div", { className: "fllter-wrap clearfix" },
                React.createElement(Button, { color: "info", onClick: this.props.reportstore.toggleFilterModal },
                    React.createElement("i", { className: "fa fa-search", style: { marginRight: '10px' } }, " "),
                    " Filter"),
                React.createElement(Modal, { isOpen: this.props.reportstore.showFilterModal, toggle: this.props.reportstore.toggleFilterModal },
                    React.createElement(ModalHeader, { toggle: this.props.reportstore.toggleFilterModal }, "Cost Report Filter"),
                    React.createElement(ModalBody, null,
                        React.createElement("div", { className: "form_list row" },
                            React.createElement("ul", null,
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Date From"),
                                        React.createElement(DatePicker, { className: "form-control", onChange: this.props.reportstore.handleReportDateFromChange, selected: this.props.reportstore.DateTimeFromSelected }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Date To"),
                                        React.createElement(DatePicker, { className: "form-control", onChange: this.props.reportstore.handleReportDateToChange, selected: this.props.reportstore.DateTimeToSelected }))),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form_label" }, "Date grouping"),
                                    React.createElement(SelectFormElement, { options: [{ name: "Hour", value: "hour" }, { name: "Day", value: "day" }, { name: "Week", value: "week" }, { name: "Month", value: "month" }, { name: "Year", value: "Year" }], controlFunc: this.props.reportstore.handleReportFilterChange, name: 'DateGrouping', selectedOption: this.props.reportstore.costReportFilter.DateGrouping, placeholder: 'select' })),
                                React.createElement("li", { className: "col-md-6" },
                                    React.createElement("div", { className: "form_label" }, "Affiliate"),
                                    React.createElement(SelectFormElement, { options: this.props.reportstore.Affiliatedata.map(function (a) { return { name: a.Name, value: a.AffiliateCode }; }), controlFunc: this.props.reportstore.handleReportFilterChange, name: 'AffiliateCode', selectedOption: this.props.reportstore.costReportFilter.AffiliateCode, placeholder: 'select' })))),
                        React.createElement("div", { className: "divider" }),
                        React.createElement("div", null,
                            React.createElement("button", { className: "btn btn-success pull-right", "data-dismiss": "modal", onClick: this.props.reportstore.applyFilter }, "Apply Filter"))),
                    React.createElement(ModalFooter, null))),
            React.createElement("div", { className: "table-responsive" }, this.props.reportstore.loading ? React.createElement("div", { className: "loaderImg" }) : React.createElement(BootstrapTable, { data: this.props.reportstore.Costreport.Table, keyField: "key" }, this.props.reportstore.columns.map(function (column) { return (React.createElement(TableHeaderColumn, { key: column, dataField: column },
                " ",
                column,
                " ")); })))));
    };
    RegistrationCostReport = __decorate([
        inject('reportstore'),
        observer
    ], RegistrationCostReport);
    return RegistrationCostReport;
}(React.Component));
export { RegistrationCostReport };
//# sourceMappingURL=registration.cost.report.component.js.map
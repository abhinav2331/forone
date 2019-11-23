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
//import { SelectWebsiteidName } from '../../../../shared/formelement/select.websiteid.name';
//import { SelectAffiliateCode } from '../../../../shared/formelement/select.affiliate.code';
import { InputNormal } from '../../../../shared/formelement/input.normal';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
var RoiCreate = /** @class */ (function (_super) {
    __extends(RoiCreate, _super);
    function RoiCreate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RoiCreate.prototype.render = function () {
        return (React.createElement("section", null,
            React.createElement(Modal, { isOpen: this.props.reportstore.RoiCreateModal, toggle: this.props.reportstore.toggleRoiCreateModal },
                React.createElement(ModalHeader, { toggle: this.props.reportstore.toggleRoiCreateModal }, "Target Create Modal"),
                React.createElement(ModalBody, null,
                    React.createElement("section", null,
                        React.createElement("form", { onSubmit: this.props.reportstore.handleRoiCreateSubmit },
                            React.createElement("div", { className: "form_list row" },
                                React.createElement("ul", null,
                                    React.createElement("li", { className: "col-md-6" },
                                        React.createElement("div", { className: "form-group" },
                                            React.createElement("div", { className: "form_label" }, "Website"))),
                                    React.createElement("li", { className: "col-md-6" },
                                        React.createElement("div", { className: "form-group" },
                                            React.createElement("div", { className: "form_label" }, "Affiliate"),
                                            React.createElement(InputNormal, { inputType: 'text', name: 'AffiliateID', controlFunc: this.props.reportstore.handleRoiAffiliateidChange, placeholder: 'Affiliate ID' }))),
                                    React.createElement("li", { className: "col-md-6" },
                                        React.createElement("div", { className: "form-group" },
                                            React.createElement("div", { className: "form_label" }, "Affiliate Code"))),
                                    React.createElement("li", { className: "col-md-6" },
                                        React.createElement("div", { className: "form-group reduce_width" },
                                            React.createElement("div", { className: "form_label" }, "Profit Margin Threshold"),
                                            React.createElement(InputNormal, { inputType: 'text', name: 'ProfitMarginThreshold', controlFunc: this.props.reportstore.handleRoiNormalChange, placeholder: 'Profit Margin Threshold' })),
                                        React.createElement("span", { className: "persentage" }, "%")),
                                    React.createElement("li", { className: "col-md-6" },
                                        React.createElement("div", { className: "form-group reduce_width" },
                                            React.createElement("div", { className: "form_label" }, "Pay Percentage"),
                                            React.createElement(InputNormal, { inputType: 'text', name: 'PayPercentage', controlFunc: this.props.reportstore.handleRoiNormalChange, placeholder: 'Pay Percentage' })),
                                        React.createElement("span", { className: "persentage" }, "%")))),
                            React.createElement("div", { className: "divider" }),
                            React.createElement("button", { type: "submit", style: { marginLeft: '10px' }, className: "btn btn-success pull-right" }, "Create"),
                            React.createElement("button", { type: "button", className: "btn btn-info pull-right", onClick: this.props.reportstore.toggleRoiCreateModal }, "Close")))),
                React.createElement(ModalFooter, null))));
    };
    RoiCreate = __decorate([
        inject('reportstore'),
        observer
    ], RoiCreate);
    return RoiCreate;
}(React.Component));
export { RoiCreate };
//# sourceMappingURL=roi.create.js.map
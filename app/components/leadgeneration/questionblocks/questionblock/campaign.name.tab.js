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
/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import { InputNormal } from '../../../../shared/formelement/input.normal';
var CampaignNameTab = /** @class */ (function (_super) {
    __extends(CampaignNameTab, _super);
    function CampaignNameTab(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    CampaignNameTab.prototype.render = function () {
        return (React.createElement("section", null,
            React.createElement("form", null,
                React.createElement("div", { className: "form_list row" },
                    React.createElement("ul", null,
                        React.createElement("li", { className: "col-md-6" },
                            React.createElement("div", { className: "form-group" },
                                React.createElement("div", { className: "form_label" }, "Admin Name"),
                                React.createElement(InputNormal, { inputType: 'text', name: 'adminname', 
                                    //controlFunc={this.handleChange}
                                    content: this.state.Name, placeholder: 'Campaign Name' }))),
                        React.createElement("li", { className: "col-md-6" },
                            React.createElement("div", { className: "form-group" },
                                React.createElement("div", { className: "form_label" }, "Name on website"),
                                React.createElement(InputNormal, { inputType: 'text', name: 'nameofwebsite', 
                                    //controlFunc={this.handleChange}
                                    content: this.state.Name, placeholder: 'Campaign Name' }))),
                        React.createElement("li", { className: "col-md-6" },
                            React.createElement("div", { className: "form-group" },
                                React.createElement("div", { className: "form_label" }, "Campaign Type"),
                                React.createElement("div", { className: "selectdiv" },
                                    React.createElement("select", null,
                                        React.createElement("option", null, "Campaign Type"))))),
                        React.createElement("li", { className: "col-md-6" },
                            React.createElement("div", { className: "form-group" },
                                React.createElement("div", { className: "form_label" }, "Campaign Contact"),
                                React.createElement(InputNormal, { inputType: 'text', name: 'campaigncontact', 
                                    //controlFunc={this.handleChange}
                                    //content={this.state.Name}
                                    placeholder: 'Campaign Contact' }))),
                        React.createElement("li", { className: "col-md-6" },
                            React.createElement("div", { className: "form-group" },
                                React.createElement("div", { className: "form_label" }, "Invoice Contact"),
                                React.createElement(InputNormal, { inputType: 'text', name: 'invoicecontact', 
                                    //controlFunc={this.handleChange}
                                    content: this.state.Name, placeholder: 'Invoice Contact' }))),
                        React.createElement("li", { className: "col-md-6" },
                            React.createElement("div", { className: "form-group" },
                                React.createElement("div", { className: "form_label" }, "Campaign Manager"),
                                React.createElement(InputNormal, { inputType: 'text', name: 'campaignmager', 
                                    //controlFunc={this.handleChange}
                                    content: this.state.Name, placeholder: 'Campaign Manager' }))),
                        React.createElement("li", { className: "col-md-6" },
                            React.createElement("div", { className: "form-group" },
                                React.createElement("div", { className: "form_label" }, "CPA"),
                                React.createElement(InputNormal, { inputType: 'text', name: 'cpa', 
                                    //controlFunc={this.handleChange}
                                    content: this.state.Name, placeholder: 'CPA' }))),
                        React.createElement("li", { className: "col-md-6" },
                            React.createElement("div", { className: "form-group" },
                                React.createElement("div", { className: "form_label" }, "Accept Rate"),
                                React.createElement(InputNormal, { inputType: 'text', name: 'acceptrate', 
                                    //controlFunc={this.handleChange}
                                    content: this.state.Name, placeholder: 'Accept Rate' }))),
                        React.createElement("li", { className: "col-md-6" },
                            React.createElement("div", { className: "form-group" },
                                React.createElement("div", { className: "form_label" }, "Data collection category"),
                                React.createElement("div", { className: "selectdiv" },
                                    React.createElement("select", null,
                                        React.createElement("option", null, "Data collection category"))))),
                        React.createElement("li", { className: "col-md-6" },
                            React.createElement("div", { className: "form-group" },
                                React.createElement("div", { className: "form_label" }, "User interest category"),
                                React.createElement("div", { className: "selectdiv" },
                                    React.createElement("select", null,
                                        React.createElement("option", null, "User interest category"))))),
                        React.createElement("li", { className: "col-md-6" },
                            React.createElement("div", { className: "form-group" },
                                React.createElement("div", { className: "form_label" }, "Market sector"),
                                React.createElement(InputNormal, { inputType: 'text', name: 'marketsector', 
                                    //controlFunc={this.handleChange}
                                    content: this.state.Name, placeholder: 'Market sector' }))),
                        React.createElement("li", { className: "col-md-6" },
                            React.createElement("div", { className: "form-group" },
                                React.createElement("div", { className: "form_label" }, "Channel"),
                                React.createElement(InputNormal, { inputType: 'text', name: 'channel', 
                                    //controlFunc={this.handleChange}
                                    content: this.state.Name, placeholder: 'Channel' })))),
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-12" },
                            React.createElement("div", { className: "divider" }),
                            React.createElement("button", { type: "submit", className: "btn btn-green" }, "Create Campaign"),
                            React.createElement("button", { style: { marginLeft: "10px" }, type: "button", className: "btn btn-danger", "data-dismiss": "modal" }, "Close")))))));
    };
    return CampaignNameTab;
}(React.Component));
export { CampaignNameTab };
//# sourceMappingURL=campaign.name.tab.js.map
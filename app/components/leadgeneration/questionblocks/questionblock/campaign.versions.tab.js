/// <reference path="../../../../../typings/index.d.ts" />
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
import * as React from 'react';
import * as axios from "axios";
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody, } from 'react-accessible-accordion';
import { InputNormal } from '../../../../shared/formelement/input.normal';
import { RadioCheckbox } from '../../../../shared/formelement/radio.checkbox';
var CampaignVersions = /** @class */ (function (_super) {
    __extends(CampaignVersions, _super);
    function CampaignVersions(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            versions: [],
            selectedVersions: []
        };
        _this.handleVersionSelection = _this.handleVersionSelection.bind(_this);
        return _this;
    }
    CampaignVersions.prototype.componentDidMount = function () {
        var _this = this;
        axios.get('http://www.json-generator.com/api/json/get/cgytuKfdki?indent=2')
            .then(function (response) {
            var apidata = response.data;
            //console.log(response.data);
            _this.setState({
                versions: apidata
            });
        });
    };
    CampaignVersions.prototype.handleVersionSelection = function (e) {
        var _this = this;
        var newSelection = e.target.value;
        var newSelectionArray;
        if (this.state.selectedVersions.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.selectedVersions.filter(function (s) { return s !== newSelection; });
        }
        else {
            newSelectionArray = this.state.selectedVersions.concat([newSelection]);
        }
        this.setState({ selectedVersions: newSelectionArray }, function () { return console.log('version selection', _this.state.selectedVersions); });
    };
    CampaignVersions.prototype.render = function () {
        return (React.createElement("section", null,
            React.createElement(Accordion, null,
                React.createElement(AccordionItem, null,
                    React.createElement(AccordionItemTitle, null,
                        React.createElement("span", { className: "alabel" }, "Version 1"),
                        " ",
                        React.createElement("span", { className: "data_label" },
                            "Prize Draw ",
                            React.createElement("i", { className: "fa fa-close" })),
                        React.createElement("span", { className: "data_label" },
                            "Path Sponsor ",
                            React.createElement("i", { className: "fa fa-close" })),
                        React.createElement("div", { className: "accordion__arrow", role: "tab" })),
                    React.createElement(AccordionItemBody, null,
                        React.createElement("div", { className: "version_icons" },
                            React.createElement("span", null,
                                React.createElement("i", { className: "fa fa-shield" })),
                            " ",
                            React.createElement("span", null,
                                React.createElement("i", { className: "fa fa-edit" })),
                            " ",
                            React.createElement("span", null,
                                React.createElement("i", { className: "fa fa-eye" }))),
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-md-12" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("div", { className: "form_label" }, "Name"),
                                    React.createElement(InputNormal, { inputType: 'text', name: 'Name', 
                                        //controlFunc={this.handleChange}
                                        //content={this.state.CampaignsObj.Name}
                                        placeholder: 'Name' })))),
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-md-12" },
                                React.createElement("div", { className: "form-group", style: { backgroundColor: '#f2f2f2', padding: '15px' } },
                                    React.createElement(RadioCheckbox, { setName: 'version', type: 'checkbox', controlFunc: this.handleVersionSelection, options: this.state.versions, selectedOptions: this.state.selectedVersions })))),
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: "col-md-12" },
                                React.createElement("div", { className: "form-group" },
                                    React.createElement("div", { className: "form_label" }, "View"),
                                    React.createElement(InputNormal, { inputType: 'text', name: 'view', 
                                        //controlFunc={this.handleChange}
                                        //content={this.state.CampaignsObj.Name}
                                        placeholder: 'View' })))))),
                React.createElement(AccordionItem, null,
                    React.createElement(AccordionItemTitle, null,
                        React.createElement("div", null,
                            React.createElement("span", { className: "alabel" }, "Version 2"),
                            " ",
                            React.createElement("span", { className: "data_label" },
                                "Prize Draw ",
                                React.createElement("i", { className: "fa fa-close" })),
                            " ",
                            React.createElement("div", { className: "accordion__arrow", role: "presentation" }))),
                    React.createElement(AccordionItemBody, null,
                        React.createElement("p", null, "Body content"))),
                React.createElement(AccordionItem, null,
                    React.createElement(AccordionItemTitle, null,
                        React.createElement("div", null,
                            React.createElement("span", { className: "alabel" }, "Version 3"),
                            " ",
                            React.createElement("div", { className: "accordion__arrow", role: "presentation" }))),
                    React.createElement(AccordionItemBody, null,
                        React.createElement("p", null, "Body content"))))));
    };
    return CampaignVersions;
}(React.Component));
export { CampaignVersions };
//# sourceMappingURL=campaign.versions.tab.js.map
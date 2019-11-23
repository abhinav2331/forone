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
/// <reference path="../../../../typings/index.d.ts" />
import * as React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import { CampaignNameTab } from './questionblock/campaign.name.tab';
import { CampaignVersions } from './questionblock/campaign.versions.tab';
import { VersionCreatives } from './questionblock/version.creatives';
var QuestionBlockCampaign = /** @class */ (function (_super) {
    __extends(QuestionBlockCampaign, _super);
    function QuestionBlockCampaign(props) {
        var _this = _super.call(this, props) || this;
        _this.toggle = _this.toggle.bind(_this);
        _this.state = {
            QuestionBlock: [],
            activeTab: '1'
        };
        return _this;
    }
    QuestionBlockCampaign.prototype.toggle = function (tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    };
    QuestionBlockCampaign.prototype.render = function () {
        var _this = this;
        return (React.createElement("section", null,
            React.createElement("div", null,
                React.createElement(Nav, { tabs: true },
                    React.createElement(NavItem, null,
                        React.createElement(NavLink, { className: classnames({ active: this.state.activeTab === '1' }), onClick: function () { _this.toggle('1'); } }, "Campaign Name")),
                    React.createElement(NavItem, null,
                        React.createElement(NavLink, { className: classnames({ active: this.state.activeTab === '2' }), onClick: function () { _this.toggle('2'); } }, "Versions")),
                    React.createElement(NavItem, null,
                        React.createElement(NavLink, { className: classnames({ active: this.state.activeTab === '3' }), onClick: function () { _this.toggle('3'); } }, "Segmentation")),
                    React.createElement(NavItem, null,
                        React.createElement(NavLink, { className: classnames({ active: this.state.activeTab === '4' }), onClick: function () { _this.toggle('4'); } }, "Limits")),
                    React.createElement(NavItem, null,
                        React.createElement(NavLink, { className: classnames({ active: this.state.activeTab === '5' }), onClick: function () { _this.toggle('5'); } }, "Lead Delivery"))),
                React.createElement(TabContent, { activeTab: this.state.activeTab },
                    React.createElement(TabPane, { tabId: "1" },
                        React.createElement(Row, null,
                            React.createElement(Col, { sm: "12" },
                                React.createElement(CampaignNameTab, null)))),
                    React.createElement(TabPane, { tabId: "2" },
                        React.createElement(Row, null,
                            React.createElement(Col, { sm: "6" },
                                React.createElement(CampaignVersions, null)),
                            React.createElement(Col, { sm: "6", className: "pos-static" },
                                React.createElement(VersionCreatives, null)))),
                    React.createElement(TabPane, { tabId: "3" },
                        React.createElement(Row, null,
                            React.createElement(Col, { sm: "12" },
                                React.createElement("h4", null, "Tab 3 Contents")))),
                    React.createElement(TabPane, { tabId: "4" },
                        React.createElement(Row, null,
                            React.createElement(Col, { sm: "12" },
                                React.createElement("h4", null, "Tab 4 Contents")))),
                    React.createElement(TabPane, { tabId: "5" },
                        React.createElement(Row, null,
                            React.createElement(Col, { sm: "12" },
                                React.createElement("h4", null, "Tab 5 Contents"))))))));
    };
    return QuestionBlockCampaign;
}(React.Component));
export { QuestionBlockCampaign };
//# sourceMappingURL=question.block.campaign.component.js.map
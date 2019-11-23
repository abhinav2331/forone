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
/// <reference path="../typings/index.d.ts" />
import * as React from 'react';
import { Provider } from 'mobx-react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { App } from './App';
import { ReportStore } from './components/affiliate/reports/stores/reportstore.service';
import { CampaignStore } from './components/leadgeneration/exittraffic/stores/campaign.service';
import { ImportOfferStore } from './components/leadgeneration/exittraffic/stores/importoffer.service';
import { UsersStore } from './components/users/stores/users.service';
import { CampaignCategory } from './components/leadgeneration/exittraffic/stores/campaign.categories.service';
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Main.prototype.render = function () {
        return (React.createElement("div", { className: "container-fluid" },
            React.createElement("div", { className: "row" },
                React.createElement("div", { className: "col-md-12" },
                    React.createElement("div", { className: "card" },
                        React.createElement("div", { className: "card-body" },
                            React.createElement(App, null)))))));
    };
    Main = __decorate([
        inject('reportstore', 'campaignstore', 'importofferstore', 'usersstore', 'campaigncategory'),
        observer
    ], Main);
    return Main;
}(React.Component));
var reportstore = new ReportStore();
var campaignstore = new CampaignStore();
var importofferstore = new ImportOfferStore();
var usersstore = new UsersStore();
var campaigncategory = new CampaignCategory();
if (typeof window !== 'undefined') {
    ReactDOM.render(React.createElement(Provider, { reportstore: reportstore, campaignstore: campaignstore, importofferstore: importofferstore, usersstore: usersstore, campaigncategory: campaigncategory },
        React.createElement(Router, null,
            React.createElement(Main, null))), document.getElementById('root'));
}
//# sourceMappingURL=main.js.map
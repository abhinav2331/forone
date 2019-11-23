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
import { observer, inject } from 'mobx-react';
import { BrowserRouter, Switch, Route, Link, withRouter } from 'react-router-dom';
//const Loadable = require("react-loadable");
//import Loadable from 'react-loadable';
//import { Home } from './home';
//============== Chunks Start
// loading view
//export const LoadingComponent = () => <h3>Please wait... Craig :)</h3>
// Campaign List
{ /*export const AsyncCampaigns = Loadable({
    loader: () => import('./components/leadgeneration/exittraffic/campaigns.list.component'),
    loading: LoadingComponent
})*/
}
// QuestionBlockCampaign
{ /*export const AsyncQuestionBlockCampaign = Loadable({
    loader: () => import('./components/leadgeneration/questionblocks/question.block.campaign.component'),
    loading: LoadingComponent
});*/
}
import { Campaigns } from './components/leadgeneration/exittraffic/campaigns.list.component';
import { QuestionBlockCampaign } from './components/leadgeneration/questionblocks/question.block.campaign.component';
import { RegistrationCostReport } from './components/affiliate/reports/registration.cost.report.component';
import { AffiliatesList } from './components/affiliate/reports/affiliates.list.component';
import { UsersList } from './components/users/users.component';
import { CampaignsRevenue } from './components/leadgeneration/exittraffic/campaign/campaign.revenue';
import { CampaignCategories } from './components/leadgeneration/exittraffic/campaign/campaign.categories';
import { RoiManagerList } from './components/affiliate/reports/roi.manager.component';
//============== Chunks End
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        //let campaignid = 'this.props.campaignstore.RevenueCID';
        var Linkurl = '/lead-generation/exit-traffic/campaigns/' + this.props.campaignstore.RevenueCID + '/revenue';
        //let Linkurl = 'lead-generation/exit-traffic/campaigns/:{campaignid}/revenue';
        return (React.createElement("section", null,
            React.createElement(BrowserRouter, null,
                React.createElement("section", null,
                    React.createElement("nav", null,
                        React.createElement("ul", null,
                            React.createElement("li", null,
                                React.createElement(Link, { exact: "true", to: '/lead-generation/exit-traffic/campaigns' }, "Campaign List")),
                            React.createElement("li", null,
                                React.createElement(Link, { exact: "true", to: '/lead-generation/exit-traffic/questionblockcampaign' }, "Question Block Campaign")),
                            React.createElement("li", null,
                                React.createElement(Link, { exact: "true", to: '/affiliates/reports/website-traffic' }, "Registration Cost Report")),
                            React.createElement("li", null,
                                React.createElement(Link, { exact: "true", to: '/affiliates/admin/manager' }, "Affiliates List")),
                            React.createElement("li", null,
                                React.createElement(Link, { exact: "true", to: '/configuration/accounts/manage-users' }, "Users")),
                            React.createElement("li", null,
                                React.createElement(Link, { exact: "true", to: '/affiliates/admin/roi-manager' }, "ROI")))),
                    React.createElement(Switch, null,
                        React.createElement(Route, { exact: true, path: '/lead-generation/exit-traffic/campaigns', component: Campaigns }),
                        React.createElement(Route, { path: '/lead-generation/question-blocks/campaigns', component: QuestionBlockCampaign }),
                        React.createElement(Route, { path: '/affiliates/reports/website-traffic', component: RegistrationCostReport }),
                        React.createElement(Route, { path: '/affiliates/admin/manager', component: AffiliatesList }),
                        React.createElement(Route, { path: '/configuration/accounts/manage-users', component: UsersList }),
                        React.createElement(Route, { path: Linkurl, component: CampaignsRevenue }),
                        React.createElement(Route, { path: '/lead-generation/configuration/categories', component: CampaignCategories }),
                        React.createElement(Route, { path: '/affiliates/admin/roi-manager', component: RoiManagerList }))))));
    };
    App = __decorate([
        inject('reportstore', 'campaignstore', 'importofferstore', 'usersstore', 'campaigncategory'),
        withRouter,
        observer
    ], App);
    return App;
}(React.Component));
export { App };
//# sourceMappingURL=App.js.map
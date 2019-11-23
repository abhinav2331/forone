/// <reference path="../typings/index.d.ts" />
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { BrowserRouter, Switch, Route, Link, withRouter, Redirect } from 'react-router-dom';

//const Loadable = require("react-loadable");
//import Loadable from 'react-loadable';


//import { Home } from './home';

//============== Chunks Start
// loading view
//export const LoadingComponent = () => <h3>Please wait... Craig :)</h3>

// Campaign List
{/*export const AsyncCampaigns = Loadable({
    loader: () => import('./components/leadgeneration/exittraffic/campaigns.list.component'),
    loading: LoadingComponent    
})*/}
// QuestionBlockCampaign
{/*export const AsyncQuestionBlockCampaign = Loadable({
    loader: () => import('./components/leadgeneration/questionblocks/question.block.campaign.component'),
    loading: LoadingComponent    
});*/}

import { Campaigns } from './components/leadgeneration/exittraffic/campaigns.list.component';
import { QuestionBlockCampaign } from './components/leadgeneration/questionblocks/question.block.campaign.component';
import { RegistrationCostReport } from './components/affiliate/reports/registration.cost.report.component';
import { AffiliatesList } from './components/affiliate/reports/affiliates.list.component';
import { UsersList } from './components/users/users.component';
import { CampaignsRevenue } from './components/leadgeneration/exittraffic/campaign/campaign.revenue';
import { CampaignCategories } from './components/leadgeneration/exittraffic/campaign/campaign.categories';
import { RoiManagerList } from './components/affiliate/reports/roi.manager.component';


//============== Chunks End

@inject('reportstore', 'campaignstore', 'importofferstore', 'usersstore', 'campaigncategory')
@withRouter
@observer
export class App extends React.Component<any, any> {
   
    render() {
        //let campaignid = 'this.props.campaignstore.RevenueCID';
        let Linkurl = '/lead-generation/exit-traffic/campaigns/' + this.props.campaignstore.RevenueCID + '/revenue';
        //let Linkurl = 'lead-generation/exit-traffic/campaigns/:{campaignid}/revenue';

        return (
            <section> 
                <BrowserRouter>
                    <section>
                        <nav>
                            <ul>
                                <li><Link exact="true" to='/lead-generation/exit-traffic/campaigns'>Campaign List</Link></li>
                                <li><Link exact="true" to='/lead-generation/exit-traffic/questionblockcampaign'>Question Block Campaign</Link></li>
                                <li><Link exact="true" to='/affiliates/reports/website-traffic'>Registration Cost Report</Link></li>
                                <li><Link exact="true" to='/affiliates/admin/manager'>Affiliates List</Link></li>
                                <li><Link exact="true" to='/configuration/accounts/manage-users'>Users</Link></li>
                                <li><Link exact="true" to='/affiliates/admin/roi-manager'>ROI</Link></li>
                            </ul>
                        </nav>
                        <Switch>
                            <Route exact path='/lead-generation/exit-traffic/campaigns' component={Campaigns} />
                            <Route path='/lead-generation/question-blocks/campaigns' component={QuestionBlockCampaign} />
                            <Route path='/affiliates/reports/website-traffic' component={RegistrationCostReport} />
                            <Route path='/affiliates/admin/manager' component={AffiliatesList} />
                            <Route path='/configuration/accounts/manage-users' component={UsersList} />
                            <Route path={Linkurl} component={CampaignsRevenue} />
                            <Route path='/lead-generation/configuration/categories' component={CampaignCategories} />
                            <Route path='/affiliates/admin/roi-manager' component={RoiManagerList} />
                        </Switch>
                    </section>
                </BrowserRouter>
            </section>
        )
    }

}
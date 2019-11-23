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



@inject('reportstore', 'campaignstore', 'importofferstore', 'usersstore', 'campaigncategory')
@observer
class Main extends React.Component<any, any> {
   
    render() {        
        
        return (          
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">                                
                                <App />                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const reportstore = new ReportStore();
const campaignstore = new CampaignStore();
const importofferstore = new ImportOfferStore();
const usersstore = new UsersStore();
const campaigncategory = new CampaignCategory();

if (typeof window !== 'undefined') {
    ReactDOM.render(        
        <Provider reportstore={reportstore} campaignstore={campaignstore} importofferstore={importofferstore} usersstore={usersstore} campaigncategory={campaigncategory}>
            <Router>
                <Main />
            </Router>  
        </Provider>
        , document.getElementById('root'));
}
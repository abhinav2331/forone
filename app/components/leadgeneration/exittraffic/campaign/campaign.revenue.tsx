/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as axios from "axios";
import { observer, inject } from 'mobx-react';
import moment from 'moment/moment.js';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup
} from 'reactstrap';


import { CampaignRevenueNotification } from '../../../../shared/notification/campaign.revenue.notification';
import { CampaignRevenueEdit } from './campaign.revenue.edit';

import { CampaignsAll } from '../../../../model/campaign.model';
import { RevenueAll } from '../../../../model/campaign.revenue.model';

interface CampaignsCreateState {
    CampaignsObj: CampaignsAll;
}

@inject('campaignstore')
@observer
export class CampaignsRevenue extends React.Component<any, any> {
    componentDidMount() {
        this.props.campaignstore.getCampaignRevenue();        
    }
    render() {
       
        function payoutFormatter(cell, row) {
            return <span>{row.PayoutType} { "" }   {row.PayoutRate} </span>;
        }

        function automaticFormatter(cell, row) {
            if (row.DisableAutomaticUpdate == true) {
                return '<div><img src="/public/images/check.png" alt="true" /></div>'
            }
            else {
                return '<div><img src="/public/images/close.png" alt="false" /></div>';
            }           
        }

        function dateFormatter(cell: any) {
            if (!cell) {
                return "";
            }
            return `<div className="datenew">${moment(cell).format("DD-MMM-YYYY") ? moment(cell).format("DD-MMM-YYYY") : moment(cell).format("DD-MMM-YYYY")}</div>`;
        }

        return (
            <section>                
                <CampaignRevenueNotification
                    CampaignRevenueCreateMessage={this.props.campaignstore.RevenueStatus.statusText}
                    IsNotifyCreateRevenue={this.props.campaignstore.IsNotifyCreateRevenue}
                />          

                <CampaignRevenueNotification
                    CampaignRevenueCreateErrorMessage={this.props.campaignstore.RevenueError}
                    IsRevenueCreateError={this.props.campaignstore.IsRevenueCreateError}
                />
                <CampaignRevenueNotification
                    CampaignRevenueEditMessage={this.props.campaignstore.RevenueStatusEdit.statusText}
                    IsNotifyEditRevenue={this.props.campaignstore.IsNotifyEditRevenue}
                />  
                <CampaignRevenueNotification
                    CampaignRevenueEditErrorMessage={this.props.campaignstore.RevenueError}
                    IsRevenueEditError={this.props.campaignstore.IsRevenueEditError}
                />
               
                
                <div style={{ marginBottom:"20px" }}>
                    <Button type="button" color="success" onClick={this.props.campaignstore.showCreateCampaignRevenueModal} className="btn btn-success" style={{ marginRight: '10px' }}>Create Revenue</Button>
                </div>

                <section>
                    <div className="table-responsive">
                        <BootstrapTable data={this.props.campaignstore.CampaignRevenueObj} pagination={true} containerStyle={{ width: '100%' }} options={{ noDataText: 'No data found in Campaign Table!' }} striped={true} hover={true} responsive={true}>
                            <TableHeaderColumn dataField="RevenueID" isKey={true} dataAlign="left" dataSort={true}>Revenue ID</TableHeaderColumn>
                            <TableHeaderColumn dataField="PeriodStart" dataAlign="left" dataFormat={dateFormatter} dataSort={true}>Period From</TableHeaderColumn>
                            <TableHeaderColumn dataField="PeriodEnd" dataAlign="left" dataFormat={dateFormatter} dataSort={true}>Period To</TableHeaderColumn>
                            <TableHeaderColumn dataField="RevenueCurrency" dataAlign="left" dataSort={true}>Currency</TableHeaderColumn>
                            <TableHeaderColumn dataField="data" dataAlign="left" dataFormat={payoutFormatter} dataSort={true}>Payout Type</TableHeaderColumn>                        
                            <TableHeaderColumn dataField="BillableCount" dataAlign="left" dataSort={true}>Billable Count</TableHeaderColumn>
                            <TableHeaderColumn dataField="Revenue" dataAlign="left" dataSort={true}>Revenue</TableHeaderColumn>
                            <TableHeaderColumn dataField="data" dataAlign="center" dataFormat={automaticFormatter} dataSort={true}>Disable Automatic Update</TableHeaderColumn>
                            <TableHeaderColumn dataField="InvoiceNotes" dataAlign="left" dataSort={true}>InvoiceNotes</TableHeaderColumn>
                            <TableHeaderColumn width="90px" dataField="Buttons" dataAlign="left" dataFormat={this.props.campaignstore.buttonRevenueFunction.bind(this)}>Actions</TableHeaderColumn>
                        </BootstrapTable>
                   </div>
                </section>
               
                <section>
                    <CampaignRevenueEdit />
                </section>

            </section>
        )
    }

}






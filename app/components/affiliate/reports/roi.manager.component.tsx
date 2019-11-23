/// <reference path="../../../../typings/index.d.ts" />
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import * as axios from "axios";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

//import { RoiCreate } from './report/roi.create';
import { RoiEdit } from './report/roi.edit';
import { AffiliateCreateNotification } from '../../../shared/notification/affiliate.create.notification';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup
} from 'reactstrap';

@inject('reportstore')
@observer
export class RoiManagerList extends React.Component<any, any> {   
    componentDidMount() {
        this.props.reportstore.getRoimanagerList(); 
        this.props.reportstore.getRoiAffiliate();
        this.props.reportstore.getWebsiteid(); 
        this.props.reportstore.getAffiliates(); 
    }
    render() {

        function automaticFormatter(cell, row) {
            if (row.RoiTrackingWebsiteID == 1) {
                return 'offerx.co.uk'
            }
            if (row.RoiTrackingWebsiteID == 3) {
                return 'yourfreebeistyle.co.uk'
            }
        }

        return (
            <section> 
                
                <AffiliateCreateNotification
                    MessageRoiCreate={this.props.reportstore.RoiCreateResponse.statusText}
                    isRoiCreated={this.props.reportstore.isRoiCreated}
                />
                <AffiliateCreateNotification
                    ErrorRoiCreate={this.props.reportstore.RoiCreateError}
                    isRoiCreatedError={this.props.reportstore.isRoiCreated}
                />
                <AffiliateCreateNotification
                    MessageRoiEdit={this.props.reportstore.RoiEditResponse.statusText}
                    isRoiEdited={this.props.reportstore.isRoiEdited}
                />
                <AffiliateCreateNotification
                    ErrorRoiEdit={this.props.reportstore.RoiEditError}
                    isRoiEditedError={this.props.reportstore.isRoiCreated}
                />

                
                <div className="fllter-wrap clearfix">
                    <Button type="button" onClick={this.props.reportstore.showROICreateModal} className="btn btn-success" style={{ marginRight: '10px' }}>Create Affiliate</Button>
                </div>
                <div className="table-responsive">
                    {
                        this.props.reportstore.Roiloading ? <div className="loaderImg"></div> : <BootstrapTable data={this.props.reportstore.Roilistsdata} pagination={true} containerStyle={{ width: '100%' }} options={{ noDataText: 'No data found in Table!' }} hover={true} responsive={true}>
                            <TableHeaderColumn dataField="RoiTrackingWebsiteID" dataFormat={automaticFormatter} isKey={true} dataSort={true}>Website</TableHeaderColumn>
                            <TableHeaderColumn dataField="AffiliateID" dataSort={true}>Affiliate</TableHeaderColumn>
                            <TableHeaderColumn dataField="ProfitMarginThreshold" dataSort={true}>Profit Margin Threshold</TableHeaderColumn>
                            <TableHeaderColumn width='160px' dataField="PayPercentage" dataSort={true}>Pay Percentage</TableHeaderColumn>
                            <TableHeaderColumn dataField="CurrentCPA" dataSort={true}>Number of Registration</TableHeaderColumn>                            
                            <TableHeaderColumn width='70px' dataField="data" dataFormat={this.props.reportstore.buttonRoiFunction.bind(this)}>Action</TableHeaderColumn>
                        </BootstrapTable>
                    }
                </div>
                <RoiEdit />
            </section>
        )
    }
}
/// <reference path="../../../../typings/index.d.ts" />
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { Select } from '../../../shared/filterelements/select.dropdown.filter';
import { AffiliateEditNotification } from '../../../shared/notification/affiliate.edit.notification';
import { AffiliateCreateNotification } from '../../../shared/notification/affiliate.create.notification';
import { AffiliatesEdit } from './report/affiliates.edit';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

@inject('reportstore')
@observer
export class AffiliatesList extends React.Component<any, any> {  
    componentDidMount() {
        this.props.reportstore.getRegistrationTypes();
        this.props.reportstore.getAffiliates(); 
        this.props.reportstore.getWebsites(); 
    }

    render() {

        function showWebsiteData(cell, row) {
            return row.Website.WebsiteName;
        }
        function showRegistrationTypeData(cell, row) {
            return row.RegistrationType.Name;
        }

        return (
            <section>
                <AffiliateEditNotification
                    Message={this.props.reportstore.EditResponse.statusText}
                    IsAffiliateEdit={this.props.reportstore.IsAffiliateEdit}
                />
                <AffiliateEditNotification
                    Error={this.props.reportstore.AffliateEditError}
                    IsAffiliateEditError={this.props.reportstore.AffliateEditError}
                />
                <AffiliateCreateNotification
                    Message={this.props.reportstore.CreateResponse.statusText}
                    IsAffiliateCreate={this.props.reportstore.IsAffiliateCreate}
                />
                <AffiliateCreateNotification
                    Error={this.props.reportstore.AffliateCreateError}
                    IsAffiliateCreate={this.props.reportstore.IsAffiliateCreate}
                />
                <div className="fllter-wrap clearfix">
                    <Button type="button" onClick={this.props.reportstore.showCreateAffiliateModal} className="btn btn-success" style={{ marginRight: '10px' }}>Create Affiliate</Button>
                    <Button color="info" onClick={this.props.reportstore.toggleFilterModal}><i className="fa fa-search" style={{ marginRight: '10px' }}> </i> Filter</Button>
                    <Modal isOpen={this.props.reportstore.showFilterModal} toggle={this.props.reportstore.toggleFilterModal}>
                        <ModalHeader toggle={this.props.reportstore.toggleFilterModal}>Reports Filter</ModalHeader>
                        <ModalBody>
                            <div className="clearfix">
                                <Select
                                    name={'WebsiteIDSelected'}
                                    placeholder={'Website'}
                                    controlFunc={this.props.reportstore.handleChange}
                                    options={this.props.reportstore.Websites.map(w => {
                                        return { name: w.WebsiteName, value: w.WebsiteID }
                                    })}
                                    selectedOption={this.props.reportstore.WebsiteIDSelected}
                                />
                                <Select
                                    name={'RegistrationTypeIdSelected'}
                                    placeholder={'Registration Type'}
                                    controlFunc={this.props.reportstore.handleChange}
                                    options={this.props.reportstore.RegistrationTypes.map(w => {
                                        return { name: w.Name, value: w.RegistrationTypeID };
                                    })}
                                    selectedOption={this.props.reportstore.RegistrationTypeIdSelected}
                                />                                                             
                            </div>
                            <div className="divider"></div>
                            <div> 
                                <button className="btn btn-success pull-right" onClick={this.props.reportstore.affiliateFilter}>Apply Filter</button>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                        </ModalFooter>
                    </Modal>
                </div> 
                <div className="table-responsive">

                {
                        this.props.reportstore.Affiliateloading ? <div className="loaderImg"></div> : <BootstrapTable data={this.props.reportstore.Affiliatedata} pagination={true} containerStyle={{ width: '100%' }} options={{ noDataText: 'No affiliates match your filter' }} striped={true} hover={true} responsive={true}>
                        <TableHeaderColumn dataField="WebsiteID" dataFormat={showWebsiteData} isKey={true} dataSort={true}>Website</TableHeaderColumn>
                        <TableHeaderColumn dataField="AffiliateCode" dataSort={true}>Affiliate Code</TableHeaderColumn>
                        <TableHeaderColumn width='90px' dataField="Name" dataSort={true}>Name</TableHeaderColumn>
                        <TableHeaderColumn width='160px' dataField="CurrencyCode" dataSort={true}>Currency Code</TableHeaderColumn>
                        <TableHeaderColumn dataField="CurrentCPA" dataSort={true}>Current CPA</TableHeaderColumn>
                        <TableHeaderColumn dataField="data" dataFormat={showRegistrationTypeData} dataSort={true}>Registration</TableHeaderColumn>                        
                        <TableHeaderColumn dataField="OverrideHasOffersPayout" dataSort={true}>Override Has Offers Payout</TableHeaderColumn>                        
                        <TableHeaderColumn dataField="CostingModelID" dataSort={true}>Costing Model</TableHeaderColumn>
                        <TableHeaderColumn dataField="HasOffersAffiliateID" dataSort={true}>HasOffers Affiliate ID</TableHeaderColumn>
                        <TableHeaderColumn width='70px' dataField="data" dataFormat={this.props.reportstore.buttonAffiliateFunction.bind(this)}>Action</TableHeaderColumn>
                    </BootstrapTable>
                    }  
                </div>

                <section>
                    <AffiliatesEdit />
                </section>
            </section>
        )
    }
}
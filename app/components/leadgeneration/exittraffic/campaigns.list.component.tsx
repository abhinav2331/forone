/// <reference path="../../../../typings/index.d.ts" />
import * as React from 'react';
import { Redirect } from 'react-router';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { observer, inject } from 'mobx-react';
import moment from 'moment/moment.js';
import { withRouter } from 'react-router-dom';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup
} from 'reactstrap';


import { Select } from '../../../shared/filterelements/select.dropdown.filter';
import { SelectSimple } from '../../../shared/filterelements/select.dropdown.filter.simple';
import { CampaignEdit } from './campaign/campaign.edit';
import { ImportOffer } from './campaign/import.offer';
import { CampaignImageUpload } from './campaign/campaign.image.upload';
import { CampaignEditNotification } from '../../../shared/notification/campaign.edit.notification';
import { CampaignCreateNotification } from '../../../shared/notification/campaign.create.notification';
import { CampaignAddCreativeNotification } from '../../../shared/notification/campaign.add.creative.notification';


import { CampaignsAll } from '../../../model/campaign.model';

interface CampaignsCreateState {
    CampaignsObj: CampaignsAll;
}


@inject('campaignstore', 'importofferstore')
@withRouter
@observer
export class Campaigns extends React.Component<any, any> {

    componentDidMount() {        
        this.props.campaignstore.getCampaigns();
        this.props.campaignstore.getPublisher();
        this.props.campaignstore.getTypes();
        this.props.campaignstore.getStatus();
        this.props.campaignstore.getClients();
        this.props.campaignstore.getCategory();
        this.props.campaignstore.getAffiliatenetworks();
        this.props.importofferstore.getTypesNew();       
        this.props.campaignstore.getPlacements();
    }
    
    render() {

        function showCreativeAssetsData(cell, row) {           
            var apidata = row.Creative.Assets as any[];
            var data = apidata.filter(p =>
                p.Dimensions == "240x175"
            );
            //console.log(data);
            if (data.length > 0) {               
                return <div className="demoImage"> <img src={`${process.env.CDN_PATH}exittraffic/${data[0].Dimensions}/thumbs/${data[0].Url}`} alt="" /></div>;
            } else {
                return <div className="demoImage"> <img src="http://rexdl.com/wp-content/uploads/2016/04/infinite-painter-android-thumb.jpg" /></div>;
            }            
        }

        function showStatusData(cell, row) {            
            return row.Status.Name;
        }
        function showPublisherData(cell, row) {           
            return row.Publisher.Name;
        }
        function dateFormatter(cell: any) {
            if (!cell) {
                return "";
            }
            return `<div className="datenew">${moment(cell).format("DD-MM-YYYY") ? moment(cell).format("DD-MM-YYYY") : moment(cell).format("DD-MM-YYYY")}</div>`;
        }

        const requiredItem = this.props.campaignstore.requiredItem;

        let Linkurl = '/lead-generation/exit-traffic/campaigns/' + this.props.campaignstore.RevenueCID + '/revenue';

        if (this.props.campaignstore.redirect) {
            return <Redirect push to={Linkurl} />;            
        }

        return (
            <section>
                <section>
                <CampaignCreateNotification
                    Message={this.props.campaignstore.dataCreate.statusText}
                    IsNotifyCreate={this.props.campaignstore.IsNotifyCreate}
                />
                <CampaignEditNotification
                    Message={this.props.campaignstore.statusText.statusText}
                    IsNotify2={this.props.campaignstore.IsNotify2}
                />       
                <CampaignAddCreativeNotification
                    MessageUpload={this.props.campaignstore.ImageUploadStatus.statusText}
                    IsNotifyAddCreative={this.props.campaignstore.IsNotifyAddCreative}
                />
                <CampaignAddCreativeNotification
                    MessageUploadError={this.props.campaignstore.ImageUploadError}
                    IsNotifyAddCreativeError={this.props.campaignstore.IsNotifyAddCreativeError}
                />
                <div className="fllter-wrap clearfix">
                    <Button type="button" onClick={this.props.importofferstore.toggleImportoffer} className="btn btn-primary" style={{ marginRight: '10px' }}>Import Offer</Button>
                    <Button type="button" onClick={this.props.campaignstore.showCreateCampaignModal} className="btn btn-success" style={{ marginRight: '10px' }}>Create Campaign</Button>
                    <Button className="" color="info" onClick={this.props.campaignstore.toggleModal}><i className="fa fa-search" style={{ marginRight: '10px' }}> </i> Filter</Button>

                    <div className="filter_tags clearfix">
                        {
                            this.props.campaignstore.PublishSelectedData == "" ? "" : <div className="tag_item">{this.props.campaignstore.PublishSelectedData} <i onClick={this.props.campaignstore.campaignClearPublisherFilter} className="material-icons icon_size">clear</i></div>
                        }
                        {
                            this.props.campaignstore.TypesSelectedData == "" ? "" : <div className="tag_item">{this.props.campaignstore.TypesSelectedData} <i onClick={this.props.campaignstore.campaignClearTypesFilter} className="material-icons icon_size">clear</i></div>
                        }
                        {
                            this.props.campaignstore.StatusSelectedData == "" ? "" : <div className="tag_item">{this.props.campaignstore.StatusSelectedData} <i onClick={this.props.campaignstore.campaignClearStatusFilter} className="material-icons icon_size">clear</i></div>
                        }
                        {
                            this.props.campaignstore.ClientsSelected == "" ? "" : <div className="tag_item">{this.props.campaignstore.ClientsSelected} <i onClick={this.props.campaignstore.campaignClearClientFilter} className="material-icons icon_size">clear</i></div>
                        }
                    </div>

                    <Modal isOpen={this.props.campaignstore.modal} toggle={this.props.campaignstore.toggleModal}>
                        <ModalHeader toggle={this.props.campaignstore.toggleModal}>Filter Exit traffic campaigns</ModalHeader>
                            <ModalBody>
                                
                                <div className="clearfix">                                    
                                <Select
                                    name={'PublisherSelected'}
                                    placeholder={'Publisher'}
                                    controlFunc={this.props.campaignstore.handleCampaignChangePublisher}
                                    options={this.props.campaignstore.Publisher}
                                    selectedOption={this.props.campaignstore.PublisherSelected}
                                />
                                <Select
                                    name={'TypesSelected'}
                                    placeholder={'Types'}
                                    controlFunc={this.props.campaignstore.handleCampaignChangeTypes}
                                    options={this.props.campaignstore.CustomTypes}
                                    selectedOption={this.props.campaignstore.TypesSelected}
                                />
                                <Select
                                    name={'StatusSelected'}
                                    placeholder={'Status'}
                                    controlFunc={this.props.campaignstore.handleCampaignChangeStatus}
                                    options={this.props.campaignstore.Status}
                                    selectedOption={this.props.campaignstore.StatusSelected}
                                />
                                <SelectSimple
                                    name={'ClientsSelected'}
                                    placeholder={'Clients'}
                                    controlFunc={this.props.campaignstore.handleCampaignChange}
                                    options={this.props.campaignstore.Clients}
                                    selectedOption={this.props.campaignstore.ClientsSelected}
                                />
                            </div>
                            <div className="divider"></div>                            
                            <div>
                                <button className="btn btn-success pull-right" onClick={this.props.campaignstore.campaignFilter}>Apply Filter</button>
                            </div>
                        </ModalBody>
                        <ModalFooter>                            
                        </ModalFooter>
                    </Modal>

                </div>
                <div className="table-responsive searchFeature">
                {
                    this.props.campaignstore.loading ? <div className="loaderImg"></div> : <BootstrapTable data={this.props.campaignstore.Campaigndata} pagination={true} containerStyle={{ width: '100%' }} options={{ noDataText: 'No data found in Campaign Table!' }} striped={true} hover={true} search={true}>
                        <TableHeaderColumn width='120px' dataField="CampaignID" isKey={true} dataAlign="left" dataSort={true}>ID</TableHeaderColumn>
                        <TableHeaderColumn width='120px' dataField="data" dataFormat={showCreativeAssetsData}>Assets</TableHeaderColumn>                        
                        <TableHeaderColumn width="300px" dataField="Name" dataSort={true}>Name</TableHeaderColumn>
                        <TableHeaderColumn dataField="data" dataFormat={showPublisherData} dataSort={true}>Publisher</TableHeaderColumn>
                        <TableHeaderColumn dataField="Type" >Type</TableHeaderColumn>
                        <TableHeaderColumn dataField="ClientName" dataSort={true}>Client</TableHeaderColumn>
                        <TableHeaderColumn dataField="data" dataFormat={showStatusData}>Status</TableHeaderColumn>
                        <TableHeaderColumn dataField="ExpiryDateTimeUtc" dataFormat={dateFormatter} dataSort={true}>Expires</TableHeaderColumn>
                        <TableHeaderColumn width="200px" dataField="button" dataFormat={this.props.campaignstore.buttonFunction.bind(this)}>Action</TableHeaderColumn>
                    </BootstrapTable> 
                }  
                </div>                
                 <CampaignEdit />                   
                <section>
                    <ImportOffer />
                </section>
                <section>
                    <CampaignImageUpload />
                </section>
                </section>

                </section>
                )
    }
}

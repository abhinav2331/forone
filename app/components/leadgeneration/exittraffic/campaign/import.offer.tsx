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

import { SelectFormElement } from '../../../../shared/formelement/select.formelement';
import { SelectTypeID } from '../../../../shared/formelement/select.type.id';
import { NotificationMessage } from '../../../../shared/notification/import.offers.notification';

import { CampaignsAll, StatusDetail, PublisherDetail, BannerSettingsDetail, PayoutDetail, HasOffersDetail, AffiliateNetworkDetail, TargetingDetail, CreativeDetail, SelectOptions } from '../../../../model/campaign.model';


interface CampaignsCreateState {
    CampaignsObj: CampaignsAll;
}
interface ServerData {
    result: string
    bar: number
}

@inject('importofferstore', 'campaignstore')
@observer
export class ImportOffer extends React.Component<any, any> {
       
    render() {

        function dateFormatter(cell: any) {
            if (!cell) {
                return "";
            }
            return `${moment(cell).format("DD-MM-YYYY HH:MM:SS") ? moment(cell).format("DD-MM-YYYY HH:MM:SS") : moment(cell).format("DD-MM-YYYY HH:MM:SS")}`;
        }

        const options = { sizePerPage: 5, noDataText: 'No data found in Table!'};
        return (
            <section>
                <NotificationMessage
                    Message={this.props.importofferstore.data.statusText}
                    IsNotify={this.props.importofferstore.IsNotify}
                />
                <NotificationMessage
                    Status={this.props.importofferstore.errordata}
                    IsNotifyError={this.props.importofferstore.IsNotifyError}
                />
                <NotificationMessage
                    Error={this.props.importofferstore.AffiliateNetworkError}
                    IsAffiliateError={this.props.importofferstore.IsAffiliateError}
                />
                            
                <Modal isOpen={this.props.importofferstore.modalImportoffer} toggle={this.props.importofferstore.toggleImportoffer}>
                    <ModalHeader toggle={this.props.importofferstore.toggleImportoffer}>Import offer from networks </ModalHeader>
                    <ModalBody> 
                        {/*Before being able to import, the user needs to be able to select the following */}
                        <section>
                            <Modal isOpen={this.props.importofferstore.modal} toggle={this.props.importofferstore.toggle}>
                                <ModalHeader toggle={this.props.importofferstore.toggle}>Please select the Publisher and Types before proceed. </ModalHeader>
                                <ModalBody>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <div className="form_label">Publisher</div>                                                
                                                <SelectFormElement
                                                    name={'SupplierID'}
                                                    placeholder={'Publisher'}
                                                    controlFunc={this.props.importofferstore.handleImportOffersChange}
                                                    options={this.props.campaignstore.Publisher}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <div className="form_label">Campaign type</div>
                                                <SelectTypeID
                                                    name={'TypeID'}
                                                    placeholder={'Campaign type'}
                                                    controlFunc={this.props.importofferstore.handleImportOffersChange}
                                                    options={this.props.importofferstore.TypesNew}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </ModalBody>
                                <ModalFooter>
                                    <button type="button" className="btn btn-info" onClick={this.props.importofferstore.toggle}>Close</button>
                                    <button type="submit" style={{ marginLeft: '10px' }} onClick={this.props.importofferstore.handleOfferSubmit} className="btn btn-success">Proceed</button>
                                </ModalFooter>
                            </Modal>
                        </section>
                        {/*Before being able to import, the user needs to be able to select the following */}
                        
                        {this.props.campaignstore.loadingNetwork ? <div className="row disabled">
                            <div className="col-md-9">
                                <SelectFormElement
                                    name={'NetworkID'}
                                    placeholder={'Affiliate Network'}
                                    controlFunc={this.props.importofferstore.changeAffiliateNetwork}
                                    options={this.props.campaignstore.AffiliateNetwork}                                    
                                />
                            </div>
                            <div className="col-md-3">
                                <button onClick={this.props.importofferstore.networkSearch} className="btn btn-success pull-right">Search</button>
                            </div>
                        </div> : <div className="row">
                                <div className="col-md-9">
                                    <SelectFormElement
                                        name={'NetworkID'}
                                        placeholder={'Affiliate Network'}
                                        controlFunc={this.props.importofferstore.changeAffiliateNetwork}
                                        options={this.props.campaignstore.AffiliateNetwork}
                                    />
                                </div>
                                <div className="col-md-3">
                                    {
                                        this.props.importofferstore.ANetworkidCon == "" ? <button onClick={this.props.importofferstore.networkSearch} disabled className="btn btn-success pull-right">Search</button> : <button onClick={this.props.importofferstore.networkSearch} className="btn btn-success pull-right">Search</button>
                                    }                                    
                                </div>
                            </div>
                        }
                                              
                        {
                            this.props.importofferstore.loading ? <div className="loaderImg"></div> : (<div className="row"><div className="col-md-12">
                                {this.props.importofferstore.Networkoffer.length > 0 ? <BootstrapTable data={this.props.importofferstore.Networkoffer} pagination={true} containerStyle={{ width: '100%' }} options={options} striped={true} hover={true}>
                                    <TableHeaderColumn dataField="CampaignId" isKey={true} dataAlign="left">Offer ID</TableHeaderColumn>
                                    <TableHeaderColumn dataField="Name" >Offer</TableHeaderColumn>
                                    <TableHeaderColumn dataField="Expirationdate" dataFormat={dateFormatter}>Expiration date</TableHeaderColumn>                                    
                                    <TableHeaderColumn dataField="Status" >Status</TableHeaderColumn>
                                    <TableHeaderColumn dataField="button" width="180px" dataFormat={this.props.importofferstore.buttonOfferFunction.bind(this)} >Action</TableHeaderColumn>
                                </BootstrapTable> : ""}
                            </div>
                            </div>)
                        }                        
                    </ModalBody>
                    <ModalFooter>                                        
                    </ModalFooter>
                </Modal> 
            </section>
        )
    }
}


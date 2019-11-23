/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import * as axios from "axios";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { SelectFormElement } from '../../../../shared/formelement/select.formelement';
import { InputNormal } from '../../../../shared/formelement/input.normal';
import { WebsiteDetail, RegistrationTypeDetal, AffiliateAll } from '../../../../model/affiliate.model';

interface AffiliateCreateState {
    AffiliateObj: AffiliateAll;
}

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
export class RoiEdit extends React.Component<any, any> {   

    render() {
        let header = <ModalHeader toggle={this.props.reportstore.toggleRoiEditModal}>Create ROI</ModalHeader>;

        if (this.props.reportstore.RoiIsInEditMode) {
            header = <ModalHeader toggle={this.props.reportstore.toggleRoiEditModal}>Edit ROI</ModalHeader>;
        }
        return (
            <section>                                   
                <Modal isOpen={this.props.reportstore.RoiEditModal} toggle={this.props.reportstore.toggleRoiEditModal}>
                    {header}
                        <ModalBody>
                            <section>                                
                            <form onSubmit={this.props.reportstore.handleRoiSubmit}>
                                    <div className="form_list row">
                                    <ul>  
                                          <li className="col-md-6">
                                                <div className="form-group">
                                                    <div className="form_label">Website</div>                                                
                                                <SelectFormElement
                                                    name={'RoiTrackingWebsiteID'}
                                                    placeholder={'Select...'}
                                                    controlFunc={this.props.reportstore.handleRoiChange}
                                                    options={this.props.reportstore.Websiteid.map(w => { return { name: w.WebsiteName, value: w.WebsiteID }; })}
                                                    selectedOption={this.props.reportstore.RoiObj.RoiTrackingWebsiteID}
                                                />
                                                </div>
                                            </li>  
                                            <li className="col-md-6">
                                                <div className="form-group">
                                                    <div className="form_label">Affiliate</div>
                                                    <InputNormal
                                                        inputType={'text'}
                                                        name={'AffiliateID'}
                                                    controlFunc={this.props.reportstore.handleRoiChange}
                                                        content={this.props.reportstore.RoiObj.AffiliateID}
                                                        placeholder={'Affiliate ID'}
                                                    />
                                                </div>
                                            </li>
                                            <li className="col-md-6">
                                                <div className="form-group">
                                                    <div className="form_label">Affiliate Code</div>                                                
                                                <SelectFormElement
                                                    name={'AffiliateCode'}
                                                    placeholder={'Select...'}
                                                    controlFunc={this.props.reportstore.handleRoiChange}
                                                    options={this.props.reportstore.Affiliatedata.map(a => { return { name: a.AffiliateCode, value: a.AffiliateCode }; })}
                                                    selectedOption={this.props.reportstore.RoiObj.AffiliateCode}
                                                />
                                                </div>
                                            </li> 
                                            
                                            <li className="col-md-6">
                                            <div className="form-group reduce_width">
                                                <div className="form_label">Profit Margin Threshold</div>
                                                    <InputNormal
                                                        inputType={'text'}
                                                        name={'ProfitMarginThreshold'}
                                                        controlFunc={this.props.reportstore.handleRoiChange} 
                                                        content={this.props.reportstore.RoiObj.ProfitMarginThreshold}
                                                        placeholder={'Profit Margin Threshold'}
                                                    />
                                            </div>
                                            <span className="persentage">%</span>
                                        </li>
                                        <li className="col-md-6">
                                            <div className="form-group reduce_width">
                                                <div className="form_label">Pay Percentage</div>
                                                <InputNormal
                                                    inputType={'text'}
                                                    name={'PayPercentage'}
                                                    controlFunc={this.props.reportstore.handleRoiChange}
                                                    content={this.props.reportstore.RoiObj.PayPercentage}
                                                    placeholder={'Pay Percentage'}
                                                />
                                            </div>
                                            <span className="persentage">%</span>
                                        </li>                                        
                                                                                       
                                        </ul>
                                    </div>
                                    <div className="divider"></div>
                                    <button type="submit" style={{ marginLeft: '10px' }} className="btn btn-success pull-right">Save</button>
                                <button type="button" className="btn btn-info pull-right" onClick={this.props.reportstore.toggleRoiEditModal}>Close</button>
                                </form>
                            </section>
                        </ModalBody>
                        <ModalFooter>
                        </ModalFooter>
                    </Modal>                
            </section>
        )
    }
}
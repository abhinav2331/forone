/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as axios from "axios";
import * as validator from 'validator';
import { observer, inject } from 'mobx-react';
import {
    Modal,
    ModalHeader,
    ModalBody,
} from 'reactstrap';

import { InputNumericNormal } from '../../../../shared/formelement/input.numeric';
import { InputNormal } from '../../../../shared/formelement/input.normal';
import { SelectTypeID } from '../../../../shared/formelement/select.type.id';

import { CampaignsAll } from '../../../../model/campaign.model';

interface CampaignsCreateState {
    CampaignsObj: CampaignsAll;
}
@inject('campaignstore')
@observer
export class CampaignRevenueCreate extends React.Component<any, CampaignsCreateState> {

    render() {
        return (
            <section>
                <Modal isOpen={this.props.campaignstore.RevenueCreateModal} toggle={this.props.campaignstore.toggleRevenueCreateModal}>
                    <ModalHeader toggle={this.props.campaignstore.toggleRevenueCreateModal}>Create Revenue</ModalHeader>
                    <ModalBody>

                        <form onSubmit={this.props.campaignstore.handleRevenueCreate}>
                            <div className="form_list row">
                                <ul>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Period From</div>
                                            <InputNormal
                                                inputType={'date'}
                                                name={'PeriodStart'}
                                                controlFunc={this.props.campaignstore.handleRevenueChange}
                                                placeholder={'Period From'}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Period To</div>
                                            <InputNormal
                                                inputType={'date'}
                                                name={'PeriodEnd'}
                                                controlFunc={this.props.campaignstore.handleRevenueChange}
                                                placeholder={'Period To'}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Currency</div>
                                            <SelectTypeID
                                                name={'RevenueCurrency'}
                                                placeholder={'Currency Code'}
                                                controlFunc={this.props.campaignstore.handleRevenueChange}
                                                options={this.props.campaignstore.CurrencyCodeRevenue}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Payout Type</div>
                                            <SelectTypeID
                                                name={'PayoutType'}
                                                placeholder={'Payout Type'}
                                                controlFunc={this.props.campaignstore.handleRevenueChange}
                                                options={this.props.campaignstore.PayoutTypeRevenue}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">                                        
                                        <div className="form-group">
                                            <div className="form_label">Payout Rate</div>
                                            <InputNumericNormal
                                                inputType={'number'}
                                                stepType={'any'}
                                                name={'PayoutRate'}
                                                controlFunc={this.props.campaignstore.handleRevenueChange}
                                                placeholder={'Payout Rate'}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Billable Count</div>
                                            <InputNormal
                                                inputType={'number'}
                                                name={'BillableCount'}
                                                controlFunc={this.props.campaignstore.handleRevenueChange}
                                                placeholder={'Billable Count'}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Revenue</div>
                                            <InputNumericNormal
                                                inputType={'number'}
                                                stepType={'any'}
                                                name={'Revenue'}
                                                controlFunc={this.props.campaignstore.handleRevenueChange}
                                                placeholder={'Revenue'}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">

                                            <div className="form_label">Disable Automatic Update</div>
                                            <div className="switch-container">
                                                <label>
                                                    <input ref="switch" name="DisableAutomaticUpdate" checked={this.props.campaignstore.RevenueAutomaticCheck} onChange={this.props.campaignstore.handleRevenueAutomaticCheckbox} className="switch" type="checkbox" />
                                                    <div>
                                                        <span><g className="icon icon-toolbar grid-view">Yes</g></span>
                                                        <span><g className="icon icon-toolbar ticket-view">No</g></span>
                                                        <div></div>
                                                    </div>
                                                </label>
                                            </div>

                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">

                                            <div className="form_label">Approved For Invoicing</div>
                                            <div className="switch-container">
                                                <label>
                                                    <input ref="switch" name="ConfirmedForInvoicing" checked={this.props.campaignstore.RevenueConfirmedForInvoicingCheck} onChange={this.props.campaignstore.handleRevenueConfirmedForInvoicingCheckbox} className="switch" type="checkbox" />
                                                    <div>
                                                        <span><g className="icon icon-toolbar grid-view">Yes</g></span>
                                                        <span><g className="icon icon-toolbar ticket-view">No</g></span>
                                                        <div></div>
                                                    </div>
                                                </label>
                                            </div>

                                        </div>
                                    </li>
                                    
                                    <li className="col-md-6">
                                        <div className="form-group">

                                            <div className="form_label">Invoiced</div>
                                            <div className="switch-container">
                                                <label>
                                                    <input ref="switch" name="Invoiced" checked={this.props.campaignstore.RevenueInvoicedCheck} onChange={this.props.campaignstore.handleRevenueInvoicedCheckbox} className="switch" type="checkbox" />
                                                    <div>
                                                        <span><g className="icon icon-toolbar grid-view">Yes</g></span>
                                                        <span><g className="icon icon-toolbar ticket-view">No</g></span>
                                                        <div></div>
                                                    </div>
                                                </label>
                                            </div>

                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Invoice Notes</div>
                                            <InputNormal
                                                inputType={'text'}
                                                name={'InvoiceNotes'}
                                                controlFunc={this.props.campaignstore.handleRevenueChange}
                                                placeholder={'Invoice Notes'}
                                            />
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>

                            <button type="submit" className="btn btn-success pull-right">Create Revenue</button>
                            <button type="button" style={{ marginRight: '10px' }} className="btn btn-danger pull-right" onClick={this.props.campaignstore.toggleRevenueCreateModal}>Close</button>

                        </form>

                    </ModalBody>
                </Modal>
            </section>
        )
    }

}






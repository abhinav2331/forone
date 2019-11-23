/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as axios from "axios";
import * as validator from 'validator';
import { observer, inject } from 'mobx-react';
import moment from 'moment/moment.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup
} from 'reactstrap';
import { CampaignsAll } from '../../../../model/campaign.model';
import { RevenueAll } from '../../../../model/campaign.revenue.model';

import { InputNumericNormal } from '../../../../shared/formelement/input.numeric';
import { InputNormal } from '../../../../shared/formelement/input.normal';
import { SelectFormElement } from '../../../../shared/formelement/select.formelement';

@inject('campaignstore')
@observer
export class CampaignRevenueEdit extends React.Component<any, any> {

    render() {   
        let header = <ModalHeader toggle={this.props.campaignstore.toggleEditModal}>Create Campaign Revenue</ModalHeader>;

        if (this.props.campaignstore.CampaignRevenueIsInEditMode) {
            header = <ModalHeader toggle={this.props.campaignstore.toggleEditModal}>Edit Campaign ID {this.props.campaignstore.RevenueCID}, Revenue ID {this.props.campaignstore.RevenueObj.RevenueID}</ModalHeader>;
        }

        return (
            <section>                
                <Modal isOpen={this.props.campaignstore.RevenueEditModal} toggle={this.props.campaignstore.toggleRevenueEditModal}>
                    {header}
                    <ModalBody>

                        <form onSubmit={this.props.campaignstore.handleRevenueSubmit}>
                            <div className="form_list row">
                                <ul>                                    
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Period From</div>
                                            <DatePicker
                                                className="form-control"
                                                onChange={this.props.campaignstore.handlePeriodFromChange}
                                                selected={this.props.campaignstore.SelectedPeriodFromChange}
                                            />
                                        </div>
                                    </li>                                    
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Currency</div>
                                            <SelectFormElement
                                                name={'RevenueCurrency'}
                                                placeholder={'Currency Code'}
                                                controlFunc={this.props.campaignstore.handleRevenueChange}
                                                options={this.props.campaignstore.CurrencyCodeRevenue}
                                                selectedOption={this.props.campaignstore.RevenueObj.RevenueCurrency}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Payout Type</div>
                                            <SelectFormElement
                                                name={'PayoutType'}
                                                placeholder={'Payout Type'}
                                                controlFunc={this.props.campaignstore.handleRevenueChange}
                                                options={this.props.campaignstore.PayoutTypeRevenue}
                                                selectedOption={this.props.campaignstore.RevenueObj.PayoutType}
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
                                                content={this.props.campaignstore.RevenueObj.PayoutRate}
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
                                                content={this.props.campaignstore.RevenueObj.BillableCount}
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
                                                content={this.props.campaignstore.RevenueObj.Revenue}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">

                                            <div className="form_label">Disable Automatic Update</div>
                                            <div className="switch-container">
                                                <label>
                                                    <input ref="switch" name="DisableAutomaticUpdate" checked={this.props.campaignstore.RevenueObj.DisableAutomaticUpdate} onChange={this.props.campaignstore.handleRevenueChange} className="switch" type="checkbox" />
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
                                                    <input ref="switch" name="ConfirmedForInvoicing" checked={this.props.campaignstore.RevenueObj.ConfirmedForInvoicing} onChange={this.props.campaignstore.handleRevenueChange} className="switch" type="checkbox" />
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
                                                    <input ref="switch" name="Invoiced" checked={this.props.campaignstore.RevenueObj.Invoiced} onChange={this.props.campaignstore.handleRevenueChange} className="switch" type="checkbox" />
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
                                                content={this.props.campaignstore.RevenueObj.InvoiceNotes}
                                            />
                                        </div>
                                    </li>

                                </ul>
                            </div>

                            <button type="submit" className="btn btn-success pull-right">Save Revenue</button>
                            <button type="button" style={{ marginRight: '10px' }} className="btn btn-danger pull-right" onClick={this.props.campaignstore.toggleRevenueEditModal}>Close</button>

                        </form>

                    </ModalBody>
                </Modal>
            </section>
        )
    }

}






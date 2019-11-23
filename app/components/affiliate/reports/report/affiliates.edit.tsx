/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import { observer, inject } from 'mobx-react';

import { SelectFormElement } from '../../../../shared/formelement/select.formelement';
import { InputNormal } from '../../../../shared/formelement/input.normal';
import { InputNormalunRequired } from '../../../../shared/formelement/input.normal.unrequired';

import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';

@inject('reportstore')
@observer
export class AffiliatesEdit extends React.Component<any, any> {

    render() {
        let header = <ModalHeader toggle={this.props.reportstore.toggleAffiliateEditModal}>Create Affiliate</ModalHeader>;
        let affiliateCode = null;

        if (this.props.reportstore.AffiliateIsInEditMode) {
            header = <ModalHeader toggle={this.props.reportstore.toggleAffiliateEditModal}>Edit Affiliate</ModalHeader>;

            affiliateCode = <li className="col-md-6 disabled">
                <div className="form-group">
                    <div className="form_label">Affiliate Code</div>
                    <InputNormal
                        inputType={'text'}
                        name={'AffiliateCode'}
                        controlFunc={this.props.reportstore.handleAffiliateChange}
                        content={this.props.reportstore.AffiliateObj.AffiliateCode}
                        placeholder={'ho_{ab}'}
                    />
                </div>
            </li>;
        }
        else {
            affiliateCode = <li className="col-md-6">
                <div className="form-group">
                    <div className="form_label">Affiliate Code</div>
                    <InputNormal
                        inputType={'text'}
                        name={'AffiliateCode'}
                        controlFunc={this.props.reportstore.handleAffiliateChange}
                        content={this.props.reportstore.AffiliateObj.AffiliateCode}
                        placeholder={'ho_{ab}'}
                    />
                </div>
            </li>;
        }

        return (
            <section>
                <Modal isOpen={this.props.reportstore.AffiliateEditModal} toggle={this.props.reportstore.toggleAffiliateEditModal}>
                    {header}
                    <ModalBody>
                        <form onSubmit={this.props.reportstore.handleAffiliateEditSubmit}>
                            <div className="form_list row">
                                <ul>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Website</div>
                                            <SelectFormElement
                                                name={'Website_WebsiteID'}
                                                placeholder={'Select...'}
                                                controlFunc={this.props.reportstore.handleAffiliateChange}
                                                options={this.props.reportstore.Websites.map(w => { return { name: w.WebsiteName, value: w.WebsiteID }; })}
                                                selectedOption={this.props.reportstore.AffiliateObj.Website.WebsiteID}
                                            />
                                        </div>
                                    </li>

                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Name</div>
                                            <InputNormal
                                                inputType={'text'}
                                                name={'Name'}
                                                controlFunc={this.props.reportstore.handleAffiliateChange}
                                                content={this.props.reportstore.AffiliateObj.Name}
                                                placeholder={'Affiliate 1'}
                                            />
                                        </div>
                                    </li>

                                    {affiliateCode}

                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Currency Code</div>
                                            <SelectFormElement
                                                name={'CurrencyCode'}
                                                placeholder={'Currency Code'}
                                                controlFunc={this.props.reportstore.handleAffiliateChange}
                                                options={this.props.reportstore.CurrencyCodes}
                                                selectedOption={this.props.reportstore.AffiliateObj.CurrencyCode}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Current CPA</div>
                                            <InputNormal
                                                inputType={'text'}
                                                name={'CurrentCPA'}
                                                controlFunc={this.props.reportstore.handleAffiliateChange}
                                                content={this.props.reportstore.AffiliateObj.CurrentCPA}
                                                placeholder={'0.00'}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">RegistrationTypeID</div>
                                            <SelectFormElement
                                                name={'RegistrationType_RegistrationTypeID'}
                                                placeholder={'Registration Type'}
                                                controlFunc={this.props.reportstore.handleAffiliateChange}
                                                options={this.props.reportstore.RegistrationTypes.map(w => { return { name: w.Name, value: w.RegistrationTypeID }; })}
                                                selectedOption={this.props.reportstore.AffiliateObj.RegistrationType.RegistrationTypeID}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">

                                            <div className="form_label">Disabled</div>
                                            <div className="switch-container">
                                                <label>
                                                    <input ref="switch" name="Disabled" checked={this.props.reportstore.AffiliateObj.Disabled} onChange={this.props.reportstore.handleAffiliateChange} className="switch" type="checkbox" />
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

                                            <div className="form_label">Traffic Is Incentivised</div>
                                            <div className="switch-container">
                                                <label>
                                                    <input ref="switch" name="TrafficIsIncentivised" checked={this.props.reportstore.AffiliateObj.TrafficIsIncentivised} onChange={this.props.reportstore.handleAffiliateChange} className="switch" type="checkbox" />
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

                                            <div className="form_label">Override Has Offers Payout</div>
                                            <div className="switch-container">
                                                <label>
                                                    <input ref="switch" name="OverrideHasOffersPayout" checked={this.props.reportstore.AffiliateObj.OverrideHasOffersPayout} onChange={this.props.reportstore.handleAffiliateChange} className="switch" type="checkbox" />
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
                                            <div className="form_label">Duplicate Member Payout</div>
                                            <InputNormalunRequired
                                                inputType={'number'}
                                                name={'DuplicateMemberPayout'}
                                                controlFunc={this.props.reportstore.handleAffiliateChange}
                                                content={this.props.reportstore.AffiliateObj.DuplicateMemberPayout}
                                                placeholder={'Duplicate Member Payout'}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Costing model</div>
                                            <SelectFormElement
                                                name={'CostingModelID'}
                                                controlFunc={this.props.reportstore.handleAffiliateChange}
                                                options={this.props.reportstore.CostingModels}
                                                selectedOption={this.props.reportstore.AffiliateObj.CostingModelID}
                                                placeholder={'Select...'} />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">HasOffers Affiliate ID</div>
                                            <InputNormalunRequired
                                                inputType={'text'}
                                                name={'HasOffersAffiliateID'}
                                                controlFunc={this.props.reportstore.handleAffiliateChange}
                                                content={this.props.reportstore.AffiliateObj.HasOffersAffiliateID}
                                            />
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="divider"></div>
                            <button type="submit" style={{ marginLeft: '10px' }} className="btn btn-success pull-right">Save changes</button>
                            <button type="button" className="btn btn-info pull-right" onClick={this.props.reportstore.toggleAffiliateEditModal}>Close</button>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                    </ModalFooter>
                </Modal>
            </section>
        )
    }
}
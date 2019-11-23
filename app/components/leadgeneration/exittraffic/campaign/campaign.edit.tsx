/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { observer, inject } from 'mobx-react';

import * as axios from "axios";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
} from 'reactstrap';

import { TextareaNormal } from '../../../../shared/formelement/textarea.normal';
import { InputNormal } from '../../../../shared/formelement/input.normal';
import { InputNormalunRequired } from '../../../../shared/formelement/input.normal.unrequired';
import { SelectFormElement } from '../../../../shared/formelement/select.formelement';
import { CheckboxInline } from '../../../../shared/formelement/radio.checkbox.inline';
import DatePicker from 'react-datepicker';


import 'react-datepicker/dist/react-datepicker-cssmodules.css';

@inject('campaignstore')
@observer
export class CampaignEdit extends React.Component<any, any> {


    render() {

        let header = <ModalHeader toggle={this.props.campaignstore.toggleEditModal}>Create Exit Campaign</ModalHeader>;

        if (this.props.campaignstore.CampaignIsInEditMode) {
            header = <ModalHeader toggle={this.props.campaignstore.toggleEditModal}>Edit {this.props.campaignstore.CampaignsObj.Name} Campaign</ModalHeader>;
        }

        return (
            <section>
                <Modal isOpen={this.props.campaignstore.modalEdit} toggle={this.props.campaignstore.toggleEditModal}>
                    {header}
                    <ModalBody>
                        <form onSubmit={this.props.campaignstore.handleEditSubmit} name={'EditCampaign'}>

                            <div className="form_list row" style={{ marginBottom: "20px" }}>
                                <ul>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Campaign Name</div>
                                            <InputNormal
                                                inputType={'text'}
                                                name={'Name'}
                                                controlFunc={this.props.campaignstore.handleCampaignChange}
                                                content={this.props.campaignstore.CampaignsObj.Name}
                                                placeholder={'Campaign Name'}
                                            />
                                        </div>

                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Client Name</div>
                                            <InputNormal
                                                inputType={'text'}
                                                name={'ClientName'}
                                                controlFunc={this.props.campaignstore.handleCampaignChange}
                                                content={this.props.campaignstore.CampaignsObj.ClientName}
                                                placeholder={'Client Name'}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Campaign type</div>
                                            <SelectFormElement
                                                name={'Type'}
                                                placeholder={'Campaign type'}
                                                controlFunc={this.props.campaignstore.handleCampaignChange}
                                                options={this.props.campaignstore.Types}
                                                selectedOption={this.props.campaignstore.CampaignsObj.Type}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Status</div>
                                            <SelectFormElement
                                                name={'Status_StatusID'}
                                                placeholder={'Status'}
                                                controlFunc={this.props.campaignstore.handleCampaignChange}
                                                options={this.props.campaignstore.Status}
                                                selectedOption={this.props.campaignstore.CampaignsObj.Status.StatusID}
                                            />
                                        </div>
                                    </li>


                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Country Code</div>
                                            <SelectFormElement
                                                name={'CountryCode'}
                                                placeholder={'Country Code'}
                                                controlFunc={this.props.campaignstore.handleCampaignChange}
                                                options={this.props.campaignstore.CuntryCode}
                                                selectedOption={this.props.campaignstore.CampaignsObj.CountryCode}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Payout Type</div>
                                            <SelectFormElement
                                                name={'Payout_PayoutType'}
                                                placeholder={'Payout Type'}
                                                controlFunc={this.props.campaignstore.handleCampaignChange}
                                                options={this.props.campaignstore.PayoutType}
                                                selectedOption={this.props.campaignstore.CampaignsObj.Payout.PayoutType}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group" style={{ width: "45%", float: "left", marginRight: "30px" }}>
                                            <div className="form_label">Payout</div>
                                            <SelectFormElement
                                                name={'Payout_CurrencyCode'}
                                                placeholder={'Currency Code'}
                                                controlFunc={this.props.campaignstore.handleCampaignChange}
                                                options={this.props.campaignstore.CurrencyCode}
                                                selectedOption={this.props.campaignstore.CampaignsObj.Payout.CurrencyCode}
                                            />
                                        </div>
                                        <div className="form-group" style={{ width: "45%", float: "left" }}>
                                            <div className="form_label">Payout Rate</div>
                                            <InputNormal
                                                inputType={'number'}
                                                name={'Payout_PayoutRate'}
                                                controlFunc={this.props.campaignstore.handleCampaignChange}
                                                placeholder={'Payout Rate'}
                                                content={this.props.campaignstore.CampaignsObj.Payout.PayoutRate}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">

                                            <div className="form_label">Has Offers Tracking</div>
                                            <div className="switch-container">
                                                <label>
                                                    <input ref="switch" name="HasOffers_Enabled" checked={this.props.campaignstore.CampaignsObj.HasOffers.Enabled} onChange={this.props.campaignstore.handleCampaignChange} className="switch" type="checkbox" />
                                                    <div>
                                                        <span><g className="icon icon-toolbar grid-view">Yes</g></span>
                                                        <span><g className="icon icon-toolbar ticket-view">No</g></span>
                                                        <div></div>
                                                    </div>
                                                </label>
                                            </div>

                                        </div>
                                    </li>
                                    {
                                        this.props.campaignstore.showHasOffersEditSection ?
                                            <li className="col-md-6">
                                                <div className="form-group">
                                                    <div className="form_label">Offer ID</div>
                                                    <InputNormalunRequired
                                                        inputType={'text'}
                                                        name={'HasOffers_OfferID'}
                                                        controlFunc={this.props.campaignstore.handleCampaignChange}
                                                        content={this.props.campaignstore.CampaignsObj.HasOffers.OfferID}
                                                    />
                                                </div>
                                            </li>
                                            : ""
                                    }
                                    {
                                        this.props.campaignstore.showHasOffersEditSection ?
                                            <li className="col-md-6">
                                                <div className="form-group">
                                                    <div className="form_label">Additional Query</div>
                                                    <InputNormalunRequired
                                                        inputType={'text'}
                                                        name={'HasOffers_AdditionalQueryString'}
                                                        controlFunc={this.props.campaignstore.handleCampaignChange}
                                                        content={this.props.campaignstore.CampaignsObj.HasOffers.AdditionalQueryString}
                                                        placeholder={'Additional Query'}
                                                    />
                                                </div>
                                            </li>
                                            : ""
                                    }

                                    {
                                        !this.props.campaignstore.showHasOffersEditSection ? <li className="col-md-6">
                                            <div className="form-group">
                                                <div className="form_label">Manual Tracking Link</div>
                                                <InputNormal
                                                    inputType={'text'}
                                                    name={'ManualTrackingLink'}
                                                    controlFunc={this.props.campaignstore.handleCampaignChange}
                                                    content={this.props.campaignstore.CampaignsObj.ManualTrackingLink}
                                                    placeholder={'Manual Tracking Link'}
                                                />
                                            </div>
                                        </li> : ""
                                    }

                                    <li className="col-md-6">
                                        <div className="form-group ">
                                            <div className="form_label">Affiliate network</div>
                                            <div className="selectdiv">
                                                <select>
                                                    <option>No network</option>
                                                </select>
                                            </div>
                                        </div>
                                    </li>

                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Publisher</div>
                                            <SelectFormElement
                                                name={'Publisher_SupplierID'}
                                                placeholder={'Publisher'}
                                                controlFunc={this.props.campaignstore.handleCampaignChange}
                                                options={this.props.campaignstore.Publisher}
                                                selectedOption={this.props.campaignstore.CampaignsObj.Publisher.SupplierID}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Call to Action</div>
                                            <InputNormalunRequired
                                                inputType={'text'}
                                                name={'Creative_CallToAction'}
                                                controlFunc={this.props.campaignstore.handleCampaignChange}
                                                content={this.props.campaignstore.CampaignsObj.Creative.CallToAction}
                                                placeholder={'Call To Action'}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Targeting for Gender</div>
                                            <div className="selectdiv">
                                                <select name="TargetGender" onChange={this.props.campaignstore.handleCampaignChange}>
                                                    <option value="">No restriction</option>
                                                    <option value="male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Age</div>
                                            <div className="row">
                                                <div className="col-md-5">
                                                    <InputNormalunRequired
                                                        inputType={'text'}
                                                        name={'TargetMinAge'}
                                                        controlFunc={this.props.campaignstore.handleCampaignChange}
                                                        content={this.props.campaignstore.CampaignsObj.TargetMinAge}
                                                        placeholder={'Target Min Age'}
                                                    />
                                                </div>
                                                <div className="col-md-2 textCenter">-</div>
                                                <div className="col-md-5">
                                                    <InputNormalunRequired
                                                        inputType={'text'}
                                                        name={'TargetMaxAge'}
                                                        controlFunc={this.props.campaignstore.handleCampaignChange}
                                                        content={this.props.campaignstore.CampaignsObj.TargetMaxAge}
                                                        placeholder={'Target Max Age'}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="col-md-6" style={{ height: "80px" }}>
                                        <div className="form-group">
                                            <div className="form_label">Description</div>
                                            <TextareaNormal
                                                name={'Creative_Description'}
                                                controlFunc={this.props.campaignstore.handleCampaignChange}
                                                content={this.props.campaignstore.CampaignsObj.Creative.Description}
                                                placeholder={'Description'}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Sub Heading</div>
                                            <InputNormalunRequired
                                                inputType={'text'}
                                                name={'Creative_SubHeading'}
                                                controlFunc={this.props.campaignstore.handleCampaignChange}
                                                content={this.props.campaignstore.CampaignsObj.Creative.SubHeading}
                                                placeholder={'Sub Heading'}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Category</div>
                                            <SelectFormElement
                                                name={'CategoryId'}
                                                placeholder={'Category'}
                                                controlFunc={this.props.campaignstore.handleCampaignChange}
                                                options={this.props.campaignstore.Category}
                                                selectedOption={this.props.campaignstore.CampaignsObj.CategoryId}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6 textareaMeta">
                                        <div className="form-group">
                                            <div className="form_label">Meta Keywords</div>
                                            <TextareaNormal
                                                name={'MetaKeywords'}
                                                controlFunc={this.props.campaignstore.handleCampaignChange}
                                                placeholder={'Meta Keywords'}
                                                content={this.props.campaignstore.CampaignsObj.MetaKeywords}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6 textareaMeta">
                                        <div className="form-group">
                                            <div className="form_label">Meta description</div>
                                            <TextareaNormal
                                                name={'MetaDescription'}
                                                controlFunc={this.props.campaignstore.handleCampaignChange}
                                                placeholder={'Meta description'}
                                                content={this.props.campaignstore.CampaignsObj.MetaDescription}
                                            />
                                        </div>
                                    </li>
                                    {/* <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Status</div>
                                            <SelectFormElement
                                                name={'Status_StatusID'}
                                                placeholder={'Status'}
                                                controlFunc={this.props.campaignstore.handleCampaignChange}
                                                options={this.props.campaignstore.Status}
                                                selectedOption={this.props.campaignstore.CampaignsObj.Status.StatusID}
                                            />
                                        </div>
                                    </li>*/}
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Expiry date:</div>
                                            <DatePicker
                                                className="form-control"
                                                onChange={this.props.campaignstore.handleExpiryDateTimeChange}
                                                selected={this.props.campaignstore.SelectedExpiryDateTimeUtc} />
                                        </div>
                                    </li>
                                    <li className="col-md-12">
                                        <div className="form-group">
                                            <div className="form_label">Placements</div>
                                            <div className="row no-margin">
                                                <div className="placement_list">
                                                    <ul>
                                                    {this.props.campaignstore.Placements.map(option => {
                                                        return (
                                                            <li key={"placements" + option.value}>
                                                                <CheckboxInline
                                                                    name={'Placements[' + option.value + ']'}
                                                                    display={option.name}
                                                                    controlFunc={this.props.campaignstore.handlePlacementsChange}
                                                                    checked={this.props.campaignstore.SelectedPlacements.indexOf(+option.value) > -1}
                                                                />
                                                            </li>
                                                        )
                                                        })}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <button type="submit" className="btn btn-success pull-right">Save changes</button>&nbsp;
                            <button type="button" style={{ marginRight: '10px' }} className="btn btn-danger pull-right" onClick={this.props.campaignstore.toggleEditModal}>Close</button>
                        </form>

                    </ModalBody>


                </Modal>

            </section>
        )
    }

}


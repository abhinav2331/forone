/// <reference path="../../../../typings/index.d.ts" />
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import * as axios from "axios";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { InputNormal } from '../../../shared/formelement/input.normal';

import { CampaignsAll, StatusDetail, PublisherDetail, BannerSettingsDetail, PayoutDetail, HasOffersDetail, AffiliateNetworkDetail, TargetingDetail, CreativeDetail, SelectOptions } from '../../../model/campaign.model';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup
} from 'reactstrap';

function onAfterSaveCell(row, cellName, cellValue) {
    //alert(`Save cell ${cellName} with value ${cellValue}`);
    let rowStr = '';
    for (const prop in row) {
        rowStr += prop + ': ' + row[prop] + '\n';
    }
    //alert('Thw whole row :\n' + rowStr);   
}

function onBeforeSaveCell(row, cellName, cellValue) {    
    return true;
}

const cellEditProp2 = {
    mode: 'click',
    blurToSave: true,
    beforeSaveCell: onBeforeSaveCell, // a hook for before saving cell
    afterSaveCell: onAfterSaveCell  // a hook for after saving cell
};


@inject('usersstore')
@observer
export class UsersEdit extends React.Component<any, any> {

    render() {
        let header = <ModalHeader toggle={this.props.usersstore.toggleUserEditModal}>Create User</ModalHeader>;

        if (this.props.usersstore.UserIsInEditMode) {
            header = <ModalHeader toggle={this.props.usersstore.toggleUserEditModal}>Edit {this.props.usersstore.UsersObj.UserName} User</ModalHeader>;
        }
        return (
            <section>
                <Modal isOpen={this.props.usersstore.UserEditModal} toggle={this.props.usersstore.toggleUserEditModal}>
                    {header}
                    <ModalBody>
                        <form onSubmit={this.props.usersstore.handleUsersSubmit} >                            
                            <div className="form_list row">
                                <ul>                                   
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">User Name</div>
                                            <InputNormal
                                                inputType={'text'}
                                                name={'UserName'}
                                                controlFunc={this.props.usersstore.handleUserChange}
                                                content={this.props.usersstore.UsersObj.UserName}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Email Address</div>
                                            <InputNormal
                                                inputType={'email'}
                                                name={'EmailAddress'}
                                                controlFunc={this.props.usersstore.handleUserChange}
                                                content={this.props.usersstore.UsersObj.EmailAddress}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">First Name</div>
                                            <InputNormal
                                                inputType={'text'}
                                                name={'FirstName'}
                                                controlFunc={this.props.usersstore.handleUserChange}
                                                content={this.props.usersstore.UsersObj.FirstName}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Last Name</div>
                                            <InputNormal
                                                inputType={'text'}
                                                name={'LastName'}
                                                controlFunc={this.props.usersstore.handleUserChange}
                                                content={this.props.usersstore.UsersObj.LastName}
                                            />
                                        </div>
                                    </li>
                                    {
                                        this.props.usersstore.UserCreate == true ? <li className="col-md-12 clearfix">
                                            <div className="form_label">Claims:</div>
                                            <div className="row" style={{ marginTop: "10px" }}>
                                                {this.props.usersstore.NewUserClaims.map((Claim, index) => {
                                                    return (
                                                        <div className="col-md-4" key={index}>
                                                            <div className="form-check">
                                                                <label className="form-check-label">
                                                                    <input className="form-check-input" name="AddClaim" checked={Claim.AddClaim} type="checkbox" onChange={() => this.props.usersstore.handleCheckbox(index)} /> {Claim.ClaimValue}
                                                                    <span className="form-check-sign">
                                                                        <span className="check"></span>
                                                                    </span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </li> : <li className="col-md-12 clearfix">
                                                <div className="form_label">Claims:</div>
                                                <div className="row marginTop10">
                                                    {this.props.usersstore.Userclaims.map((Claim, index) => {
                                                        return (
                                                            <div className="col-md-4" key={index}>
                                                                <div className="form-check">
                                                                    <label className="form-check-label">
                                                                        <input className="form-check-input" name="AddClaim" checked={Claim.AddClaim} type="checkbox" onChange={() => this.props.usersstore.handleCheckboxEdit(index)} /> {Claim.ClaimValue}
                                                                        <span className="form-check-sign">
                                                                            <span className="check"></span>
                                                                        </span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </li>
                                    }                                                                                                        
                                </ul>
                            </div>
                                    <div className="divider"></div>
                                    <button type="submit" style={{ marginLeft: '10px' }} className="btn btn-success pull-right">Save changes</button>
                                    <button type="button" className="btn btn-info pull-right" onClick={this.props.usersstore.toggleUserEditModal}>Close</button>  
                        </form>
                    </ModalBody>
                            <ModalFooter>
                            </ModalFooter>
                </Modal>                
               
            </section>
                    )
                }
}
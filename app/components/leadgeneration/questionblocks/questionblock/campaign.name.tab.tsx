/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as axios from "axios";

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup
} from 'reactstrap';

import { InputNormal } from '../../../../shared/formelement/input.normal';

export class CampaignNameTab extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        
        this.state = {
            
        }
    }
    render() {
        return (
            <section>
                <form>
                    <div className="form_list row">
                        <ul>
                            <li className="col-md-6">
                                <div className="form-group">
                                    <div className="form_label">Admin Name</div>
                                    <InputNormal
                                        inputType={'text'}
                                        name={'adminname'}
                                        //controlFunc={this.handleChange}
                                        content={this.state.Name}
                                        placeholder={'Campaign Name'}
                                    />
                                </div>
                            </li>
                            <li className="col-md-6">
                                <div className="form-group">
                                    <div className="form_label">Name on website</div>
                                    <InputNormal
                                        inputType={'text'}
                                        name={'nameofwebsite'}
                                        //controlFunc={this.handleChange}
                                        content={this.state.Name}
                                        placeholder={'Campaign Name'}
                                    />
                                </div>
                            </li>
                            <li className="col-md-6">
                                <div className="form-group">
                                    <div className="form_label">Campaign Type</div>
                                    <div className="selectdiv">
                                        <select>
                                            <option>Campaign Type</option>
                                        </select>
                                    </div>
                                    {/*<SelectTypeID
                                        name={'Type'}
                                        placeholder={'Campaign type'}
                                        controlFunc={this.handleChange}
                                        options={this.props.Types}
                                        selectedOption={this.props.Type}
                                    />*/}
                                </div>
                            </li>
                            <li className="col-md-6">
                                <div className="form-group">
                                    <div className="form_label">Campaign Contact</div>
                                    <InputNormal
                                        inputType={'text'}
                                        name={'campaigncontact'}
                                        //controlFunc={this.handleChange}
                                        //content={this.state.Name}
                                        placeholder={'Campaign Contact'}
                                    />
                                </div>
                            </li>
                            <li className="col-md-6">
                                <div className="form-group">
                                    <div className="form_label">Invoice Contact</div>
                                    <InputNormal
                                        inputType={'text'}
                                        name={'invoicecontact'}
                                        //controlFunc={this.handleChange}
                                        content={this.state.Name}
                                        placeholder={'Invoice Contact'}
                                    />
                                </div>
                            </li>
                            <li className="col-md-6">
                                <div className="form-group">
                                    <div className="form_label">Campaign Manager</div>
                                    <InputNormal
                                        inputType={'text'}
                                        name={'campaignmager'}
                                        //controlFunc={this.handleChange}
                                        content={this.state.Name}
                                        placeholder={'Campaign Manager'}
                                    />
                                </div>
                            </li>
                            <li className="col-md-6">
                                <div className="form-group">
                                    <div className="form_label">CPA</div>
                                    <InputNormal
                                        inputType={'text'}
                                        name={'cpa'}
                                        //controlFunc={this.handleChange}
                                        content={this.state.Name}
                                        placeholder={'CPA'}
                                    />
                                </div>
                            </li>
                            <li className="col-md-6">
                                <div className="form-group">
                                    <div className="form_label">Accept Rate</div>
                                    <InputNormal
                                        inputType={'text'}
                                        name={'acceptrate'}
                                        //controlFunc={this.handleChange}
                                        content={this.state.Name}
                                        placeholder={'Accept Rate'}
                                    />
                                </div>
                            </li>
                            <li className="col-md-6">
                                <div className="form-group">
                                    <div className="form_label">Data collection category</div>
                                    <div className="selectdiv">
                                        <select>
                                            <option>Data collection category</option>
                                        </select>
                                    </div>
                                </div>
                            </li>
                            <li className="col-md-6">
                                <div className="form-group">
                                    <div className="form_label">User interest category</div>
                                    <div className="selectdiv">
                                        <select>
                                            <option>User interest category</option>
                                        </select>
                                    </div>
                                </div>
                            </li>
                            <li className="col-md-6">
                                <div className="form-group">
                                    <div className="form_label">Market sector</div>
                                    <InputNormal
                                        inputType={'text'}
                                        name={'marketsector'}
                                        //controlFunc={this.handleChange}
                                        content={this.state.Name}
                                        placeholder={'Market sector'}
                                    />
                                </div>
                            </li>
                            <li className="col-md-6">
                                <div className="form-group">
                                    <div className="form_label">Channel</div>
                                    <InputNormal
                                        inputType={'text'}
                                        name={'channel'}
                                        //controlFunc={this.handleChange}
                                        content={this.state.Name}
                                        placeholder={'Channel'}
                                    />
                                </div>
                            </li>
                        </ul>

                        <div className="row">
                            <div className="col-md-12">
                                <div className="divider"></div>
                                <button type="submit" className="btn btn-green">Create Campaign</button>
                                <button style={{ marginLeft: "10px" }} type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        )
    }

}
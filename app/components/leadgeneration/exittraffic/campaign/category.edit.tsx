/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as axios from "axios";
import * as validator from 'validator';
import { observer, inject } from 'mobx-react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup
} from 'reactstrap';


import { TextareaNormal } from '../../../../shared/formelement/textarea.normal';
import { InputNormal } from '../../../../shared/formelement/input.normal';

@inject('campaignstore', 'campaigncategory')
@observer
export class CategoryEdit extends React.Component<any, any> {

    render() {
        let header = <ModalHeader toggle={this.props.campaigncategory.toggleCategoryEditModal}>Create Campaign Category</ModalHeader>;

        if (this.props.campaigncategory.CampaignCategoryIsInEditMode) {
            header = <ModalHeader toggle={this.props.campaigncategory.toggleCategoryEditModal}>Edit {this.props.campaigncategory.CategoryObj.Name}</ModalHeader>;
        }
        return (
            <section>
                <Modal id="catEdit" isOpen={this.props.campaigncategory.modalCategoryEdit} toggle={this.props.campaigncategory.toggleCategoryEditModal}>
                    {header}
                    <ModalBody>
                        <form onSubmit={this.props.campaigncategory.handleSubmitCategory}>
                            <div className="form_list row" style={{ marginBottom: "20px" }}>
                                <ul>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Name</div>
                                            <InputNormal
                                                inputType={'text'}
                                                name={'Name'}
                                                controlFunc={this.props.campaigncategory.handleNormalChange}
                                                placeholder={'Name'}
                                                content={this.props.campaigncategory.CategoryObj.Name}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Url</div>
                                            <InputNormal
                                                inputType={'text'}
                                                name={'Url'}
                                                controlFunc={this.props.campaigncategory.handleNormalChange}
                                                placeholder={'Url'}
                                                content={this.props.campaigncategory.CategoryObj.Url}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">PageTitle</div>
                                            <InputNormal
                                                inputType={'text'}
                                                name={'PageTitle'}
                                                controlFunc={this.props.campaigncategory.handleNormalChange}
                                                placeholder={'Page Title'}
                                                content={this.props.campaigncategory.CategoryObj.PageTitle}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6" style={{ height: "80px" }}>
                                        <div className="form-group">
                                            <div className="form_label">Meta Keywords</div>
                                            <TextareaNormal
                                                name={'MetaKeywords'}
                                                controlFunc={this.props.campaigncategory.handleNormalChange}
                                                placeholder={'Meta Keywords'}
                                                content={this.props.campaigncategory.CategoryObj.MetaKeywords}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6" style={{ height: "80px" }}>
                                        <div className="form-group">
                                            <div className="form_label">Meta description</div>
                                            <TextareaNormal
                                                name={'MetaDescription'}
                                                controlFunc={this.props.campaigncategory.handleNormalChange}
                                                placeholder={'Meta description'}
                                                content={this.props.campaigncategory.CategoryObj.MetaDescription}
                                            />
                                        </div>
                                    </li>

                                </ul>
                            </div>

                            <button type="submit" className="btn btn-success pull-right">Save Category</button>
                            <button type="button" style={{ marginRight: '10px' }} className="btn btn-danger pull-right" onClick={this.props.campaigncategory.toggleCategoryEditModal}>Close</button>

                        </form>

                    </ModalBody>
                </Modal>
            </section>
        )
    }

}






/// <reference path="../../../../typings/index.d.ts" />
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { SelectFormElement } from '../../../shared/formelement/select.formelement';
import { SimpleInputField } from '../../../shared/filterelements/simple.input.field';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from 'reactstrap';

@inject('reportstore')
@observer
export class RegistrationCostReport extends React.Component<any, any> {

    componentDidMount() {
        this.props.reportstore.getRegistrationTypes();
        this.props.reportstore.getAffiliates();
        this.props.reportstore.getWebsites(); 
    }

    render() {
        return (
            <section>
                <div className="fllter-wrap clearfix">
                    <Button color="info" onClick={this.props.reportstore.toggleFilterModal}><i className="fa fa-search" style={{ marginRight: '10px' }}> </i> Filter</Button>

                    <Modal isOpen={this.props.reportstore.showFilterModal} toggle={this.props.reportstore.toggleFilterModal}>
                        <ModalHeader toggle={this.props.reportstore.toggleFilterModal}>Cost Report Filter</ModalHeader>
                        <ModalBody>
                            <div className="form_list row">
                                <ul> 
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Date From</div>
                                            <DatePicker
                                                className="form-control"
                                                onChange={this.props.reportstore.handleReportDateFromChange}
                                                selected={this.props.reportstore.DateTimeFromSelected}
                                            />
                                        </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form-group">
                                            <div className="form_label">Date To</div>
                                            <DatePicker
                                                className="form-control"
                                                onChange={this.props.reportstore.handleReportDateToChange}
                                                selected={this.props.reportstore.DateTimeToSelected}
                                            />
                                            </div>
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form_label">Date grouping</div>
                                        <SelectFormElement
                                            options={[{ name: "Hour", value: "hour" }, { name: "Day", value: "day" }, { name: "Week", value: "week" }, { name: "Month", value: "month" }, { name: "Year", value: "Year" }]}
                                            controlFunc={this.props.reportstore.handleReportFilterChange}
                                            name='DateGrouping'
                                            selectedOption={this.props.reportstore.costReportFilter.DateGrouping}
                                            placeholder='select'
                                        />
                                    </li>
                                    <li className="col-md-6">
                                        <div className="form_label">Affiliate</div>
                                        <SelectFormElement
                                            options={this.props.reportstore.Affiliatedata.map(a => { return { name: a.Name, value: a.AffiliateCode } })}
                                            controlFunc={this.props.reportstore.handleReportFilterChange}
                                            name='AffiliateCode'
                                            selectedOption={this.props.reportstore.costReportFilter.AffiliateCode}
                                            placeholder='select'
                                        />
                                    </li>
                                </ul>
                            </div>

                            {/* <div className="row">
                                <div className="col-md-3">
                                    <div className="filter_label">Date From</div>
                                    <DatePicker
                                        onChange={this.props.reportstore.handleReportDateFromChange}
                                        selected={this.props.reportstore.DateTimeFromSelected}
                                    />

                                </div>
                                <div className="col-md-3">
                                    <div className="filter_label">Date To</div>
                                    <DatePicker
                                        onChange={this.props.reportstore.handleReportDateToChange}
                                        selected={this.props.reportstore.DateTimeToSelected} />
                                </div>
                            </div>*/}

                           

                            {/*<div className="row">
                                <div className="col-md-3">
                                    <div className="filter_label">Date grouping</div>
                                    <SelectFormElement
                                        options={[{ name: "Hour", value: "hour" }, { name: "Day", value: "day" }, { name: "Week", value: "week" }, { name: "Month", value: "month" }, { name: "Year", value: "Year" }]}
                                        controlFunc={this.props.reportstore.handleReportFilterChange}
                                        name='DateGrouping'
                                        selectedOption={this.props.reportstore.costReportFilter.DateGrouping}
                                        placeholder='select'
                                   />
                                </div>

                                <div className="col-md-3">
                                    <div className="filter_label">Affiliate</div>
                                    <SelectFormElement
                                        options={this.props.reportstore.Affiliatedata.map(a => { return {name: a.Name, value: a.AffiliateCode } })}
                                        controlFunc={this.props.reportstore.handleReportFilterChange}
                                        name='AffiliateCode'
                                        selectedOption={this.props.reportstore.costReportFilter.AffiliateCode}
                                        placeholder='select'
                                    />
                                </div>
                            </div>*/}
                            <div className="divider"></div>
                            <div>
                                <button className="btn btn-success pull-right" data-dismiss="modal" onClick={this.props.reportstore.applyFilter}>Apply Filter</button>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                        </ModalFooter>
                    </Modal>
                </div>
                <div className="table-responsive">
                    {
                        this.props.reportstore.loading ? <div className="loaderImg"></div> : <BootstrapTable data={this.props.reportstore.Costreport.Table} keyField="key">
                            {this.props.reportstore.columns.map(column => (
                                <TableHeaderColumn key={column} dataField={column}> {column} </TableHeaderColumn>
                            ))}
                        </BootstrapTable>
                    }
                </div>
            </section>
        )
    }
}
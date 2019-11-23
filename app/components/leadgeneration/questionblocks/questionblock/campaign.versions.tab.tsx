/// <reference path="../../../../../typings/index.d.ts" />

import * as React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as axios from "axios";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, TabContent, TabPane, Nav, NavItem, NavLink, Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';


import { InputNormal } from '../../../../shared/formelement/input.normal';
import { RadioCheckbox } from '../../../../shared/formelement/radio.checkbox';

export class CampaignVersions extends React.Component<any, any> {
    constructor(props) {
        super(props);
        
        this.state = {
            versions: [],
            selectedVersions: []
           
        }
        this.handleVersionSelection = this.handleVersionSelection.bind(this);      
        
    }
    componentDidMount() {
        axios.get('http://www.json-generator.com/api/json/get/cgytuKfdki?indent=2')
            .then(response => {
                var apidata = response.data as any[];
                //console.log(response.data);
                this.setState({
                    versions: apidata
                });
            })
    }
    handleVersionSelection(e) {
        const newSelection = e.target.value;
        let newSelectionArray;
        if (this.state.selectedVersions.indexOf(newSelection) > -1) {
            newSelectionArray = this.state.selectedVersions.filter(s => s !== newSelection)
        } else {
            newSelectionArray = [...this.state.selectedVersions, newSelection];
        }
        this.setState({ selectedVersions: newSelectionArray }, () => console.log('version selection', this.state.selectedVersions));
    }
    
    render() {
        return (
            <section>
                <Accordion>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <span className="alabel">Version 1</span> <span className="data_label">Prize Draw <i className="fa fa-close"></i></span>
                            <span className="data_label">Path Sponsor <i className="fa fa-close"></i></span>
                            <div className="accordion__arrow" role="tab"></div>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <div className="version_icons">
                                <span><i className="fa fa-shield"></i></span> <span><i className="fa fa-edit"></i></span> <span><i className="fa fa-eye"></i></span>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <div className="form_label">Name</div>
                                        <InputNormal
                                            inputType={'text'}
                                            name={'Name'}
                                            //controlFunc={this.handleChange}
                                            //content={this.state.CampaignsObj.Name}
                                            placeholder={'Name'}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group" style={{backgroundColor:'#f2f2f2', padding:'15px'}}>                                                                            
                                        <RadioCheckbox                                            
                                            setName={'version'}
                                            type={'checkbox'}
                                            controlFunc={this.handleVersionSelection}
                                            options={this.state.versions}
                                            selectedOptions={this.state.selectedVersions}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <div className="form_label">View</div>
                                        <InputNormal
                                            inputType={'text'}
                                            name={'view'}
                                            //controlFunc={this.handleChange}
                                            //content={this.state.CampaignsObj.Name}
                                            placeholder={'View'}
                                        />
                                    </div>
                                </div>
                            </div>
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <div><span className="alabel">Version 2</span> <span className="data_label">Prize Draw <i className="fa fa-close"></i></span> <div className="accordion__arrow" role="presentation"></div></div>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <p>Body content</p>
                        </AccordionItemBody>
                    </AccordionItem>
                    <AccordionItem>
                        <AccordionItemTitle>
                            <div><span className="alabel">Version 3</span> <div className="accordion__arrow" role="presentation"></div></div>
                        </AccordionItemTitle>
                        <AccordionItemBody>
                            <p>Body content</p>
                        </AccordionItemBody>
                    </AccordionItem>
                </Accordion>
            </section>
        )
    }
}
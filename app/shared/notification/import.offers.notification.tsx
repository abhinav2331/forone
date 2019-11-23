/// <reference path="../../../typings/index.d.ts" />
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

export class NotificationMessage extends React.Component<any, any> {  
        
    render() {
        return (
            <section>
                {
                    this.props.Message == "OK" ?
                        <div className="actionMessage">You successfully Imported Offers. </div>
                        : ""
                }    
                {
                    this.props.Status == "400" ?
                        <div className="actionMessage">Campaign already exist. Please Try with another! </div>
                        : ""
                }
                {
                    this.props.Error == "Request failed with status code 500" ?
                        <div className="actionMessage">This is some Internal Server Error! Please try again later.</div>
                        : ""
                }
               
                
            </section>
        )
    }
}
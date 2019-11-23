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

export class AffiliateCreateNotification extends React.Component<any, any> {

    render() {
        return (
            <section>
                {
                    this.props.Message == "OK" ?
                        <div className="actionMessage">You successfully created Affiliate!</div>
                        : ""
                }
                {
                    this.props.Error == "Request failed with status code 400" ?
                        <div className="actionMessage">The server responded with a status of 400. Please try again later.</div>
                        : ""
                }
                {
                    this.props.MessageRoiCreate == "OK" ?
                        <div className="actionMessage">You successfully created Target!</div>
                        : ""
                }
                {
                    this.props.ErrorRoiCreate == "Request failed with status code 500" ?
                        <div className="actionMessage">The server responded with a status of 500. Please try again later.</div>
                        : ""
                }

                {
                    this.props.MessageRoiEdit == "OK" ?
                        <div className="actionMessage">You successfully edit Target!</div>
                        : ""
                }
                {
                    this.props.ErrorRoiEdit == "Request failed with status code 400" ?
                        <div className="actionMessage">The server responded with a status of 400. Please try again later.</div>
                        : ""
                }                  


                
                
            </section>
        )
    }
}
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

export class AffiliateEditNotification extends React.Component<any, any> {

    render() {
        return (
            <section>
                {
                    this.props.Message == "OK" ?
                        <div className="actionMessage">You successfully Edit Affiliate! </div>
                        : ""
                }
                {
                    this.props.Error == "Request failed with status code 400" ?
                        <div className="actionMessage">The server responded with a status of 400. Please try again later.</div>
                        : ""
                }
            </section>
        )
    }
}
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

export class CampaignEditNotification extends React.Component<any, any> {

    render() {
        return (
            <section>               
                {
                    this.props.Message == "OK" ?
                        <div className="actionMessage"> You successfully Edit Campaign! </div>
                        : ""
                }                
            </section>
        )
    }
}
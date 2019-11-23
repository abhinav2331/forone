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

export class CampaignCreateNotification extends React.Component<any, any> {

    render() {
        return (
            <section>               
                {
                    this.props.Message == "OK" ?
                        <div className="actionMessage">{/*{this.props.Message}*/} You successfully Created Campaign! </div>
                        : ""
                }
            </section>
        )
    }
}
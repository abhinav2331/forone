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

export class CampaignRevenueNotification extends React.Component<any, any> {

    render() {
        return (
            <section>
                {
                    this.props.CampaignRevenueCreateMessage == "OK" ?
                        <div className="actionMessage">You successfully Created Revenue! </div>
                        : ""
                }
                
                {
                    this.props.CampaignRevenueCreateErrorMessage == "Request failed with status code 400" ?
                        <div className="actionMessage">The server responded with a status of 400. Please try again later.</div>
                        : ""
                }

                {
                    this.props.CampaignRevenueEditMessage == "OK" ?
                        <div className="actionMessage">You successfully Edited Revenue! </div>
                        : ""
                }
                {
                    this.props.CampaignRevenueEditErrorMessage == "Request failed with status code 400" ?
                        <div className="actionMessage">The server responded with a status of 400. Please try again later.</div>
                        : ""
                }


            </section>
        )
    }
}
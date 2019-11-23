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

export class CampaignAddCreativeNotification extends React.Component<any, any> {

    render() {
        return (
            <section>
                {
                    this.props.MessageUpload == "OK" ? <div className="actionMessage">You successfully upload the creative! </div>
                        : ""
                }
                {
                    this.props.MessageUploadError == "Request failed with status code 500" ? <div className="actionMessage">Server response with the code 500. Please try again later. </div>
                        : ""
                }
                
            </section>
        )
    }
}
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

export class PasswordResetNotification extends React.Component<any, any> {

    render() {
        return (
            <section>
                {
                    this.props.MessageReset == "OK" ?
                        <div className="actionMessage">Email sent successfully.</div>
                        : ""
                }

                {
                    this.props.MessageResetPassword == "OK" ?
                        <div className="actionMessage">Password Reset successfully.</div>
                        : ""
                }
                
            </section>
        )
    }
}
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

export class UserNotification extends React.Component<any, any> {

    render() {
        return (
            <section>
                {
                    this.props.UserCreateMessage == "OK" ?
                        <div className="actionMessage">You successfully Created User! </div>
                        : ""
                }
                {
                    this.props.UserEditMessage == "OK" ?
                        <div className="actionMessage">You successfully Edit User! </div>
                        : ""
                }
                {
                    this.props.UserEditErrorMessage == "Request failed with status code 400" ?
                        <div className="actionMessage">The server responded with a status of 400. Please try again later.</div>
                        : ""
                }
                {/*{
                    this.props.Error == "Request failed with status code 400" ?
                        <div className="actionMessage">The server responded with a status of 400. Please try again later.</div>
                        : ""
                }*/}
            </section>
        )
    }
}
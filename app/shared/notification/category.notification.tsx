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

export class CategoryNotification extends React.Component<any, any> {

    render() {
        return (
            <section>
                {
                    this.props.CatCreateMessage == "OK" ?
                        <div className="actionMessage">You successfully Created Category! </div>
                        : ""
                }
                {
                    this.props.CatEditMessage == "OK" ?
                        <div className="actionMessage">You successfully Edited Category! </div>
                        : ""
                }
                {
                    this.props.CatCreatErroreMessage == "Request failed with status code 400" ?
                        <div className="actionMessage">The server responded with a status of 400. Please try again later.</div>
                        : ""
                }
            </section>
        )
    }
}
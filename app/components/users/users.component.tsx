/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import * as axios from "axios";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import { UserNotification } from '../../shared/notification/users.notification';
import { UsersEdit } from './user/user.edit';



import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup
} from 'reactstrap';

@inject('usersstore')
@observer
export class UsersList extends React.Component<any, any> {    

    componentDidMount() {
        this.props.usersstore.getUsers();        
    }

    render() {        

        return (
            <section>
                <UserNotification
                    UserCreateMessage={this.props.usersstore.UserCreateResponse.statusText}
                    IsNotifyUserCreate={this.props.usersstore.IsNotifyUserCreate}
                />
                <UserNotification
                    UserEditMessage={this.props.usersstore.UsereditResponse.statusText}
                    IsNotifyUserEdit={this.props.usersstore.IsNotifyUserEdit}
                />
                <UserNotification
                    UserEditMessage={this.props.usersstore.UsereditResponse.statusText}
                    IsNotifyUserEditError={this.props.usersstore.IsNotifyUserEditError}
                />

                <div style={{marginBottom:"10px"}}>
                    <Button type="button" onClick={this.props.usersstore.showCreateUserModal} className="btn btn-success" style={{ marginRight: '10px' }}>Create User</Button>
                </div>
                <div className="table-responsive">
                {
                        this.props.usersstore.Userloading ? <div className="loaderImg"></div> : <BootstrapTable data={this.props.usersstore.Users} pagination={true} containerStyle={{ width: '100%' }} options={{ noDataText: 'No data found in Campaign Table!' }} striped={true} hover={true} responsive={true}>
                        <TableHeaderColumn width='120px' dataField="UserId" isKey={true}>UserId</TableHeaderColumn>
                        <TableHeaderColumn dataField="UserName">User Name</TableHeaderColumn>
                        <TableHeaderColumn dataField="EmailAddress">Email Address</TableHeaderColumn>
                        <TableHeaderColumn dataField="FirstName">First Name</TableHeaderColumn>
                        <TableHeaderColumn dataField="LastName">Last Name</TableHeaderColumn>
                        <TableHeaderColumn dataField="button" dataFormat={this.props.usersstore.buttonFunction.bind(this)}>Action</TableHeaderColumn>
                    </BootstrapTable>
                    }  
                </div>

                <section>
                    <UsersEdit />
                </section>                
            </section>
        )
    }
}
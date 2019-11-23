/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import * as axios from "axios";
import { observer, inject } from 'mobx-react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup
} from 'reactstrap';

import { CategoryEdit } from './category.edit';
import { CategoryNotification } from '../../../../shared/notification/category.notification';


@inject('campaignstore', 'campaigncategory')
@observer
export class CampaignCategories extends React.Component<any, any> {

    componentDidMount() {
        this.props.campaigncategory.getAllCategory();        
    }

    render() {

        return (
            <section>                    
                <section>
                    <CategoryNotification
                        CatCreateMessage={this.props.campaigncategory.CatCreateStatus.statusText}
                        IsNotifyCatCreate={this.props.campaigncategory.IsNotifyCatCreate}
                    />
                    <CategoryNotification
                        CatEditMessage={this.props.campaigncategory.CatEditStatus.statusText}
                        IsNotifyCatEdit={this.props.campaigncategory.IsNotifyCatEdit}
                    />
                    <CategoryNotification
                        CatCreatErroreMessage={this.props.campaigncategory.CatCreatErrore}
                        IsNotifyCatCreateError={this.props.campaigncategory.IsNotifyCatCreateError}
                    />
                    
                    <div className="fllter-wrap clearfix">
                        <Button type="button" onClick={this.props.campaigncategory.showCategoryCreateModal} className="btn btn-success" style={{ marginRight: '10px' }}>Create Category</Button>
                    </div>
                    <div className="table-responsive">
                        {
                            this.props.campaigncategory.loading ? <div className="loaderImg"></div> :<BootstrapTable data={this.props.campaigncategory.Categories} pagination={true} containerStyle={{ width: '100%' }} options={{ noDataText: 'No data found in Campaign Table!' }} striped={true} hover={true} responsive={true}>
                            <TableHeaderColumn width="350px" dataField="Name" isKey={true} dataAlign="left" dataSort={true}>Name</TableHeaderColumn>
                            <TableHeaderColumn dataField="Url" dataAlign="left" dataSort={true}>Url</TableHeaderColumn>
                            <TableHeaderColumn width="90px" dataField="Buttons" dataAlign="left" dataFormat={this.props.campaigncategory.buttonCatEditFunction.bind(this)}>Actions</TableHeaderColumn>
                            </BootstrapTable>
                        }
                    </div>
                </section>                
                <CategoryEdit />
            </section>
        )
    }

}






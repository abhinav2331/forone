/// <reference path="../../../typings/index.d.ts" />
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactTable from "react-table";
import * as axios from "axios";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup
} from 'reactstrap';

export class TrafficCampaigns extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = {
            Tabledatas: [],
            Publisher: [],
            Types: [],
            Status: [],
            Clients: [],
            Datefilter: [],
            DatefilterSelected: '',
            Posttypes: [],
            Ispost: false,
            Islanding: false,
            Issurvey: false,
            Isactive: true,
            PostMethods: [],
            PublisherSelected: '',
            TypesSelected: '',
            StatusSelected: '',
            ClientsSelected: '',
            modal: false
        };

        this.updateState = this.updateState.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.toggle = this.toggle.bind(this);
        this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
        //console.log(this.state.Posttype);
        // const value = target.type === 'checkbox' ? target.checked : target.value;
    }
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    handleCheckboxChange(e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    componentDidMount() {
        axios.get("http://www.json-generator.com/api/json/get/bTWBesYLdu?indent=2").then(response => {
            this.setState({
                Tabledatas: (response.data as any[]).slice(0, 0)
            });
        });
        axios.get("http://www.json-generator.com/api/json/get/bUfrCjcZiW?indent=2").then(response => {
            this.setState({
                Publisher: response.data
            });
        });
        axios.get("http://www.json-generator.com/api/json/get/cjnTNojmNu?indent=2").then(response => {
            this.setState({
                Types: response.data
            });
        });
        axios.get("http://www.json-generator.com/api/json/get/bVQJgxVfAO?indent=2").then(response => {
            this.setState({
                Status: response.data
            });
        });
        axios.get("http://www.json-generator.com/api/json/get/cqfkHudjTm?indent=2").then(response => {
            this.setState({
                Clients: response.data
            });
        });
        axios.get("http://www.json-generator.com/api/json/get/cfWPOlzVgy?indent=2").then(response => {
            this.setState({
                Posttypes: response.data
            });
        });
        axios.get("http://www.json-generator.com/api/json/get/ceKYsamxDS?indent=2").then(response => {
            this.setState({
                PostMethods: response.data
            });
        });
    }

    updateState() {
        axios.get("http://www.json-generator.com/api/json/get/bTWBesYLdu?indent=2").then(response => {
            var apidata = response.data as any[];
            var data = apidata.filter(p => p.Status == this.state.StatusSelected && p.Publisher == this.state.PublisherSelected && p.Type == this.state.TypesSelected);

            this.setState({
                Tabledatas: data,
                modal: !this.state.modal
            });
        });
    }
    render() {
        return (
            <section>
                <h1>Data Table</h1>

                <div className="fllter-wrap clearfix">
                    <Button color="danger" onClick={this.toggle}>OPEN</Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle}>
                        <ModalHeader toggle={this.toggle}>Reports Filter</ModalHeader>
                        <ModalBody>
                            <div className="clearfix">
                                <div className="styled-select">
                                    <input type="date" name="DatefilterSelected" value={this.state.DatefilterSelected} onChange={this.handleChange} />
                                </div>
                                <div className="styled-select">
                                    <select name="PublisherSelected" value={this.state.PublisherSelected} onChange={this.handleChange}>
                                        <option value="Publisher">Publisher</option>
                                        {this.state.Publisher.map((Publish, index) => {
                                            return <option key={index} value={Publish.abbreviation}>{Publish.name}</option>;
                                        })}
                                    </select>
                                </div>
                                <div className="styled-select">
                                    <select name="TypesSelected" value={this.state.TypesSelected} onChange={this.handleChange}>
                                        <option value="Types">Types</option>
                                        {this.state.Types.map((Typ, index) => {
                                            return <option key={index} value={Typ.abbreviation}>{Typ.name}</option>;
                                        })}
                                    </select>
                                </div>
                                <div className="styled-select">
                                    <select name="StatusSelected" value={this.state.StatusSelected} onChange={this.handleChange}>
                                        <option value="Status">Status</option>
                                        {this.state.Status.map((Stat, index) => {
                                            return <option key={index} value={Stat.abbreviation}>{Stat.name}</option>;
                                        })}
                                    </select>
                                </div>
                                <div className="styled-select">
                                    <select name="ClientsSelected" value={this.state.ClientsSelected} onChange={this.handleChange}>
                                        <option value="Client">Client</option>
                                        {this.state.Clients.map((Client, index) => {
                                            return <option key={index} value={Client.abbreviation}>{Client.name}</option>;
                                        })}
                                    </select>
                                </div>

                            </div>
                            <div className="clearfix" style={{ "margin-top": "20px" }}>
                                <div className="row no-margin">
                                    {/*{
                                        this.state.Posttypes.map((Posttype, index) => {
                                            return <div className="col-md-4"><input type="checkbox" checked={Posttype.} name={Posttype.name} value={Posttype.abbreviation} onChange={this.handleChange} />{' '} {Posttype.name} </div>
                                        })
                                    }*/ }
                                    <div className="col-md-4"><input type="checkbox" checked={this.state.Ispost} name="Ispost" value="Posts" onChange={this.handleCheckboxChange} />{' '} Posts </div>
                                    <div className="col-md-4"><input type="checkbox" checked={this.state.Islanding} name="Islanding" value="Posts" onChange={this.handleCheckboxChange} />{' '} Posts </div>
                                    <div className="col-md-4"><input type="checkbox" checked={this.state.Issurvey} name="Issurvey" value="Posts" onChange={this.handleCheckboxChange} />{' '} Posts </div>
                                </div>
                            </div>

                            <div className="divider"></div>

                            <div className="clearfix" style={{ "margin-top": "20px" }}>
                                <div className="row no-margin">
                                    {/* {
                                        this.state.PostMethods.map((PostMethod, index) => {
                                            return <div className="col-md-4"><input type="radio" name={PostMethod.rname} value={PostMethod.abbreviation} onChange={this.handleChange} />{' '} {PostMethod.name} </div>
                                        })

                                    }  */}
                                    <div className="col-md-4"><input type="radio" name="Isactive" value="Active" onChange={this.handleCheckboxChange} />{' '} Active </div>
                                    <div className="col-md-4"><input type="radio" name="Isactive" value="Inactive" onChange={this.handleCheckboxChange} />{' '} In Active </div>

                                </div>
                            </div>

                            <div className="divider"></div>
                            <div>
                                <button className="btn btn-success pull-right" onClick={this.updateState}>Apply Filter</button>
                            </div>

                        </ModalBody>
                        <ModalFooter>
                            {/*<Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                            <Button color="secondary" onClick={this.toggle}>Cancel</Button>*/}
                        </ModalFooter>
                    </Modal>

                </div>
                <div>
                    <ReactTable
                        data={this.state.Tabledatas}
                        noDataText="No data available!"
                        columns={[
                            {
                                columns: [
                                    {
                                        Header: "Status",
                                        accessor: "Status"
                                    },
                                    {
                                        Header: "Publisher",
                                        accessor: "Publisher"
                                    }
                                    ,
                                    {
                                        Header: "Network",
                                        accessor: "Network"
                                    },
                                    {
                                        Header: "Campaign",
                                        accessor: "Campaign"
                                    },
                                    {
                                        Header: "Country",
                                        accessor: "Country"
                                    },
                                    {
                                        Header: "OfferID",
                                        accessor: "OfferID"
                                    }
                                    ,
                                    {
                                        Header: "Payout",
                                        accessor: "Payout"
                                    },
                                    {
                                        Header: "Type",
                                        accessor: "Type"
                                    }
                                ]
                            }
                        ]}
                        defaultPageSize={15}
                        className="-striped -highlight"
                    />
                </div>
            </section>)
    }
}
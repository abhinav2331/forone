/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import * as axios from "axios";
import { extendObservable, observable, action } from "mobx";
import { get, post } from '../../../../shared/api.service';
import moment from 'moment';
import { AffiliateAll } from '../../../../model/affiliate.model';

export class CostReportFilter {

    constructor() {
        var date = moment();

        this.FromDate = date;
        this.ToDate = date;
        this.DateGrouping;
        this.AffiliateCode;
    }

    FromDate: moment.Moment;
    ToDate: moment.Moment;
    DateGrouping: string;
    AffiliateCode: string;
}

export class ReportStore {
    getRoimanagerList(): any {
        throw new Error("Method not implemented.");
    }
    Websiteid: any[];
    RoiIsInEditMode: boolean;
    isRoiEditedError: boolean;
    RoiEditError: any;
    isRoiEdited: boolean;
    RoiEditResponse: {};
    RoiEditModal: boolean;
    _rowEditorRoiPopup(arg0: any, arg1: any): any {
        throw new Error("Method not implemented.");
    }
    getRoiAffiliate(): any {
        throw new Error("Method not implemented.");
    }
    RoiCreateError: any;
    isRoiCreatedError: boolean;
    isRoiCreated: boolean;
    RoiCreateResponse: {};
    RoiAffiliateid: any;
    RoiObj: {};
    RoiAffiliatedata: {};
    RoiCreateModal: boolean;
    Roiloading: boolean;
    Roilistsdata: {};
    loading: boolean;
    @observable columns: any[];
    TableData: any;
    CurrentDate: string;
    IsAffiliateCreateError: boolean;
    AffliateCreateError: any;
    CreateResponse: {};
    IsAffiliateCreate: boolean;
    AffiliateCreateModal: boolean;
    IsAffiliateEditError: boolean;
    AffliateEditError: any;
    getAffiliates(): any {
        throw new Error("Method not implemented.");
    }
    IsAffiliateEdit: boolean;
    EditResponse: {};
    AffiliateObj: any;
    _rowEditorAffiliatePopup(arg0: any, arg1: any): any {
        throw new Error("Method not implemented.");
    }
    Affiliateloading: boolean;
    RegistrationTypeIdSelected: string;
    WebsiteIDSelected: string;
    RegistrationTypes: any[];
    Websites: any[] = [];
    AffiliateIsInEditMode: boolean; // True if editing, false if creating
    AffiliateEditModal: boolean;
    Affiliatedata: {};
    showFilterModal: boolean = false;
    DateTimeFromSelected: moment.Moment;
    DateTimeToSelected: moment.Moment;
    modal: boolean;
    Costreport: any;
    @observable TableStores: any;
    FieldFormatMappings: any[];
    costReportFilter: CostReportFilter;
    
    constructor() {
        var date = moment();

        extendObservable(this, {
            FieldFormatMappings: [{ column: "CR %", format: "percentage" }, { column: "Cost", format: "money" }, { column: "QB", format: "money" }, { column: "Exit", format: "money" }, { column: "Total", format: "money" }, { column: "RPU", format: "money" }],
            Costreport: [],
            TableStores: [],
            TimeGroup: [{ Text: 'Day', Value: 'DAY' }, { Text: 'Hour', Value: 'HOUR' }, { Text: 'Week', Value: 'WEEK' }, { Text: 'Month', Value: 'MONTH' }, { Text: 'Year', Value: 'YEAR' }],
            modal: false,
            DateTimeFromSelected: date,
            DateTimeToSelected: date,
            Affiliateloading: false,
            AffiliateCreate: false,
            AffiliateEdit: false,
            Affiliatedata: [],
            AffiliateObj: new AffiliateAll(),
            AffiliateEditModal: false,
            showFilterModal: false,
            Websiteid: [],
            RegistrationTypes: [],
            WebsiteIDSelected: '',
            CurrencyCodes: [{ name: 'GBP', value: '1' }, { name: 'AUD', value: '2' }, { name: 'EUR', value: '3' }, { name: 'USD', value: '4' }],
            CostingModels: [{ name: 'CPA', value: '1' }, { name: 'PPC - Split by campaign', value: '2' }, { name: 'PPC', value: '3' }],
            Disabled: [{ Text: 'True', Value: true }, { Text: 'False', Value: false }],
            TrafficIsIncentivised: [{ Text: 'True', Value: true }, { Text: 'False', Value: false }],
            EditResponse: '',
            IsAffiliateEdit: false,
            IsAffiliateEditError: false,
            IsAffiliateCreateError: false,
            AffliateEditError: '',
            AffiliateCreateModal: '',
            IsAffiliateCreate: false,
            CreateResponse: [],
            AffliateCreateError: '',
            WebsitePlatform: [{ name: 'Desktop', value: '1' }, { name: 'Tablet', value: '2' }, { name: 'Mobile', value: '3' }],
            CurrentDate: date,
            AffiliateIsInEditMode: false,
            TableData: [
                {}
            ],
            columns: [],
            loading: false,
            Roilistsdata: [],
            Roiloading: false,
            RoiCreateModal: false,
            RoiAffiliatedata: [],
            RoiAffiliateid: '',
            RoiObj: {},
            RoiCreateResponse: [],
            isRoiCreated: false,
            RoiCreateError: '',
            isRoiCreatedError: false,
            RoiEditModal: false,
            RoiEditResponse: [],
            isRoiEdited: false,
            RoiEditError: '',
            isRoiEditedError: false,
            RoiIsInEditMode: false,            


            costReportFilter: new CostReportFilter(),
            showCreateAffiliateModal: action((e: any) => {
                this.AffiliateIsInEditMode = false;
                this.AffiliateEditModal = true;
            }),

            handleReportFilterChange: action((e: any) => {
                this.costReportFilter[e.target.name] = e.target.value;
                console.log(this.costReportFilter);
            }),
            handleChange: action((e: any) => {
                this[e.target.name] = e.target.value;
            }),

            handleReportChange: action((e: any) => {
                this[e.target.name] = e.target.value;
            }),

            toggleFilterModal: action(() => {
                this.showFilterModal = !this.showFilterModal;
            }),
            toggleAffiliateEditModal: action(() => {
                this.AffiliateEditModal = !this.AffiliateEditModal;
            }),
            getAffiliates: action(() => {
                this.Affiliateloading = true;
                get("reporting/affiliates")
                    .then(response => {
                        this.Affiliatedata = response;
                        this.Affiliateloading = false;
                    }).catch(error => {
                        console.log(error)
                    });
            }),

            getWebsites: action(() => {
                get('reporting/websites/')
                    .then(response => {
                        this.Websites = response as any[];
                    }).catch(error => {
                        console.log(error)
                    });
            }),

            getRegistrationTypes: action(() => {
                get('reporting/websites/registrationtypes')
                    .then(response => {
                        this.RegistrationTypes = response as any[];
                    }).catch(error => {
                        console.log(error)
                    });
            }),

            handleAffiliateChange: action((e: any) => {                
                var levels = e.target.name.split('_');
                var value = e.target.value;

                if (e.target.type == "checkbox") {
                    value = e.target.checked ? true : false;
                }       

                var obj = this.AffiliateObj;

                for (var i = 0; i < levels.length - 1; i++) {
                    obj = obj[levels[i]]; // work through relations, until reaching correct object
                }

                obj[levels[levels.length - 1]] = value; // populate correct object with it's new value
            }),
            
            affiliateFilter: action(() => {
                const params = (this.WebsiteIDSelected == "" ? "" : "&websiteId=" + this.WebsiteIDSelected) + (this.RegistrationTypeIdSelected == "" ? "" : "&registrationtypeID=" + this.RegistrationTypeIdSelected);
                const modparam = params.substr(1);
                get("reporting/affiliates?" + modparam + "")
                    .then(response => {
                        var apidata = response as any[];
                        this.Affiliatedata = apidata;
                        this.showFilterModal = !this.showFilterModal;
                    }).catch(error => {
                        console.log(error)
                    });
            }),

            // Affiliate Edit Process            
            _rowEditorAffiliatePopup: action((row, index) => {                
                get('reporting/affiliates/' + row.AffiliateID).then(response => {
                    this.AffiliateEditModal = !this.AffiliateEditModal
                    this.AffiliateObj = response as any[];

                    this.AffiliateIsInEditMode = true;
                    this.IsAffiliateEdit = false;
                });
            }),

            buttonAffiliateFunction: action((cell, row, index) => {
                return (
                    <div className="actionsBtn">
                        <button type="button" id="validatebutton" onClick={index => { this._rowEditorAffiliatePopup(row, index); }} className="btn btn-success">
                            <i className="material-icons">edit</i>
                        </button>
                    </div>
                );
            }),

            handleAffiliateEditSubmit: action((event: any) => {
                event.preventDefault();

                console.log("edit? " + this.AffiliateIsInEditMode);

                let action = "reporting/affiliates/";

                if (this.AffiliateIsInEditMode)
                    action += this.AffiliateObj.AffiliateID + "/update";
                else
                    action += "create";

                post(action, this.AffiliateObj)
                    .then(response => {
                        this.EditResponse = response;
                        this.AffiliateEditModal = false;
                        this.IsAffiliateEdit = !this.IsAffiliateEdit;
                        this.getAffiliates();
                        this.AffiliateIsInEditMode = false;                        
                    }).catch(error => {
                        this.AffliateEditError = error;
                        this.AffiliateEditModal = false;
                        this.IsAffiliateEditError = !this.IsAffiliateEditError;
                        this.EditResponse = '';
                        this.getAffiliates();
                    });
            }),

            // REPORT FILTER BL
            handleReportDateFromChange: action((date: any) => {
                this.DateTimeFromSelected = date;
                this.costReportFilter.FromDate = this.DateTimeFromSelected;
            }),
            handleReportDateToChange: action((date: any) => {
                this.DateTimeToSelected = date;
                this.costReportFilter.ToDate = this.DateTimeToSelected;
            }),

            applyFilter: action(() => {
                this.loading = true;
                let params = "";
                
                params += "sessionDateTimeFrom=";
                params += moment(this.DateTimeFromSelected).format("YYYY-MM-DD");

                params += "&sessionDateTimeTo=";
                params += moment(this.DateTimeToSelected).format("YYYY-MM-DD");

                params += "&timeGroup=" + (this.costReportFilter.DateGrouping == undefined ? "day" : this.costReportFilter.DateGrouping);

                if (this.costReportFilter.AffiliateCode != undefined && this.costReportFilter.AffiliateCode.length > 0) {
                    params += "&affiliateId=" + this.costReportFilter.AffiliateCode;
                }

                //  (this.AgeSelected == "" ? "" : "&age=" + this.AgeSelected) + (this.CampaignIDSelected == "" ? "" : "&campaignID=" + this.CampaignIDSelected) + (this.AffiliatePartnerIDSelected == "" ? "" : "&affiliatePartnerId=" + this.AffiliatePartnerIDSelected) + (this.WebsitePlatformIDSelected == "" ? "" : "&websitePlatformID=" + this.WebsitePlatformIDSelected) + (this.Gender == "" ? "" : "&Gender=" + this.Gender) + (this.IspIDSelected == "" ? "" : "&iSPID=" + this.IspIDSelected) + (this.RegistrationPathIDSelected == "" ? "" : "&registrationPathId=" + this.RegistrationPathIDSelected);

                get("reporting/cost/report?" + params + "")
                    .then(response => {
                        var i = 0;
                        var apidata = response as any;

                        if (apidata != null && apidata.Table.length > 0) {
                            apidata.Table = apidata.Table.map(s => {
                                s.key = i++;

                                if (this.costReportFilter.DateGrouping != "hour") {
                                    s["Visit Date"] = moment(s.VisitDate).format("YYYY-MM-DD");
                                }

                                return s;
                            });
                        }

                        this.Costreport = apidata;

                        this.columns = [];
                        if (this.Costreport.Table.length > 0) {

                            for (var col in this.Costreport.Table[0]) {
                                if (col != "key")
                                    this.columns.push(col);
                            }

                            for (var i = 0; i < this.Costreport.Table.length; i++) {
                                var row = this.Costreport.Table[i];

                                for (var ii = 0; ii < this.FieldFormatMappings.length; ii++) {
                                    var formatRule = this.FieldFormatMappings[ii];

                                    for (var col in row) {
                                        if (col == formatRule.column) {
                                            switch (formatRule.format) {
                                                case "percentage":
                                                    row[col] = row[col] == null ? "0.00%" : +row[col] + "%";
                                                    break;
                                                case "money":
                                                    row[col] = row[col] == null ? "£0.00" : "£" + +row[col];
                                                    break;
                                                default:
                                                    break;
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        this.showFilterModal = false;
                        this.loading = false;
                    }).catch(error => {
                        console.log(error)
                    });
            }),

            // ROI Manager=====================
            showROICreateModal: action((e: any) => {
                this.RoiIsInEditMode = false;
                this.RoiEditModal = true;
                this.RoiObj = {};
            }),
            getWebsiteid: action(() => {
                get('reporting/websites/')
                    .then(response => {
                        this.Websiteid = response as any[];
                    }).catch(error => {
                        console.log(error)
                    });
            }),
            getRoimanagerList: action(() => {
                this.Roiloading = true;
                get("reporting/affiliates/roi-targets")
                    .then(response => {
                        this.Roilistsdata = response;
                        this.Roiloading = false;
                    }).catch(error => {
                        console.log(error)
                    });
            }),

            toggleRoiCreateModal: action(() => {
                this.RoiCreateModal = !this.RoiCreateModal;
            }),
            getRoiAffiliate: action(() => {
                get("reporting/affiliates")
                    .then(response => {
                        this.RoiAffiliatedata = response;
                    }).catch(error => {
                        console.log(error)
                    });
            }),
            
            //Roi edit
            _rowEditorRoiPopup: action((row, index) => {
                this.RoiAffiliateid = row.AffiliateID;
                get('reporting/affiliates/roi-targets/' + row.AffiliateID).then(response => {
                    this.RoiEditModal = !this.RoiEditModal
                    this.RoiObj = response as any[];
                });
                this.RoiIsInEditMode = true;
            }),

            buttonRoiFunction: action((cell, row, index) => {
                return (
                    <div className="actionsBtn">
                        <button type="button" id="validatebutton" onClick={index => { this._rowEditorRoiPopup(row, index); }} className="btn btn-success">
                            <i className="material-icons">edit</i>
                        </button>
                    </div>
                );
            }),
            toggleRoiEditModal: action(() => {
                this.RoiEditModal = !this.RoiEditModal;
            }),
            
            handleRoiChange: action((e: any) => {
                var levels = e.target.name.split('_');
                var value = e.target.value;
                
                var obj = this.RoiObj;

                if (e.target.name == "AffiliateID") {
                    this.RoiAffiliateid = value;
                }                

                for (var i = 0; i < levels.length - 1; i++) {
                    obj = obj[levels[i]]; // work through relations, until reaching correct object
                }

                obj[levels[levels.length - 1]] = value; // populate correct object with it's new value
            }),

            handleRoiSubmit: action((event: any) => {
                event.preventDefault();                

                if (this.RoiIsInEditMode == false) {
                    post("reporting/affiliates/roi-targets/" + this.RoiAffiliateid + "/create", this.RoiObj)
                        .then(response => {
                            console.log(response);
                            this.RoiCreateResponse = response;
                            this.RoiEditModal = false;
                            this.isRoiCreated = !this.isRoiCreated;
                            this.getRoimanagerList();
                        }).catch(error => {
                            console.log(error);  
                            this.RoiCreateError = error;
                            this.RoiEditModal = false;
                            this.isRoiCreatedError = !this.isRoiCreatedError;
                        });   
                    this.getRoimanagerList();
                }
                else {
                    post("reporting/affiliates/roi-targets/" + this.RoiAffiliateid + "/update", this.RoiObj)
                        .then(response => {
                            console.log(response);
                            this.RoiEditResponse = response;
                            this.isRoiEdited = !this.isRoiEdited;
                            this.RoiEditModal = false;
                            this.getRoimanagerList();
                        }).catch(error => {
                            console.log(error);    
                            this.RoiEditError = error;
                            this.RoiEditModal = false;
                            this.isRoiEditedError = !this.isRoiEditedError;
                        });
                }

            })

            //End


        });
    }
}




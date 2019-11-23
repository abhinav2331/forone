/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import * as axios from "axios";
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router';
import { extendObservable, observable, action } from "mobx";
import { CampaignsAll } from '../../../../model/campaign.model';
import { RevenueAll } from '../../../../model/campaign.revenue.model';
import { get, post, postImage } from '../../../../shared/api.service';
import moment from 'moment';


export class CampaignStore {
    ImageUploadError: any;
    IsNotifyAddCreativeError: boolean;
    IsRevenueEditError: boolean;
    SelectedPeriodFromChange: any;
    CampaignRevenueIsInEditMode: boolean;
    CampaignIsInEditMode: boolean; // True if editing, false if creating
    StatusSelectedData: string;
    TypesSelectedData: string;
    PublishSelectedData: string;
    RevenueStatusEdit: {};
    Category: any[];
    IsNotifyEditRevenue: boolean;
    EditRevenueID: any;
    RevenueEditModal: boolean;
    RevenueError: any;
    IsRevenueCreateError: boolean;
    getCampaignRevenue(): any {
        throw new Error("Method not implemented.");
    }
    handleCampaignChange(e: any): any {
    };
    IsNotifyCreateRevenue: boolean;
    RevenueStatus: any;
    RevenueConfirmedForInvoicingCheck: boolean;
    RevenueInvoicedCheck: boolean;
    RevenueAutomaticCheck: boolean;
    RevenueObj: any;
    RevenueCreateModal: boolean;
    _rowRevenueEditorPopup(arg0: any, arg1: any): any {
        throw new Error("Method not implemented.");
    }
    redirect: boolean;
    CampaignRevenueObj: {};
    RevenueCID: any;
    RevenueID: any;
    _rowCampaignRevenue(arg0: any, arg1: any): any {
        throw new Error("Method not implemented.");
    }
    CampaignEnabledCheck: boolean;
    IsNotifyAddCreative: boolean;
    ImageUploadStatus: {};
    DimensionSelected: any;
    CreativePreview: any;
    CreativeUpload: any;
    modalImageUpload: boolean;
    ClientsSelected: string;
    hasofferTracking: boolean;
    configration: any;
    getCampaigns(): any {
        throw new Error("Method not implemented.");
    }
    hasOffervalue: any;
    dataCreate: {};
    IsNotifyCreate: boolean;
    statusText: any;
    CampaignEditNotification: {};
    modalEdit: boolean;
    editrepoData: {};
    IsNotify2: boolean;
    respoData: {};
    AffiliateNetwork: any;
    Campaigns: any;
    @observable Placements: any[];
    @observable SelectedPlacements: any[];
    SelectedExpiryDateTimeUtc: any;  
    requiredItem: any;
    _rowEditorPopup(arg0: any, arg1: any): any {
        throw new Error("Method not implemented.");
    }
    _rowImageUploadPopup(arg0: any, arg1: any): any {
        throw new Error("Method not implemented.");
    }
    Tabledatas: {};
    Clients: {};
    Status: any[];
    Types: any;
    PublisherSelected: '';
    TypesSelected: '';
    StatusSelected: '';
    Publisher: any[];
    modal: boolean;
    Campaigndata: any;
    CampaignsObj: any;
    loading: boolean;
    loadingNetwork: boolean;
    showHasOffersEditSection: boolean;

    //@observable TableStores: any;    

    constructor() {
        extendObservable(this, {
            CampaignsObj: new CampaignsAll(),
            CampaignIsInEditMode: false, // True if editing, false if creating
            showHasOffersEditSection: false,
            Campaigndata: [],
            Publisher: [],
            PublisherSelected: '',
            TypesSelected: '',
            StatusSelected: '',
            ClientsSelected: '',
            Campaigns: [],
            requiredItem: [],
            respoData: [
                { id: '' },
                { result: '' }
            ],
            dataCreate: [],
            statusText: [],
            IsNotify2: false,
            IsNotifyCreate: false,
            hasOffervalue: '',
            Types: [],
            Status: [],
            AffiliateNetwork: [],
            Clients: [],
            Datefilter: [],
            DatefilterSelected: '',
            Posttypes: [],
            Posttypes2: [],
            Posttypes2Selected: [],
            IsActiveN: [],
            IsActiveNSelected: [],
            PostMethods: [],
            modal: false,
            modalEdit: false,
            modalImageUpload: false,
            CampaignsItem: 0,
            PayoutType: [{ name: 'CPA', value: 'CPA' }, { name: 'CPC', value: 'CPC' }, { name: 'CPM', value: 'CPM' }],
            CurrencyCode: [{ name: 'GBP', value: 'GBP' }, { name: 'AUD', value: 'AUD' }, { name: 'EUR', value: 'EUR' }, { name: 'USD', value: 'USD' }],
            CuntryCode: [{ name: 'United Kingdom ', value: 'GB' }, { name: 'Australia', value: 'AU' }, { name: 'New Zealand', value: 'NZ' }],
            CustomTypes: [{ name: 'Redirect', value: '1' }, { name: 'Banner', value: '2' }, { name: 'NetworkEmailer', value: '3' }],
            Placements: [],
            SelectedPlacements: [],
            SelectedExpiryDateTimeUtc: null,
            loading: false,
            loadingNetwork: false,
            hasofferTracking: '',
            CreativeObj: '',
            Dimension: [{ name: '240x175', value: '240x175' }, { name: '300x250', value: '300x250' }],
            CreativeUpload: '',
            CreativePreview: '',
            DimensionSelected: '',
            Url: '',
            IsNotifyAddCreative: false,
            IsNotifyAddCreativeError: false,
            ImageUploadStatus: [],
            ImageUploadError: '',
            CampaignEnabledCheck: false,
            //Revenue Section
            RevenueObj: new RevenueAll(),
            RevenueCID: '',
            RevenueID: '',
            EditRevenueID: '',
            CampaignRevenueObj: [],
            redirect: false,
            RevenueCreateModal: false,
            RevenueAutomaticCheck: false,
            RevenueConfirmedForInvoicingCheck: false,
            RevenueInvoicedCheck: false,
            RevenueStatus: [],
            RevenueStatusEdit: [],
            RevenueError: [],
            IsRevenueCreateError: false,
            IsNotifyCreateRevenue: false,
            PayoutTypeRevenue: [{ name: 'CPA', value: 'CPA' }, { name: 'CPC', value: 'CPC' }, { name: 'CPM', value: 'CPM' }],
            CurrencyCodeRevenue: [{ name: 'GBP', value: 'GBP' }, { name: 'AUD', value: 'AUD' }, { name: 'EUR', value: 'EUR' }, { name: 'USD', value: 'USD' }],
            RevenueEditModal: false,            
            IsNotifyEditRevenue: false,
            IsRevenueEditError: false,
            Category: [],
            PublishSelectedData: '',
            TypesSelectedData: '',
            StatusSelectedData: '',
            CampaignRevenueIsInEditMode: false,
            SelectedPeriodFromChange: null,
            //Mobx Actions
            getCampaigns: action(() => {
                this.loading = true;
                get("leadgeneration/exittraffic/campaigns?&statusId=" + "3")
                    .then(response => {
                        this.Campaigndata = response;
                        this.loading = false;
                    }).catch(error => {
                        console.log(error)
                    });
            }),

            getPublisher: action(() => {
                get('leadgeneration/publishers/')
                    .then(response => {
                        var apidata = response as any[];
                        this.Publisher = apidata.map(t => { return { name: t.Name, value: t.PublisherId } });

                    }).catch(error => {
                        console.log(error)
                    });
            }),

            getCategory: action(() => {
                get('leadgeneration/categories')
                    .then(response => {
                        var apidata = response as any[];

                        this.Category = apidata.map(t => { return { name: t.Name, value: t.CategoryID } });
                    }).catch(error => {
                        console.log(error)
                    });
            }),

            getTypes: action(() => {
                get('leadgeneration/exittraffic/types/')
                    .then(response => {
                        var apidata = response as any[];
                        this.Types = apidata.map(t => { return { name: t.Name, value: t.Name } });
                    }).catch(error => {
                        console.log(error)
                    });
            }),

            getStatus: action(() => {
                get('leadgeneration/exittraffic/statuses')
                    .then(response => {
                        var apidata = response as any[];

                        this.Status = apidata.map(t => { return { name: t.Name, value: t.StatusID } });
                    }).catch(error => {
                        console.log(error)
                    });
            }),

            getClients: action(() => {
                get('leadgeneration/exittraffic/clients/')
                    .then(response => {
                        this.Clients = response;
                    }).catch(error => {
                        console.log(error)
                    });
            }),

            getPlacements: action(() => {
                get('leadgeneration/exittraffic/placements')
                    .then((response: any) => {
                        this.Placements = response.map(t => {
                            return { name: t.Name, value: t.PlacementId }
                        });
                    }).catch(error => {
                        console.log(error)
                    });
            }),

            getAffiliatenetworks: action(() => {
                this.loadingNetwork = true;
                get('leadgeneration/affiliatenetworks')
                    .then(response => {
                        var apidata = response as any[];
                        this.AffiliateNetwork = apidata.map(t => { return { name: t.Name, value: t.NetworkID } });
                        this.loadingNetwork = false;
                    }).catch(error => {
                        console.log(error)
                    });
            }),
            toggleModal: action(() => {
                this.modal = !this.modal;
            }),
            toggleEditModal: action(() => {
                this.CampaignIsInEditMode = true;

                this.modalEdit = !this.modalEdit;
            }),
            showCreateCampaignModal: action((e: any) => {
                this.CampaignIsInEditMode = false;
                this.modalEdit = !this.modalEdit;
                this.CampaignsObj = new CampaignsAll();

                this.showHasOffersEditSection = false;
            }),
            toggleCreateModal: action(() => {
                this.CampaignIsInEditMode = false;
                this.modalEdit = !this.modalEdit;
            }),
            toggleImageUploadModal: action(() => {
                this.modalImageUpload = !this.modalImageUpload;
            }),
            campaignFilter: action(() => {
                const params = (this.StatusSelected == "" ? "" : "&statusId=" + this.StatusSelected) + (this.TypesSelected == "" ? "" : "&typeId=" + this.TypesSelected) + (this.PublisherSelected == "" ? "" : "&supplierId=" + this.PublisherSelected) + (this.ClientsSelected == "" ? "" : "&clientName=" + this.ClientsSelected);
                const modparam = params.substr(1);

                get("leadgeneration/exittraffic/campaigns?" + modparam + "")
                    .then(response => {
                        var apidata = response as any[]; var AffiliateNetworkData = [];
                        this.Campaigndata = apidata;
                        this.modal = !this.modal;
                    }).catch(error => {
                        console.log(error)
                    });
            }),
            // Clear Filter
            campaignClearPublisherFilter: action(() => {                
                this.PublishSelectedData = '';
                this.PublisherSelected = '';
                const params = (this.StatusSelected == "" ? "" : "&statusId=" + this.StatusSelected) + (this.TypesSelected == "" ? "" : "&typeId=" + this.TypesSelected) + (this.PublisherSelected == "" ? "" : "&supplierId=" + this.PublisherSelected) + (this.ClientsSelected == "" ? "" : "&clientName=" + this.ClientsSelected);
                const modparam = params.substr(1);               

                get("leadgeneration/exittraffic/campaigns?" + modparam + "")                
                    .then(response => {                        
                        var apidata = response as any[]; var AffiliateNetworkData = [];
                        this.Campaigndata = apidata;                       
                    }).catch(error => {
                        console.log(error)
                    });
                this.getCampaigns();
            }),
            campaignClearTypesFilter: action(() => {
                this.TypesSelectedData = '';
                this.TypesSelected = '';
                const params = (this.StatusSelected == "" ? "" : "&statusId=" + this.StatusSelected) + (this.TypesSelected == "" ? "" : "&typeId=" + this.TypesSelected) + (this.PublisherSelected == "" ? "" : "&supplierId=" + this.PublisherSelected) + (this.ClientsSelected == "" ? "" : "&clientName=" + this.ClientsSelected);
                const modparam = params.substr(1);

                get("leadgeneration/exittraffic/campaigns?" + modparam + "")
                    .then(response => {                        
                        var apidata = response as any[]; var AffiliateNetworkData = [];
                        this.Campaigndata = apidata;                        
                    }).catch(error => {
                        console.log(error)
                    });
                this.getCampaigns();
            }),
            campaignClearStatusFilter: action(() => {
                this.StatusSelectedData = '';
                this.StatusSelected = '';
                const params = (this.StatusSelected == "" ? "" : "&statusId=" + this.StatusSelected) + (this.TypesSelected == "" ? "" : "&typeId=" + this.TypesSelected) + (this.PublisherSelected == "" ? "" : "&supplierId=" + this.PublisherSelected) + (this.ClientsSelected == "" ? "" : "&clientName=" + this.ClientsSelected);
                const modparam = params.substr(1);

                get("leadgeneration/exittraffic/campaigns?" + modparam + "")
                    .then(response => {                       
                        var apidata = response as any[]; var AffiliateNetworkData = [];
                        this.Campaigndata = apidata;                        
                    }).catch(error => {
                        console.log(error)
                    });
                this.getCampaigns();
            }),
            campaignClearClientFilter: action(() => {                
                this.ClientsSelected = '';
                const params = (this.StatusSelected == "" ? "" : "&statusId=" + this.StatusSelected) + (this.TypesSelected == "" ? "" : "&typeId=" + this.TypesSelected) + (this.PublisherSelected == "" ? "" : "&supplierId=" + this.PublisherSelected) + (this.ClientsSelected == "" ? "" : "&clientName=" + this.ClientsSelected);
                const modparam = params.substr(1);

                get("leadgeneration/exittraffic/campaigns?" + modparam + "")
                    .then(response => {                        
                        var apidata = response as any[]; var AffiliateNetworkData = [];
                        this.Campaigndata = apidata;                        
                    }).catch(error => {
                        console.log(error)
                    });
                this.getCampaigns();
            }),
            //Clear filter end

            handleSave: action((e: any) => {
                e.preventDefault();
                get('leadgeneration/exittraffic/campaigns/')
                    .then(response => {
                        this.Tabledatas = response;
                    }).catch(error => {
                        console.log(error)
                    });
            }),
            _rowEditorPopup: action((row, index) => {
                get('leadgeneration/exittraffic/campaigns/' + row.CampaignID).then(response => {
                    this.modalEdit = !this.modalEdit,
                        this.CampaignsObj = response;
                    this.showHasOffersEditSection = this.CampaignsObj.HasOffers.Enabled;
                    this.SelectedPlacements = this.CampaignsObj.Placements;

                    if (this.CampaignsObj.ExpiryDateTimeUtc != null) {
                        this.SelectedExpiryDateTimeUtc = moment(this.CampaignsObj.ExpiryDateTimeUtc);
                    }
                });
            }),

            
            buttonFunction: action((cell, row, index) => {
                return (
                    <div className="actionsBtn">
                        <a href={row.ManualTrackingLink} target="_blank" className="btn btn-info tooltipC" title="View offer2">
                            <i className="material-icons">remove_red_eye</i> <span className="tooltiptext">View</span>
                        </a>
                        <button type="button" data-toggle="modal" data-target="#campaignEdit" onClick={index => { this._rowEditorPopup(row, index); }} className="btn tooltipC btn-success">
                            <i className="material-icons">edit</i> <span className="tooltiptext">Edit</span>
                        </button>
                        <button type="button" onClick={index => { this._rowImageUploadPopup(row, index); }} className="btn btn-primary tooltipC">
                            <i className="material-icons">perm_media</i> <span className="tooltiptext">Upload Media</span>
                        </button>
                        <a onClick={index => { this._rowCampaignRevenue(row, index); }} className="btn btn-warning tooltipC">
                            <i className="material-icons">trending_up</i> <span className="tooltiptext">Revenue</span>
                        </a>
                    </div>
                );
            }),            

            saveModalDetails: action((item) => {
                const requiredItem = this.requiredItem;
                let tempCampaigns = this.Campaigns;
                tempCampaigns[requiredItem] = item;
                this.Campaigns = tempCampaigns;
            }),
            handlePlacementsChange: action((e: any) => {
                this.handleCampaignChange(e);
                this.SelectedPlacements = this.CampaignsObj.Placements;
                console.log("Placements are: ");
                console.log(this.SelectedPlacements);
            }),
            handleExpiryDateTimeChange: action((date: any) => {
                this.CampaignsObj.ExpiryDateTimeUtc = date.format("YYYY-MM-DD");
                this.SelectedExpiryDateTimeUtc = date;
            }),
            handleCampaignChange: action((e: any) => {
                var levels = e.target.name.split('_');
                var value = e.target.value;

                if (e.target.type == "checkbox") {
                    console.log("ischecked: " + e.target.checked);
                    value = e.target.checked ? true : false;
                }

                if (e.target.name == "HasOffers_Enabled") {
                    this.showHasOffersEditSection = value;
                }

                var obj = this.CampaignsObj;

                for (var i = 0; i < levels.length - 1; i++) {
                    obj = obj[levels[i]]; // work through relations, until reaching correct object
                }

                if (levels[levels.length - 1].indexOf('[') > -1) {
                    var l = levels[levels.length - 1];
                    levels[levels.length - 1] = l.substr(0, l.indexOf('['));
                }

                if (typeof obj[levels[levels.length - 1]] == "object") {
                    var name = e.target.name.split('_');
                    name = name[name.length - 1];

                    var arr = obj[levels[levels.length - 1]];

                    var itemValue = name.substr(name.indexOf('[') + 1).slice(0, -1);
                    var index = arr.indexOf(+itemValue);

                    if (value === true) {
                        // add if not present
                        if (index == -1) {
                            arr.push(+itemValue);
                        }
                    }
                    else {
                        // remove if present
                        if (index > -1) {
                            arr.splice(index, 1);
                        }
                    }
                }
                else {
                    obj[levels[levels.length - 1]] = value; // populate correct object with it's new value
                }

            }),

            handleEditSubmit: action((event: any) => {
                event.preventDefault();

                if (this.CampaignsObj.CampaignID == 0) {
                    post("leadgeneration/exittraffic/campaigns/create", this.CampaignsObj)
                        .then(response => {
                            console.log(response);
                            this.dataCreate = response;
                            this.modalEdit = false;
                            this.CampaignEditNotification = response;
                            this.IsNotifyCreate = !this.IsNotifyCreate;

                            this.getCampaigns();
                        }).catch(error => {
                            console.log(error)
                        });
                }
                else {

                    post("leadgeneration/exittraffic/campaigns/" + this.CampaignsObj.CampaignID + "/update", this.CampaignsObj)
                        .then(response => {
                            this.statusText = response;
                            this.modalEdit = false;
                            this.CampaignEditNotification = response;
                            this.IsNotify2 = !this.IsNotify2;

                            this.getCampaigns();

                        }).catch(error => {
                            console.log(error)
                        });
                }
            }),

            _rowImageUploadPopup: action((row, index) => {
                get('leadgeneration/exittraffic/campaigns/' + row.CampaignID).then(response => {
                    this.CreativePreview = '',
                        this.modalImageUpload = !this.modalImageUpload,
                        this.CampaignsObj = response;
                });
            }),

            handleImageUploadChange: action((e: any) => {

                this.CampaignsObj[e.target.name] = e.target.value;
                this.DimensionSelected = e.target.value;
            }),

            _handleImageChange: action((e: any) => {
                //console.log("Has called unwanted");
                e.preventDefault();
                this.CampaignsObj[e.target.name] = e.target.files[0]// e.target.value
                let reader = new FileReader();
                let file = e.target.files[0];

                reader.onloadend = () => {
                    this.CreativeUpload = file,
                        this.CreativePreview = reader.result
                }
                reader.readAsDataURL(file)
            }),

            handleImageUploadSubmit: action((event: any) => {
                //console.log("Has called unwanted");
                event.preventDefault();
                const formData = new FormData();
                formData.append('file', this.CreativeUpload);
                formData.append('dimension', this.CampaignsObj.Dimension);
                postImage("leadgeneration/exittraffic/campaigns/" + this.CampaignsObj.CampaignID + "/assets/upload", formData)
                    .then(response => {
                        console.log(response);
                        this.ImageUploadStatus = response;
                        this.modalImageUpload = false;
                        this.IsNotifyAddCreative = !this.IsNotifyAddCreative;
                    }).catch(error => {
                        console.log(error);
                        this.ImageUploadError = error;
                        this.IsNotifyAddCreativeError = !this.IsNotifyAddCreativeError;
                        this.modalImageUpload = false;
                    });
            }),

            //Revenue section
            _rowCampaignRevenue: action((row, index) => {
                this.RevenueCID = row.CampaignID;
                this.redirect = true;
            }),
            showCreateCampaignRevenueModal: action((e: any) => {
                this.CampaignRevenueIsInEditMode = false;
                this.RevenueEditModal = !this.RevenueEditModal;  
                //this.RevenueObj = [];
            }),

            getCampaignRevenue: action((e: any) => {
                get('leadgeneration/exittraffic/campaigns/' + this.RevenueCID + '/revenue').then(response => {
                    this.CampaignRevenueObj = response;
                })
            }),
            //Edit Revenue Section
            buttonRevenueFunction: action((cell, row, index) => {
                return (
                    <div className="actionsBtn">
                        <button type="button" onClick={index => { this._rowRevenueEditorPopup(row, index); }} className="btn tooltipC btn-success">
                            <i className="material-icons">edit</i> <span class="tooltiptext">Edit</span>
                        </button>
                    </div>
                );
            }),
            _rowRevenueEditorPopup: action((row, index) => {
                this.EditRevenueID = row.RevenueID;
                get('leadgeneration/exittraffic/campaigns/' + this.RevenueCID + '/revenue/' + row.RevenueID).then(response => {
                    this.RevenueEditModal = !this.RevenueEditModal
                    this.RevenueObj = response;
                    this.CampaignRevenueIsInEditMode = true;

                    if (this.RevenueObj.PeriodStart != null) {
                        this.SelectedPeriodFromChange = moment(this.RevenueObj.PeriodStart);
                    }
                });                
            }),
            toggleRevenueEditModal: action(() => {
                this.CampaignRevenueIsInEditMode = true;
                this.RevenueEditModal = !this.RevenueEditModal;
            }),           

            toggleRevenueCreateModal: action(() => {
                this.RevenueCreateModal = !this.RevenueCreateModal;
            }),            

            handleRevenueChange: action((e: any) => {
                var levels = e.target.name.split('_');
                var value = e.target.value;

                if (e.target.type == "checkbox") {
                    value = e.target.checked ? true : false;
                }

                var obj = this.RevenueObj;

                for (var i = 0; i < levels.length - 1; i++) {
                    obj = obj[levels[i]]; // work through relations, until reaching correct object
                }

                obj[levels[levels.length - 1]] = value; // populate correct object with it's new value
            }),
            handlePeriodFromChange: action((date: any) => {
                this.RevenueObj.PeriodStart = date.format("YYYY-MM-DD");
                this.SelectedPeriodFromChange = date;
            }),           

            handleRevenueSubmit: action((event: any) => {
                event.preventDefault();
                this.RevenueObj["ExitTrafficCampaignID"] = this.RevenueCID;                

                if (this.RevenueObj.RevenueID == 0) {
                    post("leadgeneration/exittraffic/campaigns/" + this.RevenueCID + "/revenue/create", this.RevenueObj)
                        .then(response => {
                            console.log(response);
                            this.RevenueStatus = response;
                            this.RevenueEditModal = false;
                            this.IsNotifyCreateRevenue = !this.IsNotifyCreateRevenue;
                        }).catch(error => {
                            console.log(error);
                            this.RevenueError = error;
                            this.IsRevenueCreateError = !this.IsRevenueCreateError;
                            this.RevenueEditModal = false;
                        });
                    this.getCampaignRevenue();
                }
                else {
                    post("leadgeneration/exittraffic/campaigns/" + this.RevenueCID + "/revenue/" + this.EditRevenueID + "/update", this.RevenueObj)
                        .then(response => {
                            console.log(response);
                            this.RevenueStatusEdit = response;
                            this.RevenueEditModal = false;
                            this.IsNotifyEditRevenue = !this.IsNotifyEditRevenue;
                        }).catch(error => {
                            console.log(error);
                            this.RevenueError = error;
                            this.IsRevenueEditError = !this.IsRevenueEditError;
                            this.RevenueEditModal = false;
                        });
                    this.getCampaignRevenue();
                }
                
            })

            //End Revenue

        });
    }
}




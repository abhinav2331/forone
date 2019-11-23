/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import * as axios from "axios";
import { extendObservable, observable, action } from "mobx";
import { get, post } from '../../../../shared/api.service';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    FormGroup
} from 'reactstrap';

import { CampaignsAll } from '../../../../model/campaign.model';


interface CampaignsCreateState {
    CampaignsObj: CampaignsAll;
}

export class ImportOfferStore {
    networkSearch(): any {
        throw new Error("Method not implemented.");
    }
    TypeID: any;
    PublisherID: any;
    AffiliateNetworkError: any; 
    ANetworkidCon: any;
    modalImportoffer: boolean;
    NotificationMessage: {};
    TypesNew: any;
    data: {};
    errordata: {};
    modal: boolean;
    CampaignId: any;
    NetworkID: any;
    SupplierID: any;
    _rowEditorPopupOffer(arg0: any, arg1: any): any {
        throw new Error("Method not implemented.");
    }
    loading: boolean;
    CampaignsObj: any;
    Networkoffer: {};
    IsNotify: boolean;
    IsNotifyError: boolean;
    IsAffiliateError: boolean;

    constructor() {
        extendObservable(this, {
            CampaignsObj: new CampaignsAll(),
            Networkoffer: [],
            loading: false,
            modal: false,
            modalImportoffer: false,
            CampaignId: '',
            NetworkID: '',
            SupplierID: '',
            data: [],   
            errordata: [
                { status: ''}
            ],            
            IsNotify: false,
            IsNotifyError: false,
            TypesNew: [],
            ANetworkidCon: '',
            AffiliateNetworkError: '',
            IsAffiliateError: false, 

            //Mobx Actions            
            changeAffiliateNetwork: action((e: any) => {               
                this.CampaignsObj.AffiliateNetwork[e.target.name] = e.target.value;
                this.ANetworkidCon = e.target.value;
            }),
            toggle: action(() => {                
                this.modal = !this.modal;
            }),
            toggleImportoffer: action(() => {                
                this.modalImportoffer = !this.modalImportoffer;
            }),
            networkSearch: action((event: any) => {
                event.preventDefault();                
                this.loading = true;
                debugger;
                get("leadgeneration/exittraffic/network/" + this.CampaignsObj.AffiliateNetwork.NetworkID + "/offers")
                    .then(response => {                        
                        this.Networkoffer = response;
                        this.loading = false; 
                    }).catch(error => {
                        this.Networkoffer = '';
                        this.AffiliateNetworkError = '';
                        this.modal = false;
                        console.log(error);
                        this.AffiliateNetworkError = error;
                        this.loading = false;                       
                        this.IsAffiliateError = !this.IsAffiliateError;                        
                });
            }),
            buttonOfferFunction: action((cell, row, index) => {                
                return (
                    <div className="actionsBtn">
                        <Button color="success" onClick={index => { this._rowEditorPopupOffer(row, index); }}>Import Offer</Button>
                        <a href={row.PreviewUrl} className="btn btn-sm btn-primary" target="_blank">Preview</a>                        
                    </div>
                );
            }),
            _rowEditorPopupOffer: action((row, index) => {               
                this.modal = !this.modal,
                this.CampaignId = row.CampaignId,
                this.NetworkID = this.CampaignsObj.AffiliateNetwork.NetworkID,
                this.SupplierID = this.CampaignsObj.Publisher.SupplierID
            }),            
           
            handleImportOffersChange: action((e: any) => {
                var levels = e.target.name.split('_');
                var value = e.target.value; 

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

            getTypesNew: action(() => {                
                get("leadgeneration/exittraffic/types/")
                    .then(response => {
                            var apidata = response as any[];
                            var typesData = [];
                            apidata.map((t, index) => {
                            typesData.push({ Text: t.Name, Value: t.TypeID })
                        })  
                        this.TypesNew = typesData;
                    }).catch(error => {
                        console.log(error);
                });
            }),

            handleOfferSubmit: action(() => {
                event.preventDefault();
                var result: any;                
                post("leadgeneration/exittraffic/campaigns/import?networkId=" + this.CampaignsObj.AffiliateNetwork.NetworkID + "&campaignId=" + this.CampaignId + "&publisherId=" + this.CampaignsObj.SupplierID + "&typeId=" + this.CampaignsObj.TypeID, this.CampaignsObj)
                    .then(response => {
                        this.data = '';                                            
                        this.data = response;                        
                        this.modal = false;
                        this.NotificationMessage = response;
                        this.IsNotify = !this.IsNotify;
                        this.networkSearch();
                    }).catch(error => {                        
                        this.errordata = '';                                           
                        console.log(error.response.status);
                        this.errordata = error.response.status;
                        this.IsNotifyError = !this.IsNotifyError;
                        this.modal = false;
                    });
                
            }),
        })
    }
}

/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import { extendObservable, action } from "mobx";
import { get, post } from '../../../../shared/api.service';
import { Button } from 'reactstrap';
import { CampaignsAll } from '../../../../model/campaign.model';
var ImportOfferStore = /** @class */ (function () {
    function ImportOfferStore() {
        var _this = this;
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
                { status: '' }
            ],
            IsNotify: false,
            IsNotifyError: false,
            TypesNew: [],
            ANetworkidCon: '',
            AffiliateNetworkError: '',
            IsAffiliateError: false,
            //Mobx Actions            
            changeAffiliateNetwork: action(function (e) {
                _this.CampaignsObj.AffiliateNetwork[e.target.name] = e.target.value;
                _this.ANetworkidCon = e.target.value;
            }),
            toggle: action(function () {
                _this.modal = !_this.modal;
            }),
            toggleImportoffer: action(function () {
                _this.modalImportoffer = !_this.modalImportoffer;
            }),
            networkSearch: action(function (event) {
                event.preventDefault();
                _this.loading = true;
                debugger;
                get("leadgeneration/exittraffic/network/" + _this.CampaignsObj.AffiliateNetwork.NetworkID + "/offers")
                    .then(function (response) {
                    _this.Networkoffer = response;
                    _this.loading = false;
                }).catch(function (error) {
                    _this.Networkoffer = '';
                    _this.AffiliateNetworkError = '';
                    _this.modal = false;
                    console.log(error);
                    _this.AffiliateNetworkError = error;
                    _this.loading = false;
                    _this.IsAffiliateError = !_this.IsAffiliateError;
                });
            }),
            buttonOfferFunction: action(function (cell, row, index) {
                return (React.createElement("div", { className: "actionsBtn" },
                    React.createElement(Button, { color: "success", onClick: function (index) { _this._rowEditorPopupOffer(row, index); } }, "Import Offer"),
                    React.createElement("a", { href: row.PreviewUrl, className: "btn btn-sm btn-primary", target: "_blank" }, "Preview")));
            }),
            _rowEditorPopupOffer: action(function (row, index) {
                _this.modal = !_this.modal,
                    _this.CampaignId = row.CampaignId,
                    _this.NetworkID = _this.CampaignsObj.AffiliateNetwork.NetworkID,
                    _this.SupplierID = _this.CampaignsObj.Publisher.SupplierID;
            }),
            handleImportOffersChange: action(function (e) {
                var levels = e.target.name.split('_');
                var value = e.target.value;
                var obj = _this.CampaignsObj;
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
            getTypesNew: action(function () {
                get("leadgeneration/exittraffic/types/")
                    .then(function (response) {
                    var apidata = response;
                    var typesData = [];
                    apidata.map(function (t, index) {
                        typesData.push({ Text: t.Name, Value: t.TypeID });
                    });
                    _this.TypesNew = typesData;
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            handleOfferSubmit: action(function () {
                event.preventDefault();
                var result;
                post("leadgeneration/exittraffic/campaigns/import?networkId=" + _this.CampaignsObj.AffiliateNetwork.NetworkID + "&campaignId=" + _this.CampaignId + "&publisherId=" + _this.CampaignsObj.SupplierID + "&typeId=" + _this.CampaignsObj.TypeID, _this.CampaignsObj)
                    .then(function (response) {
                    _this.data = '';
                    _this.data = response;
                    _this.modal = false;
                    _this.NotificationMessage = response;
                    _this.IsNotify = !_this.IsNotify;
                    _this.networkSearch();
                }).catch(function (error) {
                    _this.errordata = '';
                    console.log(error.response.status);
                    _this.errordata = error.response.status;
                    _this.IsNotifyError = !_this.IsNotifyError;
                    _this.modal = false;
                });
            }),
        });
    }
    ImportOfferStore.prototype.networkSearch = function () {
        throw new Error("Method not implemented.");
    };
    ImportOfferStore.prototype._rowEditorPopupOffer = function (arg0, arg1) {
        throw new Error("Method not implemented.");
    };
    return ImportOfferStore;
}());
export { ImportOfferStore };
//# sourceMappingURL=importoffer.service.js.map
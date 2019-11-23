var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import { extendObservable, observable, action } from "mobx";
import { CampaignsAll } from '../../../../model/campaign.model';
import { RevenueAll } from '../../../../model/campaign.revenue.model';
import { get, post, postImage } from '../../../../shared/api.service';
import moment from 'moment';
var CampaignStore = /** @class */ (function () {
    //@observable TableStores: any;    
    function CampaignStore() {
        var _this = this;
        extendObservable(this, {
            CampaignsObj: new CampaignsAll(),
            CampaignIsInEditMode: false,
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
            getCampaigns: action(function () {
                _this.loading = true;
                get("leadgeneration/exittraffic/campaigns?&statusId=" + "3")
                    .then(function (response) {
                    _this.Campaigndata = response;
                    _this.loading = false;
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            getPublisher: action(function () {
                get('leadgeneration/publishers/')
                    .then(function (response) {
                    var apidata = response;
                    _this.Publisher = apidata.map(function (t) { return { name: t.Name, value: t.PublisherId }; });
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            getCategory: action(function () {
                get('leadgeneration/categories')
                    .then(function (response) {
                    var apidata = response;
                    _this.Category = apidata.map(function (t) { return { name: t.Name, value: t.CategoryID }; });
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            getTypes: action(function () {
                get('leadgeneration/exittraffic/types/')
                    .then(function (response) {
                    var apidata = response;
                    _this.Types = apidata.map(function (t) { return { name: t.Name, value: t.Name }; });
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            getStatus: action(function () {
                get('leadgeneration/exittraffic/statuses')
                    .then(function (response) {
                    var apidata = response;
                    _this.Status = apidata.map(function (t) { return { name: t.Name, value: t.StatusID }; });
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            getClients: action(function () {
                get('leadgeneration/exittraffic/clients/')
                    .then(function (response) {
                    _this.Clients = response;
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            getPlacements: action(function () {
                get('leadgeneration/exittraffic/placements')
                    .then(function (response) {
                    _this.Placements = response.map(function (t) {
                        return { name: t.Name, value: t.PlacementId };
                    });
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            getAffiliatenetworks: action(function () {
                _this.loadingNetwork = true;
                get('leadgeneration/affiliatenetworks')
                    .then(function (response) {
                    var apidata = response;
                    _this.AffiliateNetwork = apidata.map(function (t) { return { name: t.Name, value: t.NetworkID }; });
                    _this.loadingNetwork = false;
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            toggleModal: action(function () {
                _this.modal = !_this.modal;
            }),
            toggleEditModal: action(function () {
                _this.CampaignIsInEditMode = true;
                _this.modalEdit = !_this.modalEdit;
            }),
            showCreateCampaignModal: action(function (e) {
                _this.CampaignIsInEditMode = false;
                _this.modalEdit = !_this.modalEdit;
                _this.CampaignsObj = new CampaignsAll();
                _this.showHasOffersEditSection = false;
            }),
            toggleCreateModal: action(function () {
                _this.CampaignIsInEditMode = false;
                _this.modalEdit = !_this.modalEdit;
            }),
            toggleImageUploadModal: action(function () {
                _this.modalImageUpload = !_this.modalImageUpload;
            }),
            campaignFilter: action(function () {
                var params = (_this.StatusSelected == "" ? "" : "&statusId=" + _this.StatusSelected) + (_this.TypesSelected == "" ? "" : "&typeId=" + _this.TypesSelected) + (_this.PublisherSelected == "" ? "" : "&supplierId=" + _this.PublisherSelected) + (_this.ClientsSelected == "" ? "" : "&clientName=" + _this.ClientsSelected);
                var modparam = params.substr(1);
                get("leadgeneration/exittraffic/campaigns?" + modparam + "")
                    .then(function (response) {
                    var apidata = response;
                    var AffiliateNetworkData = [];
                    _this.Campaigndata = apidata;
                    _this.modal = !_this.modal;
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            // Clear Filter
            campaignClearPublisherFilter: action(function () {
                _this.PublishSelectedData = '';
                _this.PublisherSelected = '';
                var params = (_this.StatusSelected == "" ? "" : "&statusId=" + _this.StatusSelected) + (_this.TypesSelected == "" ? "" : "&typeId=" + _this.TypesSelected) + (_this.PublisherSelected == "" ? "" : "&supplierId=" + _this.PublisherSelected) + (_this.ClientsSelected == "" ? "" : "&clientName=" + _this.ClientsSelected);
                var modparam = params.substr(1);
                get("leadgeneration/exittraffic/campaigns?" + modparam + "")
                    .then(function (response) {
                    var apidata = response;
                    var AffiliateNetworkData = [];
                    _this.Campaigndata = apidata;
                }).catch(function (error) {
                    console.log(error);
                });
                _this.getCampaigns();
            }),
            campaignClearTypesFilter: action(function () {
                _this.TypesSelectedData = '';
                _this.TypesSelected = '';
                var params = (_this.StatusSelected == "" ? "" : "&statusId=" + _this.StatusSelected) + (_this.TypesSelected == "" ? "" : "&typeId=" + _this.TypesSelected) + (_this.PublisherSelected == "" ? "" : "&supplierId=" + _this.PublisherSelected) + (_this.ClientsSelected == "" ? "" : "&clientName=" + _this.ClientsSelected);
                var modparam = params.substr(1);
                get("leadgeneration/exittraffic/campaigns?" + modparam + "")
                    .then(function (response) {
                    var apidata = response;
                    var AffiliateNetworkData = [];
                    _this.Campaigndata = apidata;
                }).catch(function (error) {
                    console.log(error);
                });
                _this.getCampaigns();
            }),
            campaignClearStatusFilter: action(function () {
                _this.StatusSelectedData = '';
                _this.StatusSelected = '';
                var params = (_this.StatusSelected == "" ? "" : "&statusId=" + _this.StatusSelected) + (_this.TypesSelected == "" ? "" : "&typeId=" + _this.TypesSelected) + (_this.PublisherSelected == "" ? "" : "&supplierId=" + _this.PublisherSelected) + (_this.ClientsSelected == "" ? "" : "&clientName=" + _this.ClientsSelected);
                var modparam = params.substr(1);
                get("leadgeneration/exittraffic/campaigns?" + modparam + "")
                    .then(function (response) {
                    var apidata = response;
                    var AffiliateNetworkData = [];
                    _this.Campaigndata = apidata;
                }).catch(function (error) {
                    console.log(error);
                });
                _this.getCampaigns();
            }),
            campaignClearClientFilter: action(function () {
                _this.ClientsSelected = '';
                var params = (_this.StatusSelected == "" ? "" : "&statusId=" + _this.StatusSelected) + (_this.TypesSelected == "" ? "" : "&typeId=" + _this.TypesSelected) + (_this.PublisherSelected == "" ? "" : "&supplierId=" + _this.PublisherSelected) + (_this.ClientsSelected == "" ? "" : "&clientName=" + _this.ClientsSelected);
                var modparam = params.substr(1);
                get("leadgeneration/exittraffic/campaigns?" + modparam + "")
                    .then(function (response) {
                    var apidata = response;
                    var AffiliateNetworkData = [];
                    _this.Campaigndata = apidata;
                }).catch(function (error) {
                    console.log(error);
                });
                _this.getCampaigns();
            }),
            //Clear filter end
            handleSave: action(function (e) {
                e.preventDefault();
                get('leadgeneration/exittraffic/campaigns/')
                    .then(function (response) {
                    _this.Tabledatas = response;
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            _rowEditorPopup: action(function (row, index) {
                get('leadgeneration/exittraffic/campaigns/' + row.CampaignID).then(function (response) {
                    _this.modalEdit = !_this.modalEdit,
                        _this.CampaignsObj = response;
                    _this.showHasOffersEditSection = _this.CampaignsObj.HasOffers.Enabled;
                    _this.SelectedPlacements = _this.CampaignsObj.Placements;
                    if (_this.CampaignsObj.ExpiryDateTimeUtc != null) {
                        _this.SelectedExpiryDateTimeUtc = moment(_this.CampaignsObj.ExpiryDateTimeUtc);
                    }
                });
            }),
            buttonFunction: action(function (cell, row, index) {
                return (React.createElement("div", { className: "actionsBtn" },
                    React.createElement("a", { href: row.ManualTrackingLink, target: "_blank", className: "btn btn-info tooltipC", title: "View offer2" },
                        React.createElement("i", { className: "material-icons" }, "remove_red_eye"),
                        " ",
                        React.createElement("span", { className: "tooltiptext" }, "View")),
                    React.createElement("button", { type: "button", "data-toggle": "modal", "data-target": "#campaignEdit", onClick: function (index) { _this._rowEditorPopup(row, index); }, className: "btn tooltipC btn-success" },
                        React.createElement("i", { className: "material-icons" }, "edit"),
                        " ",
                        React.createElement("span", { className: "tooltiptext" }, "Edit")),
                    React.createElement("button", { type: "button", onClick: function (index) { _this._rowImageUploadPopup(row, index); }, className: "btn btn-primary tooltipC" },
                        React.createElement("i", { className: "material-icons" }, "perm_media"),
                        " ",
                        React.createElement("span", { className: "tooltiptext" }, "Upload Media")),
                    React.createElement("a", { onClick: function (index) { _this._rowCampaignRevenue(row, index); }, className: "btn btn-warning tooltipC" },
                        React.createElement("i", { className: "material-icons" }, "trending_up"),
                        " ",
                        React.createElement("span", { className: "tooltiptext" }, "Revenue"))));
            }),
            saveModalDetails: action(function (item) {
                var requiredItem = _this.requiredItem;
                var tempCampaigns = _this.Campaigns;
                tempCampaigns[requiredItem] = item;
                _this.Campaigns = tempCampaigns;
            }),
            handlePlacementsChange: action(function (e) {
                _this.handleCampaignChange(e);
                _this.SelectedPlacements = _this.CampaignsObj.Placements;
                console.log("Placements are: ");
                console.log(_this.SelectedPlacements);
            }),
            handleExpiryDateTimeChange: action(function (date) {
                _this.CampaignsObj.ExpiryDateTimeUtc = date.format("YYYY-MM-DD");
                _this.SelectedExpiryDateTimeUtc = date;
            }),
            handleCampaignChange: action(function (e) {
                var levels = e.target.name.split('_');
                var value = e.target.value;
                if (e.target.type == "checkbox") {
                    console.log("ischecked: " + e.target.checked);
                    value = e.target.checked ? true : false;
                }
                if (e.target.name == "HasOffers_Enabled") {
                    _this.showHasOffersEditSection = value;
                }
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
            handleEditSubmit: action(function (event) {
                event.preventDefault();
                if (_this.CampaignsObj.CampaignID == 0) {
                    post("leadgeneration/exittraffic/campaigns/create", _this.CampaignsObj)
                        .then(function (response) {
                        console.log(response);
                        _this.dataCreate = response;
                        _this.modalEdit = false;
                        _this.CampaignEditNotification = response;
                        _this.IsNotifyCreate = !_this.IsNotifyCreate;
                        _this.getCampaigns();
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
                else {
                    post("leadgeneration/exittraffic/campaigns/" + _this.CampaignsObj.CampaignID + "/update", _this.CampaignsObj)
                        .then(function (response) {
                        _this.statusText = response;
                        _this.modalEdit = false;
                        _this.CampaignEditNotification = response;
                        _this.IsNotify2 = !_this.IsNotify2;
                        _this.getCampaigns();
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
            }),
            _rowImageUploadPopup: action(function (row, index) {
                get('leadgeneration/exittraffic/campaigns/' + row.CampaignID).then(function (response) {
                    _this.CreativePreview = '',
                        _this.modalImageUpload = !_this.modalImageUpload,
                        _this.CampaignsObj = response;
                });
            }),
            handleImageUploadChange: action(function (e) {
                _this.CampaignsObj[e.target.name] = e.target.value;
                _this.DimensionSelected = e.target.value;
            }),
            _handleImageChange: action(function (e) {
                //console.log("Has called unwanted");
                e.preventDefault();
                _this.CampaignsObj[e.target.name] = e.target.files[0]; // e.target.value
                var reader = new FileReader();
                var file = e.target.files[0];
                reader.onloadend = function () {
                    _this.CreativeUpload = file,
                        _this.CreativePreview = reader.result;
                };
                reader.readAsDataURL(file);
            }),
            handleImageUploadSubmit: action(function (event) {
                //console.log("Has called unwanted");
                event.preventDefault();
                var formData = new FormData();
                formData.append('file', _this.CreativeUpload);
                formData.append('dimension', _this.CampaignsObj.Dimension);
                postImage("leadgeneration/exittraffic/campaigns/" + _this.CampaignsObj.CampaignID + "/assets/upload", formData)
                    .then(function (response) {
                    console.log(response);
                    _this.ImageUploadStatus = response;
                    _this.modalImageUpload = false;
                    _this.IsNotifyAddCreative = !_this.IsNotifyAddCreative;
                }).catch(function (error) {
                    console.log(error);
                    _this.ImageUploadError = error;
                    _this.IsNotifyAddCreativeError = !_this.IsNotifyAddCreativeError;
                    _this.modalImageUpload = false;
                });
            }),
            //Revenue section
            _rowCampaignRevenue: action(function (row, index) {
                _this.RevenueCID = row.CampaignID;
                _this.redirect = true;
            }),
            showCreateCampaignRevenueModal: action(function (e) {
                _this.CampaignRevenueIsInEditMode = false;
                _this.RevenueEditModal = !_this.RevenueEditModal;
                //this.RevenueObj = [];
            }),
            getCampaignRevenue: action(function (e) {
                get('leadgeneration/exittraffic/campaigns/' + _this.RevenueCID + '/revenue').then(function (response) {
                    _this.CampaignRevenueObj = response;
                });
            }),
            //Edit Revenue Section
            buttonRevenueFunction: action(function (cell, row, index) {
                return (React.createElement("div", { className: "actionsBtn" },
                    React.createElement("button", { type: "button", onClick: function (index) { _this._rowRevenueEditorPopup(row, index); }, className: "btn tooltipC btn-success" },
                        React.createElement("i", { className: "material-icons" }, "edit"),
                        " ",
                        React.createElement("span", { class: "tooltiptext" }, "Edit"))));
            }),
            _rowRevenueEditorPopup: action(function (row, index) {
                _this.EditRevenueID = row.RevenueID;
                get('leadgeneration/exittraffic/campaigns/' + _this.RevenueCID + '/revenue/' + row.RevenueID).then(function (response) {
                    _this.RevenueEditModal = !_this.RevenueEditModal;
                    _this.RevenueObj = response;
                    _this.CampaignRevenueIsInEditMode = true;
                    if (_this.RevenueObj.PeriodStart != null) {
                        _this.SelectedPeriodFromChange = moment(_this.RevenueObj.PeriodStart);
                    }
                });
            }),
            toggleRevenueEditModal: action(function () {
                _this.CampaignRevenueIsInEditMode = true;
                _this.RevenueEditModal = !_this.RevenueEditModal;
            }),
            toggleRevenueCreateModal: action(function () {
                _this.RevenueCreateModal = !_this.RevenueCreateModal;
            }),
            handleRevenueChange: action(function (e) {
                var levels = e.target.name.split('_');
                var value = e.target.value;
                if (e.target.type == "checkbox") {
                    value = e.target.checked ? true : false;
                }
                var obj = _this.RevenueObj;
                for (var i = 0; i < levels.length - 1; i++) {
                    obj = obj[levels[i]]; // work through relations, until reaching correct object
                }
                obj[levels[levels.length - 1]] = value; // populate correct object with it's new value
            }),
            handlePeriodFromChange: action(function (date) {
                _this.RevenueObj.PeriodStart = date.format("YYYY-MM-DD");
                _this.SelectedPeriodFromChange = date;
            }),
            handleRevenueSubmit: action(function (event) {
                event.preventDefault();
                _this.RevenueObj["ExitTrafficCampaignID"] = _this.RevenueCID;
                if (_this.RevenueObj.RevenueID == 0) {
                    post("leadgeneration/exittraffic/campaigns/" + _this.RevenueCID + "/revenue/create", _this.RevenueObj)
                        .then(function (response) {
                        console.log(response);
                        _this.RevenueStatus = response;
                        _this.RevenueEditModal = false;
                        _this.IsNotifyCreateRevenue = !_this.IsNotifyCreateRevenue;
                    }).catch(function (error) {
                        console.log(error);
                        _this.RevenueError = error;
                        _this.IsRevenueCreateError = !_this.IsRevenueCreateError;
                        _this.RevenueEditModal = false;
                    });
                    _this.getCampaignRevenue();
                }
                else {
                    post("leadgeneration/exittraffic/campaigns/" + _this.RevenueCID + "/revenue/" + _this.EditRevenueID + "/update", _this.RevenueObj)
                        .then(function (response) {
                        console.log(response);
                        _this.RevenueStatusEdit = response;
                        _this.RevenueEditModal = false;
                        _this.IsNotifyEditRevenue = !_this.IsNotifyEditRevenue;
                    }).catch(function (error) {
                        console.log(error);
                        _this.RevenueError = error;
                        _this.IsRevenueEditError = !_this.IsRevenueEditError;
                        _this.RevenueEditModal = false;
                    });
                    _this.getCampaignRevenue();
                }
            })
            //End Revenue
        });
    }
    CampaignStore.prototype.getCampaignRevenue = function () {
        throw new Error("Method not implemented.");
    };
    CampaignStore.prototype.handleCampaignChange = function (e) {
    };
    ;
    CampaignStore.prototype._rowRevenueEditorPopup = function (arg0, arg1) {
        throw new Error("Method not implemented.");
    };
    CampaignStore.prototype._rowCampaignRevenue = function (arg0, arg1) {
        throw new Error("Method not implemented.");
    };
    CampaignStore.prototype.getCampaigns = function () {
        throw new Error("Method not implemented.");
    };
    CampaignStore.prototype._rowEditorPopup = function (arg0, arg1) {
        throw new Error("Method not implemented.");
    };
    CampaignStore.prototype._rowImageUploadPopup = function (arg0, arg1) {
        throw new Error("Method not implemented.");
    };
    __decorate([
        observable,
        __metadata("design:type", Array)
    ], CampaignStore.prototype, "Placements", void 0);
    __decorate([
        observable,
        __metadata("design:type", Array)
    ], CampaignStore.prototype, "SelectedPlacements", void 0);
    return CampaignStore;
}());
export { CampaignStore };
//# sourceMappingURL=campaign.service.js.map
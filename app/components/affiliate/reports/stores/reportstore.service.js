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
import { get, post } from '../../../../shared/api.service';
import moment from 'moment';
import { AffiliateAll } from '../../../../model/affiliate.model';
var CostReportFilter = /** @class */ (function () {
    function CostReportFilter() {
        var date = moment();
        this.FromDate = date;
        this.ToDate = date;
        this.DateGrouping;
        this.AffiliateCode;
    }
    return CostReportFilter;
}());
export { CostReportFilter };
var ReportStore = /** @class */ (function () {
    function ReportStore() {
        var _this = this;
        this.Websites = [];
        this.showFilterModal = false;
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
            showCreateAffiliateModal: action(function (e) {
                _this.AffiliateIsInEditMode = false;
                _this.AffiliateEditModal = true;
            }),
            handleReportFilterChange: action(function (e) {
                _this.costReportFilter[e.target.name] = e.target.value;
                console.log(_this.costReportFilter);
            }),
            handleChange: action(function (e) {
                _this[e.target.name] = e.target.value;
            }),
            handleReportChange: action(function (e) {
                _this[e.target.name] = e.target.value;
            }),
            toggleFilterModal: action(function () {
                _this.showFilterModal = !_this.showFilterModal;
            }),
            toggleAffiliateEditModal: action(function () {
                _this.AffiliateEditModal = !_this.AffiliateEditModal;
            }),
            getAffiliates: action(function () {
                _this.Affiliateloading = true;
                get("reporting/affiliates")
                    .then(function (response) {
                    _this.Affiliatedata = response;
                    _this.Affiliateloading = false;
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            getWebsites: action(function () {
                get('reporting/websites/')
                    .then(function (response) {
                    _this.Websites = response;
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            getRegistrationTypes: action(function () {
                get('reporting/websites/registrationtypes')
                    .then(function (response) {
                    _this.RegistrationTypes = response;
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            handleAffiliateChange: action(function (e) {
                var levels = e.target.name.split('_');
                var value = e.target.value;
                if (e.target.type == "checkbox") {
                    value = e.target.checked ? true : false;
                }
                var obj = _this.AffiliateObj;
                for (var i = 0; i < levels.length - 1; i++) {
                    obj = obj[levels[i]]; // work through relations, until reaching correct object
                }
                obj[levels[levels.length - 1]] = value; // populate correct object with it's new value
            }),
            affiliateFilter: action(function () {
                var params = (_this.WebsiteIDSelected == "" ? "" : "&websiteId=" + _this.WebsiteIDSelected) + (_this.RegistrationTypeIdSelected == "" ? "" : "&registrationtypeID=" + _this.RegistrationTypeIdSelected);
                var modparam = params.substr(1);
                get("reporting/affiliates?" + modparam + "")
                    .then(function (response) {
                    var apidata = response;
                    _this.Affiliatedata = apidata;
                    _this.showFilterModal = !_this.showFilterModal;
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            // Affiliate Edit Process            
            _rowEditorAffiliatePopup: action(function (row, index) {
                get('reporting/affiliates/' + row.AffiliateID).then(function (response) {
                    _this.AffiliateEditModal = !_this.AffiliateEditModal;
                    _this.AffiliateObj = response;
                    _this.AffiliateIsInEditMode = true;
                    _this.IsAffiliateEdit = false;
                });
            }),
            buttonAffiliateFunction: action(function (cell, row, index) {
                return (React.createElement("div", { className: "actionsBtn" },
                    React.createElement("button", { type: "button", id: "validatebutton", onClick: function (index) { _this._rowEditorAffiliatePopup(row, index); }, className: "btn btn-success" },
                        React.createElement("i", { className: "material-icons" }, "edit"))));
            }),
            handleAffiliateEditSubmit: action(function (event) {
                event.preventDefault();
                console.log("edit? " + _this.AffiliateIsInEditMode);
                var action = "reporting/affiliates/";
                if (_this.AffiliateIsInEditMode)
                    action += _this.AffiliateObj.AffiliateID + "/update";
                else
                    action += "create";
                post(action, _this.AffiliateObj)
                    .then(function (response) {
                    _this.EditResponse = response;
                    _this.AffiliateEditModal = false;
                    _this.IsAffiliateEdit = !_this.IsAffiliateEdit;
                    _this.getAffiliates();
                    _this.AffiliateIsInEditMode = false;
                }).catch(function (error) {
                    _this.AffliateEditError = error;
                    _this.AffiliateEditModal = false;
                    _this.IsAffiliateEditError = !_this.IsAffiliateEditError;
                    _this.EditResponse = '';
                    _this.getAffiliates();
                });
            }),
            // REPORT FILTER BL
            handleReportDateFromChange: action(function (date) {
                _this.DateTimeFromSelected = date;
                _this.costReportFilter.FromDate = _this.DateTimeFromSelected;
            }),
            handleReportDateToChange: action(function (date) {
                _this.DateTimeToSelected = date;
                _this.costReportFilter.ToDate = _this.DateTimeToSelected;
            }),
            applyFilter: action(function () {
                _this.loading = true;
                var params = "";
                params += "sessionDateTimeFrom=";
                params += moment(_this.DateTimeFromSelected).format("YYYY-MM-DD");
                params += "&sessionDateTimeTo=";
                params += moment(_this.DateTimeToSelected).format("YYYY-MM-DD");
                params += "&timeGroup=" + (_this.costReportFilter.DateGrouping == undefined ? "day" : _this.costReportFilter.DateGrouping);
                if (_this.costReportFilter.AffiliateCode != undefined && _this.costReportFilter.AffiliateCode.length > 0) {
                    params += "&affiliateId=" + _this.costReportFilter.AffiliateCode;
                }
                //  (this.AgeSelected == "" ? "" : "&age=" + this.AgeSelected) + (this.CampaignIDSelected == "" ? "" : "&campaignID=" + this.CampaignIDSelected) + (this.AffiliatePartnerIDSelected == "" ? "" : "&affiliatePartnerId=" + this.AffiliatePartnerIDSelected) + (this.WebsitePlatformIDSelected == "" ? "" : "&websitePlatformID=" + this.WebsitePlatformIDSelected) + (this.Gender == "" ? "" : "&Gender=" + this.Gender) + (this.IspIDSelected == "" ? "" : "&iSPID=" + this.IspIDSelected) + (this.RegistrationPathIDSelected == "" ? "" : "&registrationPathId=" + this.RegistrationPathIDSelected);
                get("reporting/cost/report?" + params + "")
                    .then(function (response) {
                    var i = 0;
                    var apidata = response;
                    if (apidata != null && apidata.Table.length > 0) {
                        apidata.Table = apidata.Table.map(function (s) {
                            s.key = i++;
                            if (_this.costReportFilter.DateGrouping != "hour") {
                                s["Visit Date"] = moment(s.VisitDate).format("YYYY-MM-DD");
                            }
                            return s;
                        });
                    }
                    _this.Costreport = apidata;
                    _this.columns = [];
                    if (_this.Costreport.Table.length > 0) {
                        for (var col in _this.Costreport.Table[0]) {
                            if (col != "key")
                                _this.columns.push(col);
                        }
                        for (var i = 0; i < _this.Costreport.Table.length; i++) {
                            var row = _this.Costreport.Table[i];
                            for (var ii = 0; ii < _this.FieldFormatMappings.length; ii++) {
                                var formatRule = _this.FieldFormatMappings[ii];
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
                    _this.showFilterModal = false;
                    _this.loading = false;
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            // ROI Manager=====================
            showROICreateModal: action(function (e) {
                _this.RoiIsInEditMode = false;
                _this.RoiEditModal = true;
                _this.RoiObj = {};
            }),
            getWebsiteid: action(function () {
                get('reporting/websites/')
                    .then(function (response) {
                    _this.Websiteid = response;
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            getRoimanagerList: action(function () {
                _this.Roiloading = true;
                get("reporting/affiliates/roi-targets")
                    .then(function (response) {
                    _this.Roilistsdata = response;
                    _this.Roiloading = false;
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            toggleRoiCreateModal: action(function () {
                _this.RoiCreateModal = !_this.RoiCreateModal;
            }),
            getRoiAffiliate: action(function () {
                get("reporting/affiliates")
                    .then(function (response) {
                    _this.RoiAffiliatedata = response;
                }).catch(function (error) {
                    console.log(error);
                });
            }),
            //Roi edit
            _rowEditorRoiPopup: action(function (row, index) {
                _this.RoiAffiliateid = row.AffiliateID;
                get('reporting/affiliates/roi-targets/' + row.AffiliateID).then(function (response) {
                    _this.RoiEditModal = !_this.RoiEditModal;
                    _this.RoiObj = response;
                });
                _this.RoiIsInEditMode = true;
            }),
            buttonRoiFunction: action(function (cell, row, index) {
                return (React.createElement("div", { className: "actionsBtn" },
                    React.createElement("button", { type: "button", id: "validatebutton", onClick: function (index) { _this._rowEditorRoiPopup(row, index); }, className: "btn btn-success" },
                        React.createElement("i", { className: "material-icons" }, "edit"))));
            }),
            toggleRoiEditModal: action(function () {
                _this.RoiEditModal = !_this.RoiEditModal;
            }),
            handleRoiChange: action(function (e) {
                var levels = e.target.name.split('_');
                var value = e.target.value;
                var obj = _this.RoiObj;
                if (e.target.name == "AffiliateID") {
                    _this.RoiAffiliateid = value;
                }
                for (var i = 0; i < levels.length - 1; i++) {
                    obj = obj[levels[i]]; // work through relations, until reaching correct object
                }
                obj[levels[levels.length - 1]] = value; // populate correct object with it's new value
            }),
            handleRoiSubmit: action(function (event) {
                event.preventDefault();
                if (_this.RoiIsInEditMode == false) {
                    post("reporting/affiliates/roi-targets/" + _this.RoiAffiliateid + "/create", _this.RoiObj)
                        .then(function (response) {
                        console.log(response);
                        _this.RoiCreateResponse = response;
                        _this.RoiEditModal = false;
                        _this.isRoiCreated = !_this.isRoiCreated;
                        _this.getRoimanagerList();
                    }).catch(function (error) {
                        console.log(error);
                        _this.RoiCreateError = error;
                        _this.RoiEditModal = false;
                        _this.isRoiCreatedError = !_this.isRoiCreatedError;
                    });
                    _this.getRoimanagerList();
                }
                else {
                    post("reporting/affiliates/roi-targets/" + _this.RoiAffiliateid + "/update", _this.RoiObj)
                        .then(function (response) {
                        console.log(response);
                        _this.RoiEditResponse = response;
                        _this.isRoiEdited = !_this.isRoiEdited;
                        _this.RoiEditModal = false;
                        _this.getRoimanagerList();
                    }).catch(function (error) {
                        console.log(error);
                        _this.RoiEditError = error;
                        _this.RoiEditModal = false;
                        _this.isRoiEditedError = !_this.isRoiEditedError;
                    });
                }
            })
            //End
        });
    }
    ReportStore.prototype.getRoimanagerList = function () {
        throw new Error("Method not implemented.");
    };
    ReportStore.prototype._rowEditorRoiPopup = function (arg0, arg1) {
        throw new Error("Method not implemented.");
    };
    ReportStore.prototype.getRoiAffiliate = function () {
        throw new Error("Method not implemented.");
    };
    ReportStore.prototype.getAffiliates = function () {
        throw new Error("Method not implemented.");
    };
    ReportStore.prototype._rowEditorAffiliatePopup = function (arg0, arg1) {
        throw new Error("Method not implemented.");
    };
    __decorate([
        observable,
        __metadata("design:type", Array)
    ], ReportStore.prototype, "columns", void 0);
    __decorate([
        observable,
        __metadata("design:type", Object)
    ], ReportStore.prototype, "TableStores", void 0);
    return ReportStore;
}());
export { ReportStore };
//# sourceMappingURL=reportstore.service.js.map
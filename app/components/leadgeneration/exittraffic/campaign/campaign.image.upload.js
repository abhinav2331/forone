var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/// <reference path="../../../../../typings/index.d.ts" />
import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';
import { SelectFormElement } from '../../../../shared/formelement/select.formelement';
var CampaignImageUpload = /** @class */ (function (_super) {
    __extends(CampaignImageUpload, _super);
    function CampaignImageUpload() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CampaignImageUpload.prototype.render = function () {
        return (React.createElement("section", null,
            React.createElement(Modal, { isOpen: this.props.campaignstore.modalImageUpload, toggle: this.props.campaignstore.toggleImageUploadModal },
                React.createElement(ModalHeader, { toggle: this.props.campaignstore.toggleImageUploadModal },
                    "Assets \u2013 ",
                    this.props.campaignstore.CampaignsObj.Name),
                React.createElement(ModalBody, null,
                    React.createElement("div", { className: "row" },
                        React.createElement("div", { className: "col-md-12" },
                            React.createElement("div", { className: "table-responsive" },
                                React.createElement("table", { className: "table" },
                                    React.createElement("thead", { className: "text-primary" },
                                        React.createElement("tr", null,
                                            React.createElement("th", null, "Image Thumb"),
                                            React.createElement("th", null, "Image URL"),
                                            React.createElement("th", null, "Preview"))),
                                    React.createElement("tbody", null,
                                        React.createElement("tr", null,
                                            React.createElement("td", null, this.props.campaignstore.CampaignsObj.Creative.Assets != null ?
                                                React.createElement("div", null, this.props.campaignstore.CampaignsObj.Creative.Assets.map(function (Items, index) {
                                                    return (React.createElement("div", { style: { marginBottom: "10px" }, className: "demoImage", key: index },
                                                        React.createElement("img", { src: process.env.CDN_PATH + "exittraffic/" + Items.Dimensions + "/thumbs/" + Items.Url, alt: "" })));
                                                }))
                                                : ""),
                                            React.createElement("td", null, this.props.campaignstore.CampaignsObj.Creative.Assets != null ?
                                                React.createElement("div", null, this.props.campaignstore.CampaignsObj.Creative.Assets.map(function (Items, index) {
                                                    return (React.createElement("div", { key: index, style: { height: "50px", lineHeight: "40px" } }, Items.Url));
                                                }))
                                                : ""),
                                            React.createElement("td", null, this.props.campaignstore.CampaignsObj.Creative.Assets != null ?
                                                React.createElement("div", null, this.props.campaignstore.CampaignsObj.Creative.Assets.map(function (Items, index) {
                                                    return (React.createElement("div", { style: { marginBottom: "10px" }, className: "demoImage", key: index },
                                                        React.createElement("a", { href: process.env.CDN_PATH + "exittraffic/" + Items.Dimensions + "/" + Items.Url, className: "btn btn-sm btn-primary", target: "_blank" }, "Preview")));
                                                }))
                                                : ""))))))),
                    React.createElement("div", { className: "divider" }),
                    React.createElement("form", { onSubmit: this.props.campaignstore.handleImageUploadSubmit },
                        React.createElement("div", { className: "form_list row" },
                            React.createElement("ul", null,
                                React.createElement("li", { className: "col-md-3" },
                                    React.createElement("div", { className: "form-group" },
                                        React.createElement("div", { className: "form_label" }, "Please select the image size"),
                                        React.createElement(SelectFormElement, { name: 'Dimension', placeholder: 'Select Image Size', controlFunc: this.props.campaignstore.handleImageUploadChange, options: this.props.campaignstore.Dimension }))),
                                React.createElement("li", { className: "col-md-6" }, this.props.campaignstore.DimensionSelected == "" ? React.createElement("div", { className: "disabled" },
                                    React.createElement("span", { className: "btn btn-rose btn-round btn-file", style: { float: "left", marginTop: "36px" } },
                                        React.createElement("span", { className: "fileinput-new" }, "Select image"),
                                        React.createElement("input", { name: "Url", type: "file", onChange: this.props.campaignstore._handleImageChange })),
                                    React.createElement("div", { className: "creative_Preview" },
                                        React.createElement("img", { src: this.props.campaignstore.CreativePreview }))) : React.createElement("div", null,
                                    React.createElement("span", { className: "btn btn-rose btn-round btn-file", style: { float: "left", marginTop: "36px" } },
                                        React.createElement("span", { className: "fileinput-new" }, "Select image"),
                                        React.createElement("input", { name: "Url", type: "file", onChange: this.props.campaignstore._handleImageChange })),
                                    React.createElement("div", { className: "creative_Preview" },
                                        React.createElement("img", { src: this.props.campaignstore.CreativePreview })))))),
                        React.createElement("div", { className: "divider" }),
                        React.createElement("button", { type: "submit", style: { marginLeft: '10px' }, className: "btn btn-success pull-right" }, "Save changes"),
                        React.createElement("button", { type: "button", className: "btn btn-info pull-right", onClick: this.props.campaignstore.toggleImageUploadModal }, "Close"))),
                React.createElement(ModalFooter, null))));
    };
    CampaignImageUpload = __decorate([
        inject('campaignstore'),
        observer
    ], CampaignImageUpload);
    return CampaignImageUpload;
}(React.Component));
export { CampaignImageUpload };
//# sourceMappingURL=campaign.image.upload.js.map
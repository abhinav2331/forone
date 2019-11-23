var AffiliateAll = /** @class */ (function () {
    function AffiliateAll() {
        this.Website = new WebsiteDetail();
        this.RegistrationType = new RegistrationTypeDetal();
    }
    return AffiliateAll;
}());
export { AffiliateAll };
var WebsiteDetail = /** @class */ (function () {
    function WebsiteDetail() {
        this.WebsiteID = "";
        this.WebsiteName = "";
        this.Abbreviation = "";
        this.DisplayOrder = "";
        this.WebsiteDomain = "";
        this.CountryCode = "";
    }
    return WebsiteDetail;
}());
export { WebsiteDetail };
var RegistrationTypeDetal = /** @class */ (function () {
    function RegistrationTypeDetal() {
        this.RegistrationTypeID = "";
        this.Name = "";
    }
    return RegistrationTypeDetal;
}());
export { RegistrationTypeDetal };
//# sourceMappingURL=affiliate.model.js.map
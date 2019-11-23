/// <reference path="../../typings/index.d.ts" />
import * as React from 'react';

export class CampaignsAll {
    CampaignID: number = 0;
    Name: string;
    ClientName: string;
    OfferUrl: string;
    ImageUrl: string;
    Description: string;
    ExpiryDateTimeUtc: Date;
    TargetMinAge: string;
    TargetMaxAge: string;
    TargetGender: string;
    Type: string;
    CategoryId: string;
    Weight: string;
    Status: StatusDetail = new StatusDetail();
    Publisher: PublisherDetail = new PublisherDetail();
    BannerSettings: BannerSettingsDetail = new BannerSettingsDetail();
    TransactionParameterName: string ;
    CountryCode: string;
    UserInterestPhrase: string;
    ImpressionLimit: string;
    Payout: PayoutDetail = new PayoutDetail();
    HasOffers: HasOffersDetail = new HasOffersDetail();
    AffiliateNetwork: AffiliateNetworkDetail = new AffiliateNetworkDetail();
    Targeting: TargetingDetail = new TargetingDetail();
    Creative: CreativeDetail = new CreativeDetail();
    Website: WebsiteDetail = new WebsiteDetail();
    RegistrationType: RegistrationTypeDetal = new RegistrationTypeDetal();
    SEO: SeoDetail = new SeoDetail();
    Placements: number[] = [];

    constructor() {
        this.Weight = "5";
    }
}
export class StatusDetail {
    StatusID: string;
    Name: string;
}
export class PublisherDetail {
    SupplierID: string;
    Name: string;
}
export class BannerSettingsDetail {
    Placement: string;
    AdUnits: string;
}
export class PayoutDetail {
    CurrencyCode: string;
    PayoutType: string;
    PayoutRate: string;
}
export class HasOffersDetail {
    Enabled: boolean;
    OfferID: string;
    AdditionalQueryString: string;
}
export class AffiliateNetworkDetail {
    NetworkID: string;
    Name: string;
}
export class TargetingDetail {
    Desktop: string;
    Tablet: string;
    Mobile: string;
}
export class CreativeDetail {
    CallToAction: string;
    Description: string;
    SubHeading: string;
}

export class SelectOptions {
    Text: string;
    Value: string;
}

export class WebsiteDetail {
    WebsiteID: string;
    WebsiteName: string;
    Abbreviation: string;
    DisplayOrder: string;
    WebsiteDomain: string;
    CountryCode: string;
}

export class RegistrationTypeDetal {
    RegistrationTypeID: string;
    Name: string;
}

export class SeoDetail {
    MetaKeywords: string;
    MetaDescription: string;
}
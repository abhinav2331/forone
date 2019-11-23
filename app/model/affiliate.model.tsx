/// <reference path="../../typings/index.d.ts" />
import * as React from 'react';

export class AffiliateAll {    
    Website: WebsiteDetail = new WebsiteDetail();
    RegistrationType: RegistrationTypeDetal = new RegistrationTypeDetal();
}

export class WebsiteDetail {
    WebsiteID: string = "";
    WebsiteName: string = "";
    Abbreviation: string = "";
    DisplayOrder: string = "";
    WebsiteDomain: string = "";
    CountryCode: string = "";
}

export class RegistrationTypeDetal {
    RegistrationTypeID: string = "";
    Name: string = "";
}
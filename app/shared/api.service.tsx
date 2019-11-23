/// <reference path="../../../typings/index.d.ts" /
///https://medium.com/code-well-live-forever/dry-up-your-api-requests-b4337049a2c1

import * as React from 'react';
import * as axios from "axios";
import handleError from './handle.error';

// Application Auth Token.
declare global {
    interface Window { access_token: any; }
}

var access_token = typeof window !== "undefined" ? window.access_token : {};
export const AuthString = 'Bearer ' + access_token;

export const apiDomain = process.env.API_BASEURL;
export const creativePath = process.env.CDN_PATH;


const getHeaders = (header) => {
    return {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': header,
        },
    };
};

const getHeadersImage = (header) => {
    return {
        headers: {
            'Accept': 'application/json',            
            'Content-Type': 'multipart/form-data',
            'Authorization': header,
        },
    };
};

// HTTP GET Request - Returns Resolved or Rejected Promise
export const get = (path: string) => {
    return new Promise((resolve, reject) => {        
        axios.get(`${apiDomain}${path}`, getHeaders(AuthString))
            .then(response => { resolve(response.data) })
            .catch(error => { reject(handleError(error)) });
            //.catch(error => {
            //    console.log(error)
            //});
    });
};

// HTTP POST Request - Returns Resolved or Rejected Promise
export const post = (path: string, mdata: any) => {
    return new Promise((resolve, reject) => {
        axios.post(`${apiDomain}${path}`, mdata, getHeaders(AuthString))
            .then(response => { resolve(response) })
            .catch(error => { reject(handleError(error)) });
        //.catch(error => {
        //    console.log(error)
        //});
    });
};

// HTTP POST Image Request - Returns Resolved or Rejected Promise
export const postImage = (path: string, mdata: any) => {
    return new Promise((resolve, reject) => {
        axios.post(`${apiDomain}${path}`, mdata, getHeadersImage(AuthString))
            .then(response => { resolve(response) })
            .catch(error => { reject(handleError(error)) });
        //.catch(error => {
        //    console.log(error)
        //});
    });
};


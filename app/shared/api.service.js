/// <reference path="../../../typings/index.d.ts" /
///https://medium.com/code-well-live-forever/dry-up-your-api-requests-b4337049a2c1
import * as axios from "axios";
import handleError from './handle.error';
var access_token = typeof window !== "undefined" ? window.access_token : {};
export var AuthString = 'Bearer ' + access_token;
export var apiDomain = process.env.API_BASEURL;
export var creativePath = process.env.CDN_PATH;
var getHeaders = function (header) {
    return {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': header,
        },
    };
};
var getHeadersImage = function (header) {
    return {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            'Authorization': header,
        },
    };
};
// HTTP GET Request - Returns Resolved or Rejected Promise
export var get = function (path) {
    return new Promise(function (resolve, reject) {
        axios.get("" + apiDomain + path, getHeaders(AuthString))
            .then(function (response) { resolve(response.data); })
            .catch(function (error) { reject(handleError(error)); });
        //.catch(error => {
        //    console.log(error)
        //});
    });
};
// HTTP POST Request - Returns Resolved or Rejected Promise
export var post = function (path, mdata) {
    return new Promise(function (resolve, reject) {
        axios.post("" + apiDomain + path, mdata, getHeaders(AuthString))
            .then(function (response) { resolve(response); })
            .catch(function (error) { reject(handleError(error)); });
        //.catch(error => {
        //    console.log(error)
        //});
    });
};
// HTTP POST Image Request - Returns Resolved or Rejected Promise
export var postImage = function (path, mdata) {
    return new Promise(function (resolve, reject) {
        axios.post("" + apiDomain + path, mdata, getHeadersImage(AuthString))
            .then(function (response) { resolve(response); })
            .catch(function (error) { reject(handleError(error)); });
        //.catch(error => {
        //    console.log(error)
        //});
    });
};
//# sourceMappingURL=api.service.js.map
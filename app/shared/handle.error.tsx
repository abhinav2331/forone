﻿/// <reference path="../../typings/index.d.ts" />
export default ((error: any) => {
    const { status, message } = error;
    switch (status) {
        case 401:
        // do something when you're unauthenticated
        case 403:
        // do something when you're unauthorized to access a resource
        case 500:
        // do something when your server exploded
        default:
        // handle normal errors with some alert or whatever
    }
    return message; // I like to get my error message back
});
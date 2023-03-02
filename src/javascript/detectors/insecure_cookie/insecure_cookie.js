/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=insecure-cookie@v1.0 defects=1}
var cookieSession = require('cookie-session')
var express = require('express')
var app = express()
function insecureCookieNoncompliant() {
    let session = app.use(cookieSession({
        name: 'session',
        secret: "secret",
        // Noncompliant: setting `httpOnly` to false makes cookie insecure.
        httpOnly: false,
    }))
}
// {/fact}


// {fact rule=insecure-cookie@v1.0 defects=0}
var cookieSession = require('cookie-session')
var express = require('express')
var app = express()
function insecureCookieCompliant() {
    // Compliant: by default `httpOnly` is set to true and thus makes cookie secure.
    let session = app.use(cookieSession({
        name: 'session',
        secret: "secret",
    }))
}
// {/fact}
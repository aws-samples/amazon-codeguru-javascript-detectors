/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */


// {fact rule=cross-site-request-forgery@v1.0 defects=1}
var express = require('express')
var app = express()
function crossSiteRequestForgeryNoncompliant()
{
    app.get("/", (req, res) => {
        // Noncompliant: `sameSite` is set to 'none'.
        res.cookie('cookieName', 'cookieValue', { sameSite: 'none', secure: true })
        res.render("index.html")
    })
}
// {/fact}


// {fact rule=cross-site-request-forgery@v1.0 defects=0}
var express = require('express')
var app = express()
function crossSiteRequestForgeryCompliant()
{
    app.get("/", (req, res) => {
        // Compliant: `sameSite` is set to 'lax'.
        res.cookie('cookieName', 'cookieValue', { sameSite: 'lax', secure: true })
        res.render("index.html")
    })
}
// {/fact}
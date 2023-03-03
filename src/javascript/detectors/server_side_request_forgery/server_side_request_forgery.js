/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=server-side-request-forgery@v1.0 defects=1}
var express = require('express')
var app = express()
var request = require('request')

function serverSideRequestForgeryNoncompliant() {
    app.get('/data/img', (req, res) => {
        var url = req.body.imageUrl
        // Noncompliant: user provided url is used to make a request.
        request.get(url)
    })
}
// {/fact}


// {fact rule=server-side-request-forgery@v1.0 defects=0}
var express = require('express')
var app = express()
var request = require('request')

function serverSideRequestForgeryCompliant() {
    app.get('/data/img', (req, res) => {
        // Compliant: url used to make a request is not user provided.
        var url = 'https://example.com'
        request.get(url)
    })
}
// {/fact}
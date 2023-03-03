/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=limit-on-request-content-length@v1.0 defects=1}
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

function limitOnRequestContentLengthNoncompliant() {
    // Noncompliant: limit on request content length is > 2mb in a requests.
    app.use(bodyParser.urlencoded({ extended: false, limit: "4mb" }))
}
// {/fact}

// {fact rule=limit-on-request-content-length@v1.0 defects=0}
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

function limitOnRequestContentLengthCompliant() {
    // Compliant: limit on request content length is <= 2mb requests.
    app.use(bodyParser.urlencoded({ extended: false, limit: "1mb" }))
}
// {/fact}
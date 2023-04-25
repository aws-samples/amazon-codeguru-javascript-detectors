/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=insecure-cors-policy@v1.0 defects=1}
var express = require("express")
var app = express()
function insecureCorsPolicyNoncompliant() {
    app.post('/users', function (req, res) {
        const origin = req.query.origin
        // Noncompliant: the Access-Control-Allow-Origin header is set to user-controlled any domain.
        res.set(200, {'Access-Control-Allow-Origin': origin })
    })
}
// {/fact}


// {fact rule=insecure-cors-policy@v1.0 defects=0}
var express = require("express")
var app = express()
function insecureCorsPolicyCompliant() {
    app.post('/users', function (req, res) {
        // Compliant: the Access-Control-Allow-Origin header is set to allow only a specific list of trusted domains.
        res.set(200, {'Access-Control-Allow-Origin': 'trustedsite.com' })
    })
}
// {/fact}

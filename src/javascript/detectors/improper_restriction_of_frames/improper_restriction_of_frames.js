/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=improper-restriction-of-frames@v1.0 defects=1}
var express = require('express')
var app = express()
function improperRestrictionOfFramesNoncompliant() {
    app.use((req, res) => {
        // Noncompliant: it has broken `X-Frame-Options` header.
        res.setHeader("X-Frame-Options", req.query)
    })
}
// {/fact}


// {fact rule=improper-restriction-of-frames@v1.0 defects=0}
var express = require('express')
var app = express()
function improperRestrictionOfFramesCompliant() {
    app.use((req, res) => {
        var host = req.query.opts
        // Compliant: it has safe `X-Frame-Options` header.
        res.setHeader("X-Frame-Options", "https://example.com")
    })
}
// {/fact}
/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=dns-prefetching@v1.0 defects=1}
var express = require('express')
var helmet = require('helmet')
var app = express()

function dnsPrefetchingNoncompliant() {
    app.use(
        helmet.dnsPrefetchControl({
            // Noncompliant: 'allow' is set to 'true'.
            allow: true
        })
    )
}
// {/fact}


// {fact rule=dns-prefetching@v1.0 defects=0}
var express = require('express')
var helmet = require('helmet')
var app = express()

function dnsPrefetchingCompliant() {
    app.use(
        helmet.dnsPrefetchControl({
            // Compliant: 'allow' is set to 'false'.
            allow: false
        })
    )
}
// {/fact}
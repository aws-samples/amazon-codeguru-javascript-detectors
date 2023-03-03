/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=sensitive-information-leak@v1.0 defects=1}
var express = require('express')
var helmet = require('helmet')
var app = express()
function sensitiveInformationLeakNoncompliant(){
    app.use(
        helmet.referrerPolicy({
            // Noncompliant: sets the policy as no-referrer-when-downgrade.
            policy: 'no-referrer-when-downgrade'
        })
    )
}
// {/fact}


// {fact rule=sensitive-information-leak@v1.0 defects=0}
var express = require('express')
var helmet = require('helmet')
var app = express()
function sensitiveInformationLeakCompliant(){
    app.use(
        helmet.referrerPolicy({
            // Compliant: sets the policy as no-referrer.
            policy: 'no-referrer'
        })
    )
}
// {/fact}


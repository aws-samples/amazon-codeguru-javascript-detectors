/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=improper-access-control@v1.0 defects=1}
var express = require('express')
var helmet = require('helmet')
var app = express()

function improperAccessControlNoncompliant(){
    app.use(
        helmet.permittedCrossDomainPolicies({
            // Noncompliant: permittedPolicies is set to 'all'.
            permittedPolicies: "all",
        })
    )
}
// {/fact}


// {fact rule=improper-access-control@v1.0 defects=0}
var express = require('express')
var helmet = require('helmet')
var app = express()

function improperAccessControlCompliant(){
    app.use(
        helmet.permittedCrossDomainPolicies({
            // Compliant: permittedPolicies is set to 'none'.
            permittedPolicies: "none",
        })
    )
}
// {/fact}